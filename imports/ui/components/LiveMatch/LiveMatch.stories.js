import {
  receiveChampionStats,
  receiveMatchupMatches,
  receiveMatchupStats,
  receiveParticipantHeatmap,
  receiveParticipantPerformance,
  receivePlayedTogether,
  setLiveMatch
} from '../../../store/actions';

import LiveMatch from './LiveMatch';
import React from 'react';
import { store } from '../../../store/store';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

storiesOf('Components', module).add('LiveMatch', () => {
  const firstTeam = [
    {
      championId: 69,
      summonerName: 'sirlunchalot619',
      summonerId: 24688273,
      role: 'MIDDLE',
      participantId: 1,
      teamId: 100,
      perks: {
        perkIds: [8214, 8226, 8210, 8237, 8453, 8473]
      }
    },
    {
      championId: 32,
      summonerName: 'bobo1',
      summonerId: 123,
      role: 'JUNGLE',
      participantId: 2,
      teamId: 100
    },
    {
      championId: 12,
      summonerName: 'bobo2',
      summonerId: 1235,
      role: 'DUO_SUPPORT',
      participantId: 3,
      teamId: 100
    },
    {
      championId: 2,
      summonerName: 'bobo3',
      summonerId: 1234,
      role: 'JUNGLE',
      participantId: 4,
      teamId: 100
    },
    {
      championId: 64,
      summonerName: 'bobo4',
      summonerId: 1236,
      role: 'TOP',
      participantId: 5,
      teamId: 100
    }
  ];
  const secondTeam = [
    {
      championId: 1,
      summonerName: 'ComplexityNP',
      summonerId: 79770682,
      role: 'MIDDLE',
      participantId: 6,
      teamId: 200
    },
    { championId: 266, summonerName: 'bobobobo', role: 'TOP', participantId: 7, teamId: 200 }
  ];

  const mapTarget = firstTeam[1];

  const liveMatch = {
    platformId: 'EUW1',
    mapId: 11,
    mapTarget,
    firstTeam,
    secondTeam,
    firstTeamTarget: firstTeam[0],
    secondTeamTarget: secondTeam[1],
    bannedChampions: [
      {
        championId: 117,
        teamId: 100,
        pickTurn: 1
      },
      {
        championId: 555,
        teamId: 100,
        pickTurn: 2
      },
      {
        championId: 119,
        teamId: 100,
        pickTurn: 3
      },
      {
        championId: 23,
        teamId: 100,
        pickTurn: 4
      },
      {
        championId: 84,
        teamId: 100,
        pickTurn: 5
      },
      {
        championId: 84,
        teamId: 200,
        pickTurn: 6
      },
      {
        championId: 117,
        teamId: 200,
        pickTurn: 7
      },
      {
        championId: 164,
        teamId: 200,
        pickTurn: 8
      },
      {
        championId: 555,
        teamId: 200,
        pickTurn: 9
      },
      {
        championId: 142,
        teamId: 200,
        pickTurn: 10
      }
    ]
  };

  store.dispatch(setLiveMatch(liveMatch));

  store.dispatch(
    receiveChampionStats(69, {
      byMap: {
        SUMMONERS_RIFT: {
          MIDDLE: {
            firstBlood: {
              analysedMatches: 22,
              count: 8,
              chance: 0.545454545454546,
              winCountOnFirstBlood: 0,
              winChanceOnFirstBlood: 0
            },
            snowball: {
              analysedMatches: 34,
              avgSnowballKills: 1.58823529411765,
              snowballingCount: 0,
              snowballingChance: 0,
              winCountOnSnowballing: 0,
              winChanceOnSnowballing: 0
            }
          },
          TOP: {
            snowball: {
              analysedMatches: 3,
              avgSnowballKills: 2,
              snowballingCount: 0,
              snowballingChance: 0,
              winCountOnSnowballing: 0,
              winChanceOnSnowballing: 0
            },
            firstBlood: {
              analysedMatches: 1,
              count: 0,
              chance: 0,
              winCountOnFirstBlood: 0,
              winChanceOnFirstBlood: 0
            }
          },
          JUNGLE: {
            snowball: {
              analysedMatches: 3,
              avgSnowballKills: 3.33333333333333,
              snowballingCount: 0,
              snowballingChance: 0,
              winCountOnSnowballing: 0,
              winChanceOnSnowballing: 0
            }
          }
        },
        TWISTED_TREELINE: {
          JUNGLE: {
            snowball: {
              analysedMatches: 1,
              avgSnowballKills: 1,
              snowballingCount: 0,
              snowballingChance: 0,
              winCountOnSnowballing: 0,
              winChanceOnSnowballing: 0
            }
          }
        }
      },
      stats: {
        MIDDLE: {
          gamesPlayed: 3948,
          winRate: 0.510131712259372,
          playRate: 0.0128538080111651,
          banRate: 0.000941932263350371,
          damageComposition: {
            percentTrue: 0.0205536496459572,
            percentMagical: 0.956697104336543,
            totalTrue: 435.13475177305,
            totalMagical: 20253.9288247214,
            percentPhysical: 0.0227210461142358,
            total: 21170.680597771,
            totalPhysical: 481.020010131712
          },
          firstItems: {
            highestCount: {
              count: 2154,
              wins: 1090,
              winRate: 0.506035283194058,
              items: ['1056', '2003', '2003']
            },
            highestWinrate: {
              count: 408,
              wins: 209,
              winRate: 0.512254901960784,
              items: ['2033']
            }
          },
          finalItems: {
            highestCount: {
              count: 684,
              wins: 247,
              winRate: 0.361111111111111,
              items: ['3003', '3116', '3151', '3157', '3089', '3165']
            },
            highestWinrate: {
              count: 183,
              wins: 79,
              winRate: 0.431693989071038,
              items: ['3027', '3003', '3116', '3151', '3157', '3102']
            }
          },
          skillOrder: {
            highestCount: {
              count: 1524,
              wins: 757,
              winRate: 0.496719160104987,
              order: [
                'E',
                'Q',
                'W',
                'E',
                'E',
                'R',
                'E',
                'Q',
                'E',
                'Q',
                'R',
                'Q',
                'Q',
                'W',
                'W',
                'R',
                'W',
                'W'
              ]
            },
            highestWinrate: {
              count: 982,
              wins: 535,
              winRate: 0.544806517311609,
              order: [
                'E',
                'Q',
                'E',
                'W',
                'E',
                'R',
                'E',
                'Q',
                'E',
                'Q',
                'R',
                'Q',
                'Q',
                'W',
                'W',
                'R',
                'W',
                'W'
              ]
            }
          },
          runes: {
            highestCount: {
              count: 517,
              wins: 275,
              winRate: 0.531914893617021,
              order: ['8230', '8226', '8234', '8237', '8100', '8139', '8135']
            },
            highestWinrate: {
              count: 150,
              wins: 82,
              winRate: 0.546666666666667,
              order: ['8230', '8226', '8234', '8236', '8100', '8139', '8135']
            }
          }
        }
      }
    })
  );
  const summonerIds = [...firstTeam, ...secondTeam].map(participant => participant.summonerId);
  const playedTogetherIdentifier = `EUW1&${summonerIds.join('.')}`;
  store.dispatch(
    receivePlayedTogether(playedTogetherIdentifier, {
      [firstTeam[0].summonerId]: {
        with: {
          [firstTeam[2].summonerId]: 3
        }
      },
      [firstTeam[2].summonerId]: {
        with: {
          [firstTeam[0].summonerId]: 3
        }
      }
    })
  );
  store.dispatch(
    receiveParticipantPerformance(`EUW1&${firstTeam[0].summonerId}&${firstTeam[0].championId}`, {
      leaguePositions: [{ queueType: 'RANKED_SOLO_5x5', tier: 'diamond', rank: 'V' }],
      stats: { championGames: 123, losses: 23, wins: 100 },
      trophyHunter: {
        seasonRank: 22,
        rank: 43
      },
      championMastery: {
        championLevel: 7
      },
      summonerLevel: 40
    })
  );
  store.dispatch(
    receiveParticipantPerformance(`EUW1&${secondTeam[0].summonerId}&${secondTeam[0].championId}`, {
      leaguePositions: [{ queueType: 'RANKED_SOLO_5x5', tier: 'gold', rank: 'II' }],
      championMastery: {
        championLevel: 4
      },
      summonerLevel: 105
    })
  );
  store.dispatch(
    receiveParticipantHeatmap(
      `EUW1&${mapTarget.summonerId}&${mapTarget.championId}&JUNGLE&${liveMatch.mapId}`,
      {
        framesByTeamId: {
          100: [
            [
              {
                x: 561,
                y: 581
              },
              {
                x: 3504,
                y: 9109
              },
              {
                x: 2198,
                y: 13059
              },
              {
                x: 3274,
                y: 12875
              },
              {
                x: 955,
                y: 10919
              },
              {
                x: 394,
                y: 461
              },
              {
                x: 929,
                y: 10261
              },
              {
                x: 901,
                y: 10677
              },
              {
                x: 2120,
                y: 12174
              },
              {
                x: 1566,
                y: 9489
              },
              {
                x: 394,
                y: 461
              },
              {
                x: 1278,
                y: 10960
              },
              {
                x: 2974,
                y: 12213
              },
              {
                x: 726,
                y: 7669
              },
              {
                x: 1215,
                y: 7897
              },
              {
                x: 3017,
                y: 12734
              },
              {
                x: 1311,
                y: 7844
              },
              {
                x: 1038,
                y: 11142
              },
              {
                x: 1251,
                y: 6629
              },
              {
                x: 1291,
                y: 5019
              },
              {
                x: 1357,
                y: 8325
              },
              {
                x: 4166,
                y: 13683
              },
              {
                x: 11356,
                y: 1482
              },
              {
                x: 3559,
                y: 6548
              },
              {
                x: 901,
                y: 542
              },
              {
                x: 6055,
                y: 1600
              },
              {
                x: 12178,
                y: 1772
              },
              {
                x: 6277,
                y: 1173
              }
            ]
          ],
          200: [
            [
              {
                x: 561,
                y: 361
              },
              {
                x: 3392,
                y: 7724
              },
              {
                x: 2710,
                y: 8087
              },
              {
                x: 7062,
                y: 4258
              },
              {
                x: 7991,
                y: 3423
              },
              {
                x: 2556,
                y: 8411
              },
              {
                x: 7124,
                y: 9756
              },
              {
                x: 3431,
                y: 8346
              },
              {
                x: 3673,
                y: 9924
              },
              {
                x: 11233,
                y: 4115
              },
              {
                x: 9099,
                y: 3994
              },
              {
                x: 2790,
                y: 6934
              },
              {
                x: 5106,
                y: 7649
              },
              {
                x: 5728,
                y: 7403
              },
              {
                x: 1108,
                y: 853
              },
              {
                x: 9229,
                y: 5572
              },
              {
                x: 6297,
                y: 12243
              },
              {
                x: 14066,
                y: 6934
              },
              {
                x: 10268,
                y: 1591
              },
              {
                x: 12861,
                y: 2601
              },
              {
                x: 6812,
                y: 4859
              },
              {
                x: 7274,
                y: 2458
              },
              {
                x: 673,
                y: 3201
              },
              {
                x: 1997,
                y: 1239
              },
              {
                x: 6158,
                y: 4503
              },
              {
                x: 6411,
                y: 1746
              },
              {
                x: 7083,
                y: 8007
              },
              {
                x: 394,
                y: 461
              }
            ]
          ]
        }
      }
    )
  );

  store.dispatch(
    receiveMatchupStats({
      identifier: `${liveMatch.firstTeamTarget.championId}&${
        liveMatch.secondTeamTarget.championId
      }&${liveMatch.firstTeamTarget.role}`,
      stats: {
        champ1Id: 69,
        champ2Id: 266,
        role: 'MIDDLE',
        champ1: {
          thirtyToEnd: 0,
          goldEarned: 11949.6666666667,
          zeroToTen: 0,
          minionsKilled: 190.666666666667,
          winrate: 0.666666666666667,
          assists: 5.91666666666667,
          role: 'MIDDLE',
          deaths: 6.25,
          kills: 6.5,
          wins: 8,
          totalDamageDealtToChampions: 23522.8333333333,
          twentyToThirty: 0,
          tenToTwenty: 0,
          neutralMinionsKilledTeamJungle: 12,
          killingSprees: 1.41666666666667,
          weighedScore: 56648.6
        },
        champ2: {
          twentyToThirty: 0,
          wins: 4,
          winrate: 0.333333333333333,
          kills: 6.75,
          neutralMinionsKilledTeamJungle: 3.58333333333333,
          totalDamageDealtToChampions: 15716.4166666667,
          role: 'MIDDLE',
          assists: 5,
          tenToTwenty: 0,
          thirtyToEnd: 0,
          zeroToTen: 0,
          goldEarned: 11348.3333333333,
          killingSprees: 1.75,
          minionsKilled: 174.5,
          deaths: 5.25,
          weighedScore: 41215.375
        },
        count: 12,
        patch: '8.16'
      }
    })
  );

  store.dispatch(
    receiveMatchupMatches({
      identifier: `${liveMatch.firstTeamTarget.championId}&${
        liveMatch.secondTeamTarget.championId
      }&${liveMatch.mapId}`,
      matches: [
        {
          participant1: {
            championId: liveMatch.firstTeamTarget.championId,
            spell1Id: 4,
            spell2Id: 7,
            stats: {
              win: true,
              item0: 3198,
              item1: 1056,
              item2: 3001,
              item3: 3100,
              item4: 3020,
              item5: 0,
              item6: 3363,
              kills: 1,
              deaths: 3,
              assists: 5,
              totalMinionsKilled: 154,
              neutralMinionsKilled: 5,
              perk0: 8021,
              perkSubStyle: 8200
            }
          },
          participant2: {
            championId: liveMatch.secondTeamTarget.championId,
            spell1Id: 4,
            spell2Id: 12,
            stats: {
              win: false,
              item0: 2033,
              item1: 1054,
              item2: 3068,
              item3: 3047,
              item4: 3025,
              item5: 3075,
              item6: 3340,
              kills: 0,
              deaths: 5,
              assists: 11,
              totalMinionsKilled: 120,
              neutralMinionsKilled: 58,
              perk0: 8005,
              perkSubStyle: 8400
            }
          }
        },
        {
          participant1: {
            championId: liveMatch.firstTeamTarget.championId,
            spell1Id: 11,
            spell2Id: 4,
            stats: {
              win: false,
              item0: 1412,
              item1: 3190,
              item2: 3111,
              item3: 1031,
              item4: 1011,
              item5: 0,
              item6: 3340,
              kills: 9,
              deaths: 4,
              assists: 4,
              totalMinionsKilled: 54,
              neutralMinionsKilled: 55,
              perk0: 8021,
              perkSubStyle: 8200
            }
          },
          participant2: {
            championId: liveMatch.secondTeamTarget.championId,
            spell1Id: 4,
            spell2Id: 7,
            stats: {
              win: true,
              item0: 3031,
              item1: 3087,
              item2: 1042,
              item3: 1042,
              item4: 3006,
              item5: 0,
              item6: 3363,
              kills: 2,
              deaths: 5,
              assists: 6,
              totalMinionsKilled: 254,
              neutralMinionsKilled: 55,
              perk0: 8230,
              perkSubStyle: 8000
            }
          }
        }
      ]
    })
  );

  return <LiveMatch />;
});
