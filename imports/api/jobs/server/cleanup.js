import GameSessions from '/imports/api/game-sessions/gameSessions';
import Jobs from '/imports/api/jobs/jobs';
import Notifications from '/imports/api/notifications/notifications';
import SummonerStats from '/imports/api/summoner-stats/summonerStats';
import TrophyHunters from '/imports/api/trophy-hunters/trophyHunters';
import { UsersSessions } from 'meteor/lmachens:user-presence';
import { removeDead } from '../../server-stats/server';
import { getPlatformIdByRegion, getActiveGame } from '/imports/shared/th-api/index.ts';

async function cleanup(job, cb) {
  console.log('cleanup'.blue, 'start');

  // Remove old cleanup jobs
  Jobs.remove({ type: 'cleanup', status: 'completed' });

  const veryLongPast = new Date(Date.now() - 3 * 30 * 24 * 60 * 60 * 1000); // 3 months ago
  const past = new Date(Date.now() - 90 * 60 * 1000); // 90 minutes ago
  const shortPast = new Date(Date.now() - 10 * 60 * 1000); // 10 minutes ago

  // remove old gameSessions and matches
  const oldGameSessions = GameSessions.remove({ createdAt: { $lt: veryLongPast } });

  // remove old jobs
  let jobsRemoved = 0;
  Jobs.find({ type: 'refreshMatchForGameSession' })
    .fetch()
    .forEach(job => {
      const gameSession = GameSessions.findOne({
        _id: job.data.gameSessionId,
        checkedStatus: { $ne: 'checked' }
      });
      if (!gameSession) {
        Jobs.remove(job._id);
        console.log('cleanup'.blue, 'removed old job', job._id);
        jobsRemoved++;
      }
    });

  // fix online status
  let setOffline = 0;
  TrophyHunters.find({ status: { $in: ['online', 'ingame', 'away'] } })
    .fetch()
    .forEach(trophyHunter => {
      const userSession = UsersSessions.findOne(trophyHunter.userId);
      if (!userSession) {
        console.log('cleanup'.blue, 'set offline', trophyHunter._id);
        TrophyHunters.update(trophyHunter._id, {
          $set: {
            status: 'offline',
            statusConnection: 'offline'
          }
        });
        setOffline++;
      }
    });

  // restartPending
  let restartPending = 0;
  GameSessions.find({ checkedStatus: 'pending', updatedAt: { $lt: shortPast } })
    .fetch()
    .forEach(gameSession => {
      const trophyHunter = TrophyHunters.findOne({ userId: gameSession.userId });
      if (!trophyHunter) {
        return console.log(gameSession._id);
      }
      console.log('cleanup'.blue, 'retry pending', gameSession._id);
      restartPending++;
      gameSession.restartJob(trophyHunter.userId);
    });

  // reprocessFailed
  let reprocessFailed = 0;
  GameSessions.find({ checkedStatus: 'failed' })
    .fetch()
    .forEach(gameSession => {
      const trophyHunter = TrophyHunters.findOne({ userId: gameSession.userId });
      if (!trophyHunter) {
        return console.log(gameSession._id);
      }
      console.log('cleanup'.blue, 'retry failed', gameSession._id);
      reprocessFailed++;
      gameSession.restartJob(trophyHunter.userId);
    });

  let oldMatchesInProgress = 0;

  const promises = GameSessions.find(
    { checkedStatus: 'matchInProgress', createdAt: { $lt: past } },
    { limit: 30 }
  )
    .fetch()
    .map(gameSession => {
      return new Promise(async resolve => {
        const trophyHunter = TrophyHunters.findOne({ userId: gameSession.userId });
        if (!trophyHunter) {
          return console.log(gameSession._id);
        }
        const platformId = getPlatformIdByRegion(trophyHunter.region);
        const currentGame = await getActiveGame({
          platformId,
          summonerId: trophyHunter.summonerId
        });
        // Check if there is a current game and it is the same as in activeGameSession
        if (!currentGame || !gameSession.game || gameSession.game.gameId != currentGame.gameId) {
          console.log('cleanup'.blue, trophyHunter.summonerName.magenta, 'setMatchEnd');
          oldMatchesInProgress++;
          gameSession.setMatchEnd(false, trophyHunter.userId);
        }
        resolve();
      });
    });
  await Promise.all(promises);

  const removedSummonerStats = SummonerStats.remove({
    updatedAt: {
      $lt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2)
    }
  });

  // Remove old Notifications
  const oneWeekAgo = new Date(Date.now() - 1000 * 60 * 60 * 24 * 7);
  const removedNotifications = Notifications.remove({ createdAt: { $lt: oneWeekAgo } });
  console.log(
    'cleanup'.blue,
    'removed gameSessions'.yellow,
    oldGameSessions,
    'removed jobs'.yellow,
    jobsRemoved,
    'set offline'.yellow,
    setOffline,
    'restart pending'.yellow,
    restartPending,
    'set match end'.yellow,
    oldMatchesInProgress,
    'reprocessed failed'.yellow,
    reprocessFailed,
    'removed summoner stats'.yellow,
    removedSummonerStats,
    'removed notifications'.yellow,
    removedNotifications
  );

  const removedDeadServers = removeDead();

  job.log('Cleaned up');
  job.done({
    oldGameSessions,
    jobsRemoved,
    setOffline,
    restartPending,
    oldMatchesInProgress,
    reprocessFailed,
    removedSummonerStats,
    removedNotifications,
    removedDeadServers
  });
  job.rerun({
    wait: 15 * 60 * 1000 // rerun in 15 minutes
  });
  cb();
}

export default cleanup;
