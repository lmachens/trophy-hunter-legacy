/* eslint-disable */

import Match, { MatchHeader } from './Match';

import React from 'react';
import { storiesOf } from '@storybook/react';

const sampleMatchWithTrophyHunter = {
  match: {
    _id: 'f82Y4pfAZRjcKdAqX',
    gameId: 3556052406.0,
    platformId: 'EUW1',
    gameCreation: 1520409668486.0,
    gameDuration: 1673,
    queueId: 420,
    mapId: 11,
    seasonId: 11,
    gameVersion: '8.5.220.3006',
    gameMode: 'CLASSIC',
    gameType: 'MATCHED_GAME',
    teams: [
      {
        teamId: 100,
        win: 'Fail',
        firstBlood: false,
        firstTower: false,
        firstInhibitor: false,
        firstBaron: false,
        firstDragon: false,
        firstRiftHerald: false,
        towerKills: 1,
        inhibitorKills: 0,
        baronKills: 0,
        dragonKills: 0,
        vilemawKills: 0,
        riftHeraldKills: 0,
        dominionVictoryScore: 0,
        bans: [
          {
            championId: 164,
            pickTurn: 1
          },
          {
            championId: 67,
            pickTurn: 2
          },
          {
            championId: 121,
            pickTurn: 3
          },
          {
            championId: 122,
            pickTurn: 4
          },
          {
            championId: 55,
            pickTurn: 5
          }
        ]
      },
      {
        teamId: 200,
        win: 'Win',
        firstBlood: true,
        firstTower: true,
        firstInhibitor: true,
        firstBaron: true,
        firstDragon: true,
        firstRiftHerald: true,
        towerKills: 10,
        inhibitorKills: 1,
        baronKills: 1,
        dragonKills: 1,
        vilemawKills: 0,
        riftHeraldKills: 1,
        dominionVictoryScore: 0,
        bans: [
          {
            championId: 19,
            pickTurn: 6
          },
          {
            championId: 2,
            pickTurn: 7
          },
          {
            championId: 119,
            pickTurn: 8
          },
          {
            championId: 164,
            pickTurn: 9
          },
          {
            championId: 134,
            pickTurn: 10
          }
        ]
      }
    ],
    participants: [
      {
        participantId: 1,
        teamId: 100,
        championId: 266,
        spell1Id: 4,
        spell2Id: 12,
        highestAchievedSeasonTier: 'PLATINUM',
        stats: {
          participantId: 1,
          win: false,
          item0: 3748,
          item1: 3071,
          item2: 3047,
          item3: 1055,
          item4: 2031,
          item5: 0,
          item6: 3340,
          kills: 0,
          deaths: 4,
          assists: 4,
          largestKillingSpree: 0,
          largestMultiKill: 0,
          killingSprees: 0,
          longestTimeSpentLiving: 485,
          doubleKills: 0,
          tripleKills: 0,
          quadraKills: 0,
          pentaKills: 0,
          unrealKills: 0,
          totalDamageDealt: 115374,
          magicDamageDealt: 830,
          physicalDamageDealt: 112990,
          trueDamageDealt: 1554,
          largestCriticalStrike: 0,
          totalDamageDealtToChampions: 7125,
          magicDamageDealtToChampions: 830,
          physicalDamageDealtToChampions: 5860,
          trueDamageDealtToChampions: 434,
          totalHeal: 7871,
          totalUnitsHealed: 1,
          damageSelfMitigated: 16131,
          damageDealtToObjectives: 4774,
          damageDealtToTurrets: 1682,
          visionScore: 3,
          timeCCingOthers: 14,
          totalDamageTaken: 21304,
          magicalDamageTaken: 5264,
          physicalDamageTaken: 15409,
          trueDamageTaken: 629,
          goldEarned: 9308,
          goldSpent: 8350,
          turretKills: 0,
          inhibitorKills: 0,
          totalMinionsKilled: 196,
          neutralMinionsKilled: 12,
          neutralMinionsKilledTeamJungle: 9,
          neutralMinionsKilledEnemyJungle: 0,
          totalTimeCrowdControlDealt: 487,
          champLevel: 15,
          visionWardsBoughtInGame: 0,
          sightWardsBoughtInGame: 0,
          wardsPlaced: 2,
          wardsKilled: 0,
          firstBloodKill: false,
          firstBloodAssist: false,
          firstTowerKill: false,
          firstTowerAssist: false,
          firstInhibitorKill: false,
          firstInhibitorAssist: false,
          combatPlayerScore: 0,
          objectivePlayerScore: 0,
          totalPlayerScore: 0,
          totalScoreRank: 0,
          playerScore0: 0,
          playerScore1: 0,
          playerScore2: 0,
          playerScore3: 0,
          playerScore4: 0,
          playerScore5: 0,
          playerScore6: 0,
          playerScore7: 0,
          playerScore8: 0,
          playerScore9: 0,
          perk0: 8005,
          perk0Var1: 317,
          perk0Var2: 210,
          perk0Var3: 107,
          perk1: 9111,
          perk1Var1: 509,
          perk1Var2: 0,
          perk1Var3: 0,
          perk2: 9104,
          perk2Var1: 20,
          perk2Var2: 40,
          perk2Var3: 0,
          perk3: 8299,
          perk3Var1: 181,
          perk3Var2: 0,
          perk3Var3: 0,
          perk4: 8430,
          perk4Var1: 19,
          perk4Var2: 0,
          perk4Var3: 0,
          perk5: 8453,
          perk5Var1: 784,
          perk5Var2: 25,
          perk5Var3: 0,
          perkPrimaryStyle: 8000,
          perkSubStyle: 8400
        },
        timeline: {
          participantId: 1,
          creepsPerMinDeltas: {
            '10-20': 8.5,
            '0-10': 6.3
          },
          xpPerMinDeltas: {
            '10-20': 546.9,
            '0-10': 422.6
          },
          goldPerMinDeltas: {
            '10-20': 335.6,
            '0-10': 251.6
          },
          damageTakenPerMinDeltas: {
            '10-20': 571.4,
            '0-10': 524.9
          },
          role: 'NONE',
          lane: 'JUNGLE'
        }
      },
      {
        participantId: 2,
        teamId: 100,
        championId: 28,
        spell1Id: 11,
        spell2Id: 4,
        highestAchievedSeasonTier: 'PLATINUM',
        stats: {
          participantId: 2,
          win: false,
          item0: 1402,
          item1: 2031,
          item2: 3020,
          item3: 3100,
          item4: 3135,
          item5: 0,
          item6: 3340,
          kills: 9,
          deaths: 5,
          assists: 3,
          largestKillingSpree: 7,
          largestMultiKill: 1,
          killingSprees: 1,
          longestTimeSpentLiving: 1103,
          doubleKills: 0,
          tripleKills: 0,
          quadraKills: 0,
          pentaKills: 0,
          unrealKills: 0,
          totalDamageDealt: 108931,
          magicDamageDealt: 92461,
          physicalDamageDealt: 10102,
          trueDamageDealt: 6368,
          largestCriticalStrike: 812,
          totalDamageDealtToChampions: 16416,
          magicDamageDealtToChampions: 14211,
          physicalDamageDealtToChampions: 647,
          trueDamageDealtToChampions: 1558,
          totalHeal: 6156,
          totalUnitsHealed: 1,
          damageSelfMitigated: 12151,
          damageDealtToObjectives: 1698,
          damageDealtToTurrets: 0,
          visionScore: 28,
          timeCCingOthers: 13,
          totalDamageTaken: 22271,
          magicalDamageTaken: 7321,
          physicalDamageTaken: 14143,
          trueDamageTaken: 806,
          goldEarned: 10172,
          goldSpent: 10150,
          turretKills: 0,
          inhibitorKills: 0,
          totalMinionsKilled: 15,
          neutralMinionsKilled: 116,
          neutralMinionsKilledTeamJungle: 101,
          neutralMinionsKilledEnemyJungle: 5,
          totalTimeCrowdControlDealt: 381,
          champLevel: 14,
          visionWardsBoughtInGame: 1,
          sightWardsBoughtInGame: 0,
          wardsPlaced: 8,
          wardsKilled: 7,
          firstBloodKill: false,
          firstBloodAssist: false,
          firstTowerKill: false,
          firstTowerAssist: false,
          firstInhibitorKill: false,
          firstInhibitorAssist: false,
          combatPlayerScore: 0,
          objectivePlayerScore: 0,
          totalPlayerScore: 0,
          totalScoreRank: 0,
          playerScore0: 0,
          playerScore1: 0,
          playerScore2: 0,
          playerScore3: 0,
          playerScore4: 0,
          playerScore5: 0,
          playerScore6: 0,
          playerScore7: 0,
          playerScore8: 0,
          playerScore9: 0,
          perk0: 8112,
          perk0Var1: 1945,
          perk0Var2: 0,
          perk0Var3: 0,
          perk1: 8143,
          perk1Var1: 959,
          perk1Var2: 0,
          perk1Var3: 0,
          perk2: 8138,
          perk2Var1: 30,
          perk2Var2: 0,
          perk2Var3: 0,
          perk3: 8105,
          perk3Var1: 5,
          perk3Var2: 0,
          perk3Var3: 0,
          perk4: 8243,
          perk4Var1: 15,
          perk4Var2: 0,
          perk4Var3: 0,
          perk5: 8234,
          perk5Var1: 19,
          perk5Var2: 0,
          perk5Var3: 0,
          perkPrimaryStyle: 8100,
          perkSubStyle: 8200
        },
        timeline: {
          participantId: 2,
          creepsPerMinDeltas: {
            '10-20': 1.1,
            '0-10': 0.2
          },
          xpPerMinDeltas: {
            '10-20': 558.9,
            '0-10': 386.2
          },
          goldPerMinDeltas: {
            '10-20': 431.1,
            '0-10': 306.6
          },
          damageTakenPerMinDeltas: {
            '10-20': 740.1,
            '0-10': 482.3
          },
          role: 'NONE',
          lane: 'JUNGLE'
        }
      },
      {
        participantId: 3,
        teamId: 100,
        championId: 18,
        spell1Id: 4,
        spell2Id: 7,
        highestAchievedSeasonTier: 'UNRANKED',
        stats: {
          participantId: 3,
          win: false,
          item0: 3094,
          item1: 1053,
          item2: 3009,
          item3: 3031,
          item4: 0,
          item5: 0,
          item6: 3363,
          kills: 2,
          deaths: 4,
          assists: 3,
          largestKillingSpree: 0,
          largestMultiKill: 1,
          killingSprees: 0,
          longestTimeSpentLiving: 864,
          doubleKills: 0,
          tripleKills: 0,
          quadraKills: 0,
          pentaKills: 0,
          unrealKills: 0,
          totalDamageDealt: 104393,
          magicDamageDealt: 26912,
          physicalDamageDealt: 74684,
          trueDamageDealt: 2795,
          largestCriticalStrike: 512,
          totalDamageDealtToChampions: 9009,
          magicDamageDealtToChampions: 2044,
          physicalDamageDealtToChampions: 6624,
          trueDamageDealtToChampions: 340,
          totalHeal: 2815,
          totalUnitsHealed: 3,
          damageSelfMitigated: 4970,
          damageDealtToObjectives: 1130,
          damageDealtToTurrets: 1130,
          visionScore: 17,
          timeCCingOthers: 3,
          totalDamageTaken: 12047,
          magicalDamageTaken: 6027,
          physicalDamageTaken: 5550,
          trueDamageTaken: 469,
          goldEarned: 8855,
          goldSpent: 8450,
          turretKills: 0,
          inhibitorKills: 0,
          totalMinionsKilled: 185,
          neutralMinionsKilled: 4,
          neutralMinionsKilledTeamJungle: 4,
          neutralMinionsKilledEnemyJungle: 0,
          totalTimeCrowdControlDealt: 19,
          champLevel: 13,
          visionWardsBoughtInGame: 2,
          sightWardsBoughtInGame: 0,
          wardsPlaced: 11,
          wardsKilled: 2,
          firstBloodKill: false,
          firstBloodAssist: false,
          firstTowerKill: false,
          firstTowerAssist: false,
          firstInhibitorKill: false,
          firstInhibitorAssist: false,
          combatPlayerScore: 0,
          objectivePlayerScore: 0,
          totalPlayerScore: 0,
          totalScoreRank: 0,
          playerScore0: 0,
          playerScore1: 0,
          playerScore2: 0,
          playerScore3: 0,
          playerScore4: 0,
          playerScore5: 0,
          playerScore6: 0,
          playerScore7: 0,
          playerScore8: 0,
          playerScore9: 0,
          perk0: 8021,
          perk0Var1: 1221,
          perk0Var2: 0,
          perk0Var3: 0,
          perk1: 9111,
          perk1Var1: 237,
          perk1Var2: 0,
          perk1Var3: 0,
          perk2: 9104,
          perk2Var1: 18,
          perk2Var2: 50,
          perk2Var3: 0,
          perk3: 8014,
          perk3Var1: 146,
          perk3Var2: 0,
          perk3Var3: 0,
          perk4: 8234,
          perk4Var1: 13,
          perk4Var2: 0,
          perk4Var3: 0,
          perk5: 8236,
          perk5Var1: 14,
          perk5Var2: 0,
          perk5Var3: 0,
          perkPrimaryStyle: 8000,
          perkSubStyle: 8200
        },
        timeline: {
          participantId: 3,
          creepsPerMinDeltas: {
            '10-20': 7.8,
            '0-10': 6.4
          },
          xpPerMinDeltas: {
            '10-20': 401.6,
            '0-10': 332.5
          },
          goldPerMinDeltas: {
            '10-20': 339.9,
            '0-10': 276
          },
          damageTakenPerMinDeltas: {
            '10-20': 434.9,
            '0-10': 254.4
          },
          role: 'DUO_CARRY',
          lane: 'BOTTOM'
        }
      },
      {
        participantId: 4,
        teamId: 100,
        championId: 25,
        spell1Id: 14,
        spell2Id: 4,
        highestAchievedSeasonTier: 'DIAMOND',
        stats: {
          participantId: 4,
          win: false,
          item0: 3020,
          item1: 1082,
          item2: 3108,
          item3: 3092,
          item4: 1052,
          item5: 2420,
          item6: 3364,
          kills: 2,
          deaths: 3,
          assists: 5,
          largestKillingSpree: 2,
          largestMultiKill: 1,
          killingSprees: 1,
          longestTimeSpentLiving: 585,
          doubleKills: 0,
          tripleKills: 0,
          quadraKills: 0,
          pentaKills: 0,
          unrealKills: 0,
          totalDamageDealt: 33808,
          magicDamageDealt: 31036,
          physicalDamageDealt: 1143,
          trueDamageDealt: 1628,
          largestCriticalStrike: 0,
          totalDamageDealtToChampions: 15103,
          magicDamageDealtToChampions: 12968,
          physicalDamageDealtToChampions: 506,
          trueDamageDealtToChampions: 1628,
          totalHeal: 2275,
          totalUnitsHealed: 1,
          damageSelfMitigated: 4807,
          damageDealtToObjectives: 0,
          damageDealtToTurrets: 0,
          visionScore: 44,
          timeCCingOthers: 44,
          totalDamageTaken: 11116,
          magicalDamageTaken: 6713,
          physicalDamageTaken: 4237,
          trueDamageTaken: 165,
          goldEarned: 6709,
          goldSpent: 5635,
          turretKills: 0,
          inhibitorKills: 0,
          totalMinionsKilled: 22,
          neutralMinionsKilled: 0,
          neutralMinionsKilledTeamJungle: 0,
          neutralMinionsKilledEnemyJungle: 0,
          totalTimeCrowdControlDealt: 77,
          champLevel: 12,
          visionWardsBoughtInGame: 2,
          sightWardsBoughtInGame: 0,
          wardsPlaced: 23,
          wardsKilled: 4,
          firstBloodKill: false,
          firstBloodAssist: false,
          firstTowerKill: false,
          firstTowerAssist: false,
          firstInhibitorKill: false,
          firstInhibitorAssist: false,
          combatPlayerScore: 0,
          objectivePlayerScore: 0,
          totalPlayerScore: 0,
          totalScoreRank: 0,
          playerScore0: 0,
          playerScore1: 0,
          playerScore2: 0,
          playerScore3: 0,
          playerScore4: 0,
          playerScore5: 0,
          playerScore6: 0,
          playerScore7: 0,
          playerScore8: 0,
          playerScore9: 0,
          perk0: 8229,
          perk0Var1: 1534,
          perk0Var2: 0,
          perk0Var3: 0,
          perk1: 8226,
          perk1Var1: 998,
          perk1Var2: 0,
          perk1Var3: 0,
          perk2: 8233,
          perk2Var1: 20,
          perk2Var2: 50,
          perk2Var3: 0,
          perk3: 8237,
          perk3Var1: 522,
          perk3Var2: 0,
          perk3Var3: 0,
          perk4: 8135,
          perk4Var1: 4,
          perk4Var2: 0,
          perk4Var3: 0,
          perk5: 8126,
          perk5Var1: 336,
          perk5Var2: 0,
          perk5Var3: 0,
          perkPrimaryStyle: 8200,
          perkSubStyle: 8100
        },
        timeline: {
          participantId: 4,
          creepsPerMinDeltas: {
            '10-20': 0.4,
            '0-10': 0.1
          },
          xpPerMinDeltas: {
            '10-20': 367.6,
            '0-10': 300.2
          },
          goldPerMinDeltas: {
            '10-20': 264.5,
            '0-10': 154.1
          },
          damageTakenPerMinDeltas: {
            '10-20': 356.8,
            '0-10': 248.3
          },
          role: 'DUO_SUPPORT',
          lane: 'BOTTOM'
        }
      },
      {
        participantId: 5,
        teamId: 100,
        championId: 101,
        spell1Id: 4,
        spell2Id: 7,
        highestAchievedSeasonTier: 'UNRANKED',
        stats: {
          participantId: 5,
          win: false,
          item0: 1056,
          item1: 3020,
          item2: 3285,
          item3: 1026,
          item4: 3151,
          item5: 0,
          item6: 3340,
          kills: 3,
          deaths: 2,
          assists: 3,
          largestKillingSpree: 2,
          largestMultiKill: 1,
          killingSprees: 1,
          longestTimeSpentLiving: 1090,
          doubleKills: 0,
          tripleKills: 0,
          quadraKills: 0,
          pentaKills: 0,
          unrealKills: 0,
          totalDamageDealt: 144581,
          magicDamageDealt: 134913,
          physicalDamageDealt: 9532,
          trueDamageDealt: 135,
          largestCriticalStrike: 0,
          totalDamageDealtToChampions: 10483,
          magicDamageDealtToChampions: 10276,
          physicalDamageDealtToChampions: 71,
          trueDamageDealtToChampions: 135,
          totalHeal: 2304,
          totalUnitsHealed: 3,
          damageSelfMitigated: 4601,
          damageDealtToObjectives: 0,
          damageDealtToTurrets: 0,
          visionScore: 5,
          timeCCingOthers: 7,
          totalDamageTaken: 10507,
          magicalDamageTaken: 3789,
          physicalDamageTaken: 5856,
          trueDamageTaken: 861,
          goldEarned: 9409,
          goldSpent: 8625,
          turretKills: 0,
          inhibitorKills: 0,
          totalMinionsKilled: 210,
          neutralMinionsKilled: 0,
          neutralMinionsKilledTeamJungle: 0,
          neutralMinionsKilledEnemyJungle: 0,
          totalTimeCrowdControlDealt: 346,
          champLevel: 15,
          visionWardsBoughtInGame: 1,
          sightWardsBoughtInGame: 0,
          wardsPlaced: 3,
          wardsKilled: 0,
          firstBloodKill: false,
          firstBloodAssist: false,
          firstTowerKill: false,
          firstTowerAssist: false,
          firstInhibitorKill: false,
          firstInhibitorAssist: false,
          combatPlayerScore: 0,
          objectivePlayerScore: 0,
          totalPlayerScore: 0,
          totalScoreRank: 0,
          playerScore0: 0,
          playerScore1: 0,
          playerScore2: 0,
          playerScore3: 0,
          playerScore4: 0,
          playerScore5: 0,
          playerScore6: 0,
          playerScore7: 0,
          playerScore8: 0,
          playerScore9: 0,
          perk0: 8229,
          perk0Var1: 916,
          perk0Var2: 0,
          perk0Var3: 0,
          perk1: 8226,
          perk1Var1: 2339,
          perk1Var2: 0,
          perk1Var3: 0,
          perk2: 8234,
          perk2Var1: 11,
          perk2Var2: 0,
          perk2Var3: 0,
          perk3: 8237,
          perk3Var1: 376,
          perk3Var2: 0,
          perk3Var3: 0,
          perk4: 8304,
          perk4Var1: 10,
          perk4Var2: 0,
          perk4Var3: 0,
          perk5: 8347,
          perk5Var1: 0,
          perk5Var2: 0,
          perk5Var3: 0,
          perkPrimaryStyle: 8200,
          perkSubStyle: 8300
        },
        timeline: {
          participantId: 5,
          creepsPerMinDeltas: {
            '10-20': 8.7,
            '0-10': 6.6
          },
          xpPerMinDeltas: {
            '10-20': 553.4,
            '0-10': 466.8
          },
          goldPerMinDeltas: {
            '10-20': 351.5,
            '0-10': 225.6
          },
          damageTakenPerMinDeltas: {
            '10-20': 330.4,
            '0-10': 125.1
          },
          role: 'SOLO',
          lane: 'MIDDLE'
        }
      },
      {
        participantId: 6,
        teamId: 200,
        championId: 81,
        spell1Id: 4,
        spell2Id: 7,
        highestAchievedSeasonTier: 'PLATINUM',
        stats: {
          participantId: 6,
          win: true,
          item0: 3156,
          item1: 1055,
          item2: 3042,
          item3: 3025,
          item4: 3158,
          item5: 1053,
          item6: 3340,
          kills: 6,
          deaths: 3,
          assists: 6,
          largestKillingSpree: 5,
          largestMultiKill: 2,
          killingSprees: 1,
          longestTimeSpentLiving: 734,
          doubleKills: 1,
          tripleKills: 0,
          quadraKills: 0,
          pentaKills: 0,
          unrealKills: 0,
          totalDamageDealt: 151346,
          magicDamageDealt: 20012,
          physicalDamageDealt: 126545,
          trueDamageDealt: 4788,
          largestCriticalStrike: 0,
          totalDamageDealtToChampions: 21944,
          magicDamageDealtToChampions: 5484,
          physicalDamageDealtToChampions: 14986,
          trueDamageDealtToChampions: 1474,
          totalHeal: 2362,
          totalUnitsHealed: 2,
          damageSelfMitigated: 9950,
          damageDealtToObjectives: 18485,
          damageDealtToTurrets: 9529,
          visionScore: 17,
          timeCCingOthers: 11,
          totalDamageTaken: 14959,
          magicalDamageTaken: 7703,
          physicalDamageTaken: 6493,
          trueDamageTaken: 762,
          goldEarned: 13109,
          goldSpent: 10400,
          turretKills: 3,
          inhibitorKills: 0,
          totalMinionsKilled: 199,
          neutralMinionsKilled: 32,
          neutralMinionsKilledTeamJungle: 16,
          neutralMinionsKilledEnemyJungle: 1,
          totalTimeCrowdControlDealt: 644,
          champLevel: 15,
          visionWardsBoughtInGame: 0,
          sightWardsBoughtInGame: 0,
          wardsPlaced: 12,
          wardsKilled: 0,
          firstBloodKill: false,
          firstBloodAssist: false,
          firstTowerKill: false,
          firstTowerAssist: false,
          firstInhibitorKill: false,
          firstInhibitorAssist: false,
          combatPlayerScore: 0,
          objectivePlayerScore: 0,
          totalPlayerScore: 0,
          totalScoreRank: 0,
          playerScore0: 0,
          playerScore1: 0,
          playerScore2: 0,
          playerScore3: 0,
          playerScore4: 0,
          playerScore5: 0,
          playerScore6: 0,
          playerScore7: 0,
          playerScore8: 0,
          playerScore9: 0,
          perk0: 8359,
          perk0Var1: 285,
          perk0Var2: 21,
          perk0Var3: 0,
          perk1: 8304,
          perk1Var1: 9,
          perk1Var2: 3,
          perk1Var3: 0,
          perk2: 8345,
          perk2Var1: 4,
          perk2Var2: 0,
          perk2Var3: 0,
          perk3: 8347,
          perk3Var1: 0,
          perk3Var2: 0,
          perk3Var3: 0,
          perk4: 8226,
          perk4Var1: 1629,
          perk4Var2: 0,
          perk4Var3: 0,
          perk5: 8237,
          perk5Var1: 694,
          perk5Var2: 0,
          perk5Var3: 0,
          perkPrimaryStyle: 8300,
          perkSubStyle: 8200
        },
        timeline: {
          participantId: 6,
          creepsPerMinDeltas: {
            '10-20': 8.7,
            '0-10': 8.5
          },
          xpPerMinDeltas: {
            '10-20': 527.9,
            '0-10': 294
          },
          goldPerMinDeltas: {
            '10-20': 431.7,
            '0-10': 316.1
          },
          damageTakenPerMinDeltas: {
            '10-20': 688.3,
            '0-10': 211.3
          },
          role: 'DUO',
          lane: 'BOTTOM'
        }
      },
      {
        participantId: 7,
        teamId: 200,
        championId: 32,
        spell1Id: 4,
        spell2Id: 11,
        highestAchievedSeasonTier: 'GOLD',
        stats: {
          participantId: 7,
          win: true,
          item0: 1401,
          item1: 3190,
          item2: 2031,
          item3: 3111,
          item4: 3082,
          item5: 1011,
          item6: 3364,
          kills: 3,
          deaths: 4,
          assists: 5,
          largestKillingSpree: 2,
          largestMultiKill: 1,
          killingSprees: 1,
          longestTimeSpentLiving: 615,
          doubleKills: 0,
          tripleKills: 0,
          quadraKills: 0,
          pentaKills: 0,
          unrealKills: 0,
          totalDamageDealt: 117263,
          magicDamageDealt: 82086,
          physicalDamageDealt: 24089,
          trueDamageDealt: 11087,
          largestCriticalStrike: 0,
          totalDamageDealtToChampions: 7579,
          magicDamageDealtToChampions: 5250,
          physicalDamageDealtToChampions: 1028,
          trueDamageDealtToChampions: 1300,
          totalHeal: 5684,
          totalUnitsHealed: 1,
          damageSelfMitigated: 21652,
          damageDealtToObjectives: 15216,
          damageDealtToTurrets: 1454,
          visionScore: 12,
          timeCCingOthers: 22,
          totalDamageTaken: 20578,
          magicalDamageTaken: 8732,
          physicalDamageTaken: 11655,
          trueDamageTaken: 191,
          goldEarned: 10151,
          goldSpent: 8100,
          turretKills: 2,
          inhibitorKills: 0,
          totalMinionsKilled: 44,
          neutralMinionsKilled: 88,
          neutralMinionsKilledTeamJungle: 74,
          neutralMinionsKilledEnemyJungle: 0,
          totalTimeCrowdControlDealt: 280,
          champLevel: 14,
          visionWardsBoughtInGame: 2,
          sightWardsBoughtInGame: 0,
          wardsPlaced: 9,
          wardsKilled: 0,
          firstBloodKill: false,
          firstBloodAssist: false,
          firstTowerKill: false,
          firstTowerAssist: false,
          firstInhibitorKill: false,
          firstInhibitorAssist: false,
          combatPlayerScore: 0,
          objectivePlayerScore: 0,
          totalPlayerScore: 0,
          totalScoreRank: 0,
          playerScore0: 0,
          playerScore1: 0,
          playerScore2: 0,
          playerScore3: 0,
          playerScore4: 0,
          playerScore5: 0,
          playerScore6: 0,
          playerScore7: 0,
          playerScore8: 0,
          playerScore9: 0,
          perk0: 8439,
          perk0Var1: 415,
          perk0Var2: 0,
          perk0Var3: 0,
          perk1: 8473,
          perk1Var1: 551,
          perk1Var2: 0,
          perk1Var3: 0,
          perk2: 8444,
          perk2Var1: 647,
          perk2Var2: 0,
          perk2Var3: 0,
          perk3: 8242,
          perk3Var1: 19,
          perk3Var2: 0,
          perk3Var3: 0,
          perk4: 8243,
          perk4Var1: 15,
          perk4Var2: 0,
          perk4Var3: 0,
          perk5: 8210,
          perk5Var1: 0,
          perk5Var2: 0,
          perk5Var3: 0,
          perkPrimaryStyle: 8400,
          perkSubStyle: 8200
        },
        timeline: {
          participantId: 7,
          creepsPerMinDeltas: {
            '10-20': 2.5,
            '0-10': 0.2
          },
          xpPerMinDeltas: {
            '10-20': 349,
            '0-10': 353.3
          },
          goldPerMinDeltas: {
            '10-20': 318.5,
            '0-10': 225.4
          },
          damageTakenPerMinDeltas: {
            '10-20': 756.3,
            '0-10': 579
          },
          role: 'NONE',
          lane: 'JUNGLE'
        }
      },
      {
        participantId: 8,
        teamId: 200,
        championId: 69,
        spell1Id: 21,
        spell2Id: 4,
        highestAchievedSeasonTier: 'DIAMOND',
        stats: {
          participantId: 8,
          win: true,
          item0: 1056,
          item1: 3040,
          item2: 0,
          item3: 0,
          item4: 3151,
          item5: 3116,
          item6: 3363,
          kills: 4,
          deaths: 4,
          assists: 4,
          largestKillingSpree: 2,
          largestMultiKill: 1,
          killingSprees: 1,
          longestTimeSpentLiving: 577,
          doubleKills: 0,
          tripleKills: 0,
          quadraKills: 0,
          pentaKills: 0,
          unrealKills: 0,
          totalDamageDealt: 163684,
          magicDamageDealt: 151103,
          physicalDamageDealt: 11741,
          trueDamageDealt: 839,
          largestCriticalStrike: 0,
          totalDamageDealtToChampions: 12866,
          magicDamageDealtToChampions: 12430,
          physicalDamageDealtToChampions: 436,
          trueDamageDealtToChampions: 0,
          totalHeal: 6724,
          totalUnitsHealed: 1,
          damageSelfMitigated: 6349,
          damageDealtToObjectives: 9420,
          damageDealtToTurrets: 4066,
          visionScore: 42,
          timeCCingOthers: 23,
          totalDamageTaken: 16710,
          magicalDamageTaken: 9653,
          physicalDamageTaken: 6682,
          trueDamageTaken: 374,
          goldEarned: 13058,
          goldSpent: 9700,
          turretKills: 1,
          inhibitorKills: 0,
          totalMinionsKilled: 256,
          neutralMinionsKilled: 32,
          neutralMinionsKilledTeamJungle: 12,
          neutralMinionsKilledEnemyJungle: 4,
          totalTimeCrowdControlDealt: 4649,
          champLevel: 16,
          visionWardsBoughtInGame: 2,
          sightWardsBoughtInGame: 0,
          wardsPlaced: 12,
          wardsKilled: 4,
          firstBloodKill: true,
          firstBloodAssist: false,
          firstTowerKill: false,
          firstTowerAssist: false,
          firstInhibitorKill: false,
          firstInhibitorAssist: false,
          combatPlayerScore: 0,
          objectivePlayerScore: 0,
          totalPlayerScore: 0,
          totalScoreRank: 0,
          playerScore0: 0,
          playerScore1: 0,
          playerScore2: 0,
          playerScore3: 0,
          playerScore4: 0,
          playerScore5: 0,
          playerScore6: 0,
          playerScore7: 0,
          playerScore8: 0,
          playerScore9: 0,
          perk0: 8230,
          perk0Var1: 8,
          perk0Var2: 0,
          perk0Var3: 0,
          perk1: 8226,
          perk1Var1: 1539,
          perk1Var2: 0,
          perk1Var3: 0,
          perk2: 8234,
          perk2Var1: 22,
          perk2Var2: 0,
          perk2Var3: 0,
          perk3: 8237,
          perk3Var1: 542,
          perk3Var2: 0,
          perk3Var3: 0,
          perk4: 8009,
          perk4Var1: 5070,
          perk4Var2: 0,
          perk4Var3: 0,
          perk5: 8014,
          perk5Var1: 272,
          perk5Var2: 0,
          perk5Var3: 0,
          perkPrimaryStyle: 8200,
          perkSubStyle: 8000
        },
        timeline: {
          participantId: 8,
          creepsPerMinDeltas: {
            '10-20': 10,
            '0-10': 7.4
          },
          xpPerMinDeltas: {
            '10-20': 514.7,
            '0-10': 427.9
          },
          goldPerMinDeltas: {
            '10-20': 473.9,
            '0-10': 316.4
          },
          damageTakenPerMinDeltas: {
            '10-20': 693.3,
            '0-10': 315.6
          },
          role: 'DUO',
          lane: 'BOTTOM'
        }
      },
      {
        participantId: 9,
        teamId: 200,
        championId: 201,
        spell1Id: 3,
        spell2Id: 4,
        highestAchievedSeasonTier: 'UNRANKED',
        stats: {
          participantId: 9,
          win: true,
          item0: 3111,
          item1: 3190,
          item2: 3401,
          item3: 1033,
          item4: 1011,
          item5: 3082,
          item6: 3364,
          kills: 2,
          deaths: 1,
          assists: 11,
          largestKillingSpree: 2,
          largestMultiKill: 1,
          killingSprees: 1,
          longestTimeSpentLiving: 583,
          doubleKills: 0,
          tripleKills: 0,
          quadraKills: 0,
          pentaKills: 0,
          unrealKills: 0,
          totalDamageDealt: 36090,
          magicDamageDealt: 7420,
          physicalDamageDealt: 12614,
          trueDamageDealt: 16055,
          largestCriticalStrike: 0,
          totalDamageDealtToChampions: 5122,
          magicDamageDealtToChampions: 4175,
          physicalDamageDealtToChampions: 803,
          trueDamageDealtToChampions: 143,
          totalHeal: 4560,
          totalUnitsHealed: 5,
          damageSelfMitigated: 22239,
          damageDealtToObjectives: 2194,
          damageDealtToTurrets: 1842,
          visionScore: 40,
          timeCCingOthers: 18,
          totalDamageTaken: 19295,
          magicalDamageTaken: 10733,
          physicalDamageTaken: 8064,
          trueDamageTaken: 497,
          goldEarned: 9519,
          goldSpent: 7450,
          turretKills: 0,
          inhibitorKills: 0,
          totalMinionsKilled: 69,
          neutralMinionsKilled: 0,
          neutralMinionsKilledTeamJungle: 0,
          neutralMinionsKilledEnemyJungle: 0,
          totalTimeCrowdControlDealt: 393,
          champLevel: 14,
          visionWardsBoughtInGame: 0,
          sightWardsBoughtInGame: 0,
          wardsPlaced: 15,
          wardsKilled: 7,
          firstBloodKill: false,
          firstBloodAssist: false,
          firstTowerKill: false,
          firstTowerAssist: false,
          firstInhibitorKill: false,
          firstInhibitorAssist: true,
          combatPlayerScore: 0,
          objectivePlayerScore: 0,
          totalPlayerScore: 0,
          totalScoreRank: 0,
          playerScore0: 0,
          playerScore1: 0,
          playerScore2: 0,
          playerScore3: 0,
          playerScore4: 0,
          playerScore5: 0,
          playerScore6: 0,
          playerScore7: 0,
          playerScore8: 0,
          playerScore9: 0,
          perk0: 8465,
          perk0Var1: 2511,
          perk0Var2: 0,
          perk0Var3: 0,
          perk1: 8473,
          perk1Var1: 822,
          perk1Var2: 0,
          perk1Var3: 0,
          perk2: 8444,
          perk2Var1: 1487,
          perk2Var2: 0,
          perk2Var3: 0,
          perk3: 8242,
          perk3Var1: 6,
          perk3Var2: 0,
          perk3Var3: 0,
          perk4: 8345,
          perk4Var1: 4,
          perk4Var2: 0,
          perk4Var3: 0,
          perk5: 8304,
          perk5Var1: 9,
          perk5Var2: 3,
          perk5Var3: 0,
          perkPrimaryStyle: 8400,
          perkSubStyle: 8300
        },
        timeline: {
          participantId: 9,
          creepsPerMinDeltas: {
            '10-20': 2.6,
            '0-10': 1.6
          },
          xpPerMinDeltas: {
            '10-20': 367.7,
            '0-10': 291.8
          },
          goldPerMinDeltas: {
            '10-20': 331,
            '0-10': 170.2
          },
          damageTakenPerMinDeltas: {
            '10-20': 681.5,
            '0-10': 351.2
          },
          role: 'DUO_SUPPORT',
          lane: 'BOTTOM'
        }
      },
      {
        participantId: 10,
        teamId: 200,
        championId: 420,
        spell1Id: 12,
        spell2Id: 4,
        highestAchievedSeasonTier: 'PLATINUM',
        stats: {
          participantId: 10,
          win: true,
          item0: 3812,
          item1: 3065,
          item2: 0,
          item3: 3047,
          item4: 0,
          item5: 3078,
          item6: 3340,
          kills: 3,
          deaths: 4,
          assists: 1,
          largestKillingSpree: 0,
          largestMultiKill: 1,
          killingSprees: 0,
          longestTimeSpentLiving: 562,
          doubleKills: 0,
          tripleKills: 0,
          quadraKills: 0,
          pentaKills: 0,
          unrealKills: 0,
          totalDamageDealt: 204181,
          magicDamageDealt: 221,
          physicalDamageDealt: 200777,
          trueDamageDealt: 3183,
          largestCriticalStrike: 0,
          totalDamageDealtToChampions: 11923,
          magicDamageDealtToChampions: 114,
          physicalDamageDealtToChampions: 11793,
          trueDamageDealtToChampions: 15,
          totalHeal: 4312,
          totalUnitsHealed: 1,
          damageSelfMitigated: 16948,
          damageDealtToObjectives: 15712,
          damageDealtToTurrets: 8186,
          visionScore: 37,
          timeCCingOthers: 3,
          totalDamageTaken: 19778,
          magicalDamageTaken: 5570,
          physicalDamageTaken: 10561,
          trueDamageTaken: 3646,
          goldEarned: 13001,
          goldSpent: 11558,
          turretKills: 3,
          inhibitorKills: 1,
          totalMinionsKilled: 270,
          neutralMinionsKilled: 4,
          neutralMinionsKilledTeamJungle: 0,
          neutralMinionsKilledEnemyJungle: 0,
          totalTimeCrowdControlDealt: 39,
          champLevel: 16,
          visionWardsBoughtInGame: 4,
          sightWardsBoughtInGame: 0,
          wardsPlaced: 16,
          wardsKilled: 2,
          firstBloodKill: false,
          firstBloodAssist: false,
          firstTowerKill: true,
          firstTowerAssist: false,
          firstInhibitorKill: true,
          firstInhibitorAssist: false,
          combatPlayerScore: 0,
          objectivePlayerScore: 0,
          totalPlayerScore: 0,
          totalScoreRank: 0,
          playerScore0: 0,
          playerScore1: 0,
          playerScore2: 0,
          playerScore3: 0,
          playerScore4: 0,
          playerScore5: 0,
          playerScore6: 0,
          playerScore7: 0,
          playerScore8: 0,
          playerScore9: 0,
          perk0: 8359,
          perk0Var1: 140,
          perk0Var2: 17,
          perk0Var3: 0,
          perk1: 8304,
          perk1Var1: 9,
          perk1Var2: 3,
          perk1Var3: 0,
          perk2: 8345,
          perk2Var1: 4,
          perk2Var2: 0,
          perk2Var3: 0,
          perk3: 8352,
          perk3Var1: 664,
          perk3Var2: 0,
          perk3Var3: 0,
          perk4: 8473,
          perk4Var1: 739,
          perk4Var2: 0,
          perk4Var3: 0,
          perk5: 8444,
          perk5Var1: 705,
          perk5Var2: 0,
          perk5Var3: 0,
          perkPrimaryStyle: 8300,
          perkSubStyle: 8400
        },
        timeline: {
          participantId: 10,
          creepsPerMinDeltas: {
            '10-20': 10.8,
            '0-10': 8.4
          },
          xpPerMinDeltas: {
            '10-20': 570.3,
            '0-10': 480.7
          },
          goldPerMinDeltas: {
            '10-20': 517.5,
            '0-10': 311.6
          },
          damageTakenPerMinDeltas: {
            '10-20': 546.7,
            '0-10': 480.7
          },
          role: 'SOLO',
          lane: 'TOP'
        }
      }
    ],
    participantIdentities: [
      {
        participantId: 1,
        player: {
          platformId: 'EUW1',
          accountId: 201523965,
          summonerName: 'Majesticsx',
          summonerId: 42899573,
          currentPlatformId: 'EUW1',
          currentAccountId: 201523965,
          matchHistoryUri: '/v1/stats/player_history/EUW1/201523965',
          profileIcon: 588
        }
      },
      {
        participantId: 2,
        player: {
          platformId: 'EUW1',
          accountId: 200645261,
          summonerName: 'VìraŁ',
          summonerId: 41684438,
          currentPlatformId: 'EUW1',
          currentAccountId: 200645261,
          matchHistoryUri: '/v1/stats/player_history/EUW1/200645261',
          profileIcon: 1625
        }
      },
      {
        participantId: 3,
        player: {
          platformId: 'EUW1',
          accountId: 233256999,
          summonerName: 'Jin Charodey',
          summonerId: 100687977,
          currentPlatformId: 'EUW1',
          currentAccountId: 233256999,
          matchHistoryUri: '/v1/stats/player_history/EUW1/233256999',
          profileIcon: 3368
        }
      },
      {
        participantId: 4,
        player: {
          platformId: 'EUW1',
          accountId: 42155001,
          summonerName: 'Phantho',
          summonerId: 40039936,
          currentPlatformId: 'EUW1',
          currentAccountId: 42155001,
          matchHistoryUri: '/v1/stats/player_history/EUW1/42155001',
          profileIcon: 3233
        }
      },
      {
        participantId: 5,
        player: {
          platformId: 'EUW1',
          accountId: 25914350,
          summonerName: 'AJJJ',
          summonerId: 22125115,
          currentPlatformId: 'EUW1',
          currentAccountId: 25914350,
          matchHistoryUri: '/v1/stats/player_history/EUW1/25914350',
          profileIcon: 1156
        }
      },
      {
        participantId: 6,
        player: {
          platformId: 'EUW1',
          accountId: 29443200,
          summonerName: 'MeisterMeister',
          summonerId: 24868868,
          currentPlatformId: 'EUW1',
          currentAccountId: 29443200,
          matchHistoryUri: '/v1/stats/player_history/EUW1/29443200',
          profileIcon: 3186
        }
      },
      {
        participantId: 7,
        player: {
          platformId: 'EUW1',
          accountId: 42267486,
          summonerName: 'Teng Qingshan',
          summonerId: 39993536,
          currentPlatformId: 'EUW1',
          currentAccountId: 42267486,
          matchHistoryUri: '/v1/stats/player_history/EUW1/42267486',
          profileIcon: 3351
        }
      },
      {
        participantId: 8,
        player: {
          platformId: 'EUW1',
          accountId: 29169604,
          summonerName: 'sirlunchalot619',
          summonerId: 24688273,
          currentPlatformId: 'EUW1',
          currentAccountId: 29169604,
          matchHistoryUri: '/v1/stats/player_history/EUW1/29169604',
          profileIcon: 785
        }
      },
      {
        participantId: 9,
        player: {
          platformId: 'EUW1',
          accountId: 39092355,
          summonerName: 'Halet dePaul',
          summonerId: 35878498,
          currentPlatformId: 'EUW1',
          currentAccountId: 39092355,
          matchHistoryUri: '/v1/stats/player_history/EUW1/39092355',
          profileIcon: 673
        }
      },
      {
        participantId: 10,
        player: {
          platformId: 'EUW1',
          accountId: 22687784,
          summonerName: 'astalos',
          summonerId: 19815087,
          currentPlatformId: 'EUW1',
          currentAccountId: 22687784,
          matchHistoryUri: '/v1/stats/player_history/EUW1/22687784',
          profileIcon: 3167
        }
      }
    ],
    timeline: {
      frames: [
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 561,
                y: 581
              },
              currentGold: 500,
              totalGold: 500,
              level: 1,
              xp: 0,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 561,
                y: 361
              },
              currentGold: 500,
              totalGold: 500,
              level: 1,
              xp: 0,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 222,
                y: 471
              },
              currentGold: 500,
              totalGold: 500,
              level: 1,
              xp: 0,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 311,
                y: 649
              },
              currentGold: 500,
              totalGold: 500,
              level: 1,
              xp: 0,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 351,
                y: 293
              },
              currentGold: 500,
              totalGold: 500,
              level: 1,
              xp: 0,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 14373,
                y: 14457
              },
              currentGold: 500,
              totalGold: 500,
              level: 1,
              xp: 0,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 14323,
                y: 14457
              },
              currentGold: 500,
              totalGold: 500,
              level: 1,
              xp: 0,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 14273,
                y: 14407
              },
              currentGold: 500,
              totalGold: 500,
              level: 1,
              xp: 0,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 14423,
                y: 14407
              },
              currentGold: 500,
              totalGold: 500,
              level: 1,
              xp: 0,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 14340,
                y: 14391
              },
              currentGold: 500,
              totalGold: 500,
              level: 1,
              xp: 0,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [],
          timestamp: 162
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 3504,
                y: 9109
              },
              currentGold: 0,
              totalGold: 500,
              level: 1,
              xp: 0,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 3392,
                y: 7724
              },
              currentGold: 0,
              totalGold: 500,
              level: 1,
              xp: 0,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 10352,
                y: 2872
              },
              currentGold: 0,
              totalGold: 500,
              level: 1,
              xp: 0,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 10403,
                y: 3070
              },
              currentGold: 0,
              totalGold: 500,
              level: 1,
              xp: 0,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 6268,
                y: 6228
              },
              currentGold: 0,
              totalGold: 500,
              level: 1,
              xp: 0,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 11210,
                y: 5862
              },
              currentGold: 0,
              totalGold: 500,
              level: 1,
              xp: 0,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 11455,
                y: 6661
              },
              currentGold: 0,
              totalGold: 500,
              level: 1,
              xp: 0,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 8575,
                y: 8391
              },
              currentGold: 0,
              totalGold: 500,
              level: 1,
              xp: 0,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 11690,
                y: 7415
              },
              currentGold: 0,
              totalGold: 500,
              level: 1,
              xp: 0,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 4252,
                y: 13450
              },
              currentGold: 0,
              totalGold: 500,
              level: 1,
              xp: 0,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'ITEM_PURCHASED',
              timestamp: 5113,
              participantId: 4,
              itemId: 3303
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 5476,
              participantId: 4,
              itemId: 2003
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 5542,
              participantId: 3,
              itemId: 1055
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 5608,
              participantId: 4,
              itemId: 2003
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 5773,
              participantId: 4,
              itemId: 2003
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 5971,
              participantId: 3,
              itemId: 2003
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 6136,
              participantId: 4,
              itemId: 3340
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 6334,
              participantId: 3,
              itemId: 3340
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 6466,
              participantId: 10,
              itemId: 2033
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 7027,
              participantId: 10,
              itemId: 3340
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 8908,
              participantId: 2,
              itemId: 1039
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 9238,
              participantId: 2,
              itemId: 2031
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 9502,
              participantId: 2,
              itemId: 3340
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 10063,
              participantId: 4,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 11152,
              participantId: 2,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 14947,
              participantId: 7,
              itemId: 1039
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 15310,
              participantId: 7,
              itemId: 2031
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 15706,
              participantId: 7,
              itemId: 3340
            },
            {
              type: 'WARD_PLACED',
              timestamp: 16531,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 19006,
              participantId: 8,
              itemId: 1056
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 19369,
              participantId: 8,
              itemId: 2003
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 19534,
              participantId: 8,
              itemId: 2003
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 19864,
              participantId: 8,
              itemId: 3340
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 20128,
              participantId: 1,
              itemId: 1055
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 20887,
              participantId: 1,
              itemId: 3340
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 21283,
              participantId: 1,
              itemId: 2003
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 21778,
              participantId: 8,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 28114,
              participantId: 6,
              itemId: 1055
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 28411,
              participantId: 6,
              itemId: 2003
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 28741,
              participantId: 6,
              itemId: 3340
            },
            {
              type: 'WARD_PLACED',
              timestamp: 29203,
              wardType: 'YELLOW_TRINKET',
              creatorId: 4
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 31448,
              participantId: 5,
              itemId: 1056
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 31844,
              participantId: 5,
              itemId: 3340
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 32900,
              participantId: 5,
              itemId: 2003
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 33197,
              participantId: 5,
              itemId: 2003
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 33791,
              participantId: 9,
              itemId: 3302
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 34088,
              participantId: 9,
              itemId: 2003
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 34220,
              participantId: 9,
              itemId: 2003
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 34352,
              participantId: 6,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 35243,
              participantId: 9,
              itemId: 2003
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 36002,
              participantId: 9,
              itemId: 3340
            },
            {
              type: 'WARD_PLACED',
              timestamp: 36860,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 40094,
              participantId: 3,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 53261,
              participantId: 9,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 57188,
              wardType: 'UNDEFINED',
              creatorId: 10
            }
          ],
          timestamp: 60191
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 2198,
                y: 13059
              },
              currentGold: 81,
              totalGold: 581,
              level: 1,
              xp: 176,
              minionsKilled: 3,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 2710,
                y: 8087
              },
              currentGold: 121,
              totalGold: 621,
              level: 2,
              xp: 280,
              minionsKilled: 0,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 12116,
                y: 2579
              },
              currentGold: 112,
              totalGold: 612,
              level: 1,
              xp: 172,
              minionsKilled: 5,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 12509,
                y: 2415
              },
              currentGold: 39,
              totalGold: 539,
              level: 1,
              xp: 172,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 6612,
                y: 7108
              },
              currentGold: 38,
              totalGold: 538,
              level: 1,
              xp: 235,
              minionsKilled: 1,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 13181,
                y: 2978
              },
              currentGold: 41,
              totalGold: 541,
              level: 1,
              xp: 38,
              minionsKilled: 1,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 9613,
                y: 9083
              },
              currentGold: 121,
              totalGold: 621,
              level: 2,
              xp: 280,
              minionsKilled: 0,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 7809,
                y: 7165
              },
              currentGold: 132,
              totalGold: 632,
              level: 1,
              xp: 264,
              minionsKilled: 6,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 13184,
                y: 3238
              },
              currentGold: 24,
              totalGold: 524,
              level: 1,
              xp: 38,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 2507,
                y: 13028
              },
              currentGold: 61,
              totalGold: 561,
              level: 1,
              xp: 176,
              minionsKilled: 2,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 82467,
              participantId: 7,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 86229,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 87714,
              participantId: 5,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 91279,
              participantId: 1,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 102103,
              wardType: 'YELLOW_TRINKET',
              creatorId: 6
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 109924,
              participantId: 2,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 112894,
              participantId: 10,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 113158,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 117580,
              participantId: 7,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            }
          ],
          timestamp: 120220
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 3274,
                y: 12875
              },
              currentGold: 383,
              totalGold: 883,
              level: 3,
              xp: 798,
              minionsKilled: 11,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 7062,
                y: 4258
              },
              currentGold: 429,
              totalGold: 929,
              level: 3,
              xp: 660,
              minionsKilled: 0,
              jungleMinionsKilled: 12,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 12541,
                y: 2467
              },
              currentGold: 439,
              totalGold: 939,
              level: 2,
              xp: 559,
              minionsKilled: 16,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 12656,
                y: 2208
              },
              currentGold: 215,
              totalGold: 715,
              level: 2,
              xp: 559,
              minionsKilled: 0,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 6630,
                y: 6797
              },
              currentGold: 294,
              totalGold: 794,
              level: 3,
              xp: 886,
              minionsKilled: 8,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 13570,
                y: 2810
              },
              currentGold: 390,
              totalGold: 890,
              level: 2,
              xp: 441,
              minionsKilled: 13,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 3929,
                y: 11574
              },
              currentGold: 455,
              totalGold: 955,
              level: 3,
              xp: 750,
              minionsKilled: 0,
              jungleMinionsKilled: 12,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 9165,
                y: 3904
              },
              currentGold: 521,
              totalGold: 1021,
              level: 3,
              xp: 886,
              minionsKilled: 19,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 12850,
                y: 3067
              },
              currentGold: 226,
              totalGold: 726,
              level: 2,
              xp: 441,
              minionsKilled: 3,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 3693,
                y: 13312
              },
              currentGold: 263,
              totalGold: 763,
              level: 2,
              xp: 588,
              minionsKilled: 5,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 126161,
              participantId: 8,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 133487,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 133751,
              participantId: 1,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 134477,
              participantId: 5,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 139493,
              participantId: 4,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 139988,
              wardType: 'YELLOW_TRINKET',
              creatorId: 7
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 140747,
              participantId: 3,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 143948,
              wardType: 'YELLOW_TRINKET',
              creatorId: 8
            },
            {
              type: 'WARD_KILL',
              timestamp: 144146,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 153526,
              participantId: 2,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 155242,
              participantId: 6,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 157288,
              participantId: 10,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_KILL',
              timestamp: 158608,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 159532,
              participantId: 9,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 161314,
              participantId: 8,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 164782,
              participantId: 7,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 165838,
              participantId: 5,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 172306,
              participantId: 1,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 173890,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 177058,
              participantId: 8,
              itemId: 2003
            }
          ],
          timestamp: 180226
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 955,
                y: 10919
              },
              currentGold: 121,
              totalGold: 1071,
              level: 3,
              xp: 1063,
              minionsKilled: 14,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 7991,
                y: 3423
              },
              currentGold: 924,
              totalGold: 1424,
              level: 4,
              xp: 1353,
              minionsKilled: 0,
              jungleMinionsKilled: 24,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 10460,
                y: 1484
              },
              currentGold: 208,
              totalGold: 1083,
              level: 3,
              xp: 693,
              minionsKilled: 17,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 10186,
                y: 998
              },
              currentGold: 426,
              totalGold: 926,
              level: 3,
              xp: 752,
              minionsKilled: 1,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 7091,
                y: 6975
              },
              currentGold: 505,
              totalGold: 1005,
              level: 4,
              xp: 1416,
              minionsKilled: 13,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 13152,
                y: 2155
              },
              currentGold: 798,
              totalGold: 1298,
              level: 3,
              xp: 924,
              minionsKilled: 27,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 5905,
                y: 12774
              },
              currentGold: 738,
              totalGold: 1238,
              level: 4,
              xp: 1243,
              minionsKilled: 0,
              jungleMinionsKilled: 16,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 8642,
                y: 8336
              },
              currentGold: 1115,
              totalGold: 1615,
              level: 4,
              xp: 1150,
              minionsKilled: 23,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 13262,
                y: 2192
              },
              currentGold: 598,
              totalGold: 1098,
              level: 3,
              xp: 866,
              minionsKilled: 4,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 2818,
                y: 11324
              },
              currentGold: 727,
              totalGold: 1227,
              level: 4,
              xp: 1291,
              minionsKilled: 23,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'ITEM_DESTROYED',
              timestamp: 184912,
              participantId: 6,
              itemId: 2003
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 187652,
              participantId: 1,
              itemId: 2003
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 194881,
              position: {
                x: 13508,
                y: 2633
              },
              killerId: 8,
              victimId: 3,
              assistingParticipantIds: [9]
            },
            {
              type: 'WARD_PLACED',
              timestamp: 197917,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 201679,
              participantId: 8,
              itemId: 2003
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 202240,
              participantId: 10,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 206002,
              participantId: 9,
              itemId: 2010
            },
            {
              type: 'WARD_PLACED',
              timestamp: 208411,
              wardType: 'YELLOW_TRINKET',
              creatorId: 4
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 208642,
              participantId: 1,
              itemId: 1036
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 209896,
              participantId: 1,
              itemId: 2003
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 209962,
              participantId: 5,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 210655,
              participantId: 3,
              itemId: 1001
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 211711,
              participantId: 3,
              itemId: 2055
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 212338,
              participantId: 2,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 212800,
              participantId: 1,
              itemId: 2003
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 212833,
              participantId: 6,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 213064,
              wardType: 'YELLOW_TRINKET',
              creatorId: 8
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 216992,
              participantId: 9,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 219401,
              wardType: 'YELLOW_TRINKET',
              creatorId: 9
            },
            {
              type: 'WARD_KILL',
              timestamp: 222140,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 227786,
              participantId: 10,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 229832,
              participantId: 7,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 233297,
              participantId: 10,
              itemId: 2004
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 234188,
              participantId: 8,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 235409,
              wardType: 'YELLOW_TRINKET',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 236201,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 237191,
              wardType: 'YELLOW_TRINKET',
              creatorId: 10
            }
          ],
          timestamp: 240227
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 394,
                y: 461
              },
              currentGold: 43,
              totalGold: 1293,
              level: 4,
              xp: 1449,
              minionsKilled: 19,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 2556,
                y: 8411
              },
              currentGold: 321,
              totalGold: 1546,
              level: 4,
              xp: 1372,
              minionsKilled: 0,
              jungleMinionsKilled: 24,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 11039,
                y: 3334
              },
              currentGold: 582,
              totalGold: 1457,
              level: 4,
              xp: 1252,
              minionsKilled: 29,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 11759,
                y: 2857
              },
              currentGold: 590,
              totalGold: 1090,
              level: 4,
              xp: 1311,
              minionsKilled: 1,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 6949,
                y: 6943
              },
              currentGold: 825,
              totalGold: 1325,
              level: 5,
              xp: 1969,
              minionsKilled: 22,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 13984,
                y: 4150
              },
              currentGold: 181,
              totalGold: 1481,
              level: 3,
              xp: 1119,
              minionsKilled: 30,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 12592,
                y: 6232
              },
              currentGold: 235,
              totalGold: 1460,
              level: 4,
              xp: 1462,
              minionsKilled: 0,
              jungleMinionsKilled: 20,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 7859,
                y: 7552
              },
              currentGold: 1490,
              totalGold: 1990,
              level: 5,
              xp: 1772,
              minionsKilled: 35,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 13548,
                y: 3830
              },
              currentGold: 265,
              totalGold: 1265,
              level: 3,
              xp: 1060,
              minionsKilled: 6,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 2261,
                y: 11841
              },
              currentGold: 1367,
              totalGold: 1867,
              level: 5,
              xp: 2114,
              minionsKilled: 31,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 242009,
              participantId: 3,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 243065,
              participantId: 6,
              itemId: 3070
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 243659,
              participantId: 6,
              itemId: 2003
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 244188,
              participantId: 9,
              itemId: 3097
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 244188,
              participantId: 9,
              itemId: 3302
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 245310,
              participantId: 7,
              itemId: 3706
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 245310,
              participantId: 7,
              itemId: 1039
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 246498,
              participantId: 7,
              itemId: 2055
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 246630,
              participantId: 1,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 252042,
              participantId: 4,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 256761,
              participantId: 5,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_KILL',
              timestamp: 257718,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'WARD_PLACED',
              timestamp: 261018,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 261315,
              participantId: 10,
              itemId: 2010
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 262140,
              participantId: 10,
              itemId: 2062
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 267420,
              participantId: 10,
              itemId: 2319
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 270027,
              participantId: 2,
              itemId: 1082
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 270489,
              participantId: 10,
              itemId: 2004
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 270654,
              participantId: 2,
              itemId: 1001
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 273525,
              participantId: 2,
              itemId: 2055
            },
            {
              type: 'WARD_KILL',
              timestamp: 280060,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 282601,
              position: {
                x: 2773,
                y: 12261
              },
              killerId: 10,
              victimId: 1,
              assistingParticipantIds: []
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 283690,
              participantId: 4,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 285670,
              participantId: 10,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 288409,
              participantId: 3,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 290257,
              participantId: 1,
              itemId: 1001
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 295933,
              participantId: 8,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 297022,
              wardType: 'YELLOW_TRINKET',
              creatorId: 3
            }
          ],
          timestamp: 300256
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 929,
                y: 10261
              },
              currentGold: 266,
              totalGold: 1516,
              level: 5,
              xp: 1773,
              minionsKilled: 24,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 7124,
                y: 9756
              },
              currentGold: 700,
              totalGold: 1925,
              level: 5,
              xp: 1960,
              minionsKilled: 0,
              jungleMinionsKilled: 36,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 10630,
                y: 1459
              },
              currentGold: 755,
              totalGold: 1630,
              level: 4,
              xp: 1431,
              minionsKilled: 32,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 11190,
                y: 1939
              },
              currentGold: 760,
              totalGold: 1260,
              level: 4,
              xp: 1490,
              minionsKilled: 1,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 7451,
                y: 6220
              },
              currentGold: 1109,
              totalGold: 1609,
              level: 6,
              xp: 2650,
              minionsKilled: 31,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 11829,
                y: 1298
              },
              currentGold: 616,
              totalGold: 1916,
              level: 4,
              xp: 1556,
              minionsKilled: 45,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 9520,
                y: 5970
              },
              currentGold: 444,
              totalGold: 1669,
              level: 4,
              xp: 1655,
              minionsKilled: 0,
              jungleMinionsKilled: 24,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 8287,
                y: 7666
              },
              currentGold: 1883,
              totalGold: 2383,
              level: 5,
              xp: 2394,
              minionsKilled: 48,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 12561,
                y: 1987
              },
              currentGold: 440,
              totalGold: 1440,
              level: 4,
              xp: 1498,
              minionsKilled: 8,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 1778,
                y: 10986
              },
              currentGold: 418,
              totalGold: 2243,
              level: 6,
              xp: 2736,
              minionsKilled: 43,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'WARD_PLACED',
              timestamp: 300949,
              wardType: 'CONTROL_WARD',
              creatorId: 3
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 300949,
              participantId: 3,
              itemId: 2055
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 305206,
              participantId: 10,
              itemId: 1053
            },
            {
              type: 'ITEM_UNDO',
              timestamp: 306593,
              participantId: 10,
              afterId: 0,
              beforeId: 1053
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 308540,
              participantId: 10,
              itemId: 1053
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 308804,
              participantId: 6,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 309860,
              participantId: 10,
              itemId: 1036
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 310619,
              participantId: 10,
              itemId: 2055
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 320387,
              participantId: 9,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 325766,
              participantId: 2,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 326327,
              participantId: 4,
              itemId: 2003
            },
            {
              type: 'WARD_PLACED',
              timestamp: 329660,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 334841,
              wardType: 'CONTROL_WARD',
              creatorId: 2
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 334841,
              participantId: 2,
              itemId: 2055
            },
            {
              type: 'WARD_PLACED',
              timestamp: 335831,
              wardType: 'CONTROL_WARD',
              creatorId: 10
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 335831,
              participantId: 10,
              itemId: 2055
            },
            {
              type: 'WARD_PLACED',
              timestamp: 336095,
              wardType: 'YELLOW_TRINKET',
              creatorId: 3
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 339132,
              participantId: 5,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_KILL',
              timestamp: 339924,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'WARD_PLACED',
              timestamp: 344709,
              wardType: 'YELLOW_TRINKET',
              creatorId: 7
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 346260,
              participantId: 10,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_KILL',
              timestamp: 348372,
              wardType: 'YELLOW_TRINKET',
              killerId: 3
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 355104,
              participantId: 1,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 357018,
              wardType: 'CONTROL_WARD',
              creatorId: 7
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 357018,
              participantId: 7,
              itemId: 2055
            },
            {
              type: 'WARD_PLACED',
              timestamp: 359130,
              wardType: 'YELLOW_TRINKET',
              creatorId: 5
            }
          ],
          timestamp: 360256
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 901,
                y: 10677
              },
              currentGold: 634,
              totalGold: 1884,
              level: 6,
              xp: 2542,
              minionsKilled: 36,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 3431,
                y: 8346
              },
              currentGold: 84,
              totalGold: 2159,
              level: 5,
              xp: 2205,
              minionsKilled: 0,
              jungleMinionsKilled: 40,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 9936,
                y: 1207
              },
              currentGold: 1085,
              totalGold: 1960,
              level: 5,
              xp: 1837,
              minionsKilled: 42,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 10396,
                y: 1281
              },
              currentGold: 948,
              totalGold: 1448,
              level: 5,
              xp: 1896,
              minionsKilled: 1,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 5669,
                y: 5349
              },
              currentGold: 170,
              totalGold: 1845,
              level: 6,
              xp: 2915,
              minionsKilled: 37,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 11647,
                y: 1426
              },
              currentGold: 990,
              totalGold: 2290,
              level: 5,
              xp: 1902,
              minionsKilled: 55,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 3794,
                y: 10999
              },
              currentGold: 726,
              totalGold: 1951,
              level: 5,
              xp: 2027,
              minionsKilled: 0,
              jungleMinionsKilled: 28,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 7359,
                y: 6743
              },
              currentGold: 2212,
              totalGold: 2712,
              level: 6,
              xp: 2923,
              minionsKilled: 59,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 10966,
                y: 2167
              },
              currentGold: 613,
              totalGold: 1613,
              level: 5,
              xp: 1843,
              minionsKilled: 10,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 1655,
                y: 11303
              },
              currentGold: 807,
              totalGold: 2632,
              level: 7,
              xp: 3354,
              minionsKilled: 56,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'WARD_PLACED',
              timestamp: 362137,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 364678,
              participantId: 8,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 366196,
              participantId: 6,
              itemId: 2003
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 366791,
              participantId: 6,
              itemId: 2004
            },
            {
              type: 'WARD_KILL',
              timestamp: 371015,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'WARD_PLACED',
              timestamp: 380888,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 382835,
              participantId: 2,
              itemId: 3113
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 385343,
              participantId: 6,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 385805,
              participantId: 6,
              itemId: 2319
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 388577,
              participantId: 3,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 389468,
              participantId: 4,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_KILL',
              timestamp: 389501,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 389798,
              participantId: 3,
              itemId: 2003
            },
            {
              type: 'WARD_PLACED',
              timestamp: 392504,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 392504,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 393329,
              participantId: 10,
              itemId: 2010
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 395507,
              participantId: 1,
              itemId: 2003
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 397487,
              participantId: 5,
              itemId: 3802
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 397586,
              participantId: 1,
              itemId: 2003
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 398907,
              participantId: 5,
              itemId: 2055
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 399105,
              participantId: 7,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 401316,
              participantId: 10,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 404913,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 406728,
              participantId: 9,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_KILL',
              timestamp: 407751,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 412701,
              participantId: 9,
              itemId: 2010
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 412932,
              participantId: 6,
              itemId: 2004
            },
            {
              type: 'WARD_PLACED',
              timestamp: 413361,
              wardType: 'YELLOW_TRINKET',
              creatorId: 8
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 413757,
              participantId: 1,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_KILL',
              timestamp: 420159,
              wardType: 'UNDEFINED',
              killerId: 1
            }
          ],
          timestamp: 420258
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 2120,
                y: 12174
              },
              currentGold: 1174,
              totalGold: 2424,
              level: 7,
              xp: 3339,
              minionsKilled: 47,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 3673,
                y: 9924
              },
              currentGold: 641,
              totalGold: 2716,
              level: 6,
              xp: 2809,
              minionsKilled: 1,
              jungleMinionsKilled: 44,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 10614,
                y: 1356
              },
              currentGold: 1478,
              totalGold: 2353,
              level: 5,
              xp: 2338,
              minionsKilled: 55,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 10288,
                y: 1251
              },
              currentGold: 1120,
              totalGold: 1620,
              level: 5,
              xp: 2397,
              minionsKilled: 1,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 7720,
                y: 7929
              },
              currentGold: 531,
              totalGold: 2206,
              level: 7,
              xp: 3605,
              minionsKilled: 50,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 11776,
                y: 1586
              },
              currentGold: 1391,
              totalGold: 2691,
              level: 5,
              xp: 2308,
              minionsKilled: 68,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 11460,
                y: 7138
              },
              currentGold: 248,
              totalGold: 2173,
              level: 5,
              xp: 2384,
              minionsKilled: 0,
              jungleMinionsKilled: 32,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 10864,
                y: 7657
              },
              currentGold: 66,
              totalGold: 2976,
              level: 7,
              xp: 3280,
              minionsKilled: 65,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 12241,
                y: 1549
              },
              currentGold: 843,
              totalGold: 1843,
              level: 5,
              xp: 2286,
              minionsKilled: 13,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 2642,
                y: 12149
              },
              currentGold: 264,
              totalGold: 2964,
              level: 7,
              xp: 3876,
              minionsKilled: 65,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'WARD_PLACED',
              timestamp: 421381,
              wardType: 'YELLOW_TRINKET',
              creatorId: 9
            },
            {
              type: 'WARD_PLACED',
              timestamp: 424120,
              wardType: 'YELLOW_TRINKET',
              creatorId: 7
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 426199,
              participantId: 2,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_KILL',
              timestamp: 426364,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'WARD_KILL',
              timestamp: 427387,
              wardType: 'CONTROL_WARD',
              killerId: 9
            },
            {
              type: 'WARD_PLACED',
              timestamp: 429665,
              wardType: 'YELLOW_TRINKET',
              creatorId: 4
            },
            {
              type: 'WARD_KILL',
              timestamp: 430226,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 433427,
              participantId: 7,
              itemId: 1001
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 434582,
              participantId: 7,
              itemId: 1028
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 434648,
              participantId: 8,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 436496,
              participantId: 9,
              itemId: 2003
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 440885,
              participantId: 10,
              itemId: 2059
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 442898,
              participantId: 5,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 443195,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 443525,
              participantId: 5,
              itemId: 2003
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 448739,
              participantId: 8,
              itemId: 3070
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 449305,
              participantId: 8,
              itemId: 3802
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 450757,
              participantId: 8,
              itemId: 1052
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 451648,
              participantId: 8,
              itemId: 2055
            },
            {
              type: 'WARD_PLACED',
              timestamp: 451912,
              wardType: 'YELLOW_TRINKET',
              creatorId: 2
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 452176,
              participantId: 8,
              itemId: 2003
            },
            {
              type: 'WARD_KILL',
              timestamp: 461483,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 467819,
              position: {
                x: 2642,
                y: 12149
              },
              killerId: 2,
              victimId: 10,
              assistingParticipantIds: [1]
            },
            {
              type: 'WARD_KILL',
              timestamp: 471251,
              wardType: 'UNDEFINED',
              killerId: 2
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 473561,
              participantId: 10,
              itemId: 1037
            },
            {
              type: 'WARD_KILL',
              timestamp: 476802,
              wardType: 'CONTROL_WARD',
              killerId: 2
            }
          ],
          timestamp: 480267
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 1566,
                y: 9489
              },
              currentGold: 96,
              totalGold: 2696,
              level: 7,
              xp: 3663,
              minionsKilled: 54,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 11233,
                y: 4115
              },
              currentGold: 994,
              totalGold: 3069,
              level: 7,
              xp: 3306,
              minionsKilled: 2,
              jungleMinionsKilled: 52,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 10194,
                y: 1193
              },
              currentGold: 1700,
              totalGold: 2575,
              level: 6,
              xp: 2608,
              minionsKilled: 60,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 10534,
                y: 1642
              },
              currentGold: 1281,
              totalGold: 1781,
              level: 6,
              xp: 2608,
              minionsKilled: 1,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 7169,
                y: 6625
              },
              currentGold: 768,
              totalGold: 2443,
              level: 8,
              xp: 4138,
              minionsKilled: 56,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 11862,
                y: 2628
              },
              currentGold: 1840,
              totalGold: 3140,
              level: 6,
              xp: 2713,
              minionsKilled: 80,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 7757,
                y: 10278
              },
              currentGold: 569,
              totalGold: 2494,
              level: 6,
              xp: 2979,
              minionsKilled: 0,
              jungleMinionsKilled: 40,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 9985,
                y: 6517
              },
              currentGold: 481,
              totalGold: 3391,
              level: 8,
              xp: 4081,
              minionsKilled: 74,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 12454,
                y: 2597
              },
              currentGold: 1043,
              totalGold: 2043,
              level: 6,
              xp: 2691,
              minionsKilled: 15,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 2676,
                y: 11975
              },
              currentGold: 472,
              totalGold: 3247,
              level: 8,
              xp: 4233,
              minionsKilled: 72,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'WARD_KILL',
              timestamp: 485283,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 485448,
              participantId: 4,
              itemId: 2003
            },
            {
              type: 'WARD_KILL',
              timestamp: 487593,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 489111,
              participantId: 1,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 491888,
              participantId: 10,
              itemId: 2055
            },
            {
              type: 'WARD_PLACED',
              timestamp: 496805,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 498422,
              participantId: 6,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 500468,
              participantId: 9,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 501524,
              participantId: 7,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 501953,
              wardType: 'CONTROL_WARD',
              creatorId: 8
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 501953,
              participantId: 8,
              itemId: 2055
            },
            {
              type: 'WARD_KILL',
              timestamp: 502910,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 507893,
              participantId: 9,
              itemId: 2003
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 509213,
              participantId: 6,
              itemId: 2319
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 510863,
              participantId: 3,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 512282,
              participantId: 1,
              itemId: 3044
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 512282,
              participantId: 1,
              itemId: 1036
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 513701,
              participantId: 1,
              itemId: 1029
            },
            {
              type: 'WARD_PLACED',
              timestamp: 514229,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 515285,
              participantId: 1,
              itemId: 2031
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 515912,
              participantId: 4,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 516374,
              participantId: 6,
              itemId: 2010
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 519284,
              participantId: 4,
              itemId: 2003
            },
            {
              type: 'WARD_PLACED',
              timestamp: 520009,
              wardType: 'YELLOW_TRINKET',
              creatorId: 3
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 522485,
              participantId: 2,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 524003,
              participantId: 5,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 531659,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 533243,
              participantId: 8,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_KILL',
              timestamp: 533474,
              wardType: 'CONTROL_WARD',
              killerId: 2
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 535190,
              participantId: 10,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 537236,
              wardType: 'CONTROL_WARD',
              creatorId: 5
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 537236,
              participantId: 5,
              itemId: 2055
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 537599,
              participantId: 8,
              itemId: 2003
            }
          ],
          timestamp: 540272
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 394,
                y: 461
              },
              currentGold: 416,
              totalGold: 3016,
              level: 8,
              xp: 4226,
              minionsKilled: 63,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 9099,
                y: 3994
              },
              currentGold: 1491,
              totalGold: 3566,
              level: 7,
              xp: 3862,
              minionsKilled: 2,
              jungleMinionsKilled: 52,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 11520,
                y: 1568
              },
              currentGold: 2385,
              totalGold: 3260,
              level: 7,
              xp: 3325,
              minionsKilled: 64,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 2224,
                y: 667
              },
              currentGold: 41,
              totalGold: 2041,
              level: 6,
              xp: 3002,
              minionsKilled: 1,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 7284,
                y: 7173
              },
              currentGold: 1081,
              totalGold: 2756,
              level: 8,
              xp: 4668,
              minionsKilled: 66,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 13998,
                y: 4196
              },
              currentGold: 2361,
              totalGold: 3661,
              level: 6,
              xp: 2940,
              minionsKilled: 85,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 9659,
                y: 6315
              },
              currentGold: 829,
              totalGold: 2754,
              level: 7,
              xp: 3533,
              minionsKilled: 2,
              jungleMinionsKilled: 44,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 8162,
                y: 1766
              },
              currentGold: 754,
              totalGold: 3664,
              level: 8,
              xp: 4279,
              minionsKilled: 74,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 8214,
                y: 2052
              },
              currentGold: 1202,
              totalGold: 2202,
              level: 6,
              xp: 2918,
              minionsKilled: 16,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 1183,
                y: 10314
              },
              currentGold: 841,
              totalGold: 3616,
              level: 8,
              xp: 4807,
              minionsKilled: 84,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'WARD_PLACED',
              timestamp: 541759,
              wardType: 'CONTROL_WARD',
              creatorId: 10
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 541759,
              participantId: 10,
              itemId: 2055
            },
            {
              type: 'WARD_PLACED',
              timestamp: 542955,
              wardType: 'YELLOW_TRINKET',
              creatorId: 6
            },
            {
              type: 'WARD_PLACED',
              timestamp: 545001,
              wardType: 'SIGHT_WARD',
              creatorId: 9
            },
            {
              type: 'WARD_PLACED',
              timestamp: 545661,
              wardType: 'YELLOW_TRINKET',
              creatorId: 8
            },
            {
              type: 'WARD_PLACED',
              timestamp: 549096,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 562398,
              participantId: 7,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 570748,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 572233,
              position: {
                x: 10121,
                y: 904
              },
              killerId: 6,
              victimId: 4,
              assistingParticipantIds: [8]
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 577652,
              position: {
                x: 8162,
                y: 1766
              },
              killerId: 3,
              victimId: 8,
              assistingParticipantIds: [2, 4]
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 583427,
              position: {
                x: 8214,
                y: 2052
              },
              killerId: 2,
              victimId: 9,
              assistingParticipantIds: [3]
            },
            {
              type: 'WARD_PLACED',
              timestamp: 584879,
              wardType: 'YELLOW_TRINKET',
              creatorId: 6
            },
            {
              type: 'WARD_KILL',
              timestamp: 585539,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 591942,
              participantId: 4,
              itemId: 3092
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 591942,
              participantId: 4,
              itemId: 3303
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 592503,
              participantId: 6,
              itemId: 2060
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 592503,
              participantId: 3,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 592932,
              participantId: 4,
              itemId: 2003
            }
          ],
          timestamp: 600295
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 1278,
                y: 10960
              },
              currentGold: 316,
              totalGold: 3316,
              level: 8,
              xp: 4848,
              minionsKilled: 70,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 2790,
                y: 6934
              },
              currentGold: 601,
              totalGold: 4101,
              level: 8,
              xp: 4322,
              minionsKilled: 2,
              jungleMinionsKilled: 56,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 8482,
                y: 1314
              },
              currentGold: 59,
              totalGold: 3509,
              level: 7,
              xp: 3681,
              minionsKilled: 69,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 8958,
                y: 3790
              },
              currentGold: 176,
              totalGold: 2176,
              level: 6,
              xp: 3002,
              minionsKilled: 1,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 6378,
                y: 5919
              },
              currentGold: 1528,
              totalGold: 3203,
              level: 9,
              xp: 5392,
              minionsKilled: 75,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 13201,
                y: 2935
              },
              currentGold: 2876,
              totalGold: 4176,
              level: 7,
              xp: 3672,
              minionsKilled: 104,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 8416,
                y: 12484
              },
              currentGold: 494,
              totalGold: 2919,
              level: 7,
              xp: 3650,
              minionsKilled: 4,
              jungleMinionsKilled: 44,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 7757,
                y: 8002
              },
              currentGold: 539,
              totalGold: 3899,
              level: 8,
              xp: 4633,
              minionsKilled: 80,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 11840,
                y: 3800
              },
              currentGold: 482,
              totalGold: 2432,
              level: 7,
              xp: 3208,
              minionsKilled: 19,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 2597,
                y: 11537
              },
              currentGold: 1245,
              totalGold: 4020,
              level: 9,
              xp: 5429,
              minionsKilled: 97,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'WARD_PLACED',
              timestamp: 600625,
              wardType: 'YELLOW_TRINKET',
              creatorId: 7
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 601648,
              participantId: 9,
              itemId: 3401
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 601648,
              participantId: 9,
              itemId: 3097
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 605839,
              participantId: 8,
              itemId: 1028
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 606500,
              participantId: 1,
              itemId: 1028
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 607721,
              participantId: 8,
              itemId: 2003
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 608348,
              participantId: 10,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 608612,
              participantId: 9,
              itemId: 3341
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 608612,
              participantId: 9,
              itemId: 3340
            },
            {
              type: 'WARD_KILL',
              timestamp: 609305,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'WARD_PLACED',
              timestamp: 610097,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 610460,
              participantId: 1,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 615924,
              position: {
                x: 8844,
                y: 8119
              },
              killerId: 2,
              victimId: 7,
              assistingParticipantIds: [5]
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 618399,
              participantId: 2,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 619125,
              participantId: 5,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 621633,
              participantId: 7,
              itemId: 3751
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 621633,
              participantId: 7,
              itemId: 1028
            },
            {
              type: 'WARD_PLACED',
              timestamp: 628331,
              wardType: 'YELLOW_TRINKET',
              creatorId: 4
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 630649,
              participantId: 6,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 637117,
              participantId: 3,
              itemId: 1038
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 637678,
              participantId: 3,
              itemId: 3086
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 638966,
              participantId: 3,
              itemId: 2055
            },
            {
              type: 'WARD_KILL',
              timestamp: 639527,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'WARD_KILL',
              timestamp: 642431,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 642959,
              participantId: 2,
              itemId: 1402
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 642959,
              participantId: 2,
              itemId: 3113
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 642959,
              participantId: 2,
              itemId: 1039
            },
            {
              type: 'WARD_PLACED',
              timestamp: 649470,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 655212,
              participantId: 9,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 658743,
              wardType: 'YELLOW_TRINKET',
              creatorId: 10
            }
          ],
          timestamp: 660301
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 2974,
                y: 12213
              },
              currentGold: 849,
              totalGold: 3849,
              level: 9,
              xp: 5700,
              minionsKilled: 80,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 5106,
                y: 7649
              },
              currentGold: 1174,
              totalGold: 4674,
              level: 8,
              xp: 5006,
              minionsKilled: 4,
              jungleMinionsKilled: 60,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 12269,
                y: 4806
              },
              currentGold: 465,
              totalGold: 3915,
              level: 8,
              xp: 4224,
              minionsKilled: 84,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 12897,
                y: 1917
              },
              currentGold: 403,
              totalGold: 2403,
              level: 7,
              xp: 3427,
              minionsKilled: 1,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 7120,
                y: 7075
              },
              currentGold: 1869,
              totalGold: 3544,
              level: 9,
              xp: 5973,
              minionsKilled: 85,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 13267,
                y: 4135
              },
              currentGold: 437,
              totalGold: 4437,
              level: 7,
              xp: 3922,
              minionsKilled: 111,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 7926,
                y: 9611
              },
              currentGold: 826,
              totalGold: 3251,
              level: 8,
              xp: 4147,
              minionsKilled: 4,
              jungleMinionsKilled: 50,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 12656,
                y: 3048
              },
              currentGold: 952,
              totalGold: 4312,
              level: 9,
              xp: 5279,
              minionsKilled: 93,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 13304,
                y: 3849
              },
              currentGold: 690,
              totalGold: 2640,
              level: 7,
              xp: 3482,
              minionsKilled: 22,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 4227,
                y: 13714
              },
              currentGold: 61,
              totalGold: 4211,
              level: 9,
              xp: 5606,
              minionsKilled: 100,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'ITEM_PURCHASED',
              timestamp: 661856,
              participantId: 6,
              itemId: 3004
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 661856,
              participantId: 6,
              itemId: 3070
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 662252,
              participantId: 6,
              itemId: 3057
            },
            {
              type: 'WARD_PLACED',
              timestamp: 664100,
              wardType: 'SIGHT_WARD',
              creatorId: 9
            },
            {
              type: 'WARD_KILL',
              timestamp: 664364,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'WARD_PLACED',
              timestamp: 667172,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_KILL',
              timestamp: 667766,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'WARD_KILL',
              timestamp: 672024,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'WARD_PLACED',
              timestamp: 674665,
              wardType: 'YELLOW_TRINKET',
              creatorId: 8
            },
            {
              type: 'WARD_PLACED',
              timestamp: 675060,
              wardType: 'SIGHT_WARD',
              creatorId: 9
            },
            {
              type: 'WARD_KILL',
              timestamp: 676183,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'WARD_KILL',
              timestamp: 678196,
              wardType: 'CONTROL_WARD',
              killerId: 8
            },
            {
              type: 'WARD_PLACED',
              timestamp: 679484,
              wardType: 'YELLOW_TRINKET',
              creatorId: 4
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 681961,
              position: {
                x: 2849,
                y: 12014
              },
              killerId: 2,
              victimId: 10,
              assistingParticipantIds: [1]
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 686515,
              participantId: 1,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_KILL',
              timestamp: 688033,
              wardType: 'CONTROL_WARD',
              killerId: 2
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 689320,
              participantId: 10,
              itemId: 3133
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 689320,
              participantId: 10,
              itemId: 1036
            },
            {
              type: 'WARD_PLACED',
              timestamp: 689452,
              wardType: 'YELLOW_TRINKET',
              creatorId: 3
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 690046,
              participantId: 4,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 692521,
              participantId: 8,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_KILL',
              timestamp: 693115,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 697145,
              participantId: 10,
              itemId: 3812
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 697145,
              participantId: 10,
              itemId: 1053
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 697145,
              participantId: 10,
              itemId: 1037
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 697145,
              participantId: 10,
              itemId: 3133
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 708960,
              participantId: 6,
              itemId: 2061
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 713283,
              participantId: 3,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 713976,
              participantId: 9,
              itemId: 2003
            },
            {
              type: 'WARD_PLACED',
              timestamp: 717081,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 718813,
              participantId: 8,
              itemId: 2003
            }
          ],
          timestamp: 720317
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 726,
                y: 7669
              },
              currentGold: 152,
              totalGold: 4052,
              level: 9,
              xp: 5847,
              minionsKilled: 84,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 5728,
                y: 7403
              },
              currentGold: 1746,
              totalGold: 5246,
              level: 9,
              xp: 5489,
              minionsKilled: 4,
              jungleMinionsKilled: 60,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 13789,
                y: 3778
              },
              currentGold: 761,
              totalGold: 4211,
              level: 8,
              xp: 4834,
              minionsKilled: 93,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 11129,
                y: 1875
              },
              currentGold: 78,
              totalGold: 2853,
              level: 8,
              xp: 4102,
              minionsKilled: 1,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 6981,
                y: 6799
              },
              currentGold: 2461,
              totalGold: 4136,
              level: 10,
              xp: 6621,
              minionsKilled: 94,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 13849,
                y: 6930
              },
              currentGold: 96,
              totalGold: 4696,
              level: 7,
              xp: 3981,
              minionsKilled: 113,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 7590,
                y: 7497
              },
              currentGold: 1192,
              totalGold: 3617,
              level: 8,
              xp: 4718,
              minionsKilled: 8,
              jungleMinionsKilled: 52,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 9492,
                y: 9338
              },
              currentGold: 325,
              totalGold: 4535,
              level: 9,
              xp: 5279,
              minionsKilled: 93,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 14340,
                y: 14391
              },
              currentGold: 956,
              totalGold: 2906,
              level: 7,
              xp: 3758,
              minionsKilled: 24,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 1310,
                y: 7738
              },
              currentGold: 1726,
              totalGold: 5876,
              level: 11,
              xp: 7394,
              minionsKilled: 127,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 720482,
              participantId: 7,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 723122,
              participantId: 1,
              itemId: 3047
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 723122,
              participantId: 1,
              itemId: 1001
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 723122,
              participantId: 1,
              itemId: 1029
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 726094,
              participantId: 4,
              itemId: 2003
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 726127,
              participantId: 2,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 729460,
              participantId: 9,
              itemId: 2010
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 729922,
              participantId: 6,
              itemId: 2062
            },
            {
              type: 'WARD_PLACED',
              timestamp: 730549,
              wardType: 'YELLOW_TRINKET',
              creatorId: 2
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 730648,
              participantId: 9,
              itemId: 2010
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 730846,
              position: {
                x: 11449,
                y: 1086
              },
              killerId: 4,
              victimId: 8,
              assistingParticipantIds: []
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 731011,
              participantId: 6,
              itemId: 2010
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 732862,
              participantId: 4,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 733489,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 734380,
              position: {
                x: 10708,
                y: 5521
              },
              killerId: 2,
              victimId: 6,
              assistingParticipantIds: []
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 734677,
              participantId: 10,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 736955,
              wardType: 'YELLOW_TRINKET',
              creatorId: 7
            },
            {
              type: 'WARD_KILL',
              timestamp: 738935,
              wardType: 'YELLOW_TRINKET',
              killerId: 9
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 738935,
              participantId: 5,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 743389,
              participantId: 4,
              itemId: 1001
            },
            {
              type: 'BUILDING_KILL',
              timestamp: 744709,
              position: {
                x: 981,
                y: 10441
              },
              killerId: 10,
              assistingParticipantIds: [],
              teamId: 100,
              buildingType: 'TOWER_BUILDING',
              laneType: 'TOP_LANE',
              towerType: 'OUTER_TURRET'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 749858,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 750749,
              participantId: 6,
              itemId: 3158
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 750749,
              participantId: 6,
              itemId: 2422
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 751310,
              participantId: 4,
              itemId: 1082
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 751640,
              participantId: 4,
              itemId: 2055
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 751838,
              participantId: 4,
              itemId: 2003
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 753191,
              participantId: 8,
              itemId: 1026
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 754874,
              participantId: 8,
              itemId: 3363
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 754874,
              participantId: 8,
              itemId: 3340
            },
            {
              type: 'WARD_KILL',
              timestamp: 758217,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 758547,
              participantId: 10,
              itemId: 2010
            },
            {
              type: 'WARD_PLACED',
              timestamp: 759999,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 759999,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 765579,
              wardType: 'YELLOW_TRINKET',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 770563,
              wardType: 'YELLOW_TRINKET',
              creatorId: 3
            },
            {
              type: 'WARD_PLACED',
              timestamp: 770728,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 771492,
              position: {
                x: 726,
                y: 7669
              },
              killerId: 10,
              victimId: 1,
              assistingParticipantIds: []
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 775749,
              position: {
                x: 7590,
                y: 7497
              },
              killerId: 5,
              victimId: 7,
              assistingParticipantIds: [2]
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 777993,
              participantId: 1,
              itemId: 3067
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 777993,
              participantId: 1,
              itemId: 1028
            }
          ],
          timestamp: 780340
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 1215,
                y: 7897
              },
              currentGold: 432,
              totalGold: 4332,
              level: 10,
              xp: 6146,
              minionsKilled: 90,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 1108,
                y: 853
              },
              currentGold: 118,
              totalGold: 5468,
              level: 9,
              xp: 5866,
              minionsKilled: 4,
              jungleMinionsKilled: 64,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 8692,
                y: 1300
              },
              currentGold: 426,
              totalGold: 4476,
              level: 9,
              xp: 5067,
              minionsKilled: 99,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 8977,
                y: 2198
              },
              currentGold: 219,
              totalGold: 2994,
              level: 8,
              xp: 4335,
              minionsKilled: 1,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 6742,
                y: 6646
              },
              currentGold: 539,
              totalGold: 4414,
              level: 10,
              xp: 7066,
              minionsKilled: 101,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 11039,
                y: 4857
              },
              currentGold: 499,
              totalGold: 5099,
              level: 8,
              xp: 4562,
              minionsKilled: 126,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 12060,
                y: 6500
              },
              currentGold: 276,
              totalGold: 3826,
              level: 8,
              xp: 4968,
              minionsKilled: 8,
              jungleMinionsKilled: 56,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 8053,
                y: 7392
              },
              currentGold: 856,
              totalGold: 5066,
              level: 9,
              xp: 6030,
              minionsKilled: 104,
              jungleMinionsKilled: 12,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 10356,
                y: 4951
              },
              currentGold: 275,
              totalGold: 3075,
              level: 7,
              xp: 3872,
              minionsKilled: 25,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 4743,
                y: 9349
              },
              currentGold: 1975,
              totalGold: 6125,
              level: 11,
              xp: 7490,
              minionsKilled: 130,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 780802,
              participantId: 10,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 784003,
              wardType: 'YELLOW_TRINKET',
              creatorId: 10
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 784003,
              participantId: 10,
              itemId: 2056
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 784894,
              participantId: 9,
              itemId: 3111
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 784894,
              participantId: 9,
              itemId: 2422
            },
            {
              type: 'WARD_PLACED',
              timestamp: 786049,
              wardType: 'SIGHT_WARD',
              creatorId: 4
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 786907,
              participantId: 9,
              itemId: 2003
            },
            {
              type: 'WARD_PLACED',
              timestamp: 787105,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 797568,
              wardType: 'YELLOW_TRINKET',
              creatorId: 10
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 797568,
              participantId: 10,
              itemId: 2056
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 798129,
              participantId: 3,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 799284,
              wardType: 'YELLOW_TRINKET',
              creatorId: 2
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 800505,
              participantId: 6,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 800637,
              participantId: 7,
              itemId: 1401
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 800637,
              participantId: 7,
              itemId: 3751
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 800637,
              participantId: 7,
              itemId: 3706
            },
            {
              type: 'WARD_PLACED',
              timestamp: 802419,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 804037,
              participantId: 7,
              itemId: 1033
            },
            {
              type: 'WARD_PLACED',
              timestamp: 805291,
              wardType: 'SIGHT_WARD',
              creatorId: 4
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 805423,
              participantId: 7,
              itemId: 2055
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 807766,
              participantId: 5,
              itemId: 3285
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 807766,
              participantId: 5,
              itemId: 3802
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 811660,
              participantId: 3,
              itemId: 3363
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 811660,
              participantId: 3,
              itemId: 3340
            },
            {
              type: 'WARD_PLACED',
              timestamp: 815554,
              wardType: 'YELLOW_TRINKET',
              creatorId: 6
            },
            {
              type: 'WARD_PLACED',
              timestamp: 817337,
              wardType: 'CONTROL_WARD',
              creatorId: 4
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 817337,
              participantId: 4,
              itemId: 2055
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 822161,
              participantId: 3,
              itemId: 3009
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 822161,
              participantId: 3,
              itemId: 1001
            },
            {
              type: 'WARD_KILL',
              timestamp: 822755,
              wardType: 'SIGHT_WARD',
              killerId: 9
            },
            {
              type: 'WARD_PLACED',
              timestamp: 823448,
              wardType: 'BLUE_TRINKET',
              creatorId: 10
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 823448,
              participantId: 10,
              itemId: 2057
            },
            {
              type: 'WARD_PLACED',
              timestamp: 823811,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 825134,
              wardType: 'SIGHT_WARD',
              creatorId: 9
            },
            {
              type: 'WARD_KILL',
              timestamp: 825299,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'WARD_KILL',
              timestamp: 828170,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'WARD_KILL',
              timestamp: 835499,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 836951,
              participantId: 2,
              itemId: 3020
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 836951,
              participantId: 2,
              itemId: 1001
            },
            {
              type: 'WARD_PLACED',
              timestamp: 838007,
              wardType: 'YELLOW_TRINKET',
              creatorId: 6
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 838007,
              participantId: 6,
              itemId: 2056
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 838177,
              participantId: 2,
              itemId: 3057
            }
          ],
          timestamp: 840355
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 3017,
                y: 12734
              },
              currentGold: 889,
              totalGold: 4789,
              level: 10,
              xp: 6915,
              minionsKilled: 105,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 9229,
                y: 5572
              },
              currentGold: 483,
              totalGold: 5833,
              level: 10,
              xp: 6377,
              minionsKilled: 5,
              jungleMinionsKilled: 72,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 11810,
                y: 1505
              },
              currentGold: 809,
              totalGold: 4859,
              level: 9,
              xp: 5573,
              minionsKilled: 111,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 11970,
                y: 1908
              },
              currentGold: 476,
              totalGold: 3251,
              level: 8,
              xp: 4661,
              minionsKilled: 3,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 6956,
                y: 6827
              },
              currentGold: 880,
              totalGold: 4755,
              level: 11,
              xp: 7688,
              minionsKilled: 111,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 12624,
                y: 2174
              },
              currentGold: 849,
              totalGold: 5449,
              level: 9,
              xp: 5059,
              minionsKilled: 136,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 9392,
                y: 7347
              },
              currentGold: 498,
              totalGold: 4048,
              level: 9,
              xp: 5198,
              minionsKilled: 8,
              jungleMinionsKilled: 60,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 8057,
                y: 7355
              },
              currentGold: 1239,
              totalGold: 5449,
              level: 10,
              xp: 6652,
              minionsKilled: 116,
              jungleMinionsKilled: 12,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 12032,
                y: 1790
              },
              currentGold: 520,
              totalGold: 3320,
              level: 8,
              xp: 4144,
              minionsKilled: 29,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 7543,
                y: 13740
              },
              currentGold: 136,
              totalGold: 6395,
              level: 11,
              xp: 7792,
              minionsKilled: 137,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'WARD_PLACED',
              timestamp: 841246,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 842533,
              wardType: 'YELLOW_TRINKET',
              creatorId: 4
            },
            {
              type: 'WARD_PLACED',
              timestamp: 844348,
              wardType: 'SIGHT_WARD',
              creatorId: 9
            },
            {
              type: 'WARD_KILL',
              timestamp: 845741,
              wardType: 'CONTROL_WARD',
              killerId: 10
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 846533,
              participantId: 8,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_KILL',
              timestamp: 849437,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'WARD_KILL',
              timestamp: 853694,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'WARD_PLACED',
              timestamp: 854288,
              wardType: 'SIGHT_WARD',
              creatorId: 4
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 854849,
              participantId: 5,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 856334,
              wardType: 'CONTROL_WARD',
              creatorId: 7
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 856334,
              participantId: 7,
              itemId: 2055
            },
            {
              type: 'WARD_PLACED',
              timestamp: 856565,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_KILL',
              timestamp: 864293,
              wardType: 'CONTROL_WARD',
              killerId: 2
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 868022,
              participantId: 1,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 868715,
              wardType: 'YELLOW_TRINKET',
              creatorId: 2
            },
            {
              type: 'WARD_PLACED',
              timestamp: 871883,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 876239,
              participantId: 10,
              itemId: 3052
            },
            {
              type: 'WARD_KILL',
              timestamp: 876866,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'ITEM_UNDO',
              timestamp: 877790,
              participantId: 10,
              afterId: 0,
              beforeId: 3052
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 879374,
              participantId: 10,
              itemId: 3044
            },
            {
              type: 'WARD_KILL',
              timestamp: 880531,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 881554,
              participantId: 10,
              itemId: 3047
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 881554,
              participantId: 10,
              itemId: 2422
            },
            {
              type: 'WARD_PLACED',
              timestamp: 883072,
              wardType: 'BLUE_TRINKET',
              creatorId: 8
            },
            {
              type: 'ITEM_SOLD',
              timestamp: 884788,
              participantId: 10,
              itemId: 2061
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 884986,
              participantId: 2,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 885217,
              participantId: 10,
              itemId: 2055
            },
            {
              type: 'WARD_PLACED',
              timestamp: 887205,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 888459,
              wardType: 'YELLOW_TRINKET',
              creatorId: 5
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 892722,
              participantId: 7,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 893976,
              participantId: 6,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            }
          ],
          timestamp: 900378
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 1311,
                y: 7844
              },
              currentGold: 158,
              totalGold: 5008,
              level: 10,
              xp: 7180,
              minionsKilled: 110,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 6297,
                y: 12243
              },
              currentGold: 871,
              totalGold: 6221,
              level: 10,
              xp: 7025,
              minionsKilled: 5,
              jungleMinionsKilled: 81,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 10956,
                y: 1607
              },
              currentGold: 1280,
              totalGold: 5330,
              level: 10,
              xp: 6138,
              minionsKilled: 120,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 10619,
                y: 2312
              },
              currentGold: 936,
              totalGold: 3711,
              level: 9,
              xp: 5226,
              minionsKilled: 3,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 7266,
                y: 7263
              },
              currentGold: 1198,
              totalGold: 5074,
              level: 11,
              xp: 8218,
              minionsKilled: 121,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 8340,
                y: 7600
              },
              currentGold: 72,
              totalGold: 5572,
              level: 9,
              xp: 5059,
              minionsKilled: 136,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 5306,
                y: 9548
              },
              currentGold: 829,
              totalGold: 4379,
              level: 9,
              xp: 5758,
              minionsKilled: 13,
              jungleMinionsKilled: 64,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 12459,
                y: 1424
              },
              currentGold: 1667,
              totalGold: 5877,
              level: 10,
              xp: 7215,
              minionsKilled: 132,
              jungleMinionsKilled: 12,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 12537,
                y: 1457
              },
              currentGold: 724,
              totalGold: 3524,
              level: 8,
              xp: 4501,
              minionsKilled: 32,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 4677,
                y: 10054
              },
              currentGold: 596,
              totalGold: 6855,
              level: 11,
              xp: 8502,
              minionsKilled: 153,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'WARD_PLACED',
              timestamp: 902536,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 902800,
              position: {
                x: 13165,
                y: 2634
              },
              killerId: 4,
              victimId: 6,
              assistingParticipantIds: [3]
            },
            {
              type: 'WARD_PLACED',
              timestamp: 906570,
              wardType: 'YELLOW_TRINKET',
              creatorId: 7
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 914029,
              participantId: 4,
              itemId: 2003
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 916636,
              participantId: 9,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 917857,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 918055,
              participantId: 9,
              itemId: 2003
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 919441,
              participantId: 4,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 924854,
              participantId: 6,
              itemId: 3024
            },
            {
              type: 'WARD_PLACED',
              timestamp: 925712,
              wardType: 'YELLOW_TRINKET',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 933171,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 933699,
              participantId: 1,
              itemId: 3071
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 933699,
              participantId: 1,
              itemId: 3044
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 933699,
              participantId: 1,
              itemId: 3067
            },
            {
              type: 'WARD_PLACED',
              timestamp: 936966,
              wardType: 'BLUE_TRINKET',
              creatorId: 3
            },
            {
              type: 'WARD_KILL',
              timestamp: 938187,
              wardType: 'BLUE_TRINKET',
              killerId: 8
            },
            {
              type: 'WARD_PLACED',
              timestamp: 939639,
              wardType: 'SIGHT_WARD',
              creatorId: 4
            },
            {
              type: 'WARD_PLACED',
              timestamp: 948028,
              wardType: 'CONTROL_WARD',
              creatorId: 10
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 948028,
              participantId: 10,
              itemId: 2055
            },
            {
              type: 'WARD_PLACED',
              timestamp: 948490,
              wardType: 'UNDEFINED',
              creatorId: 10
            }
          ],
          timestamp: 960379
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 1038,
                y: 11142
              },
              currentGold: 538,
              totalGold: 5388,
              level: 11,
              xp: 7827,
              minionsKilled: 123,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 14066,
                y: 6934
              },
              currentGold: 1353,
              totalGold: 6703,
              level: 11,
              xp: 7558,
              minionsKilled: 6,
              jungleMinionsKilled: 84,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 12393,
                y: 2106
              },
              currentGold: 1668,
              totalGold: 5718,
              level: 10,
              xp: 6582,
              minionsKilled: 132,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 11676,
                y: 1794
              },
              currentGold: 1130,
              totalGold: 3905,
              level: 9,
              xp: 5670,
              minionsKilled: 3,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 7933,
                y: 7952
              },
              currentGold: 1506,
              totalGold: 5381,
              level: 12,
              xp: 8928,
              minionsKilled: 131,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 7767,
                y: 12018
              },
              currentGold: 345,
              totalGold: 5845,
              level: 9,
              xp: 5416,
              minionsKilled: 142,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 8737,
                y: 9844
              },
              currentGold: 1052,
              totalGold: 4602,
              level: 9,
              xp: 5964,
              minionsKilled: 13,
              jungleMinionsKilled: 68,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 11504,
                y: 4572
              },
              currentGold: 2073,
              totalGold: 6283,
              level: 11,
              xp: 7621,
              minionsKilled: 145,
              jungleMinionsKilled: 12,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 13052,
                y: 3944
              },
              currentGold: 932,
              totalGold: 3732,
              level: 8,
              xp: 4949,
              minionsKilled: 35,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 1647,
                y: 11672
              },
              currentGold: 856,
              totalGold: 7116,
              level: 12,
              xp: 8927,
              minionsKilled: 160,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'WARD_PLACED',
              timestamp: 963820,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 965272,
              participantId: 3,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 969967,
              participantId: 1,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 973531,
              participantId: 8,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ELITE_MONSTER_KILL',
              timestamp: 977101,
              position: {
                x: 4548,
                y: 10056
              },
              killerId: 7,
              monsterType: 'RIFTHERALD'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 979412,
              wardType: 'YELLOW_TRINKET',
              creatorId: 1
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 979774,
              participantId: 10,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 980203,
              participantId: 10,
              itemId: 3340
            },
            {
              type: 'WARD_KILL',
              timestamp: 981292,
              wardType: 'CONTROL_WARD',
              killerId: 2
            },
            {
              type: 'WARD_PLACED',
              timestamp: 984692,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 986507,
              wardType: 'YELLOW_TRINKET',
              creatorId: 6
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 988388,
              participantId: 6,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 989345,
              wardType: 'YELLOW_TRINKET',
              creatorId: 6
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 994427,
              position: {
                x: 7767,
                y: 12018
              },
              killerId: 2,
              victimId: 6,
              assistingParticipantIds: []
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 995483,
              participantId: 2,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1000004,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1000961,
              wardType: 'YELLOW_TRINKET',
              creatorId: 7
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1003713,
              wardType: 'YELLOW_TRINKET',
              creatorId: 1
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1010678,
              participantId: 5,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1015332,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1015959,
              wardType: 'SIGHT_WARD',
              creatorId: 9
            }
          ],
          timestamp: 1020381
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 1251,
                y: 6629
              },
              currentGold: 736,
              totalGold: 5586,
              level: 11,
              xp: 8181,
              minionsKilled: 127,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 10268,
                y: 1591
              },
              currentGold: 771,
              totalGold: 6971,
              level: 11,
              xp: 8049,
              minionsKilled: 12,
              jungleMinionsKilled: 84,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 10015,
                y: 976
              },
              currentGold: 1831,
              totalGold: 5881,
              level: 10,
              xp: 6775,
              minionsKilled: 134,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 6753,
                y: 1235
              },
              currentGold: 371,
              totalGold: 4071,
              level: 9,
              xp: 5670,
              minionsKilled: 3,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 6692,
                y: 6439
              },
              currentGold: 1838,
              totalGold: 5713,
              level: 12,
              xp: 9462,
              minionsKilled: 140,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 7849,
                y: 6996
              },
              currentGold: 776,
              totalGold: 6276,
              level: 9,
              xp: 6071,
              minionsKilled: 149,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 9150,
                y: 2016
              },
              currentGold: 1322,
              totalGold: 4872,
              level: 10,
              xp: 6258,
              minionsKilled: 19,
              jungleMinionsKilled: 68,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 12715,
                y: 1750
              },
              currentGold: 3111,
              totalGold: 7321,
              level: 11,
              xp: 8479,
              minionsKilled: 158,
              jungleMinionsKilled: 12,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 12285,
                y: 1672
              },
              currentGold: 1497,
              totalGold: 4297,
              level: 9,
              xp: 5979,
              minionsKilled: 38,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 1329,
                y: 7444
              },
              currentGold: 1432,
              totalGold: 7691,
              level: 12,
              xp: 9844,
              minionsKilled: 180,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'WARD_PLACED',
              timestamp: 1024154,
              wardType: 'YELLOW_TRINKET',
              creatorId: 4
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1025045,
              participantId: 2,
              itemId: 3113
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 1027687,
              position: {
                x: 11764,
                y: 3240
              },
              killerId: 8,
              victimId: 4,
              assistingParticipantIds: [9]
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1030656,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1033659,
              participantId: 9,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1035245,
              participantId: 4,
              itemId: 3364
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1035245,
              participantId: 4,
              itemId: 3340
            },
            {
              type: 'WARD_KILL',
              timestamp: 1035311,
              wardType: 'YELLOW_TRINKET',
              killerId: 9
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1036862,
              participantId: 7,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1043860,
              wardType: 'BLUE_TRINKET',
              creatorId: 8
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1045972,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1047226,
              participantId: 10,
              itemId: 2013
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1061288,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1062311,
              participantId: 4,
              itemId: 3020
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1062311,
              participantId: 4,
              itemId: 1001
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1062777,
              participantId: 4,
              itemId: 2055
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1063041,
              participantId: 4,
              itemId: 2003
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 1071589,
              position: {
                x: 10015,
                y: 976
              },
              killerId: 8,
              victimId: 3,
              assistingParticipantIds: [9]
            }
          ],
          timestamp: 1080406
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 1291,
                y: 5019
              },
              currentGold: 1060,
              totalGold: 5910,
              level: 12,
              xp: 8946,
              minionsKilled: 133,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 12861,
                y: 2601
              },
              currentGold: 1225,
              totalGold: 7425,
              level: 12,
              xp: 8689,
              minionsKilled: 12,
              jungleMinionsKilled: 84,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 10422,
                y: 1400
              },
              currentGold: 402,
              totalGold: 6372,
              level: 10,
              xp: 7089,
              minionsKilled: 135,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 11870,
                y: 1893
              },
              currentGold: 844,
              totalGold: 4544,
              level: 10,
              xp: 6426,
              minionsKilled: 5,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 1793,
                y: 2511
              },
              currentGold: 528,
              totalGold: 5903,
              level: 12,
              xp: 9580,
              minionsKilled: 142,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 6174,
                y: 6934
              },
              currentGold: 2107,
              totalGold: 7607,
              level: 11,
              xp: 7597,
              minionsKilled: 161,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 10236,
                y: 1380
              },
              currentGold: 2217,
              totalGold: 5767,
              level: 10,
              xp: 6848,
              minionsKilled: 27,
              jungleMinionsKilled: 68,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 13391,
                y: 10519
              },
              currentGold: 502,
              totalGold: 7978,
              level: 12,
              xp: 8785,
              minionsKilled: 160,
              jungleMinionsKilled: 12,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 13258,
                y: 2606
              },
              currentGold: 2578,
              totalGold: 5378,
              level: 10,
              xp: 6595,
              minionsKilled: 42,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 1602,
                y: 6314
              },
              currentGold: 2325,
              totalGold: 8584,
              level: 13,
              xp: 10359,
              minionsKilled: 189,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1088163,
              participantId: 10,
              itemId: 2010
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 1090869,
              position: {
                x: 4917,
                y: 5456
              },
              killerId: 6,
              victimId: 5,
              assistingParticipantIds: []
            },
            {
              type: 'ITEM_SOLD',
              timestamp: 1092224,
              participantId: 3,
              itemId: 1055
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 1092719,
              position: {
                x: 12479,
                y: 1703
              },
              killerId: 2,
              victimId: 8,
              assistingParticipantIds: []
            },
            {
              type: 'WARD_KILL',
              timestamp: 1092818,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1093874,
              participantId: 6,
              itemId: 2010
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1093907,
              participantId: 2,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1095029,
              participantId: 6,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_KILL',
              timestamp: 1097769,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1098792,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1100343,
              participantId: 10,
              itemId: 3513
            },
            {
              type: 'WARD_KILL',
              timestamp: 1102059,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 1103215,
              position: {
                x: 12861,
                y: 2601
              },
              killerId: 9,
              victimId: 2,
              assistingParticipantIds: [7, 8]
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1105162,
              participantId: 9,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_KILL',
              timestamp: 1105459,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1105888,
              participantId: 8,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1109089,
              participantId: 8,
              itemId: 3116
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1109089,
              participantId: 8,
              itemId: 1026
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1109089,
              participantId: 8,
              itemId: 1052
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1109089,
              participantId: 8,
              itemId: 1028
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1110772,
              participantId: 10,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1111762,
              participantId: 3,
              itemId: 3031
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1111762,
              participantId: 3,
              itemId: 1038
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1112488,
              participantId: 8,
              itemId: 3136
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1113317,
              participantId: 8,
              itemId: 1026
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1113680,
              participantId: 6,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1114010,
              participantId: 5,
              itemId: 3136
            },
            {
              type: 'BUILDING_KILL',
              timestamp: 1114043,
              position: {
                x: 1512,
                y: 6699
              },
              killerId: 10,
              assistingParticipantIds: [],
              teamId: 100,
              buildingType: 'TOWER_BUILDING',
              laneType: 'TOP_LANE',
              towerType: 'INNER_TURRET'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1114109,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1118399,
              wardType: 'YELLOW_TRINKET',
              creatorId: 10
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1118729,
              participantId: 6,
              itemId: 2010
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1128629,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'BUILDING_KILL',
              timestamp: 1133454,
              position: {
                x: 10504,
                y: 1029
              },
              killerId: 7,
              assistingParticipantIds: [9],
              teamId: 100,
              buildingType: 'TOWER_BUILDING',
              laneType: 'BOT_LANE',
              towerType: 'OUTER_TURRET'
            },
            {
              type: 'WARD_KILL',
              timestamp: 1136392,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 1138636,
              position: {
                x: 10236,
                y: 1380
              },
              killerId: 3,
              victimId: 7,
              assistingParticipantIds: [4]
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1139593,
              participantId: 4,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'BUILDING_KILL',
              timestamp: 1140187,
              position: {
                x: 5846,
                y: 6396
              },
              killerId: 6,
              assistingParticipantIds: [],
              teamId: 100,
              buildingType: 'TOWER_BUILDING',
              laneType: 'MID_LANE',
              towerType: 'OUTER_TURRET'
            }
          ],
          timestamp: 1140420
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 1357,
                y: 8325
              },
              currentGold: 322,
              totalGold: 6372,
              level: 12,
              xp: 9695,
              minionsKilled: 148,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 6812,
                y: 4859
              },
              currentGold: 1677,
              totalGold: 7877,
              level: 12,
              xp: 9451,
              minionsKilled: 13,
              jungleMinionsKilled: 96,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 5979,
                y: 1117
              },
              currentGold: 389,
              totalGold: 6659,
              level: 11,
              xp: 7341,
              minionsKilled: 142,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 3098,
                y: 730
              },
              currentGold: 86,
              totalGold: 4686,
              level: 10,
              xp: 6678,
              minionsKilled: 5,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 5254,
                y: 5692
              },
              currentGold: 896,
              totalGold: 6271,
              level: 13,
              xp: 10202,
              minionsKilled: 153,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 7561,
                y: 7294
              },
              currentGold: 428,
              totalGold: 7978,
              level: 11,
              xp: 8219,
              minionsKilled: 172,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 7834,
                y: 9672
              },
              currentGold: 489,
              totalGold: 5939,
              level: 10,
              xp: 7023,
              minionsKilled: 27,
              jungleMinionsKilled: 70,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 11522,
                y: 6834
              },
              currentGold: 928,
              totalGold: 8403,
              level: 12,
              xp: 9426,
              minionsKilled: 174,
              jungleMinionsKilled: 12,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 13547,
                y: 8276
              },
              currentGold: 62,
              totalGold: 5512,
              level: 10,
              xp: 6595,
              minionsKilled: 42,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 12048,
                y: 8760
              },
              currentGold: 50,
              totalGold: 8791,
              level: 13,
              xp: 10510,
              minionsKilled: 192,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'WARD_PLACED',
              timestamp: 1142202,
              wardType: 'SIGHT_WARD',
              creatorId: 4
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1144743,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1148438,
              participantId: 7,
              itemId: 3111
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1148438,
              participantId: 7,
              itemId: 1001
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1148438,
              participantId: 7,
              itemId: 1033
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1157120,
              participantId: 9,
              itemId: 3190
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1157549,
              wardType: 'YELLOW_TRINKET',
              creatorId: 2
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1159133,
              participantId: 7,
              itemId: 3105
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1159265,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1159694,
              participantId: 6,
              itemId: 3025
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1159694,
              participantId: 6,
              itemId: 3057
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1159694,
              participantId: 6,
              itemId: 3024
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1159859,
              participantId: 7,
              itemId: 1033
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1160915,
              participantId: 1,
              itemId: 3077
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1161773,
              participantId: 3,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1164421,
              participantId: 6,
              itemId: 3155
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1164850,
              wardType: 'BLUE_TRINKET',
              creatorId: 3
            },
            {
              type: 'WARD_KILL',
              timestamp: 1167787,
              wardType: 'CONTROL_WARD',
              killerId: 2
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1173530,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1174652,
              participantId: 7,
              itemId: 3364
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1174652,
              participantId: 7,
              itemId: 3340
            },
            {
              type: 'WARD_KILL',
              timestamp: 1175807,
              wardType: 'BLUE_TRINKET',
              killerId: 8
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1177226,
              participantId: 10,
              itemId: 3078
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1177226,
              participantId: 10,
              itemId: 3044
            },
            {
              type: 'WARD_KILL',
              timestamp: 1179701,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1183397,
              participantId: 9,
              itemId: 1033
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1186367,
              wardType: 'BLUE_TRINKET',
              creatorId: 8
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1187258,
              participantId: 3,
              itemId: 1042
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1188050,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1193066,
              participantId: 4,
              itemId: 3108
            },
            {
              type: 'WARD_KILL',
              timestamp: 1193099,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'WARD_KILL',
              timestamp: 1195409,
              wardType: 'UNDEFINED',
              killerId: 1
            }
          ],
          timestamp: 1200427
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 4166,
                y: 13683
              },
              currentGold: 719,
              totalGold: 6769,
              level: 13,
              xp: 10449,
              minionsKilled: 157,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 7274,
                y: 2458
              },
              currentGold: 1912,
              totalGold: 8112,
              level: 12,
              xp: 9903,
              minionsKilled: 13,
              jungleMinionsKilled: 100,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 5772,
                y: 1114
              },
              currentGold: 683,
              totalGold: 6953,
              level: 11,
              xp: 7758,
              minionsKilled: 150,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 6451,
                y: 1494
              },
              currentGold: 343,
              totalGold: 4944,
              level: 10,
              xp: 6899,
              minionsKilled: 7,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 5308,
                y: 5272
              },
              currentGold: 1286,
              totalGold: 6661,
              level: 13,
              xp: 10710,
              minionsKilled: 165,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 8312,
                y: 2167
              },
              currentGold: 891,
              totalGold: 8441,
              level: 12,
              xp: 8609,
              minionsKilled: 175,
              jungleMinionsKilled: 11,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 9768,
                y: 6446
              },
              currentGold: 184,
              totalGold: 6284,
              level: 11,
              xp: 7565,
              minionsKilled: 27,
              jungleMinionsKilled: 76,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 4339,
                y: 12610
              },
              currentGold: 1301,
              totalGold: 8776,
              level: 13,
              xp: 9963,
              minionsKilled: 180,
              jungleMinionsKilled: 16,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 7988,
                y: 947
              },
              currentGold: 279,
              totalGold: 5729,
              level: 10,
              xp: 6986,
              minionsKilled: 44,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 8032,
                y: 1334
              },
              currentGold: 498,
              totalGold: 9239,
              level: 13,
              xp: 11136,
              minionsKilled: 208,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'WARD_PLACED',
              timestamp: 1202572,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1203364,
              participantId: 6,
              itemId: 3004
            },
            {
              type: 'WARD_KILL',
              timestamp: 1207203,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1212233,
              wardType: 'YELLOW_TRINKET',
              creatorId: 6
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1214746,
              participantId: 5,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1215439,
              wardType: 'CONTROL_WARD',
              creatorId: 3
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1215439,
              participantId: 3,
              itemId: 2055
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1216858,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_KILL',
              timestamp: 1217452,
              wardType: 'BLUE_TRINKET',
              killerId: 3
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1218244,
              participantId: 7,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1221426,
              wardType: 'SIGHT_WARD',
              creatorId: 9
            },
            {
              type: 'WARD_KILL',
              timestamp: 1224429,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1225617,
              wardType: 'YELLOW_TRINKET',
              creatorId: 10
            },
            {
              type: 'WARD_KILL',
              timestamp: 1226344,
              wardType: 'CONTROL_WARD',
              killerId: 9
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1227862,
              wardType: 'SIGHT_WARD',
              creatorId: 4
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1230502,
              participantId: 1,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1231129,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1234504,
              participantId: 7,
              itemId: 3190
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1234504,
              participantId: 7,
              itemId: 3105
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1234504,
              participantId: 7,
              itemId: 1033
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1237870,
              participantId: 8,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1240708,
              wardType: 'SIGHT_WARD',
              creatorId: 4
            },
            {
              type: 'WARD_KILL',
              timestamp: 1243876,
              wardType: 'UNDEFINED',
              killerId: 3
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1245394,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_KILL',
              timestamp: 1248369,
              wardType: 'UNDEFINED',
              killerId: 3
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1249722,
              participantId: 4,
              itemId: 2003
            },
            {
              type: 'WARD_KILL',
              timestamp: 1250778,
              wardType: 'UNDEFINED',
              killerId: 3
            },
            {
              type: 'WARD_KILL',
              timestamp: 1256469,
              wardType: 'UNDEFINED',
              killerId: 4
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1259674,
              wardType: 'UNDEFINED',
              creatorId: 10
            }
          ],
          timestamp: 1260433
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 11356,
                y: 1482
              },
              currentGold: 442,
              totalGold: 6892,
              level: 13,
              xp: 10629,
              minionsKilled: 157,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 673,
                y: 3201
              },
              currentGold: 785,
              totalGold: 8285,
              level: 13,
              xp: 10207,
              minionsKilled: 13,
              jungleMinionsKilled: 100,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 11438,
                y: 1404
              },
              currentGold: 919,
              totalGold: 7189,
              level: 11,
              xp: 8011,
              minionsKilled: 152,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 394,
                y: 461
              },
              currentGold: 634,
              totalGold: 5235,
              level: 11,
              xp: 7302,
              minionsKilled: 11,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 1463,
                y: 4074
              },
              currentGold: 1972,
              totalGold: 7347,
              level: 14,
              xp: 11568,
              minionsKilled: 177,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 6660,
                y: 2552
              },
              currentGold: 1839,
              totalGold: 9389,
              level: 12,
              xp: 9751,
              minionsKilled: 182,
              jungleMinionsKilled: 12,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 7920,
                y: 1986
              },
              currentGold: 1083,
              totalGold: 7183,
              level: 12,
              xp: 8610,
              minionsKilled: 35,
              jungleMinionsKilled: 76,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 1238,
                y: 4944
              },
              currentGold: 2144,
              totalGold: 9619,
              level: 13,
              xp: 11262,
              minionsKilled: 207,
              jungleMinionsKilled: 16,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 7738,
                y: 931
              },
              currentGold: 1247,
              totalGold: 6697,
              level: 11,
              xp: 8092,
              minionsKilled: 50,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 14340,
                y: 14391
              },
              currentGold: 925,
              totalGold: 9636,
              level: 13,
              xp: 11353,
              minionsKilled: 210,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1260697,
              participantId: 6,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1265190,
              participantId: 2,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_KILL',
              timestamp: 1265294,
              wardType: 'UNDEFINED',
              killerId: 3
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1268965,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1268965,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 1271839,
              position: {
                x: 7496,
                y: 2570
              },
              killerId: 6,
              victimId: 2,
              assistingParticipantIds: [10, 9]
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 1273984,
              position: {
                x: 8565,
                y: 2275
              },
              killerId: 5,
              victimId: 10,
              assistingParticipantIds: [2, 3, 4]
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1274083,
              wardType: 'BLUE_TRINKET',
              creatorId: 6
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1275271,
              participantId: 6,
              itemId: 2010
            },
            {
              type: 'WARD_KILL',
              timestamp: 1276657,
              wardType: 'BLUE_TRINKET',
              killerId: 4
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1278902,
              participantId: 6,
              itemId: 2060
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1284512,
              participantId: 4,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 1287189,
              position: {
                x: 11438,
                y: 1404
              },
              killerId: 9,
              victimId: 3,
              assistingParticipantIds: [7, 6]
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 1287325,
              position: {
                x: 11356,
                y: 1482
              },
              killerId: 7,
              victimId: 1,
              assistingParticipantIds: [6, 9]
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1289140,
              participantId: 9,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1289503,
              participantId: 6,
              itemId: 2062
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1291656,
              participantId: 2,
              itemId: 3100
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1291656,
              participantId: 2,
              itemId: 3057
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1291656,
              participantId: 2,
              itemId: 3113
            },
            {
              type: 'WARD_KILL',
              timestamp: 1296870,
              wardType: 'UNDEFINED',
              killerId: 4
            },
            {
              type: 'WARD_KILL',
              timestamp: 1298256,
              wardType: 'UNDEFINED',
              killerId: 4
            },
            {
              type: 'WARD_KILL',
              timestamp: 1303074,
              wardType: 'UNDEFINED',
              killerId: 4
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1306077,
              participantId: 1,
              itemId: 1028
            },
            {
              type: 'BUILDING_KILL',
              timestamp: 1311258,
              position: {
                x: 6919,
                y: 1483
              },
              killerId: 7,
              assistingParticipantIds: [6, 9],
              teamId: 100,
              buildingType: 'TOWER_BUILDING',
              laneType: 'BOT_LANE',
              towerType: 'INNER_TURRET'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1315118,
              participantId: 7,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_SOLD',
              timestamp: 1315886,
              participantId: 10,
              itemId: 2010
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1317239,
              wardType: 'SIGHT_WARD',
              creatorId: 9
            }
          ],
          timestamp: 1320441
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 3559,
                y: 6548
              },
              currentGold: 677,
              totalGold: 7127,
              level: 13,
              xp: 10865,
              minionsKilled: 163,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 1997,
                y: 1239
              },
              currentGold: 1441,
              totalGold: 8941,
              level: 13,
              xp: 11225,
              minionsKilled: 14,
              jungleMinionsKilled: 108,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 8186,
                y: 1378
              },
              currentGold: 795,
              totalGold: 7565,
              level: 12,
              xp: 8597,
              minionsKilled: 163,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 7931,
                y: 1543
              },
              currentGold: 343,
              totalGold: 5378,
              level: 11,
              xp: 7590,
              minionsKilled: 11,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 6106,
                y: 6078
              },
              currentGold: 771,
              totalGold: 7746,
              level: 14,
              xp: 12354,
              minionsKilled: 182,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 5281,
                y: 9141
              },
              currentGold: 169,
              totalGold: 9636,
              level: 13,
              xp: 10014,
              minionsKilled: 182,
              jungleMinionsKilled: 20,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 7910,
                y: 9573
              },
              currentGold: 1418,
              totalGold: 7518,
              level: 12,
              xp: 9216,
              minionsKilled: 35,
              jungleMinionsKilled: 84,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 9724,
                y: 11726
              },
              currentGold: 43,
              totalGold: 9743,
              level: 13,
              xp: 11262,
              minionsKilled: 207,
              jungleMinionsKilled: 16,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 7963,
                y: 7786
              },
              currentGold: 161,
              totalGold: 6911,
              level: 11,
              xp: 8322,
              minionsKilled: 52,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 9897,
                y: 3131
              },
              currentGold: 397,
              totalGold: 9908,
              level: 14,
              xp: 11710,
              minionsKilled: 216,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1321860,
              participantId: 3,
              itemId: 2015
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1321860,
              participantId: 3,
              itemId: 1042
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1321992,
              participantId: 4,
              itemId: 1052
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1323260,
              participantId: 10,
              itemId: 1033
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 1326626,
              position: {
                x: 881,
                y: 5135
              },
              killerId: 2,
              victimId: 8,
              assistingParticipantIds: [5]
            },
            {
              type: 'ITEM_UNDO',
              timestamp: 1327088,
              participantId: 10,
              afterId: 0,
              beforeId: 1033
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1327880,
              participantId: 10,
              itemId: 3067
            },
            {
              type: 'WARD_KILL',
              timestamp: 1328144,
              wardType: 'SIGHT_WARD',
              killerId: 9
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1329215,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1331327,
              participantId: 8,
              itemId: 3151
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1331327,
              participantId: 8,
              itemId: 3136
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1331327,
              participantId: 8,
              itemId: 1026
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1333043,
              participantId: 5,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1333835,
              participantId: 8,
              itemId: 3003
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1333835,
              participantId: 8,
              itemId: 3070
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1333835,
              participantId: 8,
              itemId: 3802
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1335757,
              participantId: 8,
              itemId: 2055
            },
            {
              type: 'ELITE_MONSTER_KILL',
              timestamp: 1337902,
              position: {
                x: 9866,
                y: 4414
              },
              killerId: 6,
              monsterType: 'DRAGON',
              monsterSubType: 'AIR_DRAGON'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1339585,
              wardType: 'BLUE_TRINKET',
              creatorId: 3
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1343483,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1345133,
              participantId: 5,
              itemId: 3151
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1345133,
              participantId: 5,
              itemId: 3136
            },
            {
              type: 'ITEM_SOLD',
              timestamp: 1347410,
              participantId: 6,
              itemId: 2062
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1347905,
              participantId: 9,
              itemId: 1011
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1348664,
              participantId: 6,
              itemId: 3156
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1348664,
              participantId: 6,
              itemId: 3155
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1349258,
              participantId: 9,
              itemId: 1029
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1351112,
              participantId: 9,
              itemId: 3364
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1351112,
              participantId: 9,
              itemId: 3341
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1358009,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1362101,
              wardType: 'SIGHT_WARD',
              creatorId: 4
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1363817,
              participantId: 8,
              itemId: 2003
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1366591,
              participantId: 1,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1369525,
              participantId: 10,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1371904,
              participantId: 6,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1373059,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1379528,
              wardType: 'YELLOW_TRINKET',
              creatorId: 10
            }
          ],
          timestamp: 1380454
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 901,
                y: 542
              },
              currentGold: 710,
              totalGold: 7960,
              level: 14,
              xp: 11749,
              minionsKilled: 174,
              jungleMinionsKilled: 8,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 6158,
                y: 4503
              },
              currentGold: 1664,
              totalGold: 9164,
              level: 13,
              xp: 11284,
              minionsKilled: 14,
              jungleMinionsKilled: 108,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 4653,
                y: 2860
              },
              currentGold: 1224,
              totalGold: 7994,
              level: 12,
              xp: 8947,
              minionsKilled: 172,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 4853,
                y: 4469
              },
              currentGold: 625,
              totalGold: 5660,
              level: 11,
              xp: 7900,
              minionsKilled: 11,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 4886,
                y: 3795
              },
              currentGold: 1150,
              totalGold: 8125,
              level: 14,
              xp: 12766,
              minionsKilled: 190,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 5871,
                y: 3801
              },
              currentGold: 745,
              totalGold: 10213,
              level: 13,
              xp: 10450,
              minionsKilled: 184,
              jungleMinionsKilled: 24,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 6048,
                y: 4566
              },
              currentGold: 540,
              totalGold: 7640,
              level: 12,
              xp: 9519,
              minionsKilled: 35,
              jungleMinionsKilled: 84,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 5254,
                y: 5981
              },
              currentGold: 368,
              totalGold: 10067,
              level: 14,
              xp: 11590,
              minionsKilled: 217,
              jungleMinionsKilled: 16,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 6132,
                y: 4768
              },
              currentGold: 619,
              totalGold: 7369,
              level: 12,
              xp: 9079,
              minionsKilled: 60,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 5147,
                y: 1952
              },
              currentGold: 891,
              totalGold: 10402,
              level: 14,
              xp: 12538,
              minionsKilled: 233,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1381708,
              participantId: 7,
              itemId: 3082
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1385107,
              wardType: 'YELLOW_TRINKET',
              creatorId: 6
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1386262,
              participantId: 3,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1391281,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1397423,
              participantId: 9,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1398182,
              wardType: 'BLUE_TRINKET',
              creatorId: 8
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1398314,
              wardType: 'SIGHT_WARD',
              creatorId: 4
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1404121,
              participantId: 8,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1405804,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_KILL',
              timestamp: 1411651,
              wardType: 'UNDEFINED',
              killerId: 4
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1412575,
              participantId: 5,
              itemId: 2003
            },
            {
              type: 'WARD_KILL',
              timestamp: 1417922,
              wardType: 'CONTROL_WARD',
              killerId: 9
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1419473,
              wardType: 'SIGHT_WARD',
              creatorId: 9
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1420331,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1423103,
              participantId: 8,
              itemId: 2003
            },
            {
              type: 'BUILDING_KILL',
              timestamp: 1429931,
              position: {
                x: 4318,
                y: 13875
              },
              killerId: 0,
              assistingParticipantIds: [],
              teamId: 200,
              buildingType: 'TOWER_BUILDING',
              laneType: 'TOP_LANE',
              towerType: 'OUTER_TURRET'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1434629,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 1434893,
              position: {
                x: 6158,
                y: 4503
              },
              killerId: 6,
              victimId: 2,
              assistingParticipantIds: [9]
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1439190,
              participantId: 1,
              itemId: 3052
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1439190,
              participantId: 1,
              itemId: 1028
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1440346,
              participantId: 6,
              itemId: 2004
            }
          ],
          timestamp: 1440479
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 6055,
                y: 1600
              },
              currentGold: 1057,
              totalGold: 8307,
              level: 14,
              xp: 12378,
              minionsKilled: 175,
              jungleMinionsKilled: 8,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 6411,
                y: 1746
              },
              currentGold: 1237,
              totalGold: 9587,
              level: 14,
              xp: 11607,
              minionsKilled: 14,
              jungleMinionsKilled: 108,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 3002,
                y: 1634
              },
              currentGold: 1447,
              totalGold: 8217,
              level: 12,
              xp: 9736,
              minionsKilled: 177,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 6078,
                y: 1131
              },
              currentGold: 1049,
              totalGold: 6084,
              level: 11,
              xp: 8560,
              minionsKilled: 15,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 4523,
                y: 2345
              },
              currentGold: 879,
              totalGold: 8654,
              level: 15,
              xp: 13074,
              minionsKilled: 193,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 7902,
                y: 1124
              },
              currentGold: 1331,
              totalGold: 10799,
              level: 13,
              xp: 10810,
              minionsKilled: 187,
              jungleMinionsKilled: 24,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 3914,
                y: 1420
              },
              currentGold: 1104,
              totalGold: 8204,
              level: 13,
              xp: 9996,
              minionsKilled: 38,
              jungleMinionsKilled: 84,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 3950,
                y: 4415
              },
              currentGold: 1307,
              totalGold: 11007,
              level: 14,
              xp: 12502,
              minionsKilled: 235,
              jungleMinionsKilled: 20,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 8018,
                y: 1046
              },
              currentGold: 1248,
              totalGold: 7998,
              level: 12,
              xp: 9555,
              minionsKilled: 63,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 3762,
                y: 1264
              },
              currentGold: 1821,
              totalGold: 11333,
              level: 15,
              xp: 13074,
              minionsKilled: 242,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'WARD_PLACED',
              timestamp: 1440643,
              wardType: 'YELLOW_TRINKET',
              creatorId: 6
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1446386,
              wardType: 'SIGHT_WARD',
              creatorId: 4
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1448894,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'BUILDING_KILL',
              timestamp: 1454544,
              position: {
                x: 5048,
                y: 4812
              },
              killerId: 6,
              assistingParticipantIds: [8, 9],
              teamId: 100,
              buildingType: 'TOWER_BUILDING',
              laneType: 'MID_LANE',
              towerType: 'INNER_TURRET'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1454940,
              participantId: 1,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1457349,
              participantId: 8,
              itemId: 3003
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1466343,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1470502,
              wardType: 'CONTROL_WARD',
              creatorId: 8
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1470502,
              participantId: 8,
              itemId: 2055
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1471591,
              participantId: 5,
              itemId: 3020
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1471591,
              participantId: 5,
              itemId: 2422
            },
            {
              type: 'BUILDING_KILL',
              timestamp: 1477445,
              position: {
                x: 4281,
                y: 1253
              },
              killerId: 6,
              assistingParticipantIds: [10, 9],
              teamId: 100,
              buildingType: 'TOWER_BUILDING',
              laneType: 'BOT_LANE',
              towerType: 'BASE_TURRET'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1480617,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 1481179,
              position: {
                x: 3002,
                y: 1634
              },
              killerId: 10,
              victimId: 3,
              assistingParticipantIds: [7, 6, 9]
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1482665,
              participantId: 10,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1483603,
              participantId: 2,
              itemId: 1026
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1485475,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1485475,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 1488181,
              position: {
                x: 3762,
                y: 1264
              },
              killerId: 5,
              victimId: 10,
              assistingParticipantIds: [1, 4]
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1489221,
              participantId: 2,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 1490758,
              position: {
                x: 3914,
                y: 1420
              },
              killerId: 2,
              victimId: 7,
              assistingParticipantIds: [1, 5, 4]
            },
            {
              type: 'WARD_KILL',
              timestamp: 1495201,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1496389,
              participantId: 7,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_KILL',
              timestamp: 1498472,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'WARD_KILL',
              timestamp: 1498604,
              wardType: 'UNDEFINED',
              killerId: 4
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1498802,
              participantId: 5,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            }
          ],
          timestamp: 1500495
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 12178,
                y: 1772
              },
              currentGold: 1696,
              totalGold: 8946,
              level: 15,
              xp: 13348,
              minionsKilled: 191,
              jungleMinionsKilled: 12,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 7083,
                y: 8007
              },
              currentGold: 1589,
              totalGold: 9939,
              level: 14,
              xp: 12167,
              minionsKilled: 15,
              jungleMinionsKilled: 116,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 7366,
                y: 5093
              },
              currentGold: 181,
              totalGold: 8451,
              level: 12,
              xp: 9931,
              minionsKilled: 177,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 5337,
                y: 5744
              },
              currentGold: 632,
              totalGold: 6268,
              level: 12,
              xp: 8865,
              minionsKilled: 18,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 1952,
                y: 1667
              },
              currentGold: 384,
              totalGold: 9009,
              level: 15,
              xp: 13759,
              minionsKilled: 203,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 9341,
                y: 9147
              },
              currentGold: 740,
              totalGold: 11108,
              level: 13,
              xp: 11173,
              minionsKilled: 187,
              jungleMinionsKilled: 32,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 6934,
                y: 9485
              },
              currentGold: 339,
              totalGold: 8439,
              level: 13,
              xp: 10291,
              minionsKilled: 38,
              jungleMinionsKilled: 88,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 6927,
                y: 6736
              },
              currentGold: 1793,
              totalGold: 11492,
              level: 14,
              xp: 12978,
              minionsKilled: 248,
              jungleMinionsKilled: 24,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 8598,
                y: 5613
              },
              currentGold: 779,
              totalGold: 8229,
              level: 12,
              xp: 9826,
              minionsKilled: 66,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 13253,
                y: 3984
              },
              currentGold: 143,
              totalGold: 11455,
              level: 15,
              xp: 13074,
              minionsKilled: 242,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1502476,
              participantId: 3,
              itemId: 3087
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1502476,
              participantId: 3,
              itemId: 3086
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1502476,
              participantId: 3,
              itemId: 2015
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1504060,
              participantId: 6,
              itemId: 2059
            },
            {
              type: 'ITEM_UNDO',
              timestamp: 1504885,
              participantId: 3,
              afterId: 0,
              beforeId: 3087
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1505413,
              participantId: 4,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1505677,
              participantId: 3,
              itemId: 3094
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1505677,
              participantId: 3,
              itemId: 3086
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1505677,
              participantId: 3,
              itemId: 2015
            },
            {
              type: 'ITEM_UNDO',
              timestamp: 1508482,
              participantId: 3,
              afterId: 0,
              beforeId: 3094
            },
            {
              type: 'ITEM_SOLD',
              timestamp: 1508746,
              participantId: 10,
              itemId: 2033
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1509670,
              participantId: 10,
              itemId: 3065
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1509670,
              participantId: 10,
              itemId: 3067
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1510297,
              wardType: 'YELLOW_TRINKET',
              creatorId: 6
            },
            {
              type: 'WARD_KILL',
              timestamp: 1511485,
              wardType: 'BLUE_TRINKET',
              killerId: 8
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1511584,
              participantId: 3,
              itemId: 3094
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1511584,
              participantId: 3,
              itemId: 3086
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1511584,
              participantId: 3,
              itemId: 2015
            },
            {
              type: 'WARD_KILL',
              timestamp: 1513036,
              wardType: 'UNDEFINED',
              killerId: 1
            },
            {
              type: 'WARD_KILL',
              timestamp: 1514656,
              wardType: 'YELLOW_TRINKET',
              killerId: 4
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1517065,
              wardType: 'YELLOW_TRINKET',
              creatorId: 2
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1519639,
              participantId: 9,
              itemId: 3082
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1519639,
              participantId: 9,
              itemId: 1029
            },
            {
              type: 'WARD_KILL',
              timestamp: 1520200,
              wardType: 'BLUE_TRINKET',
              killerId: 4
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1520794,
              wardType: 'CONTROL_WARD',
              creatorId: 4
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1520794,
              participantId: 4,
              itemId: 2055
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1525946,
              wardType: 'SIGHT_WARD',
              creatorId: 4
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1526507,
              participantId: 3,
              itemId: 1053
            },
            {
              type: 'WARD_KILL',
              timestamp: 1528950,
              wardType: 'BLUE_TRINKET',
              killerId: 4
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1529543,
              participantId: 7,
              itemId: 1011
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1540173,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1541031,
              participantId: 4,
              itemId: 2420
            },
            {
              type: 'WARD_KILL',
              timestamp: 1541625,
              wardType: 'CONTROL_WARD',
              killerId: 2
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1543506,
              participantId: 6,
              itemId: 1053
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1549055,
              participantId: 1,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1552091,
              wardType: 'BLUE_TRINKET',
              creatorId: 8
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1553295,
              wardType: 'YELLOW_TRINKET',
              creatorId: 2
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1553658,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1556360,
              participantId: 5,
              itemId: 1026
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1559231,
              wardType: 'SIGHT_WARD',
              creatorId: 4
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1559363,
              wardType: 'SIGHT_WARD',
              creatorId: 9
            }
          ],
          timestamp: 1560525
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              position: {
                x: 6277,
                y: 1173
              },
              currentGold: 799,
              totalGold: 9149,
              level: 15,
              xp: 13598,
              minionsKilled: 195,
              jungleMinionsKilled: 12,
              dominionScore: 0,
              teamScore: 0
            },
            '2': {
              participantId: 2,
              position: {
                x: 394,
                y: 461
              },
              currentGold: 159,
              totalGold: 10063,
              level: 14,
              xp: 12167,
              minionsKilled: 15,
              jungleMinionsKilled: 116,
              dominionScore: 0,
              teamScore: 0
            },
            '3': {
              participantId: 3,
              position: {
                x: 5515,
                y: 1339
              },
              currentGold: 455,
              totalGold: 8725,
              level: 13,
              xp: 10225,
              minionsKilled: 184,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            },
            '4': {
              participantId: 4,
              position: {
                x: 1602,
                y: 4883
              },
              currentGold: 890,
              totalGold: 6525,
              level: 12,
              xp: 9121,
              minionsKilled: 22,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '5': {
              participantId: 5,
              position: {
                x: 2695,
                y: 4102
              },
              currentGold: 675,
              totalGold: 9300,
              level: 15,
              xp: 14267,
              minionsKilled: 210,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '6': {
              participantId: 6,
              position: {
                x: 1457,
                y: 7609
              },
              currentGold: 1365,
              totalGold: 11733,
              level: 14,
              xp: 12337,
              minionsKilled: 193,
              jungleMinionsKilled: 32,
              dominionScore: 0,
              teamScore: 0
            },
            '7': {
              participantId: 7,
              position: {
                x: 2531,
                y: 6308
              },
              currentGold: 1106,
              totalGold: 9206,
              level: 13,
              xp: 11404,
              minionsKilled: 40,
              jungleMinionsKilled: 88,
              dominionScore: 0,
              teamScore: 0
            },
            '8': {
              participantId: 8,
              position: {
                x: 1227,
                y: 7641
              },
              currentGold: 2449,
              totalGold: 12148,
              level: 15,
              xp: 14270,
              minionsKilled: 252,
              jungleMinionsKilled: 32,
              dominionScore: 0,
              teamScore: 0
            },
            '9': {
              participantId: 9,
              position: {
                x: 1582,
                y: 7703
              },
              currentGold: 1329,
              totalGold: 8779,
              level: 13,
              xp: 11039,
              minionsKilled: 68,
              jungleMinionsKilled: 0,
              dominionScore: 0,
              teamScore: 0
            },
            '10': {
              participantId: 10,
              position: {
                x: 7047,
                y: 3114
              },
              currentGold: 1073,
              totalGold: 12384,
              level: 16,
              xp: 14800,
              minionsKilled: 264,
              jungleMinionsKilled: 4,
              dominionScore: 0,
              teamScore: 0
            }
          },
          events: [
            {
              type: 'WARD_PLACED',
              timestamp: 1561912,
              wardType: 'BLUE_TRINKET',
              creatorId: 3
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1562704,
              wardType: 'SIGHT_WARD',
              creatorId: 9
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1567150,
              participantId: 8,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1567183,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 1572218,
              position: {
                x: 5068,
                y: 5487
              },
              killerId: 7,
              victimId: 2,
              assistingParticipantIds: [8, 6, 9]
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1573803,
              participantId: 9,
              skillSlot: 3,
              levelUpType: 'NORMAL'
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1574991,
              participantId: 1,
              itemId: 3748
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1574991,
              participantId: 1,
              itemId: 3077
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1574991,
              participantId: 1,
              itemId: 3052
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1578028,
              wardType: 'SIGHT_WARD',
              creatorId: 4
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1579820,
              participantId: 3,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1580678,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1583978,
              participantId: 6,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1586850,
              wardType: 'SIGHT_WARD',
              creatorId: 9
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1591998,
              wardType: 'SIGHT_WARD',
              creatorId: 9
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1594144,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ITEM_SOLD',
              timestamp: 1595465,
              participantId: 2,
              itemId: 1082
            },
            {
              type: 'ITEM_PURCHASED',
              timestamp: 1596124,
              participantId: 2,
              itemId: 3135
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1596124,
              participantId: 2,
              itemId: 1026
            },
            {
              type: 'WARD_KILL',
              timestamp: 1605170,
              wardType: 'UNDEFINED',
              killerId: 3
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1607648,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'ELITE_MONSTER_KILL',
              timestamp: 1608552,
              position: {
                x: 5007,
                y: 10471
              },
              killerId: 8,
              monsterType: 'BARON_NASHOR'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1614690,
              participantId: 10,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1619063,
              wardType: 'CONTROL_WARD',
              creatorId: 10
            },
            {
              type: 'ITEM_DESTROYED',
              timestamp: 1619063,
              participantId: 10,
              itemId: 2055
            }
          ],
          timestamp: 1620554
        },
        {
          participantFrames: {
            '1': {
              participantId: 1,
              currentGold: 958,
              totalGold: 9308,
              level: 15,
              xp: 13696,
              minionsKilled: 196,
              jungleMinionsKilled: 12
            },
            '2': {
              participantId: 2,
              currentGold: 22,
              totalGold: 10172,
              level: 14,
              xp: 12192,
              minionsKilled: 15,
              jungleMinionsKilled: 116
            },
            '3': {
              participantId: 3,
              currentGold: 405,
              totalGold: 8855,
              level: 13,
              xp: 10324,
              minionsKilled: 185,
              jungleMinionsKilled: 4
            },
            '4': {
              participantId: 4,
              currentGold: 1074,
              totalGold: 6709,
              level: 12,
              xp: 9147,
              minionsKilled: 22,
              jungleMinionsKilled: 0
            },
            '5': {
              participantId: 5,
              currentGold: 784,
              totalGold: 9409,
              level: 15,
              xp: 14292,
              minionsKilled: 210,
              jungleMinionsKilled: 0
            },
            '6': {
              participantId: 6,
              currentGold: 2709,
              totalGold: 13109,
              level: 15,
              xp: 13331,
              minionsKilled: 199,
              jungleMinionsKilled: 32
            },
            '7': {
              participantId: 7,
              currentGold: 2051,
              totalGold: 10151,
              level: 14,
              xp: 12524,
              minionsKilled: 44,
              jungleMinionsKilled: 88
            },
            '8': {
              participantId: 8,
              currentGold: 3358,
              totalGold: 13058,
              level: 16,
              xp: 15235,
              minionsKilled: 256,
              jungleMinionsKilled: 32
            },
            '9': {
              participantId: 9,
              currentGold: 2069,
              totalGold: 9519,
              level: 14,
              xp: 12175,
              minionsKilled: 69,
              jungleMinionsKilled: 0
            },
            '10': {
              participantId: 10,
              currentGold: 1443,
              totalGold: 13001,
              level: 16,
              xp: 15306,
              minionsKilled: 270,
              jungleMinionsKilled: 4
            }
          },
          events: [
            {
              type: 'WARD_PLACED',
              timestamp: 1621148,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1621808,
              wardType: 'SIGHT_WARD',
              creatorId: 4
            },
            {
              type: 'WARD_KILL',
              timestamp: 1622963,
              wardType: 'CONTROL_WARD',
              killerId: 10
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1624811,
              wardType: 'YELLOW_TRINKET',
              creatorId: 10
            },
            {
              type: 'BUILDING_KILL',
              timestamp: 1631960,
              position: {
                x: 1169,
                y: 4287
              },
              killerId: 0,
              assistingParticipantIds: [8, 9],
              teamId: 100,
              buildingType: 'TOWER_BUILDING',
              laneType: 'TOP_LANE',
              towerType: 'BASE_TURRET'
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 1633902,
              position: {
                x: 2323,
                y: 4358
              },
              killerId: 6,
              victimId: 5,
              assistingParticipantIds: [7, 9]
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1634442,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 1637104,
              position: {
                x: 3425,
                y: 3568
              },
              killerId: 7,
              victimId: 2,
              assistingParticipantIds: [6, 9]
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 1639658,
              position: {
                x: 2260,
                y: 3673
              },
              killerId: 8,
              victimId: 1,
              assistingParticipantIds: [6, 9]
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1641811,
              participantId: 8,
              skillSlot: 4,
              levelUpType: 'NORMAL'
            },
            {
              type: 'CHAMPION_KILL',
              timestamp: 1643395,
              position: {
                x: 3438,
                y: 3155
              },
              killerId: 6,
              victimId: 4,
              assistingParticipantIds: [7, 8]
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1645078,
              participantId: 9,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1646370,
              participantId: 6,
              skillSlot: 2,
              levelUpType: 'NORMAL'
            },
            {
              type: 'BUILDING_KILL',
              timestamp: 1647294,
              position: {
                x: 1171,
                y: 3571
              },
              killerId: 10,
              assistingParticipantIds: [9],
              teamId: 100,
              buildingType: 'INHIBITOR_BUILDING',
              laneType: 'TOP_LANE',
              towerType: 'UNDEFINED_TURRET'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1647954,
              wardType: 'UNDEFINED',
              creatorId: 10
            },
            {
              type: 'SKILL_LEVEL_UP',
              timestamp: 1649670,
              participantId: 7,
              skillSlot: 1,
              levelUpType: 'NORMAL'
            },
            {
              type: 'BUILDING_KILL',
              timestamp: 1654886,
              position: {
                x: 1748,
                y: 2270
              },
              killerId: 8,
              assistingParticipantIds: [10, 7, 6, 9],
              teamId: 100,
              buildingType: 'TOWER_BUILDING',
              laneType: 'MID_LANE',
              towerType: 'NEXUS_TURRET'
            },
            {
              type: 'BUILDING_KILL',
              timestamp: 1660324,
              position: {
                x: 2177,
                y: 1807
              },
              killerId: 10,
              assistingParticipantIds: [7, 8, 6, 9],
              teamId: 100,
              buildingType: 'TOWER_BUILDING',
              laneType: 'MID_LANE',
              towerType: 'NEXUS_TURRET'
            },
            {
              type: 'WARD_PLACED',
              timestamp: 1661446,
              wardType: 'UNDEFINED',
              creatorId: 10
            }
          ],
          timestamp: 1680554
        }
      ],
      frameInterval: 60000
    }
  },
  trophyHunter: {
    _id: '1',
    summonerId: 42899573,
    rank: 123,
    score: 123333,
    summonerLevel: 33,
    leaguePositions: [
      {
        tier: 'PLATINUM',
        queueType: 'RANKED_FLEX_SR',
        rank: 'II'
      },
      {
        tier: 'DIAMOND',
        queueType: 'RANKED_SOLO_5x5',
        rank: 'V'
      }
    ],
    status: 'online',
    region: 'EUW',
    summonerName: 'sirlunchalot619',
    profileIconId: 785,
    items: {
      avatar: {
        borderColor: '#41c1c1',
        borderRadius: '10% 40% 10%'
      }
    }
  }
};
storiesOf('Components', module)
  .add('Match:Header', () => <MatchHeader />)
  .add('Match:Basic', () => (
    <Match
      championId={69}
      match={sampleMatchWithTrophyHunter.match}
      trophyHunter={sampleMatchWithTrophyHunter.trophyHunter}
    />
  ));
