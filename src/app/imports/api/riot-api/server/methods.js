import { MAP_NAMES, queuesByMatchId } from '/imports/shared/riot-api/gameConstants.ts';
import { check, Match } from 'meteor/check';
import extendMatchStats from '/imports/shared/matches/extendMatchResult/extendMatchStats.ts';
import getParticipantIdentity from '/imports/shared/matches/extendMatchResult/getParticipantIdentity.ts';
import getParticipantIdentityByChampionId from '/imports/shared/matches/extendMatchResult/getParticipantIdentityByChampionId.ts';
import getPartitionedParticipants from '/imports/shared/matches/extendMatchResult/getPartitionedParticipants.ts';

import Future from 'fibers/future';
import { Meteor } from 'meteor/meteor';
import SummonerStats from '/imports/api/summoner-stats/summonerStats';
import TrophyHunters from '/imports/api/trophy-hunters/trophyHunters';
import {
  getChampionMastery,
  getMatch,
  getMatchList,
  getSummoner,
  getMatchWithTimeline,
  getLeaguePositions
} from '/imports/shared/th-api/index.ts';

const numberOfMatches = {
  stats: 30,
  recent: 8,
  timelines: 25
};
const past = new Date(Date.now() - 1000 * 60 * 60 * 24 * 30 * 6); // Last 5 months

Meteor.methods({
  async getParticipantPerformance(props) {
    this.unblock();
    check(props, {
      platformId: String,
      summonerId: Match.OneOf(Number, String),
      championId: Number
    });

    try {
      const { platformId, summonerId, championId } = props;

      const summoner = await getSummoner({ platformId, summonerId });
      if (!summoner) {
        console.error('getParticipantPerformance', 'summoner not found', platformId, summonerId);
        return {};
      }
      const { accountId, summonerLevel, name: summonerName } = summoner;

      let championMastery;
      try {
        championMastery = await getChampionMastery({ platformId, summonerId, championId });
      } catch (error) {
        championMastery = null;
      }
      let leaguePositions;
      try {
        leaguePositions = await getLeaguePositions({ platformId, summonerId });
      } catch (error) {
        leaguePositions = null;
      }
      if (!leaguePositions) {
        console.error('getParticipantPerformance', 'leaguePositions error', platformId, summonerId);
      }

      let stats = {
        wins: 0,
        losses: 0,
        championGames: 0,
        beginTime: past
      };

      let beginTime = stats.beginTime.getTime();
      const summonerStats = SummonerStats.findOne({ accountId });
      if (summonerStats) {
        const championStats = summonerStats.champions[`${championId}`];
        if (championStats) {
          // Only check for new matches
          stats = championStats;
          beginTime = championStats.endTime.getTime();
        }
      }

      let matchList;
      try {
        matchList = await getMatchList({ platformId, accountId, championId, beginTime });
      } catch (error) {
        matchList = {};
      }
      if (matchList.matches) {
        stats.championGames += matchList.matches.length;

        const matchesToAnalyse = matchList.matches.slice(0, numberOfMatches.stats);

        const futures = matchesToAnalyse.map(match => {
          const future = new Future();

          getMatch({ platformId, matchId: match.gameId })
            .then(matchDetails => {
              matchDetails.participantIdentity = getParticipantIdentity({
                participantIdentities: matchDetails.participantIdentities,
                summonerId,
                summonerName
              });

              if (!matchDetails.participantIdentity) {
                console.error(
                  'getParticipantPerformance',
                  'participantIdentity error',
                  platformId,
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
                platformId,
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

      const trophyHunter = TrophyHunters.findOne(
        { summonerId: summoner.id },
        {
          fields: {
            accountId: 1,
            rank: 1,
            score: 1,
            s9Rank: 1,
            seasonRank: 1,
            s9Score: 1,
            seasonScore: 1,
            summonerLevel: 1,
            lastLogin: 1
          }
        }
      );

      return {
        championMastery,
        stats,
        trophyHunter,
        summonerLevel,
        leaguePositions
      };
    } catch (error) {
      console.log(error.message);
      return null;
    }
  },
  async getParticipantMatches(params) {
    this.unblock();

    check(params, {
      platformId: String,
      summonerId: Match.OneOf(Number, String)
    });

    try {
      const { platformId, summonerId } = params;

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
      let matchList;
      try {
        matchList = await getMatchList({ platformId, accountId, endIndex: 8 });
      } catch (error) {
        matchList = {};
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
    } catch (error) {
      return null;
    }
  },
  async getParticipantHeatmap(props) {
    this.unblock();

    check(props, {
      platformId: String,
      summonerId: Match.OneOf(Number, String),
      championId: Number,
      role: String,
      mapId: Number
    });

    try {
      const { platformId, summonerId, championId, mapId, role } = props;
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
      let matchList;
      try {
        matchList = await getMatchList({ platformId, accountId, championId, queueIds });
      } catch (error) {
        matchList = {};
      }

      if (!matchList.matches) {
        return [];
      }

      const futures = matchList.matches.splice(0, numberOfMatches.timelines).map(match => {
        const future = new Future();
        Meteor.defer(async () => {
          try {
            const matchDetails = await getMatchWithTimeline({ platformId, matchId: match.gameId });
            future.return(matchDetails);
          } catch (error) {
            future.return(null);
          }
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
      return null;
    }
  },
  async getSummonerChampionTimelines(platformId, summonerId, championId, mapId) {
    this.unblock();

    check(platformId, String);
    check(summonerId, Match.OneOf(Number, String));
    check(championId, Number);
    check(mapId, Number);

    try {
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
      let matchList;
      try {
        matchList = await getMatchList({ platformId, accountId, championId, queueIds });
      } catch (error) {
        matchList = {};
      }

      if (!matchList.matches) {
        return [];
      }

      const futures = matchList.matches.splice(0, numberOfMatches.timelines).map(match => {
        const future = new Future();
        Meteor.defer(async () => {
          try {
            const matchDetails = await getMatchWithTimeline({ platformId, matchId: match.gameId });
            future.return(matchDetails);
          } catch (error) {
            future.return(null);
          }
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
    } catch (error) {
      return null;
    }
  }
});
