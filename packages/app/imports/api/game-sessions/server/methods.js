import { MATCHMAKING, activeMatchModes } from '/imports/shared/riot-api/gameConstants.ts';

import Notifications, { notificationTypes } from '/imports/api/notifications/notifications';

import GameSessions from '../gameSessions';
import { Job } from 'meteor/simonsimcity:job-collection';
import Jobs from '/imports/api/jobs/jobs';
import { Meteor } from 'meteor/meteor';
import TrophyHunters from '/imports/api/trophy-hunters/trophyHunters';
import { check } from 'meteor/check';
import { getSetting } from '/imports/api/trophy-hunters/helpers';
import { getPlatformIdByRegion, getActiveGame } from '/imports/shared/th-api/index.ts';

GameSessions.helpers({
  setMatchEnd(withDelay) {
    if (this.checkedStatus === 'matchInProgress') {
      if (!this.isMatched()) {
        Notifications.insert({
          userId: this.userId,
          type: notificationTypes.MATCH_NOT_SUPPORTED,
          data: {
            userId: this.userId,
            matchId: this.game.gameId,
            championId: this.championId
          },
          read: true
        });

        GameSessions.remove(this._id);
        return;
      }
      GameSessions.update(this._id, {
        $set: {
          checkedStatus: 'pending',
          endedAt: new Date()
        }
      });
      this.startJob(withDelay);
    }
  },
  startJob(withDelay) {
    const job = new Job(
      Jobs,
      'refreshMatchForGameSession', // type of job
      // Job data that you define, including anything the job
      // needs to complete. May contain links to files, etc...
      {
        gameSessionId: this._id
      }
    );
    // Set some properties of the job and then submit it
    job.priority('normal');

    job.retry({
      retries: 3, // Retry 3 times,
      wait: 10 * 1000 // wait 10 seconds between attempts
    });

    if (withDelay) {
      job.delay(20 * 1000); // Wait 20 seconds before first try
    }
    job.save(); // Commit it to the server
  },
  restartJob() {
    GameSessions.update(this._id, {
      $set: {
        checkedStatus: 'pending'
      }
    });

    const existingJob = Jobs.findOne({
      'data.gameSessionId': this._id
    });
    if (existingJob) {
      Jobs.getJob(existingJob._id, (err, job) => {
        if (job) {
          if (existingJob.retried > 50) {
            // If job failed to many times, remove the job and the game session.
            job.remove();
            GameSessions.remove(this._id);
            return;
          }
          job.log('Restart check', { data: { type: 'app' }, echo: true });
          job.retry({ wait: 0 });
          if (
            existingJob.status === 'failed' ||
            existingJob.status === 'cancelled' ||
            existingJob.status === 'waiting'
          ) {
            job.restart({}, () => {
              job.refresh();
              job.delay(0);
              job.ready({
                force: false
              });
            });
          } else {
            job.rerun({ wait: 0 }, () => {});
            job.remove();
          }
        }
      });
    } else {
      this.startJob(false);
    }
  }
});

Meteor.methods({
  async startMatch() {
    this.unblock();

    const userId = Meteor.userId();
    if (!userId) {
      throw new Meteor.Error('not-authorized');
    }

    const trophyHunter = TrophyHunters.findOne({ userId });
    if (!trophyHunter) {
      throw new Meteor.Error('getCurrentGame', 'trophyHunter not found');
    }

    const platformId = getPlatformIdByRegion(trophyHunter.region);
    let game;
    try {
      game = await getActiveGame({ platformId, summonerId: trophyHunter.summonerId });
    } catch (error) {
      game = null;
    }
    const activeMatch = GameSessions.findOne({
      userId,
      checkedStatus: 'matchInProgress'
    });
    if (activeMatch) {
      // Check if there is a current game and it is the same as in activeGameSession
      if (!game || !activeMatch.game || activeMatch.game.gameId !== game.gameId) {
        console.log(
          'current game is not the same as activeGameSession',
          activeMatch.game && activeMatch.game.gameId,
          game && game.gameId
        );
        activeMatch.setMatchEnd(false);
      } else {
        return false;
      }
    }

    if (!game) {
      console.log(
        'could not find game. userId: ',
        userId,
        trophyHunter.region,
        trophyHunter.summonerId
      );
      return false;
    }

    const sameGameId = GameSessions.findOne({
      userId,
      'game.gameId': game.gameId
    });
    if (sameGameId) {
      console.log('found existing match -> set to "matchInProgress" again');
      Jobs.remove({
        'data.gameSessionId': sameGameId._id
      });
      return GameSessions.update(sameGameId._id, {
        $set: {
          checkedStatus: 'matchInProgress'
        }
      });
    }

    const ownParticipant = game.participants.find(
      participant => participant.summonerId === trophyHunter.summonerId
    );
    const championId = ownParticipant ? ownParticipant.championId : -1;

    GameSessions.insert({
      userId,
      region: trophyHunter.region,
      summonerName: trophyHunter.summonerName,
      accountId: trophyHunter.accountId,
      summonerId: trophyHunter.summonerId,
      checkedStatus: 'matchInProgress',
      championId: championId,
      game: game,
      trophiesObtained: [],
      match: {},
      features: {}
    });

    const matchMaking = Object.entries(MATCHMAKING).find(i => i[1] === game.gameQueueConfigId);
    const matchMode = (matchMaking && matchMaking[0]) || 'CUSTOM';
    const activeMatchMode = activeMatchModes.find(mode => mode === matchMode) || 'OTHER';
    const showOverlay =
      !getSetting(trophyHunter, 'overlay', 'noAutorun', activeMatchMode) && game.gameLength === 0;
    return { showOverlay };
  },
  setMatchEnd() {
    this.unblock();

    const userId = Meteor.userId();
    if (!userId) {
      throw new Meteor.Error('not-authorized');
    }

    const activeMatch = GameSessions.findOne({
      userId,
      checkedStatus: 'matchInProgress'
    });

    if (!activeMatch) {
      return false;
    }

    activeMatch.setMatchEnd(true);

    return true;
  },
  async checkMatchEnd() {
    this.unblock();

    const userId = Meteor.userId();
    if (!userId) {
      throw new Meteor.Error('not-authorized');
    }

    const activeMatch = GameSessions.findOne({
      userId,
      checkedStatus: 'matchInProgress'
    });

    if (!activeMatch) {
      return true;
    }

    const trophyHunter = TrophyHunters.findOne({ userId });

    if (!trophyHunter) {
      throw new Meteor.Error('getCurrentGame', 'trophyHunter not found');
    }

    const platformId = getPlatformIdByRegion(trophyHunter.region);
    let game;
    try {
      game = await getActiveGame({ platformId, summonerId: trophyHunter.summonerId });
    } catch (error) {
      game = null;
    }
    // Check if there is a current game and it is the same as in activeGameSession
    if (!game) {
      activeMatch.setMatchEnd(false);
      return true;
    }
    return false;
  },
  restartJob(gameSessionId) {
    this.unblock();

    check(gameSessionId, String);

    const gameSession = GameSessions.findOne({ _id: gameSessionId, checkedStatus: 'failed' });
    if (!gameSession) {
      throw new Meteor.Error('restartJob - failed gameSession not found', gameSessionId);
    }
    gameSession.restartJob();
  }
});
