import { MAP_NAMES, queuesByMatchId } from '/imports/shared/riot-api/gameConstants.ts';
import { check } from 'meteor/check';
import extendMatchStats from '/imports/shared/matches/extendMatchResult/extendMatchStats.ts';
import getParticipantIdentity from '/imports/shared/matches/extendMatchResult/getParticipantIdentity.ts';
import getParticipantIdentityByChampionId from '/imports/shared/matches/extendMatchResult/getParticipantIdentityByChampionId.ts';
import getPartitionedParticipants from '/imports/shared/matches/extendMatchResult/getPartitionedParticipants.ts';

import Future from 'fibers/future';
import { Meteor } from 'meteor/meteor';
import SummonerStats from '/imports/api/summoner-stats/summonerStats';
import TrophyHunters from '/imports/api/trophy-hunters/trophyHunters';
import endpoints from '../endpoints';
import { getMatchWithTimeline } from '/imports/api/matches/server/_getMatchWithTimeline';
import riotApi from './riotApi';
import {
  getPlatformIdByRegion,
  getChampionMastery,
  getMatch,
  getSummoner,
  getLeaguePositions
} from '/imports/shared/th-api/index.ts';

const numberOfMatches = {
  stats: 30,
  recent: 8,
  timelines: 25
};
const past = new Date(Date.now() - 1000 * 60 * 60 * 24 * 30 * 6); // Last 5 months

Meteor.methods({
  async getSummonerId({ accountId, region }) {
    this.unblock();
    check(accountId, Number);
    check(region, String);

    const trophyHunter = TrophyHunters.findOne(
      { accountId, region },
      { fields: { summonerId: 1 } }
    );
    if (trophyHunter) {
      return trophyHunter.summonerId;
    }
    const platformId = getPlatformIdByRegion(region);
    const summoner = await getSummoner({ platformId, accountId });
    if (!summoner) {
      return false;
    }
    return summoner.id;
  },
  getPlayedTogether(props) {
    this.unblock();
    check(props, {
      platformId: String,
      summonerIds: Array
    });

    const { summonerIds, platformId } = props;

    const region = endpoints.find(e => e.platformId === platformId).region;
    const futures = summonerIds.map(summonerId => {
      const future = new Future();
      Meteor.defer(async () => {
        let accountId;
        const trophyHunter = TrophyHunters.findOne({ summonerId }, { fields: { accountId: 1 } });

        if (!trophyHunter) {
          const summoner = await getSummoner({ platformId, summonerId });
          if (!summoner) {
            return future.return(null);
          }
          accountId = summoner.accountId;
        } else {
          accountId = trophyHunter.accountId;
        }

        const matchList = riotApi.getMatchList(region, accountId);
        if (!matchList || !matchList.matches.length) {
          return future.return(null);
        }
        future.return({ summonerId, matchList });
      });
      return future;
    });

    const games = {};
    const playedTogether = {};
    const playedTogeterBySummonerId = {};
    futures.forEach(future => {
      const result = future.wait();
      if (result) {
        const { summonerId, matchList } = result;
        playedTogeterBySummonerId[summonerId] = {
          matchesAnalysed: matchList.endIndex,
          matchesSince: matchList.matches[matchList.matches.length - 1].timestamp,
          with: {}
        };
        matchList.matches.forEach(match => {
          if (!games[match.gameId]) {
            games[match.gameId] = [summonerId];
          } else {
            games[match.gameId].push(summonerId);
            playedTogether[match.gameId] = games[match.gameId];
          }
        });
      }
    });
    Object.values(playedTogether).forEach(summonerIds => {
      summonerIds.forEach(summonerId => {
        const otherSummonerIds = summonerIds.filter(id => id !== summonerId);
        otherSummonerIds.forEach(otherSummonerId => {
          if (!playedTogeterBySummonerId[summonerId].with[otherSummonerId]) {
            playedTogeterBySummonerId[summonerId].with[otherSummonerId] = 0;
          }
          playedTogeterBySummonerId[summonerId].with[otherSummonerId]++;
        });
      });
    });

    return playedTogeterBySummonerId;
  },
  async getParticipantPerformance(props) {
    this.unblock();
    check(props, {
      platformId: String,
      summonerId: Number,
      championId: Number
    });
    const { platformId, summonerId, championId } = props;

    const region = endpoints.find(e => e.platformId === platformId).region;
    const trophyHunter = TrophyHunters.findOne(
      { summonerId },
      {
        fields: {
          accountId: 1,
          rank: 1,
          score: 1,
          seasonRank: 1,
          seasonScore: 1,
          summonerLevel: 1,
          lastLogin: 1
        }
      }
    );

    let accountId;
    let summonerLevel;
    if (trophyHunter) {
      accountId = trophyHunter.accountId;
      summonerLevel = trophyHunter.summonerLevel;
    } else {
      const summoner = await getSummoner({ platformId, summonerId });
      if (!summoner) {
        console.error('getParticipantPerformance', 'summoner not found', region, summonerId);
        return {};
      }
      accountId = summoner.accountId;
      summonerLevel = summoner.summonerLevel;
    }

    const championMastery = await getChampionMastery({ platformId, summonerId, championId });
    const leaguePositions = await getLeaguePositions({ platformId, summonerId });
    if (!leaguePositions) {
      console.error('getParticipantPerformance', 'leaguePositions error', region, summonerId);
    }

    let stats = {
      wins: 0,
      losses: 0,
      championGames: 0,
      beginTime: past
    };

    let fromTime = stats.beginTime.getTime();
    const summonerStats = SummonerStats.findOne({ accountId });
    if (summonerStats) {
      const championStats = summonerStats.champions[`${championId}`];
      if (championStats) {
        // Only check for new matches
        stats = championStats;
        fromTime = championStats.endTime.getTime();
      }
    }

    const matchList = riotApi.getMatchList(region, accountId, championId, fromTime);
    if (matchList && matchList.matches) {
      stats.championGames += matchList.matches.length;

      const matchesToAnalyse = matchList.matches.slice(0, numberOfMatches.stats);

      const futures = matchesToAnalyse.map(match => {
        const future = new Future();

        getMatch({ platformId, matchId: match.gameId })
          .then(matchDetails => {
            matchDetails.participantIdentity = getParticipantIdentity(matchDetails, summonerId);

            if (!matchDetails.participantIdentity) {
              console.error(
                'getParticipantPerformance',
                'participantIdentity error',
                region,
                match.gameId,
                summonerId
              );
              future.return(null);
              return;
            }

            // Extend partitioned participants (participant, others, opponents, ...)
            const partitionedParticipants = getPartitionedParticipants(
              matchDetails.participantIdentity.participantId,
              matchDetails
            );
            Object.assign(matchDetails, partitionedParticipants);

            // Extend match stats
            extendMatchStats(matchDetails);
            future.return(matchDetails.participant.stats);
          })
          .catch(error => {
            console.error(
              'getParticipantPerformance',
              'matchDetails error',
              region,
              match.gameId,
              error.message
            );
            future.return(null);
          });

        return future;
      });

      futures.forEach(future => {
        const participantStats = future.wait();
        if (!participantStats) {
          return;
        }
        if (participantStats.win) {
          stats.wins++;
        } else {
          stats.losses++;
        }
        Object.entries(participantStats).forEach(([key, statistic]) => {
          if (Number.isFinite(statistic)) {
            stats[key] = stats[key] ? stats[key] + statistic : statistic;
          } else if (typeof statistic === 'boolean') {
            if (!stats[key]) {
              stats[key] = 0;
            }
            if (statistic) {
              stats[key]++;
            }
          }
        });
      });

      stats.endTime = new Date();
      const champions = summonerStats ? summonerStats.champions : {};
      champions[championId] = stats;

      SummonerStats.upsert(
        {
          accountId
        },
        {
          $setOnInsert: {
            accountId
          },
          $set: {
            champions
          }
        }
      );
    }

    return {
      championMastery,
      stats,
      trophyHunter,
      summonerLevel,
      leaguePositions
    };
  },
  async getParticipantMatches(params) {
    this.unblock();

    check(params, {
      platformId: String,
      summonerId: Number
    });
    const { platformId, summonerId } = params;

    const region = endpoints.find(e => e.platformId === platformId).region;
    const trophyHunter = TrophyHunters.findOne({ summonerId });
    let accountId, summonerName;
    if (trophyHunter) {
      accountId = trophyHunter.accountId;
      summonerName = trophyHunter.summonerName;
    } else {
      const summoner = await getSummoner({ platformId, summonerId });
      if (!summoner) {
        throw new Meteor.Error('getParticipantMatches', 'summoner not found');
      }
      accountId = summoner.accountId;
      summonerName = summoner.summonerName;
    }
    const matchList = riotApi.getRecentMatchList(region, accountId);
    if (!matchList) {
      throw new Meteor.Error('getParticipantMatches', 'matchList error');
    }
    if (!matchList.matches) {
      return [];
    }

    const futures = matchList.matches.splice(0, numberOfMatches.recent).map(match => {
      const future = new Future();
      getMatch({ platformId, matchId: match.gameId })
        .then(matchDetails => {
          matchDetails.participantIdentity = getParticipantIdentityByChampionId(
            matchDetails,
            match.champion
          );
          if (!matchDetails.participantIdentity) return future.return(null);
          if (!matchDetails.participantIdentity.player) {
            matchDetails.participantIdentity.player = {
              accountId,
              summonerId,
              summonerName
            };
          }
          future.return(matchDetails);
        })
        .catch(() => {
          future.return(null);
        });

      return future;
    });

    const matches = [];
    futures.forEach(future => {
      const result = future.wait();
      if (result) {
        const { gameId, participants, participantIdentities } = result;
        const participantIdentity = participantIdentities.find(
          identity => identity.player.summonerId === summonerId
        );
        const participant1 = participants.find(
          participant => participant.participantId === participantIdentity.participantId
        );
        const participant2 = participants.find(participant => {
          const enemyTeam = participant.teamId !== participant1.teamId;
          const sameRole = participant.timeline.role === participant1.timeline.role;
          const sameLane = participant.timeline.lane === participant1.timeline.lane;
          return enemyTeam && sameRole && sameLane;
        });
        if (participant2) {
          matches.push({
            gameId,
            participant1,
            participant2
          });
        }
      }
    });

    return matches.sort((a, b) => b.gameCreation - a.gameCreation);
  },
  getMatchWithTimeline(gameId, platformId) {
    this.unblock();

    check(gameId, Number);
    check(platformId, String);

    return getMatchWithTimeline(gameId, platformId);
  },
  async getParticipantHeatmap(props) {
    this.unblock();

    check(props, {
      platformId: String,
      summonerId: Number,
      championId: Number,
      role: String,
      mapId: Number
    });
    const { platformId, summonerId, championId, mapId, role } = props;

    try {
      const region = endpoints.find(e => e.platformId === platformId).region;
      const trophyHunter = TrophyHunters.findOne({ summonerId });
      let accountId;
      if (trophyHunter) {
        accountId = trophyHunter.accountId;
      } else {
        const summoner = await getSummoner({ platformId, summonerId });
        if (!summoner) {
          throw new Meteor.Error('getParticipantHeatmap', 'summoner not found');
        }
        accountId = summoner.accountId;
      }
      const queueIds = queuesByMatchId[mapId];
      if (!queueIds) {
        if (mapId !== MAP_NAMES.HOWLING_ABYSS) console.log('unsupported map id', mapId);
        return [];
      }
      const matchList = riotApi.getMatchList(region, accountId, championId, '', queueIds);
      if (!matchList || !matchList.matches) {
        return [];
      }

      const futures = matchList.matches.splice(0, numberOfMatches.timelines).map(match => {
        const future = new Future();
        Meteor.defer(() => {
          const matchDetails = riotApi.getMatchWithTimeline(region, match.gameId);
          future.return(matchDetails);
        });
        return {
          future
        };
      });

      const framesByTeamId = {
        100: [],
        200: []
      };
      futures.forEach(({ future }) => {
        const matchDetails = future.wait();

        if (matchDetails && matchDetails.timeline) {
          const participant = matchDetails.participants.find(
            participant => participant.championId === championId
          );
          if (participant.timeline.role !== role && participant.timeline.lane !== role) return;
          const frames = [];
          matchDetails.timeline.frames.slice(0, 20).forEach(frame => {
            const participantFrame = frame.participantFrames[participant.participantId];
            if (participantFrame) {
              frames.push(participantFrame.position);
            }
          });
          framesByTeamId[participant.teamId].push(frames);
        }
      });

      return { framesByTeamId };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  async getSummonerChampionTimelines(platformId, summonerId, championId, mapId) {
    this.unblock();

    check(platformId, String);
    check(summonerId, Number);
    check(championId, Number);
    check(mapId, Number);

    const region = endpoints.find(e => e.platformId === platformId).region;
    const trophyHunter = TrophyHunters.findOne({ summonerId });
    let accountId, summonerName;
    if (trophyHunter) {
      accountId = trophyHunter.accountId;
      summonerName = trophyHunter.summonerName;
    } else {
      const summoner = await getSummoner({ platformId, summonerId });
      if (!summoner) {
        throw new Meteor.Error('getSummonerChampionTimelines', 'summoner not found');
      }
      accountId = summoner.accountId;
      summonerName = summoner.summonerName;
    }
    const queueIds = queuesByMatchId[mapId];
    if (!queueIds) {
      if (mapId !== MAP_NAMES.HOWLING_ABYSS) console.log('unsupported map id', mapId);
      return [];
    }
    const matchList = riotApi.getMatchList(region, accountId, championId, '', queueIds);
    if (!matchList || !matchList.matches) {
      return [];
    }

    const futures = matchList.matches.splice(0, numberOfMatches.timelines).map(match => {
      const future = new Future();
      Meteor.defer(() => {
        const matchDetails = riotApi.getMatchWithTimeline(region, match.gameId);
        future.return(matchDetails);
      });
      return {
        future
      };
    });

    const matches = [];
    futures.forEach(({ future }) => {
      const matchDetails = future.wait();

      if (matchDetails && matchDetails.timeline) {
        matchDetails.participantIdentity = getParticipantIdentityByChampionId(
          matchDetails,
          championId
        );
        if (!matchDetails.participantIdentity) {
          return;
        }
        if (!matchDetails.participantIdentity.player) {
          matchDetails.participantIdentity.player = {
            accountId,
            summonerId,
            summonerName
          };
        }
        matches.push(matchDetails);
      }
    });

    return matches;
  },
  async getSummoner({ region, summonerName }) {
    check(region, String);
    check(summonerName, String);

    const trophyHunter = TrophyHunters.findOne({ summonerName });
    if (trophyHunter) {
      return trophyHunter;
    } else {
      const platformId = getPlatformIdByRegion(region);
      const summoner = await getSummoner({ platformId, summonerName });
      if (!summoner) {
        throw new Meteor.Error('getSummoner', 'summoner not found');
      }
      summoner.summonerName = summonerName;
      return summoner;
    }
  }
});
