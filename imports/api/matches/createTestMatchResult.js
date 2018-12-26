import defaultsDeep from 'lodash.defaultsdeep';

const matchResultDefaults = {
  gameId: 185274991,
  platformId: 'OC1',
  gameCreation: 1505168266458,
  gameDuration: 1540,
  queueId: 420,
  mapId: 11,
  seasonId: 9,
  gameVersion: '7.17.201.3671',
  gameMode: 'CLASSIC',
  gameType: 'MATCHED_GAME',
  teams: [
    {
      teamId: 100,
      win: 'Fail',
      firstBlood: true,
      firstTower: false,
      firstInhibitor: false,
      firstBaron: false,
      firstDragon: false,
      firstRiftHerald: false,
      towerKills: 2,
      inhibitorKills: 0,
      baronKills: 0,
      dragonKills: 1,
      vilemawKills: 0,
      riftHeraldKills: 0,
      dominionVictoryScore: 0,
      bans: [
        {
          championId: -1,
          pickTurn: 1
        },
        {
          championId: 53,
          pickTurn: 2
        },
        {
          championId: 266,
          pickTurn: 3
        },
        {
          championId: 119,
          pickTurn: 4
        },
        {
          championId: 57,
          pickTurn: 5
        }
      ]
    },
    {
      teamId: 200,
      win: 'Win',
      firstBlood: false,
      firstTower: true,
      firstInhibitor: true,
      firstBaron: true,
      firstDragon: true,
      firstRiftHerald: true,
      towerKills: 10,
      inhibitorKills: 2,
      baronKills: 1,
      dragonKills: 2,
      vilemawKills: 0,
      riftHeraldKills: 1,
      dominionVictoryScore: 0,
      bans: [
        {
          championId: 29,
          pickTurn: 6
        },
        {
          championId: 119,
          pickTurn: 7
        },
        {
          championId: 238,
          pickTurn: 8
        },
        {
          championId: 122,
          pickTurn: 9
        },
        {
          championId: 31,
          pickTurn: 10
        }
      ]
    }
  ],
  participants: [
    {
      participantId: 1,
      teamId: 100,
      championId: 69,
      spell1Id: 7,
      spell2Id: 4,
      masteries: [
        {
          masteryId: 6114,
          rank: 5
        },
        {
          masteryId: 6123,
          rank: 1
        },
        {
          masteryId: 6131,
          rank: 5
        },
        {
          masteryId: 6143,
          rank: 1
        },
        {
          masteryId: 6312,
          rank: 5
        },
        {
          masteryId: 6321,
          rank: 1
        },
        {
          masteryId: 6332,
          rank: 5
        },
        {
          masteryId: 6343,
          rank: 1
        },
        {
          masteryId: 6351,
          rank: 5
        },
        {
          masteryId: 6362,
          rank: 1
        }
      ],
      runes: [
        {
          runeId: 5245,
          rank: 9
        },
        {
          runeId: 5277,
          rank: 9
        },
        {
          runeId: 5317,
          rank: 9
        },
        {
          runeId: 5357,
          rank: 3
        }
      ],
      highestAchievedSeasonTier: 'UNRANKED',
      stats: {
        participantId: 1,
        win: false,
        item0: 3070,
        item1: 2033,
        item2: 3027,
        item3: 3116,
        item4: 3136,
        item5: 0,
        item6: 3340,
        kills: 2,
        deaths: 4,
        assists: 7,
        largestKillingSpree: 2,
        largestMultiKill: 1,
        killingSprees: 1,
        longestTimeSpentLiving: 579,
        doubleKills: 0,
        tripleKills: 0,
        quadraKills: 0,
        pentaKills: 0,
        unrealKills: 0,
        totalDamageDealt: 84777,
        magicDamageDealt: 67909,
        physicalDamageDealt: 16755,
        trueDamageDealt: 112,
        largestCriticalStrike: 0,
        totalDamageDealtToChampions: 9781,
        magicDamageDealtToChampions: 9070,
        physicalDamageDealtToChampions: 655,
        trueDamageDealtToChampions: 56,
        totalHeal: 6103,
        totalUnitsHealed: 3,
        damageSelfMitigated: 7012,
        damageDealtToObjectives: 1497,
        damageDealtToTurrets: 1497,
        visionScore: 23,
        timeCCingOthers: 16,
        totalDamageTaken: 19430,
        magicalDamageTaken: 9741,
        physicalDamageTaken: 9347,
        trueDamageTaken: 342,
        goldEarned: 8594,
        goldSpent: 8125,
        turretKills: 0,
        inhibitorKills: 0,
        totalMinionsKilled: 158,
        neutralMinionsKilled: 20,
        neutralMinionsKilledTeamJungle: 12,
        neutralMinionsKilledEnemyJungle: 0,
        totalTimeCrowdControlDealt: 2815,
        champLevel: 13,
        visionWardsBoughtInGame: 1,
        sightWardsBoughtInGame: 0,
        wardsPlaced: 11,
        wardsKilled: 1,
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
        playerScore9: 0
      },
      timeline: {
        participantId: 1,
        creepsPerMinDeltas: {
          '10-20': 5.8,
          '0-10': 6.9
        },
        xpPerMinDeltas: {
          '10-20': 476.8,
          '0-10': 413.2
        },
        goldPerMinDeltas: {
          '10-20': 380.9,
          '0-10': 263.1
        },
        csDiffPerMinDeltas: {
          '10-20': -0.7,
          '0-10': 1.1
        },
        xpDiffPerMinDeltas: {
          '10-20': 11.9,
          '0-10': 17.1
        },
        damageTakenPerMinDeltas: {
          '10-20': 815,
          '0-10': 355.4
        },
        damageTakenDiffPerMinDeltas: {
          '10-20': 312.2,
          '0-10': 103.5
        },
        role: 'SOLO',
        lane: 'MIDDLE'
      }
    },
    {
      participantId: 2,
      teamId: 100,
      championId: 16,
      spell1Id: 3,
      spell2Id: 4,
      masteries: [
        {
          masteryId: 6211,
          rank: 5
        },
        {
          masteryId: 6221,
          rank: 1
        },
        {
          masteryId: 6231,
          rank: 5
        },
        {
          masteryId: 6241,
          rank: 1
        },
        {
          masteryId: 6311,
          rank: 5
        },
        {
          masteryId: 6322,
          rank: 1
        },
        {
          masteryId: 6332,
          rank: 5
        },
        {
          masteryId: 6342,
          rank: 1
        },
        {
          masteryId: 6352,
          rank: 5
        },
        {
          masteryId: 6362,
          rank: 1
        }
      ],
      runes: [
        {
          runeId: 5273,
          rank: 9
        },
        {
          runeId: 5291,
          rank: 6
        },
        {
          runeId: 5297,
          rank: 3
        },
        {
          runeId: 5331,
          rank: 9
        },
        {
          runeId: 5357,
          rank: 1
        },
        {
          runeId: 5365,
          rank: 2
        }
      ],
      highestAchievedSeasonTier: 'BRONZE',
      stats: {
        participantId: 2,
        win: false,
        item0: 3096,
        item1: 3504,
        item2: 3107,
        item3: 3114,
        item4: 1001,
        item5: 3028,
        item6: 3340,
        kills: 2,
        deaths: 3,
        assists: 8,
        largestKillingSpree: 2,
        largestMultiKill: 1,
        killingSprees: 1,
        longestTimeSpentLiving: 953,
        doubleKills: 0,
        tripleKills: 0,
        quadraKills: 0,
        pentaKills: 0,
        unrealKills: 0,
        totalDamageDealt: 20218,
        magicDamageDealt: 16990,
        physicalDamageDealt: 3228,
        trueDamageDealt: 0,
        largestCriticalStrike: 0,
        totalDamageDealtToChampions: 4391,
        magicDamageDealtToChampions: 4111,
        physicalDamageDealtToChampions: 280,
        trueDamageDealtToChampions: 0,
        totalHeal: 16977,
        totalUnitsHealed: 7,
        damageSelfMitigated: 2732,
        damageDealtToObjectives: 833,
        damageDealtToTurrets: 233,
        visionScore: 9,
        timeCCingOthers: 39,
        totalDamageTaken: 7804,
        magicalDamageTaken: 3311,
        physicalDamageTaken: 4463,
        trueDamageTaken: 30,
        goldEarned: 7519,
        goldSpent: 7225,
        turretKills: 0,
        inhibitorKills: 0,
        totalMinionsKilled: 13,
        neutralMinionsKilled: 1,
        neutralMinionsKilledTeamJungle: 1,
        neutralMinionsKilledEnemyJungle: 0,
        totalTimeCrowdControlDealt: 359,
        champLevel: 11,
        visionWardsBoughtInGame: 1,
        sightWardsBoughtInGame: 0,
        wardsPlaced: 5,
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
        playerScore9: 0
      },
      timeline: {
        participantId: 2,
        creepsPerMinDeltas: {
          '10-20': 0.6,
          '0-10': 0.4
        },
        xpPerMinDeltas: {
          '10-20': 329.6,
          '0-10': 293
        },
        goldPerMinDeltas: {
          '10-20': 347.1,
          '0-10': 220
        },
        damageTakenPerMinDeltas: {
          '10-20': 348.3,
          '0-10': 132.9
        },
        role: 'DUO_SUPPORT',
        lane: 'BOTTOM'
      }
    },
    {
      participantId: 3,
      teamId: 100,
      championId: 64,
      spell1Id: 4,
      spell2Id: 11,
      masteries: [
        {
          masteryId: 6111,
          rank: 5
        },
        {
          masteryId: 6121,
          rank: 1
        },
        {
          masteryId: 6131,
          rank: 5
        },
        {
          masteryId: 6141,
          rank: 1
        },
        {
          masteryId: 6311,
          rank: 5
        },
        {
          masteryId: 6321,
          rank: 1
        },
        {
          masteryId: 6331,
          rank: 5
        },
        {
          masteryId: 6343,
          rank: 1
        },
        {
          masteryId: 6351,
          rank: 5
        },
        {
          masteryId: 6362,
          rank: 1
        }
      ],
      runes: [
        {
          runeId: 5245,
          rank: 9
        },
        {
          runeId: 5290,
          rank: 9
        },
        {
          runeId: 5317,
          rank: 9
        },
        {
          runeId: 5335,
          rank: 2
        },
        {
          runeId: 5365,
          rank: 1
        }
      ],
      highestAchievedSeasonTier: 'SILVER',
      stats: {
        participantId: 3,
        win: false,
        item0: 3748,
        item1: 1408,
        item2: 2031,
        item3: 3117,
        item4: 1031,
        item5: 0,
        item6: 3340,
        kills: 4,
        deaths: 5,
        assists: 5,
        largestKillingSpree: 2,
        largestMultiKill: 1,
        killingSprees: 1,
        longestTimeSpentLiving: 533,
        doubleKills: 0,
        tripleKills: 0,
        quadraKills: 0,
        pentaKills: 0,
        unrealKills: 0,
        totalDamageDealt: 92161,
        magicDamageDealt: 16872,
        physicalDamageDealt: 67894,
        trueDamageDealt: 7394,
        largestCriticalStrike: 0,
        totalDamageDealtToChampions: 6490,
        magicDamageDealtToChampions: 1123,
        physicalDamageDealtToChampions: 5289,
        trueDamageDealtToChampions: 78,
        totalHeal: 6248,
        totalUnitsHealed: 1,
        damageSelfMitigated: 13998,
        damageDealtToObjectives: 5173,
        damageDealtToTurrets: 0,
        visionScore: 21,
        timeCCingOthers: 10,
        totalDamageTaken: 25007,
        magicalDamageTaken: 8448,
        physicalDamageTaken: 15907,
        trueDamageTaken: 652,
        goldEarned: 8078,
        goldSpent: 7975,
        turretKills: 0,
        inhibitorKills: 0,
        totalMinionsKilled: 26,
        neutralMinionsKilled: 70,
        neutralMinionsKilledTeamJungle: 42,
        neutralMinionsKilledEnemyJungle: 7,
        totalTimeCrowdControlDealt: 644,
        champLevel: 12,
        visionWardsBoughtInGame: 0,
        sightWardsBoughtInGame: 0,
        wardsPlaced: 14,
        wardsKilled: 0,
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
        playerScore9: 0
      },
      timeline: {
        participantId: 3,
        creepsPerMinDeltas: {
          '10-20': 1.7,
          '0-10': 0
        },
        xpPerMinDeltas: {
          '10-20': 399,
          '0-10': 255
        },
        goldPerMinDeltas: {
          '10-20': 316.2,
          '0-10': 273.3
        },
        damageTakenPerMinDeltas: {
          '10-20': 953.1,
          '0-10': 661.1
        },
        role: 'NONE',
        lane: 'JUNGLE'
      }
    },
    {
      participantId: 4,
      teamId: 100,
      championId: 22,
      spell1Id: 4,
      spell2Id: 7,
      masteries: [
        {
          masteryId: 6111,
          rank: 5
        },
        {
          masteryId: 6121,
          rank: 1
        },
        {
          masteryId: 6131,
          rank: 5
        },
        {
          masteryId: 6143,
          rank: 1
        },
        {
          masteryId: 6151,
          rank: 5
        },
        {
          masteryId: 6161,
          rank: 1
        },
        {
          masteryId: 6211,
          rank: 5
        },
        {
          masteryId: 6223,
          rank: 1
        },
        {
          masteryId: 6232,
          rank: 5
        },
        {
          masteryId: 6241,
          rank: 1
        }
      ],
      runes: [
        {
          runeId: 5195,
          rank: 9
        },
        {
          runeId: 5245,
          rank: 9
        },
        {
          runeId: 5289,
          rank: 5
        },
        {
          runeId: 5290,
          rank: 4
        },
        {
          runeId: 5337,
          rank: 2
        },
        {
          runeId: 5412,
          rank: 1
        }
      ],
      highestAchievedSeasonTier: 'BRONZE',
      stats: {
        participantId: 4,
        win: false,
        item0: 1055,
        item1: 3085,
        item2: 3071,
        item3: 0,
        item4: 0,
        item5: 1001,
        item6: 3340,
        kills: 2,
        deaths: 7,
        assists: 1,
        largestKillingSpree: 0,
        largestMultiKill: 1,
        killingSprees: 0,
        longestTimeSpentLiving: 392,
        doubleKills: 0,
        tripleKills: 0,
        quadraKills: 0,
        pentaKills: 0,
        unrealKills: 0,
        totalDamageDealt: 62491,
        magicDamageDealt: 1736,
        physicalDamageDealt: 59634,
        trueDamageDealt: 1119,
        largestCriticalStrike: 147,
        totalDamageDealtToChampions: 7168,
        magicDamageDealtToChampions: 673,
        physicalDamageDealtToChampions: 6494,
        trueDamageDealtToChampions: 0,
        totalHeal: 2868,
        totalUnitsHealed: 4,
        damageSelfMitigated: 8505,
        damageDealtToObjectives: 5305,
        damageDealtToTurrets: 1536,
        visionScore: 15,
        timeCCingOthers: 32,
        totalDamageTaken: 22036,
        magicalDamageTaken: 8691,
        physicalDamageTaken: 13066,
        trueDamageTaken: 278,
        goldEarned: 6483,
        goldSpent: 6400,
        turretKills: 0,
        inhibitorKills: 0,
        totalMinionsKilled: 74,
        neutralMinionsKilled: 6,
        neutralMinionsKilledTeamJungle: 6,
        neutralMinionsKilledEnemyJungle: 0,
        totalTimeCrowdControlDealt: 2066,
        champLevel: 10,
        visionWardsBoughtInGame: 0,
        sightWardsBoughtInGame: 0,
        wardsPlaced: 8,
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
        playerScore9: 0
      },
      timeline: {
        participantId: 4,
        creepsPerMinDeltas: {
          '10-20': 3.3,
          '0-10': 2.9
        },
        xpPerMinDeltas: {
          '10-20': 293,
          '0-10': 244.2
        },
        goldPerMinDeltas: {
          '10-20': 307.4,
          '0-10': 172.5
        },
        damageTakenPerMinDeltas: {
          '10-20': 807.3,
          '0-10': 451
        },
        role: 'DUO_CARRY',
        lane: 'BOTTOM'
      }
    },
    {
      participantId: 5,
      teamId: 100,
      championId: 79,
      spell1Id: 4,
      spell2Id: 12,
      masteries: [
        {
          masteryId: 6212,
          rank: 5
        },
        {
          masteryId: 6223,
          rank: 1
        },
        {
          masteryId: 6231,
          rank: 5
        },
        {
          masteryId: 6241,
          rank: 1
        },
        {
          masteryId: 6251,
          rank: 5
        },
        {
          masteryId: 6261,
          rank: 1
        },
        {
          masteryId: 6312,
          rank: 5
        },
        {
          masteryId: 6323,
          rank: 1
        },
        {
          masteryId: 6332,
          rank: 5
        },
        {
          masteryId: 6343,
          rank: 1
        }
      ],
      runes: [
        {
          runeId: 5273,
          rank: 9
        },
        {
          runeId: 5289,
          rank: 9
        },
        {
          runeId: 5317,
          rank: 9
        },
        {
          runeId: 5357,
          rank: 3
        }
      ],
      highestAchievedSeasonTier: 'UNRANKED',
      stats: {
        participantId: 5,
        win: false,
        item0: 1031,
        item1: 3152,
        item2: 3751,
        item3: 1056,
        item4: 3047,
        item5: 3027,
        item6: 3340,
        kills: 7,
        deaths: 2,
        assists: 4,
        largestKillingSpree: 7,
        largestMultiKill: 1,
        killingSprees: 1,
        longestTimeSpentLiving: 1107,
        doubleKills: 0,
        tripleKills: 0,
        quadraKills: 0,
        pentaKills: 0,
        unrealKills: 0,
        totalDamageDealt: 108365,
        magicDamageDealt: 94354,
        physicalDamageDealt: 14010,
        trueDamageDealt: 0,
        largestCriticalStrike: 648,
        totalDamageDealtToChampions: 18543,
        magicDamageDealtToChampions: 15465,
        physicalDamageDealtToChampions: 3078,
        trueDamageDealtToChampions: 0,
        totalHeal: 11926,
        totalUnitsHealed: 1,
        damageSelfMitigated: 19527,
        damageDealtToObjectives: 2021,
        damageDealtToTurrets: 1529,
        visionScore: 17,
        timeCCingOthers: 41,
        totalDamageTaken: 28641,
        magicalDamageTaken: 15073,
        physicalDamageTaken: 13318,
        trueDamageTaken: 250,
        goldEarned: 9443,
        goldSpent: 9075,
        turretKills: 0,
        inhibitorKills: 0,
        totalMinionsKilled: 166,
        neutralMinionsKilled: 1,
        neutralMinionsKilledTeamJungle: 1,
        neutralMinionsKilledEnemyJungle: 0,
        totalTimeCrowdControlDealt: 595,
        champLevel: 14,
        visionWardsBoughtInGame: 1,
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
        playerScore9: 0
      },
      timeline: {
        participantId: 5,
        creepsPerMinDeltas: {
          '10-20': 6.6,
          '0-10': 7.4
        },
        xpPerMinDeltas: {
          '10-20': 503.1,
          '0-10': 557.6
        },
        goldPerMinDeltas: {
          '10-20': 451.9,
          '0-10': 305.8
        },
        csDiffPerMinDeltas: {
          '10-20': 0,
          '0-10': 2.3
        },
        xpDiffPerMinDeltas: {
          '10-20': 57,
          '0-10': 161.7
        },
        damageTakenPerMinDeltas: {
          '10-20': 1185.6,
          '0-10': 446.7
        },
        damageTakenDiffPerMinDeltas: {
          '10-20': 135.2,
          '0-10': 9.80000000000001
        },
        role: 'SOLO',
        lane: 'TOP'
      }
    },
    {
      participantId: 6,
      teamId: 200,
      championId: 81,
      spell1Id: 11,
      spell2Id: 4,
      masteries: [
        {
          masteryId: 6114,
          rank: 5
        },
        {
          masteryId: 6121,
          rank: 1
        },
        {
          masteryId: 6131,
          rank: 5
        },
        {
          masteryId: 6141,
          rank: 1
        },
        {
          masteryId: 6312,
          rank: 5
        },
        {
          masteryId: 6321,
          rank: 1
        },
        {
          masteryId: 6331,
          rank: 5
        },
        {
          masteryId: 6343,
          rank: 1
        },
        {
          masteryId: 6351,
          rank: 5
        },
        {
          masteryId: 6361,
          rank: 1
        }
      ],
      runes: [
        {
          runeId: 5245,
          rank: 2
        },
        {
          runeId: 5247,
          rank: 7
        },
        {
          runeId: 5277,
          rank: 9
        },
        {
          runeId: 5317,
          rank: 9
        },
        {
          runeId: 5337,
          rank: 3
        }
      ],
      highestAchievedSeasonTier: 'SILVER',
      stats: {
        participantId: 6,
        win: true,
        item0: 1412,
        item1: 2031,
        item2: 3036,
        item3: 3078,
        item4: 3006,
        item5: 0,
        item6: 3363,
        kills: 5,
        deaths: 1,
        assists: 5,
        largestKillingSpree: 5,
        largestMultiKill: 2,
        killingSprees: 1,
        longestTimeSpentLiving: 575,
        doubleKills: 1,
        tripleKills: 0,
        quadraKills: 0,
        pentaKills: 0,
        unrealKills: 0,
        totalDamageDealt: 163870,
        magicDamageDealt: 22864,
        physicalDamageDealt: 128484,
        trueDamageDealt: 12522,
        largestCriticalStrike: 0,
        totalDamageDealtToChampions: 16075,
        magicDamageDealtToChampions: 5914,
        physicalDamageDealtToChampions: 9377,
        trueDamageDealtToChampions: 784,
        totalHeal: 10560,
        totalUnitsHealed: 1,
        damageSelfMitigated: 9434,
        damageDealtToObjectives: 15325,
        damageDealtToTurrets: 5395,
        visionScore: 26,
        timeCCingOthers: 5,
        totalDamageTaken: 21510,
        magicalDamageTaken: 6667,
        physicalDamageTaken: 14843,
        trueDamageTaken: 0,
        goldEarned: 11367,
        goldSpent: 10358,
        turretKills: 1,
        inhibitorKills: 0,
        totalMinionsKilled: 57,
        neutralMinionsKilled: 77,
        neutralMinionsKilledTeamJungle: 44,
        neutralMinionsKilledEnemyJungle: 5,
        totalTimeCrowdControlDealt: 934,
        champLevel: 14,
        visionWardsBoughtInGame: 2,
        sightWardsBoughtInGame: 0,
        wardsPlaced: 12,
        wardsKilled: 0,
        firstBloodKill: false,
        firstBloodAssist: false,
        firstTowerKill: false,
        firstTowerAssist: true,
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
        playerScore9: 0
      },
      timeline: {
        participantId: 6,
        creepsPerMinDeltas: {
          '10-20': 2,
          '0-10': 0.8
        },
        xpPerMinDeltas: {
          '10-20': 601.6,
          '0-10': 285.9
        },
        goldPerMinDeltas: {
          '10-20': 441.3,
          '0-10': 238.4
        },
        damageTakenPerMinDeltas: {
          '10-20': 1056.6,
          '0-10': 669.4
        },
        role: 'NONE',
        lane: 'BOTTOM'
      }
    },
    {
      participantId: 7,
      teamId: 200,
      championId: 412,
      spell1Id: 14,
      spell2Id: 4,
      masteries: [
        {
          masteryId: 6212,
          rank: 5
        },
        {
          masteryId: 6221,
          rank: 1
        },
        {
          masteryId: 6232,
          rank: 5
        },
        {
          masteryId: 6241,
          rank: 1
        },
        {
          masteryId: 6311,
          rank: 5
        },
        {
          masteryId: 6322,
          rank: 1
        },
        {
          masteryId: 6332,
          rank: 5
        },
        {
          masteryId: 6342,
          rank: 1
        },
        {
          masteryId: 6352,
          rank: 5
        },
        {
          masteryId: 6362,
          rank: 1
        }
      ],
      runes: [
        {
          runeId: 5245,
          rank: 9
        },
        {
          runeId: 5289,
          rank: 9
        },
        {
          runeId: 5315,
          rank: 1
        },
        {
          runeId: 5317,
          rank: 8
        },
        {
          runeId: 5335,
          rank: 1
        },
        {
          runeId: 5347,
          rank: 2
        }
      ],
      highestAchievedSeasonTier: 'SILVER',
      stats: {
        participantId: 7,
        win: true,
        item0: 2049,
        item1: 3401,
        item2: 3190,
        item3: 3117,
        item4: 1028,
        item5: 0,
        item6: 3340,
        kills: 2,
        deaths: 1,
        assists: 8,
        largestKillingSpree: 2,
        largestMultiKill: 1,
        killingSprees: 1,
        longestTimeSpentLiving: 1026,
        doubleKills: 0,
        tripleKills: 0,
        quadraKills: 0,
        pentaKills: 0,
        unrealKills: 0,
        totalDamageDealt: 18398,
        magicDamageDealt: 11591,
        physicalDamageDealt: 6038,
        trueDamageDealt: 768,
        largestCriticalStrike: 0,
        totalDamageDealtToChampions: 7426,
        magicDamageDealtToChampions: 5497,
        physicalDamageDealtToChampions: 1161,
        trueDamageDealtToChampions: 768,
        totalHeal: 2062,
        totalUnitsHealed: 3,
        damageSelfMitigated: 4900,
        damageDealtToObjectives: 5518,
        damageDealtToTurrets: 2336,
        visionScore: 23,
        timeCCingOthers: 27,
        totalDamageTaken: 8024,
        magicalDamageTaken: 4069,
        physicalDamageTaken: 3955,
        trueDamageTaken: 0,
        goldEarned: 8385,
        goldSpent: 6650,
        turretKills: 0,
        inhibitorKills: 0,
        totalMinionsKilled: 18,
        neutralMinionsKilled: 1,
        neutralMinionsKilledTeamJungle: 0,
        neutralMinionsKilledEnemyJungle: 0,
        totalTimeCrowdControlDealt: 89,
        champLevel: 12,
        visionWardsBoughtInGame: 0,
        sightWardsBoughtInGame: 0,
        wardsPlaced: 15,
        wardsKilled: 2,
        firstBloodKill: false,
        firstBloodAssist: false,
        firstTowerKill: false,
        firstTowerAssist: true,
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
        playerScore9: 0
      },
      timeline: {
        participantId: 7,
        creepsPerMinDeltas: {
          '10-20': 0.2,
          '0-10': 1.2
        },
        xpPerMinDeltas: {
          '10-20': 218.8,
          '0-10': 295.5
        },
        goldPerMinDeltas: {
          '10-20': 277.5,
          '0-10': 212.7
        },
        damageTakenPerMinDeltas: {
          '10-20': 338.9,
          '0-10': 216.2
        },
        role: 'NONE',
        lane: 'BOTTOM'
      }
    },
    {
      participantId: 8,
      teamId: 200,
      championId: 36,
      spell1Id: 4,
      spell2Id: 12,
      masteries: [
        {
          masteryId: 6114,
          rank: 5
        },
        {
          masteryId: 6122,
          rank: 1
        },
        {
          masteryId: 6134,
          rank: 5
        },
        {
          masteryId: 6143,
          rank: 1
        },
        {
          masteryId: 6212,
          rank: 5
        },
        {
          masteryId: 6223,
          rank: 1
        },
        {
          masteryId: 6231,
          rank: 5
        },
        {
          masteryId: 6241,
          rank: 1
        },
        {
          masteryId: 6251,
          rank: 5
        },
        {
          masteryId: 6263,
          rank: 1
        }
      ],
      runes: [
        {
          runeId: 5273,
          rank: 9
        },
        {
          runeId: 5289,
          rank: 9
        },
        {
          runeId: 5317,
          rank: 9
        },
        {
          runeId: 5357,
          rank: 3
        }
      ],
      highestAchievedSeasonTier: 'UNRANKED',
      stats: {
        participantId: 8,
        win: true,
        item0: 1054,
        item1: 3065,
        item2: 3001,
        item3: 3111,
        item4: 3751,
        item5: 1031,
        item6: 3340,
        kills: 1,
        deaths: 7,
        assists: 6,
        largestKillingSpree: 0,
        largestMultiKill: 1,
        killingSprees: 0,
        longestTimeSpentLiving: 415,
        doubleKills: 0,
        tripleKills: 0,
        quadraKills: 0,
        pentaKills: 0,
        unrealKills: 0,
        totalDamageDealt: 74019,
        magicDamageDealt: 40124,
        physicalDamageDealt: 33894,
        trueDamageDealt: 0,
        largestCriticalStrike: 0,
        totalDamageDealtToChampions: 14509,
        magicDamageDealtToChampions: 9971,
        physicalDamageDealtToChampions: 4538,
        trueDamageDealtToChampions: 0,
        totalHeal: 8102,
        totalUnitsHealed: 5,
        damageSelfMitigated: 15900,
        damageDealtToObjectives: 3737,
        damageDealtToTurrets: 1476,
        visionScore: 16,
        timeCCingOthers: 11,
        totalDamageTaken: 21523,
        magicalDamageTaken: 8809,
        physicalDamageTaken: 12686,
        trueDamageTaken: 28,
        goldEarned: 9090,
        goldSpent: 9050,
        turretKills: 0,
        inhibitorKills: 0,
        totalMinionsKilled: 134,
        neutralMinionsKilled: 0,
        neutralMinionsKilledTeamJungle: 0,
        neutralMinionsKilledEnemyJungle: 0,
        totalTimeCrowdControlDealt: 213,
        champLevel: 14,
        visionWardsBoughtInGame: 0,
        sightWardsBoughtInGame: 0,
        wardsPlaced: 10,
        wardsKilled: 1,
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
        playerScore9: 0
      },
      timeline: {
        participantId: 8,
        creepsPerMinDeltas: {
          '10-20': 6.6,
          '0-10': 5.1
        },
        xpPerMinDeltas: {
          '10-20': 446.1,
          '0-10': 395.9
        },
        goldPerMinDeltas: {
          '10-20': 375.6,
          '0-10': 213.4
        },
        csDiffPerMinDeltas: {
          '10-20': 0,
          '0-10': -2.3
        },
        xpDiffPerMinDeltas: {
          '10-20': -57,
          '0-10': -161.7
        },
        damageTakenPerMinDeltas: {
          '10-20': 1050.4,
          '0-10': 436.9
        },
        damageTakenDiffPerMinDeltas: {
          '10-20': -135.2,
          '0-10': -9.80000000000001
        },
        role: 'SOLO',
        lane: 'TOP'
      }
    },
    {
      participantId: 9,
      teamId: 200,
      championId: 18,
      spell1Id: 7,
      spell2Id: 4,
      masteries: [
        {
          masteryId: 6114,
          rank: 5
        },
        {
          masteryId: 6121,
          rank: 1
        },
        {
          masteryId: 6134,
          rank: 5
        },
        {
          masteryId: 6142,
          rank: 1
        },
        {
          masteryId: 6151,
          rank: 5
        },
        {
          masteryId: 6164,
          rank: 1
        },
        {
          masteryId: 6312,
          rank: 5
        },
        {
          masteryId: 6322,
          rank: 1
        },
        {
          masteryId: 6331,
          rank: 5
        },
        {
          masteryId: 6343,
          rank: 1
        }
      ],
      runes: [
        {
          runeId: 5245,
          rank: 9
        },
        {
          runeId: 5289,
          rank: 9
        },
        {
          runeId: 5317,
          rank: 9
        },
        {
          runeId: 5337,
          rank: 3
        }
      ],
      highestAchievedSeasonTier: 'BRONZE',
      stats: {
        participantId: 9,
        win: true,
        item0: 1055,
        item1: 3087,
        item2: 3006,
        item3: 3153,
        item4: 1038,
        item5: 0,
        item6: 3340,
        kills: 6,
        deaths: 4,
        assists: 8,
        largestKillingSpree: 3,
        largestMultiKill: 2,
        killingSprees: 2,
        longestTimeSpentLiving: 424,
        doubleKills: 1,
        tripleKills: 0,
        quadraKills: 0,
        pentaKills: 0,
        unrealKills: 0,
        totalDamageDealt: 121418,
        magicDamageDealt: 45758,
        physicalDamageDealt: 73979,
        trueDamageDealt: 1680,
        largestCriticalStrike: 491,
        totalDamageDealtToChampions: 18713,
        magicDamageDealtToChampions: 4834,
        physicalDamageDealtToChampions: 13879,
        trueDamageDealtToChampions: 0,
        totalHeal: 2818,
        totalUnitsHealed: 3,
        damageSelfMitigated: 5479,
        damageDealtToObjectives: 20806,
        damageDealtToTurrets: 9340,
        visionScore: 12,
        timeCCingOthers: 2,
        totalDamageTaken: 13047,
        magicalDamageTaken: 5877,
        physicalDamageTaken: 7170,
        trueDamageTaken: 0,
        goldEarned: 11311,
        goldSpent: 8975,
        turretKills: 5,
        inhibitorKills: 2,
        totalMinionsKilled: 157,
        neutralMinionsKilled: 1,
        neutralMinionsKilledTeamJungle: 0,
        neutralMinionsKilledEnemyJungle: 1,
        totalTimeCrowdControlDealt: 43,
        champLevel: 13,
        visionWardsBoughtInGame: 1,
        sightWardsBoughtInGame: 0,
        wardsPlaced: 9,
        wardsKilled: 0,
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
        playerScore9: 0
      },
      timeline: {
        participantId: 9,
        creepsPerMinDeltas: {
          '10-20': 5,
          '0-10': 5.9
        },
        xpPerMinDeltas: {
          '10-20': 335.7,
          '0-10': 298.8
        },
        goldPerMinDeltas: {
          '10-20': 336,
          '0-10': 356.4
        },
        damageTakenPerMinDeltas: {
          '10-20': 637.1,
          '0-10': 265.9
        },
        role: 'NONE',
        lane: 'BOTTOM'
      }
    },
    {
      participantId: 10,
      teamId: 200,
      championId: 82,
      spell1Id: 12,
      spell2Id: 4,
      masteries: [
        {
          masteryId: 6114,
          rank: 5
        },
        {
          masteryId: 6122,
          rank: 1
        },
        {
          masteryId: 6134,
          rank: 5
        },
        {
          masteryId: 6141,
          rank: 1
        },
        {
          masteryId: 6154,
          rank: 5
        },
        {
          masteryId: 6164,
          rank: 1
        },
        {
          masteryId: 6211,
          rank: 5
        },
        {
          masteryId: 6223,
          rank: 1
        },
        {
          masteryId: 6232,
          rank: 5
        },
        {
          masteryId: 6241,
          rank: 1
        }
      ],
      runes: [
        {
          runeId: 5273,
          rank: 9
        },
        {
          runeId: 5289,
          rank: 3
        },
        {
          runeId: 5298,
          rank: 6
        },
        {
          runeId: 5316,
          rank: 6
        },
        {
          runeId: 5317,
          rank: 3
        },
        {
          runeId: 5357,
          rank: 3
        }
      ],
      highestAchievedSeasonTier: 'UNRANKED',
      stats: {
        participantId: 10,
        win: true,
        item0: 3152,
        item1: 1082,
        item2: 3020,
        item3: 3151,
        item4: 3108,
        item5: 0,
        item6: 3340,
        kills: 6,
        deaths: 4,
        assists: 4,
        largestKillingSpree: 3,
        largestMultiKill: 1,
        killingSprees: 2,
        longestTimeSpentLiving: 499,
        doubleKills: 0,
        tripleKills: 0,
        quadraKills: 0,
        pentaKills: 0,
        unrealKills: 0,
        totalDamageDealt: 110385,
        magicDamageDealt: 96686,
        physicalDamageDealt: 9820,
        trueDamageDealt: 3878,
        largestCriticalStrike: 0,
        totalDamageDealtToChampions: 19136,
        magicDamageDealtToChampions: 17707,
        physicalDamageDealtToChampions: 1429,
        trueDamageDealtToChampions: 0,
        totalHeal: 9657,
        totalUnitsHealed: 14,
        damageSelfMitigated: 17907,
        damageDealtToObjectives: 15753,
        damageDealtToTurrets: 5861,
        visionScore: 13,
        timeCCingOthers: 0,
        totalDamageTaken: 12596,
        magicalDamageTaken: 8383,
        physicalDamageTaken: 4107,
        trueDamageTaken: 106,
        goldEarned: 10028,
        goldSpent: 8200,
        turretKills: 3,
        inhibitorKills: 0,
        totalMinionsKilled: 136,
        neutralMinionsKilled: 4,
        neutralMinionsKilledTeamJungle: 4,
        neutralMinionsKilledEnemyJungle: 0,
        totalTimeCrowdControlDealt: 37,
        champLevel: 14,
        visionWardsBoughtInGame: 0,
        sightWardsBoughtInGame: 0,
        wardsPlaced: 8,
        wardsKilled: 1,
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
        playerScore9: 0
      },
      timeline: {
        participantId: 10,
        creepsPerMinDeltas: {
          '10-20': 6.5,
          '0-10': 5.8
        },
        xpPerMinDeltas: {
          '10-20': 464.9,
          '0-10': 396.1
        },
        goldPerMinDeltas: {
          '10-20': 409.3,
          '0-10': 268
        },
        csDiffPerMinDeltas: {
          '10-20': 0.7,
          '0-10': -1.1
        },
        xpDiffPerMinDeltas: {
          '10-20': -11.9,
          '0-10': -17.1
        },
        damageTakenPerMinDeltas: {
          '10-20': 502.8,
          '0-10': 251.9
        },
        damageTakenDiffPerMinDeltas: {
          '10-20': -312.2,
          '0-10': -103.5
        },
        role: 'SOLO',
        lane: 'MIDDLE'
      }
    }
  ],
  participantIdentities: [
    {
      participantId: 1,
      player: {
        platformId: 'OC1',
        accountId: 200795210,
        summonerName: 'XVI Riven IVX',
        summonerId: 1545076,
        currentPlatformId: 'OC1',
        currentAccountId: 200795210,
        matchHistoryUri: '/v1/stats/player_history/OC1/200795210',
        profileIcon: 1661
      }
    },
    {
      participantId: 2,
      player: {
        platformId: 'OC1',
        accountId: 201116573,
        summonerName: 'Battrazlok',
        summonerId: 3080851,
        currentPlatformId: 'OC1',
        currentAccountId: 201116573,
        matchHistoryUri: '/v1/stats/player_history/OC1/201116573',
        profileIcon: 3024
      }
    },
    {
      participantId: 3,
      player: {
        platformId: 'OC1',
        accountId: 201240932,
        summonerName: 'SenSel',
        summonerId: 3480353,
        currentPlatformId: 'OC1',
        currentAccountId: 201240932,
        matchHistoryUri: '/v1/stats/player_history/OC1/201240932',
        profileIcon: 7
      }
    },
    {
      participantId: 4,
      player: {
        platformId: 'NA1',
        accountId: 51009318,
        summonerName: 'MrHandyHaydn',
        summonerId: 498723,
        currentPlatformId: 'OC1',
        currentAccountId: 200226947,
        matchHistoryUri: '/v1/stats/player_history/NA1/51009318',
        profileIcon: 2089
      }
    },
    {
      participantId: 5,
      player: {
        platformId: 'OC1',
        accountId: 202174251,
        summonerName: 'BurtonjFaAa',
        summonerId: 8201156,
        currentPlatformId: 'OC1',
        currentAccountId: 202174251,
        matchHistoryUri: '/v1/stats/player_history/OC1/202174251',
        profileIcon: 1661
      }
    },
    {
      participantId: 6,
      player: {
        platformId: 'OC1',
        accountId: 200336198,
        summonerName: 'jhony',
        summonerId: 641767,
        currentPlatformId: 'OC1',
        currentAccountId: 200336198,
        matchHistoryUri: '/v1/stats/player_history/OC1/200336198',
        profileIcon: 746
      }
    },
    {
      participantId: 7,
      player: {
        platformId: 'OC1',
        accountId: 200726533,
        summonerName: 'defaceyer',
        summonerId: 1690215,
        currentPlatformId: 'OC1',
        currentAccountId: 200726533,
        matchHistoryUri: '/v1/stats/player_history/OC1/200726533',
        profileIcon: 950
      }
    },
    {
      participantId: 8,
      player: {
        platformId: 'OC1',
        accountId: 202340108,
        summonerName: 'saberyunlong',
        summonerId: 9080225,
        currentPlatformId: 'OC1',
        currentAccountId: 202340108,
        matchHistoryUri: '/v1/stats/player_history/OC1/202340108',
        profileIcon: 3021
      }
    },
    {
      participantId: 9,
      player: {
        platformId: 'NA1',
        accountId: 46219597,
        summonerName: 'UnrulyVan3',
        summonerId: 454814,
        currentPlatformId: 'OC1',
        currentAccountId: 200177982,
        matchHistoryUri: '/v1/stats/player_history/NA1/46219597',
        profileIcon: 1391
      }
    },
    {
      participantId: 10,
      player: {
        platformId: 'OC1',
        accountId: 202109234,
        summonerName: 'iSafePro',
        summonerId: 7710746,
        currentPlatformId: 'OC1',
        currentAccountId: 202109234,
        matchHistoryUri: '/v1/stats/player_history/OC1/202109234',
        profileIcon: 1384
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
          '2': {
            participantId: 2,
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
          '3': {
            participantId: 3,
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
          '4': {
            participantId: 4,
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
          '5': {
            participantId: 5,
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
          '6': {
            participantId: 6,
            position: {
              x: 14486,
              y: 14291
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
              x: 14277,
              y: 14223
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
              x: 14486,
              y: 14511
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
              x: 14148,
              y: 14401
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
              x: 14237,
              y: 14579
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
        timestamp: 144
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 6431,
              y: 6867
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
              x: 7454,
              y: 3409
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
              x: 8569,
              y: 4655
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
              x: 8079,
              y: 3526
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
              x: 295,
              y: 501
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
              x: 11892,
              y: 7156
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
              x: 14321,
              y: 14673
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
              x: 4469,
              y: 13617
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
              y: 6986
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
              x: 9726,
              y: 6389
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
            type: 'SKILL_LEVEL_UP',
            timestamp: 2885,
            participantId: 4,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 4568,
            participantId: 4,
            itemId: 1055
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 5162,
            participantId: 4,
            itemId: 2003
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 5657,
            participantId: 4,
            itemId: 3340
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 6845,
            participantId: 3,
            itemId: 1041
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 7934,
            participantId: 3,
            itemId: 2031
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 8000,
            participantId: 6,
            itemId: 1041
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 8165,
            participantId: 3,
            itemId: 3340
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 8990,
            participantId: 8,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 10079,
            participantId: 6,
            itemId: 2031
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 10211,
            participantId: 3,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 12158,
            participantId: 6,
            itemId: 3340
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 12983,
            participantId: 10,
            itemId: 1054
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 15260,
            participantId: 8,
            itemId: 1054
          },
          {
            type: 'ITEM_UNDO',
            timestamp: 15722,
            participantId: 10,
            afterId: 0,
            beforeId: 1054
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 16382,
            participantId: 8,
            itemId: 2003
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 17042,
            participantId: 8,
            itemId: 3340
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 18725,
            participantId: 10,
            itemId: 1082
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 19121,
            participantId: 10,
            itemId: 2003
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 19286,
            participantId: 10,
            itemId: 2003
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 19550,
            participantId: 10,
            itemId: 2003
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 25193,
            participantId: 9,
            itemId: 1055
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 25490,
            participantId: 9,
            itemId: 2010
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 25754,
            participantId: 9,
            itemId: 3340
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 29120,
            participantId: 1,
            itemId: 2033
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 30044,
            participantId: 2,
            itemId: 1006
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 30176,
            participantId: 1,
            itemId: 3340
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 30605,
            participantId: 2,
            itemId: 3301
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 34698,
            participantId: 1,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 36546,
            participantId: 2,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 39318,
            participantId: 9,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 45885,
            participantId: 6,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          }
        ],
        timestamp: 60174
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 6848,
              y: 6972
            },
            currentGold: 41,
            totalGold: 541,
            level: 1,
            xp: 176,
            minionsKilled: 2,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 11399,
              y: 1932
            },
            currentGold: 1,
            totalGold: 501,
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
              x: 6330,
              y: 4999
            },
            currentGold: 101,
            totalGold: 601,
            level: 2,
            xp: 280,
            minionsKilled: 0,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 11931,
              y: 2246
            },
            currentGold: 1,
            totalGold: 501,
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
              x: 1831,
              y: 12103
            },
            currentGold: 21,
            totalGold: 521,
            level: 1,
            xp: 58,
            minionsKilled: 1,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 12126,
              y: 6730
            },
            currentGold: 101,
            totalGold: 601,
            level: 2,
            xp: 280,
            minionsKilled: 0,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 13057,
              y: 4797
            },
            currentGold: 1,
            totalGold: 501,
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
              x: 2462,
              y: 12738
            },
            currentGold: 21,
            totalGold: 521,
            level: 1,
            xp: 58,
            minionsKilled: 1,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 13041,
              y: 3576
            },
            currentGold: 1,
            totalGold: 501,
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
              x: 7796,
              y: 7226
            },
            currentGold: 58,
            totalGold: 558,
            level: 1,
            xp: 264,
            minionsKilled: 3,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'ITEM_PURCHASED',
            timestamp: 69580,
            participantId: 5,
            itemId: 1056
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 70075,
            participantId: 5,
            itemId: 2003
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 70372,
            participantId: 5,
            itemId: 2003
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 71230,
            participantId: 5,
            itemId: 3340
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 82945,
            participantId: 7,
            itemId: 3302
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 83407,
            participantId: 7,
            itemId: 2010
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 83572,
            participantId: 7,
            itemId: 2010
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 83737,
            participantId: 7,
            itemId: 2010
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 84562,
            participantId: 7,
            itemId: 3340
          },
          {
            type: 'WARD_PLACED',
            timestamp: 95948,
            wardType: 'YELLOW_TRINKET',
            creatorId: 10
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 98225,
            participantId: 5,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 100601,
            participantId: 10,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 103934,
            participantId: 7,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 116540,
            participantId: 3,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 117233,
            participantId: 6,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          }
        ],
        timestamp: 120203
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 6419,
              y: 7022
            },
            currentGold: 486,
            totalGold: 986,
            level: 3,
            xp: 674,
            minionsKilled: 12,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 11273,
              y: 1167
            },
            currentGold: 201,
            totalGold: 701,
            level: 2,
            xp: 384,
            minionsKilled: 0,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 5389,
              y: 9184
            },
            currentGold: 723,
            totalGold: 1223,
            level: 2,
            xp: 615,
            minionsKilled: 0,
            jungleMinionsKilled: 2,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 11313,
              y: 1485
            },
            currentGold: 237,
            totalGold: 737,
            level: 2,
            xp: 384,
            minionsKilled: 6,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 2203,
              y: 11973
            },
            currentGold: 311,
            totalGold: 811,
            level: 2,
            xp: 588,
            minionsKilled: 10,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 7987,
              y: 10685
            },
            currentGold: 409,
            totalGold: 909,
            level: 3,
            xp: 665,
            minionsKilled: 0,
            jungleMinionsKilled: 5,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 12537,
              y: 1592
            },
            currentGold: 154,
            totalGold: 654,
            level: 2,
            xp: 384,
            minionsKilled: 0,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 2421,
              y: 12712
            },
            currentGold: 314,
            totalGold: 814,
            level: 3,
            xp: 706,
            minionsKilled: 10,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 12024,
              y: 2354
            },
            currentGold: 331,
            totalGold: 831,
            level: 2,
            xp: 442,
            minionsKilled: 11,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 7709,
              y: 7933
            },
            currentGold: 100,
            totalGold: 700,
            level: 2,
            xp: 500,
            minionsKilled: 4,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'CHAMPION_KILL',
            timestamp: 139146,
            position: {
              x: 8190,
              y: 8455
            },
            killerId: 3,
            victimId: 10,
            assistingParticipantIds: [1]
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 140565,
            participantId: 1,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 140796,
            wardType: 'YELLOW_TRINKET',
            creatorId: 7
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 144789,
            participantId: 7,
            itemId: 2010
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 145251,
            participantId: 10,
            itemId: 2003
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 145416,
            participantId: 10,
            itemId: 2003
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 146043,
            participantId: 8,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 151224,
            participantId: 5,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 155086,
            participantId: 6,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 156670,
            participantId: 9,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 162313,
            participantId: 7,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 162643,
            wardType: 'YELLOW_TRINKET',
            creatorId: 8
          },
          {
            type: 'WARD_PLACED',
            timestamp: 167164,
            wardType: 'YELLOW_TRINKET',
            creatorId: 6
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 168220,
            participantId: 2,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 168286,
            participantId: 4,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 169639,
            participantId: 10,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 172081,
            participantId: 1,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          }
        ],
        timestamp: 180232
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 7284,
              y: 6550
            },
            currentGold: 1005,
            totalGold: 1505,
            level: 4,
            xp: 1441,
            minionsKilled: 24,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 10671,
              y: 1551
            },
            currentGold: 418,
            totalGold: 918,
            level: 3,
            xp: 789,
            minionsKilled: 1,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 3506,
              y: 3983
            },
            currentGold: 215,
            totalGold: 1715,
            level: 3,
            xp: 791,
            minionsKilled: 0,
            jungleMinionsKilled: 3,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 11269,
              y: 1626
            },
            currentGold: 430,
            totalGold: 930,
            level: 3,
            xp: 789,
            minionsKilled: 10,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 1909,
              y: 11860
            },
            currentGold: 664,
            totalGold: 1164,
            level: 4,
            xp: 1210,
            minionsKilled: 21,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 12240,
              y: 10267
            },
            currentGold: 66,
            totalGold: 1291,
            level: 3,
            xp: 1116,
            minionsKilled: 0,
            jungleMinionsKilled: 16,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 11974,
              y: 1642
            },
            currentGold: 348,
            totalGold: 848,
            level: 3,
            xp: 770,
            minionsKilled: 1,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 2350,
              y: 12559
            },
            currentGold: 514,
            totalGold: 1014,
            level: 4,
            xp: 1210,
            minionsKilled: 14,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 12111,
              y: 1803
            },
            currentGold: 630,
            totalGold: 1130,
            level: 3,
            xp: 829,
            minionsKilled: 19,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 10324,
              y: 10510
            },
            currentGold: 259,
            totalGold: 859,
            level: 3,
            xp: 835,
            minionsKilled: 6,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 181090,
            participantId: 8,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 187031,
            participantId: 5,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 192608,
            participantId: 3,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 195116,
            participantId: 10,
            itemId: 2003
          },
          {
            type: 'WARD_PLACED',
            timestamp: 201749,
            wardType: 'YELLOW_TRINKET',
            creatorId: 3
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 203333,
            participantId: 10,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 207194,
            position: {
              x: 8874,
              y: 8221
            },
            killerId: 3,
            victimId: 10,
            assistingParticipantIds: [1]
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 208943,
            participantId: 9,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 210824,
            position: {
              x: 8188,
              y: 7756
            },
            killerId: 0,
            victimId: 3,
            assistingParticipantIds: []
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 214256,
            participantId: 7,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 219306,
            participantId: 1,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 220659,
            participantId: 3,
            itemId: 3711
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 220659,
            participantId: 3,
            itemId: 1041
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 223497,
            participantId: 3,
            itemId: 1036
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 225246,
            participantId: 6,
            itemId: 3715
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 225246,
            participantId: 6,
            itemId: 1041
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 226269,
            participantId: 8,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 226698,
            participantId: 4,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 227292,
            participantId: 6,
            itemId: 2055
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 228117,
            participantId: 2,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 239732,
            participantId: 5,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          }
        ],
        timestamp: 240260
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 7642,
              y: 7004
            },
            currentGold: 425,
            totalGold: 1750,
            level: 5,
            xp: 1857,
            minionsKilled: 29,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 11603,
              y: 2041
            },
            currentGold: 944,
            totalGold: 1444,
            level: 4,
            xp: 1279,
            minionsKilled: 1,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 11409,
              y: 1912
            },
            currentGold: 498,
            totalGold: 1998,
            level: 4,
            xp: 1148,
            minionsKilled: 0,
            jungleMinionsKilled: 13,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 11509,
              y: 1978
            },
            currentGold: 806,
            totalGold: 1306,
            level: 4,
            xp: 1279,
            minionsKilled: 14,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 2658,
              y: 12933
            },
            currentGold: 984,
            totalGold: 1484,
            level: 5,
            xp: 1920,
            minionsKilled: 30,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 11709,
              y: 3285
            },
            currentGold: 259,
            totalGold: 1484,
            level: 4,
            xp: 1175,
            minionsKilled: 0,
            jungleMinionsKilled: 17,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 12781,
              y: 3143
            },
            currentGold: 505,
            totalGold: 1005,
            level: 3,
            xp: 984,
            minionsKilled: 2,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 3944,
              y: 13218
            },
            currentGold: 734,
            totalGold: 1234,
            level: 4,
            xp: 1685,
            minionsKilled: 19,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 12659,
              y: 3209
            },
            currentGold: 875,
            totalGold: 1375,
            level: 4,
            xp: 1160,
            minionsKilled: 24,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 8212,
              y: 7412
            },
            currentGold: 614,
            totalGold: 1214,
            level: 4,
            xp: 1634,
            minionsKilled: 17,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'WARD_PLACED',
            timestamp: 242075,
            wardType: 'YELLOW_TRINKET',
            creatorId: 5
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 243131,
            participantId: 1,
            itemId: 3070
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 246002,
            participantId: 1,
            itemId: 2055
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 254253,
            participantId: 7,
            itemId: 2010
          },
          {
            type: 'WARD_PLACED',
            timestamp: 255111,
            wardType: 'YELLOW_TRINKET',
            creatorId: 8
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 255408,
            participantId: 7,
            itemId: 2010
          },
          {
            type: 'WARD_PLACED',
            timestamp: 262305,
            wardType: 'CONTROL_WARD',
            creatorId: 6
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 262305,
            participantId: 6,
            itemId: 2055
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 264153,
            participantId: 10,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 269961,
            participantId: 6,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 273261,
            wardType: 'CONTROL_WARD',
            creatorId: 1
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 273261,
            participantId: 1,
            itemId: 2055
          },
          {
            type: 'WARD_PLACED',
            timestamp: 277486,
            wardType: 'YELLOW_TRINKET',
            creatorId: 6
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 279730,
            participantId: 9,
            itemId: 2010
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 280654,
            participantId: 9,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 280885,
            wardType: 'YELLOW_TRINKET',
            creatorId: 10
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 285934,
            participantId: 5,
            itemId: 2003
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 289102,
            participantId: 4,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 289531,
            wardType: 'YELLOW_TRINKET',
            creatorId: 7
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 290224,
            participantId: 2,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 290389,
            participantId: 1,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 291775,
            participantId: 8,
            itemId: 2003
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 293260,
            participantId: 5,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 295075,
            position: {
              x: 12659,
              y: 3209
            },
            killerId: 2,
            victimId: 9,
            assistingParticipantIds: [4]
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 299829,
            participantId: 10,
            itemId: 2003
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 300060,
            participantId: 0,
            itemId: 1501
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 300060,
            participantId: 0,
            itemId: 1501
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 300060,
            participantId: 0,
            itemId: 1501
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 300060,
            participantId: 0,
            itemId: 1501
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 300060,
            participantId: 0,
            itemId: 1501
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 300060,
            participantId: 0,
            itemId: 1501
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 300060,
            participantId: 0,
            itemId: 1501
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 300060,
            participantId: 0,
            itemId: 1501
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 300060,
            participantId: 0,
            itemId: 1501
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 300060,
            participantId: 0,
            itemId: 1501
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 300060,
            participantId: 0,
            itemId: 1501
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 300060,
            participantId: 0,
            itemId: 1501
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 300060,
            participantId: 0,
            itemId: 1501
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 300060,
            participantId: 0,
            itemId: 1501
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 300060,
            participantId: 0,
            itemId: 1501
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 300060,
            participantId: 0,
            itemId: 1501
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 300060,
            participantId: 0,
            itemId: 1501
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 300060,
            participantId: 0,
            itemId: 1501
          }
        ],
        timestamp: 300291
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 7091,
              y: 7078
            },
            currentGold: 766,
            totalGold: 2091,
            level: 6,
            xp: 2446,
            minionsKilled: 41,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 11465,
              y: 1636
            },
            currentGold: 1114,
            totalGold: 1614,
            level: 4,
            xp: 1497,
            minionsKilled: 1,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 11086,
              y: 5704
            },
            currentGold: 620,
            totalGold: 2120,
            level: 4,
            xp: 1203,
            minionsKilled: 0,
            jungleMinionsKilled: 13,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 12406,
              y: 2929
            },
            currentGold: 968,
            totalGold: 1468,
            level: 4,
            xp: 1526,
            minionsKilled: 16,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 3078,
              y: 13115
            },
            currentGold: 191,
            totalGold: 1716,
            level: 6,
            xp: 2513,
            minionsKilled: 36,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 14025,
              y: 6935
            },
            currentGold: 510,
            totalGold: 1736,
            level: 4,
            xp: 1396,
            minionsKilled: 7,
            jungleMinionsKilled: 17,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 11853,
              y: 2114
            },
            currentGold: 895,
            totalGold: 1395,
            level: 4,
            xp: 1553,
            minionsKilled: 7,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 3658,
              y: 13671
            },
            currentGold: 1023,
            totalGold: 1523,
            level: 6,
            xp: 2421,
            minionsKilled: 28,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 12000,
              y: 2548
            },
            currentGold: 474,
            totalGold: 1849,
            level: 4,
            xp: 1479,
            minionsKilled: 27,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 6583,
              y: 7625
            },
            currentGold: 502,
            totalGold: 1402,
            level: 5,
            xp: 1902,
            minionsKilled: 19,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 300819,
            participantId: 3,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 304185,
            participantId: 4,
            itemId: 2003
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 305241,
            participantId: 9,
            itemId: 2015
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 306990,
            participantId: 9,
            itemId: 2055
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 315901,
            participantId: 8,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 316660,
            wardType: 'YELLOW_TRINKET',
            creatorId: 4
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 318211,
            participantId: 10,
            itemId: 1001
          },
          {
            type: 'WARD_PLACED',
            timestamp: 321412,
            wardType: 'YELLOW_TRINKET',
            creatorId: 3
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 322468,
            participantId: 5,
            itemId: 3751
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 324217,
            participantId: 7,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 324976,
            participantId: 5,
            itemId: 2003
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 325471,
            participantId: 5,
            itemId: 2055
          },
          {
            type: 'WARD_PLACED',
            timestamp: 327253,
            wardType: 'SIGHT_WARD',
            creatorId: 3
          },
          {
            type: 'WARD_PLACED',
            timestamp: 338508,
            wardType: 'YELLOW_TRINKET',
            creatorId: 1
          },
          {
            type: 'WARD_PLACED',
            timestamp: 339135,
            wardType: 'YELLOW_TRINKET',
            creatorId: 5
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 356196,
            participantId: 1,
            skillSlot: 4,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 356790,
            participantId: 5,
            skillSlot: 4,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 357285,
            participantId: 10,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 359034,
            position: {
              x: 12406,
              y: 2929
            },
            killerId: 9,
            victimId: 4,
            assistingParticipantIds: [7]
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 360123,
            participantId: 8,
            skillSlot: 4,
            levelUpType: 'NORMAL'
          }
        ],
        timestamp: 360321
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 7588,
              y: 7711
            },
            currentGold: 1175,
            totalGold: 2500,
            level: 6,
            xp: 3156,
            minionsKilled: 55,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 10513,
              y: 1537
            },
            currentGold: 143,
            totalGold: 1793,
            level: 4,
            xp: 1593,
            minionsKilled: 1,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 7665,
              y: 3884
            },
            currentGold: 855,
            totalGold: 2355,
            level: 4,
            xp: 1390,
            minionsKilled: 0,
            jungleMinionsKilled: 19,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 11185,
              y: 1673
            },
            currentGold: 108,
            totalGold: 1608,
            level: 5,
            xp: 1740,
            minionsKilled: 17,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 3730,
              y: 13103
            },
            currentGold: 799,
            totalGold: 2324,
            level: 7,
            xp: 3407,
            minionsKilled: 46,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 12195,
              y: 6565
            },
            currentGold: 433,
            totalGold: 1958,
            level: 4,
            xp: 1716,
            minionsKilled: 7,
            jungleMinionsKilled: 20,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 13407,
              y: 2638
            },
            currentGold: 1072,
            totalGold: 1572,
            level: 5,
            xp: 1887,
            minionsKilled: 9,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 3016,
              y: 13078
            },
            currentGold: 1264,
            totalGold: 1764,
            level: 6,
            xp: 2925,
            minionsKilled: 33,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 13391,
              y: 3338
            },
            currentGold: 821,
            totalGold: 2196,
            level: 5,
            xp: 1930,
            minionsKilled: 37,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 8375,
              y: 8239
            },
            currentGold: 726,
            totalGold: 1626,
            level: 5,
            xp: 2256,
            minionsKilled: 24,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'ITEM_PURCHASED',
            timestamp: 366922,
            participantId: 4,
            itemId: 1042
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 367252,
            participantId: 4,
            itemId: 1051
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 369761,
            participantId: 6,
            itemId: 1001
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 375932,
            participantId: 4,
            itemId: 1042
          },
          {
            type: 'WARD_PLACED',
            timestamp: 376790,
            wardType: 'CONTROL_WARD',
            creatorId: 9
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 376790,
            participantId: 9,
            itemId: 2055
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 379067,
            participantId: 2,
            itemId: 3096
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 379067,
            participantId: 2,
            itemId: 1006
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 379067,
            participantId: 2,
            itemId: 3301
          },
          {
            type: 'WARD_KILL',
            timestamp: 380585,
            wardType: 'YELLOW_TRINKET',
            killerId: 7
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 380915,
            participantId: 2,
            itemId: 3114
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 383291,
            participantId: 9,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 383621,
            participantId: 7,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 387218,
            participantId: 5,
            itemId: 2003
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 414378,
            participantId: 5,
            itemId: 2003
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 415731,
            position: {
              x: 3016,
              y: 13078
            },
            killerId: 5,
            victimId: 8,
            assistingParticipantIds: []
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 419295,
            participantId: 4,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          }
        ],
        timestamp: 420351
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 10181,
              y: 5920
            },
            currentGold: 1297,
            totalGold: 2622,
            level: 6,
            xp: 3156,
            minionsKilled: 55,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 11500,
              y: 3564
            },
            currentGold: 398,
            totalGold: 2048,
            level: 5,
            xp: 1946,
            minionsKilled: 2,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 11010,
              y: 4559
            },
            currentGold: 27,
            totalGold: 2577,
            level: 4,
            xp: 1670,
            minionsKilled: 0,
            jungleMinionsKilled: 20,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 11731,
              y: 3667
            },
            currentGold: 387,
            totalGold: 1887,
            level: 5,
            xp: 2211,
            minionsKilled: 24,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 1099,
              y: 5706
            },
            currentGold: 63,
            totalGold: 2588,
            level: 7,
            xp: 3764,
            minionsKilled: 52,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 9628,
              y: 5531
            },
            currentGold: 796,
            totalGold: 2321,
            level: 5,
            xp: 2125,
            minionsKilled: 7,
            jungleMinionsKilled: 21,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 10431,
              y: 4904
            },
            currentGold: 1317,
            totalGold: 1817,
            level: 5,
            xp: 2283,
            minionsKilled: 10,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 2461,
              y: 12977
            },
            currentGold: 366,
            totalGold: 2116,
            level: 7,
            xp: 3400,
            minionsKilled: 42,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 10510,
              y: 4863
            },
            currentGold: 1457,
            totalGold: 2832,
            level: 5,
            xp: 2297,
            minionsKilled: 44,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 10380,
              y: 5208
            },
            currentGold: 1517,
            totalGold: 2417,
            level: 6,
            xp: 2941,
            minionsKilled: 37,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'ITEM_PURCHASED',
            timestamp: 422562,
            participantId: 8,
            itemId: 3211
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 423354,
            participantId: 6,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 425136,
            participantId: 8,
            itemId: 2003
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 430020,
            participantId: 2,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 430516,
            participantId: 10,
            skillSlot: 4,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 433486,
            wardType: 'YELLOW_TRINKET',
            creatorId: 4
          },
          {
            type: 'WARD_PLACED',
            timestamp: 434113,
            wardType: 'YELLOW_TRINKET',
            creatorId: 6
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 435730,
            participantId: 5,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 442066,
            participantId: 10,
            itemId: 2003
          },
          {
            type: 'WARD_KILL',
            timestamp: 442429,
            wardType: 'CONTROL_WARD',
            killerId: 2
          },
          {
            type: 'WARD_PLACED',
            timestamp: 444244,
            wardType: 'YELLOW_TRINKET',
            creatorId: 2
          },
          {
            type: 'WARD_PLACED',
            timestamp: 447874,
            wardType: 'YELLOW_TRINKET',
            creatorId: 1
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 450910,
            participantId: 10,
            itemId: 2003
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 462064,
            participantId: 5,
            itemId: 1026
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 465731,
            participantId: 5,
            itemId: 2031
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 465731,
            participantId: 8,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 468252,
            position: {
              x: 10181,
              y: 5920
            },
            killerId: 9,
            victimId: 1,
            assistingParticipantIds: [6, 10]
          },
          {
            type: 'WARD_PLACED',
            timestamp: 468352,
            wardType: 'YELLOW_TRINKET',
            creatorId: 8
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 471652,
            position: {
              x: 11010,
              y: 4559
            },
            killerId: 10,
            victimId: 3,
            assistingParticipantIds: [6, 7, 9]
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 475777,
            participantId: 3,
            itemId: 3133
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 475777,
            participantId: 3,
            itemId: 1036
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 478978,
            participantId: 3,
            itemId: 1001
          }
        ],
        timestamp: 480364
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 5873,
              y: 6026
            },
            currentGold: 358,
            totalGold: 2783,
            level: 7,
            xp: 3362,
            minionsKilled: 57,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 11025,
              y: 1368
            },
            currentGold: 538,
            totalGold: 2188,
            level: 5,
            xp: 2100,
            minionsKilled: 2,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 3752,
              y: 7866
            },
            currentGold: 249,
            totalGold: 2799,
            level: 5,
            xp: 1841,
            minionsKilled: 0,
            jungleMinionsKilled: 23,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 11420,
              y: 1778
            },
            currentGold: 582,
            totalGold: 2082,
            level: 5,
            xp: 2365,
            minionsKilled: 28,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 1603,
              y: 11575
            },
            currentGold: 361,
            totalGold: 2886,
            level: 8,
            xp: 4353,
            minionsKilled: 61,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 12781,
              y: 1760
            },
            currentGold: 1044,
            totalGold: 2569,
            level: 6,
            xp: 2534,
            minionsKilled: 7,
            jungleMinionsKilled: 23,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 12439,
              y: 2366
            },
            currentGold: 1485,
            totalGold: 1985,
            level: 6,
            xp: 2650,
            minionsKilled: 11,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 1705,
              y: 11991
            },
            currentGold: 661,
            totalGold: 2411,
            level: 7,
            xp: 3930,
            minionsKilled: 51,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 12835,
              y: 2353
            },
            currentGold: 1728,
            totalGold: 3103,
            level: 6,
            xp: 2664,
            minionsKilled: 52,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 6694,
              y: 7015
            },
            currentGold: 1911,
            totalGold: 2811,
            level: 7,
            xp: 3608,
            minionsKilled: 50,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'ITEM_PURCHASED',
            timestamp: 482245,
            participantId: 1,
            itemId: 3010
          },
          {
            type: 'WARD_PLACED',
            timestamp: 489705,
            wardType: 'YELLOW_TRINKET',
            creatorId: 10
          },
          {
            type: 'WARD_PLACED',
            timestamp: 491289,
            wardType: 'YELLOW_TRINKET',
            creatorId: 4
          },
          {
            type: 'ELITE_MONSTER_KILL',
            timestamp: 491620,
            position: {
              x: 9950,
              y: 4510
            },
            killerId: 6,
            monsterType: 'DRAGON',
            monsterSubType: 'WATER_DRAGON'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 494623,
            wardType: 'YELLOW_TRINKET',
            creatorId: 9
          },
          {
            type: 'WARD_PLACED',
            timestamp: 498683,
            wardType: 'YELLOW_TRINKET',
            creatorId: 9
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 512448,
            participantId: 7,
            skillSlot: 4,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 512547,
            participantId: 10,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 514164,
            participantId: 9,
            skillSlot: 4,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 516837,
            participantId: 3,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 517992,
            participantId: 1,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 518916,
            participantId: 5,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 520071,
            participantId: 6,
            skillSlot: 4,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 524593,
            wardType: 'YELLOW_TRINKET',
            creatorId: 8
          }
        ],
        timestamp: 540367
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 7176,
              y: 4995
            },
            currentGold: 706,
            totalGold: 3131,
            level: 8,
            xp: 4132,
            minionsKilled: 69,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 1779,
              y: 833
            },
            currentGold: 125,
            totalGold: 2700,
            level: 6,
            xp: 2930,
            minionsKilled: 4,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 7697,
              y: 9999
            },
            currentGold: 683,
            totalGold: 3233,
            level: 6,
            xp: 2550,
            minionsKilled: 0,
            jungleMinionsKilled: 30,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 8379,
              y: 1088
            },
            currentGold: 225,
            totalGold: 2225,
            level: 6,
            xp: 2442,
            minionsKilled: 29,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 3927,
              y: 13789
            },
            currentGold: 1033,
            totalGold: 3558,
            level: 9,
            xp: 5576,
            minionsKilled: 74,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 13623,
              y: 14147
            },
            currentGold: 184,
            totalGold: 2884,
            level: 6,
            xp: 2859,
            minionsKilled: 8,
            jungleMinionsKilled: 23,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 13639,
              y: 4068
            },
            currentGold: 2127,
            totalGold: 2627,
            level: 6,
            xp: 2955,
            minionsKilled: 12,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 4517,
              y: 13561
            },
            currentGold: 184,
            totalGold: 2634,
            level: 7,
            xp: 3959,
            minionsKilled: 51,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 14340,
              y: 14391
            },
            currentGold: 2689,
            totalGold: 4064,
            level: 6,
            xp: 2988,
            minionsKilled: 59,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 7683,
              y: 8604
            },
            currentGold: 330,
            totalGold: 3180,
            level: 7,
            xp: 3961,
            minionsKilled: 58,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'WARD_PLACED',
            timestamp: 544030,
            wardType: 'YELLOW_TRINKET',
            creatorId: 5
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 546145,
            participantId: 4,
            skillSlot: 4,
            levelUpType: 'NORMAL'
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 547828,
            position: {
              x: 1118,
              y: 11953
            },
            killerId: 5,
            victimId: 8,
            assistingParticipantIds: []
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 552744,
            participantId: 8,
            itemId: 1001
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 554164,
            position: {
              x: 11137,
              y: 1476
            },
            killerId: 9,
            victimId: 4,
            assistingParticipantIds: [6, 7]
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 557761,
            participantId: 5,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 558091,
            participantId: 4,
            itemId: 3086
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 558091,
            participantId: 4,
            itemId: 1051
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 558091,
            participantId: 4,
            itemId: 1042
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 560104,
            participantId: 10,
            itemId: 3145
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 565120,
            participantId: 2,
            skillSlot: 4,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 566242,
            participantId: 10,
            itemId: 3108
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 567925,
            participantId: 8,
            itemId: 1028
          },
          {
            type: 'WARD_PLACED',
            timestamp: 572512,
            wardType: 'YELLOW_TRINKET',
            creatorId: 1
          },
          {
            type: 'WARD_PLACED',
            timestamp: 574888,
            wardType: 'YELLOW_TRINKET',
            creatorId: 3
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 575548,
            position: {
              x: 11241,
              y: 1275
            },
            killerId: 2,
            victimId: 6,
            assistingParticipantIds: []
          },
          {
            type: 'BUILDING_KILL',
            timestamp: 579243,
            position: {
              x: 10504,
              y: 1029
            },
            killerId: 9,
            assistingParticipantIds: [6, 7],
            teamId: 100,
            buildingType: 'TOWER_BUILDING',
            laneType: 'BOT_LANE',
            towerType: 'OUTER_TURRET'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 582642,
            participantId: 6,
            itemId: 3057
          },
          {
            type: 'ITEM_UNDO',
            timestamp: 585053,
            participantId: 6,
            afterId: 0,
            beforeId: 3057
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 587363,
            participantId: 6,
            itemId: 3133
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 587858,
            participantId: 3,
            skillSlot: 4,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 588848,
            wardType: 'YELLOW_TRINKET',
            creatorId: 3
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 590928,
            participantId: 1,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 593502,
            participantId: 2,
            itemId: 3113
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 594162,
            participantId: 6,
            itemId: 2055
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 595548,
            participantId: 2,
            itemId: 2055
          }
        ],
        timestamp: 600377
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 6035,
              y: 6820
            },
            currentGold: 1179,
            totalGold: 3604,
            level: 8,
            xp: 4917,
            minionsKilled: 80,
            jungleMinionsKilled: 6,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 13355,
              y: 3388
            },
            currentGold: 312,
            totalGold: 2887,
            level: 7,
            xp: 3239,
            minionsKilled: 4,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 9941,
              y: 3094
            },
            currentGold: 964,
            totalGold: 3514,
            level: 6,
            xp: 2809,
            minionsKilled: 0,
            jungleMinionsKilled: 33,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 13138,
              y: 3548
            },
            currentGold: 607,
            totalGold: 2607,
            level: 6,
            xp: 3076,
            minionsKilled: 41,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 987,
              y: 6759
            },
            currentGold: 55,
            totalGold: 3680,
            level: 9,
            xp: 5635,
            minionsKilled: 74,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 11896,
              y: 4870
            },
            currentGold: 492,
            totalGold: 3192,
            level: 7,
            xp: 3459,
            minionsKilled: 8,
            jungleMinionsKilled: 27,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 13043,
              y: 5068
            },
            currentGold: 412,
            totalGold: 2762,
            level: 6,
            xp: 2994,
            minionsKilled: 12,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 1675,
              y: 11699
            },
            currentGold: 604,
            totalGold: 3054,
            level: 8,
            xp: 4758,
            minionsKilled: 65,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 13493,
              y: 4485
            },
            currentGold: 223,
            totalGold: 4298,
            level: 7,
            xp: 3375,
            minionsKilled: 65,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 4887,
              y: 9369
            },
            currentGold: 647,
            totalGold: 3497,
            level: 8,
            xp: 4455,
            minionsKilled: 67,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'ITEM_PURCHASED',
            timestamp: 600938,
            participantId: 9,
            itemId: 3087
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 600938,
            participantId: 9,
            itemId: 2015
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 602291,
            participantId: 9,
            itemId: 1001
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 602984,
            participantId: 7,
            itemId: 3401
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 602984,
            participantId: 7,
            itemId: 3302
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 603314,
            participantId: 9,
            itemId: 1042
          },
          {
            type: 'WARD_PLACED',
            timestamp: 605327,
            wardType: 'YELLOW_TRINKET',
            creatorId: 5
          },
          {
            type: 'WARD_PLACED',
            timestamp: 605954,
            wardType: 'YELLOW_TRINKET',
            creatorId: 10
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 606845,
            participantId: 8,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 610145,
            participantId: 9,
            itemId: 1042
          },
          {
            type: 'WARD_PLACED',
            timestamp: 633608,
            wardType: 'YELLOW_TRINKET',
            creatorId: 2
          },
          {
            type: 'WARD_PLACED',
            timestamp: 634499,
            wardType: 'YELLOW_TRINKET',
            creatorId: 7
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 638690,
            participantId: 10,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 641890,
            participantId: 5,
            itemId: 3010
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 646187,
            participantId: 9,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 646847,
            wardType: 'YELLOW_TRINKET',
            creatorId: 7
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 654074,
            participantId: 6,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 658166,
            participantId: 2,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          }
        ],
        timestamp: 660410
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 6667,
              y: 6520
            },
            currentGold: 1446,
            totalGold: 3871,
            level: 9,
            xp: 5362,
            minionsKilled: 86,
            jungleMinionsKilled: 6,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 6928,
              y: 6214
            },
            currentGold: 526,
            totalGold: 3101,
            level: 7,
            xp: 3488,
            minionsKilled: 4,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 7968,
              y: 7077
            },
            currentGold: 1118,
            totalGold: 3668,
            level: 6,
            xp: 3063,
            minionsKilled: 0,
            jungleMinionsKilled: 33,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 7408,
              y: 5116
            },
            currentGold: 1077,
            totalGold: 3077,
            level: 7,
            xp: 3332,
            minionsKilled: 46,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 7338,
              y: 6687
            },
            currentGold: 399,
            totalGold: 4024,
            level: 10,
            xp: 6179,
            minionsKilled: 84,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 8494,
              y: 5955
            },
            currentGold: 635,
            totalGold: 3335,
            level: 7,
            xp: 3587,
            minionsKilled: 9,
            jungleMinionsKilled: 27,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 8390,
              y: 5714
            },
            currentGold: 559,
            totalGold: 2909,
            level: 7,
            xp: 3275,
            minionsKilled: 12,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 10092,
              y: 7245
            },
            currentGold: 744,
            totalGold: 3194,
            level: 8,
            xp: 4826,
            minionsKilled: 66,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 8966,
              y: 6411
            },
            currentGold: 538,
            totalGold: 4613,
            level: 7,
            xp: 3656,
            minionsKilled: 75,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 7452,
              y: 6928
            },
            currentGold: 908,
            totalGold: 3758,
            level: 8,
            xp: 4919,
            minionsKilled: 73,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'WARD_PLACED',
            timestamp: 667144,
            wardType: 'YELLOW_TRINKET',
            creatorId: 1
          },
          {
            type: 'WARD_PLACED',
            timestamp: 678399,
            wardType: 'YELLOW_TRINKET',
            creatorId: 6
          },
          {
            type: 'WARD_PLACED',
            timestamp: 678795,
            wardType: 'CONTROL_WARD',
            creatorId: 5
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 678795,
            participantId: 5,
            itemId: 2055
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 683996,
            participantId: 1,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 690828,
            wardType: 'YELLOW_TRINKET',
            creatorId: 8
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 693705,
            participantId: 4,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 696542,
            participantId: 10,
            itemId: 2003
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 699149,
            participantId: 7,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 712332,
            position: {
              x: 10092,
              y: 7245
            },
            killerId: 4,
            victimId: 8,
            assistingParticipantIds: [2, 3, 1, 5]
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 713951,
            participantId: 5,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 715700,
            wardType: 'YELLOW_TRINKET',
            creatorId: 10
          },
          {
            type: 'WARD_PLACED',
            timestamp: 716657,
            wardType: 'YELLOW_TRINKET',
            creatorId: 9
          }
        ],
        timestamp: 720420
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 6390,
              y: 6662
            },
            currentGold: 2011,
            totalGold: 4436,
            level: 9,
            xp: 5983,
            minionsKilled: 97,
            jungleMinionsKilled: 6,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 5167,
              y: 4686
            },
            currentGold: 259,
            totalGold: 3484,
            level: 7,
            xp: 3760,
            minionsKilled: 4,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 6815,
              y: 4924
            },
            currentGold: 1475,
            totalGold: 4025,
            level: 7,
            xp: 3647,
            minionsKilled: 0,
            jungleMinionsKilled: 34,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 1791,
              y: 1370
            },
            currentGold: 184,
            totalGold: 3284,
            level: 7,
            xp: 3526,
            minionsKilled: 46,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 3050,
              y: 13004
            },
            currentGold: 1199,
            totalGold: 4824,
            level: 10,
            xp: 6485,
            minionsKilled: 85,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 9308,
              y: 11411
            },
            currentGold: 871,
            totalGold: 3571,
            level: 7,
            xp: 3925,
            minionsKilled: 11,
            jungleMinionsKilled: 29,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 12315,
              y: 6294
            },
            currentGold: 764,
            totalGold: 3114,
            level: 7,
            xp: 3645,
            minionsKilled: 13,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 4877,
              y: 11887
            },
            currentGold: 490,
            totalGold: 3340,
            level: 8,
            xp: 4826,
            minionsKilled: 66,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 9978,
              y: 9177
            },
            currentGold: 161,
            totalGold: 4736,
            level: 7,
            xp: 3656,
            minionsKilled: 75,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 8218,
              y: 7545
            },
            currentGold: 347,
            totalGold: 3997,
            level: 9,
            xp: 5162,
            minionsKilled: 79,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'CHAMPION_KILL',
            timestamp: 721377,
            position: {
              x: 7620,
              y: 6888
            },
            killerId: 5,
            victimId: 10,
            assistingParticipantIds: [2, 3]
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 723225,
            participantId: 3,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 731712,
            wardType: 'SIGHT_WARD',
            creatorId: 3
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 737391,
            position: {
              x: 8770,
              y: 8468
            },
            killerId: 5,
            victimId: 9,
            assistingParticipantIds: [1]
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 738282,
            participantId: 10,
            itemId: 3067
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 743331,
            participantId: 8,
            itemId: 3067
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 743331,
            participantId: 8,
            itemId: 1028
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 746202,
            participantId: 9,
            itemId: 3006
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 746202,
            participantId: 9,
            itemId: 1001
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 746202,
            participantId: 9,
            itemId: 1042
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 755409,
            participantId: 2,
            itemId: 3504
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 755409,
            participantId: 2,
            itemId: 3114
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 755409,
            participantId: 2,
            itemId: 3113
          },
          {
            type: 'WARD_PLACED',
            timestamp: 762273,
            wardType: 'YELLOW_TRINKET',
            creatorId: 5
          },
          {
            type: 'WARD_KILL',
            timestamp: 762504,
            wardType: 'YELLOW_TRINKET',
            killerId: 1
          },
          {
            type: 'WARD_KILL',
            timestamp: 763956,
            wardType: 'SIGHT_WARD',
            killerId: 7
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 772375,
            participantId: 4,
            itemId: 3085
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 772375,
            participantId: 4,
            itemId: 1042
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 772375,
            participantId: 4,
            itemId: 3086
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 774916,
            participantId: 10,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          }
        ],
        timestamp: 780430
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 7031,
              y: 9476
            },
            currentGold: 752,
            totalGold: 4777,
            level: 10,
            xp: 6428,
            minionsKilled: 107,
            jungleMinionsKilled: 6,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 12232,
              y: 1756
            },
            currentGold: 449,
            totalGold: 3674,
            level: 7,
            xp: 3843,
            minionsKilled: 5,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 11844,
              y: 1567
            },
            currentGold: 1782,
            totalGold: 4332,
            level: 8,
            xp: 4156,
            minionsKilled: 0,
            jungleMinionsKilled: 41,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 12173,
              y: 1975
            },
            currentGold: 395,
            totalGold: 3495,
            level: 7,
            xp: 3703,
            minionsKilled: 49,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 1626,
              y: 10991
            },
            currentGold: 150,
            totalGold: 5125,
            level: 10,
            xp: 6901,
            minionsKilled: 93,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 12051,
              y: 4900
            },
            currentGold: 373,
            totalGold: 3898,
            level: 8,
            xp: 4495,
            minionsKilled: 11,
            jungleMinionsKilled: 33,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 12966,
              y: 2799
            },
            currentGold: 941,
            totalGold: 3291,
            level: 8,
            xp: 4090,
            minionsKilled: 13,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 1426,
              y: 11439
            },
            currentGold: 984,
            totalGold: 3834,
            level: 9,
            xp: 5720,
            minionsKilled: 82,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 12679,
              y: 2792
            },
            currentGold: 539,
            totalGold: 5114,
            level: 7,
            xp: 4043,
            minionsKilled: 87,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 7850,
              y: 8157
            },
            currentGold: 566,
            totalGold: 4216,
            level: 9,
            xp: 5658,
            minionsKilled: 82,
            jungleMinionsKilled: 4,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'ITEM_PURCHASED',
            timestamp: 786112,
            participantId: 1,
            itemId: 3027
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 786112,
            participantId: 1,
            itemId: 3010
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 787399,
            participantId: 6,
            itemId: 1412
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 787399,
            participantId: 6,
            itemId: 3133
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 787399,
            participantId: 6,
            itemId: 3715
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 789643,
            participantId: 6,
            itemId: 1042
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 794067,
            participantId: 3,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 794298,
            wardType: 'YELLOW_TRINKET',
            creatorId: 7
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 797961,
            participantId: 8,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 798358,
            participantId: 5,
            itemId: 3027
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 798358,
            participantId: 5,
            itemId: 3010
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 798358,
            participantId: 5,
            itemId: 1026
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 800569,
            participantId: 5,
            itemId: 1001
          },
          {
            type: 'WARD_PLACED',
            timestamp: 801427,
            wardType: 'YELLOW_TRINKET',
            creatorId: 4
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 805922,
            participantId: 5,
            itemId: 1029
          },
          {
            type: 'WARD_KILL',
            timestamp: 808628,
            wardType: 'CONTROL_WARD',
            killerId: 2
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 816416,
            participantId: 7,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 818858,
            participantId: 1,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 820805,
            participantId: 6,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 820838,
            wardType: 'YELLOW_TRINKET',
            creatorId: 9
          },
          {
            type: 'WARD_PLACED',
            timestamp: 822593,
            wardType: 'YELLOW_TRINKET',
            creatorId: 8
          },
          {
            type: 'WARD_KILL',
            timestamp: 828832,
            wardType: 'CONTROL_WARD',
            killerId: 8
          },
          {
            type: 'WARD_PLACED',
            timestamp: 829063,
            wardType: 'YELLOW_TRINKET',
            creatorId: 3
          },
          {
            type: 'WARD_PLACED',
            timestamp: 839793,
            wardType: 'YELLOW_TRINKET',
            creatorId: 1
          }
        ],
        timestamp: 840453
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 3935,
              y: 9536
            },
            currentGold: 1194,
            totalGold: 5219,
            level: 10,
            xp: 6781,
            minionsKilled: 107,
            jungleMinionsKilled: 6,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 10707,
              y: 1968
            },
            currentGold: 801,
            totalGold: 4026,
            level: 8,
            xp: 4107,
            minionsKilled: 5,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 9131,
              y: 3960
            },
            currentGold: 2207,
            totalGold: 4757,
            level: 8,
            xp: 4551,
            minionsKilled: 5,
            jungleMinionsKilled: 49,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 10555,
              y: 4643
            },
            currentGold: 704,
            totalGold: 3804,
            level: 7,
            xp: 4005,
            minionsKilled: 52,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 3108,
              y: 12797
            },
            currentGold: 710,
            totalGold: 5685,
            level: 11,
            xp: 7642,
            minionsKilled: 105,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 7197,
              y: 7689
            },
            currentGold: 586,
            totalGold: 4111,
            level: 8,
            xp: 4988,
            minionsKilled: 12,
            jungleMinionsKilled: 34,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 6996,
              y: 7062
            },
            currentGold: 1118,
            totalGold: 3468,
            level: 8,
            xp: 4399,
            minionsKilled: 13,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 3975,
              y: 13749
            },
            currentGold: 330,
            totalGold: 3980,
            level: 9,
            xp: 5779,
            minionsKilled: 82,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 6427,
              y: 7188
            },
            currentGold: 897,
            totalGold: 5472,
            level: 8,
            xp: 4481,
            minionsKilled: 99,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 5375,
              y: 11555
            },
            currentGold: 805,
            totalGold: 4455,
            level: 9,
            xp: 5923,
            minionsKilled: 88,
            jungleMinionsKilled: 4,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 842994,
            participantId: 9,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 855602,
            wardType: 'YELLOW_TRINKET',
            creatorId: 6
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 860430,
            position: {
              x: 3907,
              y: 13935
            },
            killerId: 1,
            victimId: 8,
            assistingParticipantIds: [5]
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 874988,
            participantId: 5,
            skillSlot: 4,
            levelUpType: 'NORMAL'
          },
          {
            type: 'BUILDING_KILL',
            timestamp: 879379,
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
            type: 'SKILL_LEVEL_UP',
            timestamp: 884297,
            participantId: 2,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 887630,
            participantId: 8,
            itemId: 3065
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 887630,
            participantId: 8,
            itemId: 3211
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 887630,
            participantId: 8,
            itemId: 3067
          },
          {
            type: 'WARD_PLACED',
            timestamp: 892288,
            wardType: 'YELLOW_TRINKET',
            creatorId: 4
          },
          {
            type: 'WARD_PLACED',
            timestamp: 895753,
            wardType: 'YELLOW_TRINKET',
            creatorId: 5
          },
          {
            type: 'WARD_PLACED',
            timestamp: 899251,
            wardType: 'YELLOW_TRINKET',
            creatorId: 3
          }
        ],
        timestamp: 900475
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 779,
              y: 10056
            },
            currentGold: 1492,
            totalGold: 5517,
            level: 10,
            xp: 7214,
            minionsKilled: 107,
            jungleMinionsKilled: 9,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 1330,
              y: 10099
            },
            currentGold: 1278,
            totalGold: 4503,
            level: 8,
            xp: 4638,
            minionsKilled: 5,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 2614,
              y: 9898
            },
            currentGold: 2801,
            totalGold: 5351,
            level: 9,
            xp: 5188,
            minionsKilled: 9,
            jungleMinionsKilled: 50,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 13509,
              y: 3856
            },
            currentGold: 986,
            totalGold: 4086,
            level: 8,
            xp: 4641,
            minionsKilled: 59,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 2256,
              y: 10164
            },
            currentGold: 1271,
            totalGold: 6246,
            level: 11,
            xp: 8186,
            minionsKilled: 112,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 2861,
              y: 10021
            },
            currentGold: 1098,
            totalGold: 4623,
            level: 9,
            xp: 5531,
            minionsKilled: 16,
            jungleMinionsKilled: 35,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 3349,
              y: 11588
            },
            currentGold: 1598,
            totalGold: 3948,
            level: 8,
            xp: 4762,
            minionsKilled: 14,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 1166,
              y: 10391
            },
            currentGold: 1126,
            totalGold: 4776,
            level: 10,
            xp: 6363,
            minionsKilled: 92,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 905,
              y: 9573
            },
            currentGold: 1368,
            totalGold: 5943,
            level: 8,
            xp: 4716,
            minionsKilled: 102,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 13664,
              y: 5877
            },
            currentGold: 408,
            totalGold: 4708,
            level: 9,
            xp: 6013,
            minionsKilled: 88,
            jungleMinionsKilled: 4,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 911662,
            participantId: 6,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'BUILDING_KILL',
            timestamp: 912553,
            position: {
              x: 5846,
              y: 6396
            },
            killerId: 6,
            assistingParticipantIds: [7, 9],
            teamId: 100,
            buildingType: 'TOWER_BUILDING',
            laneType: 'MID_LANE',
            towerType: 'OUTER_TURRET'
          },
          {
            type: 'ELITE_MONSTER_KILL',
            timestamp: 914731,
            position: {
              x: 9926,
              y: 4489
            },
            killerId: 3,
            monsterType: 'DRAGON',
            monsterSubType: 'AIR_DRAGON'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 927677,
            participantId: 4,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 932956,
            participantId: 10,
            itemId: 3152
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 932956,
            participantId: 10,
            itemId: 3145
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 932956,
            participantId: 10,
            itemId: 3067
          },
          {
            type: 'WARD_PLACED',
            timestamp: 934309,
            wardType: 'YELLOW_TRINKET',
            creatorId: 6
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 936190,
            participantId: 8,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 938005,
            wardType: 'YELLOW_TRINKET',
            creatorId: 2
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 947846,
            position: {
              x: 905,
              y: 9573
            },
            killerId: 3,
            victimId: 9,
            assistingParticipantIds: [2, 1]
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 953887,
            position: {
              x: 1330,
              y: 10099
            },
            killerId: 8,
            victimId: 2,
            assistingParticipantIds: [7, 9]
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 953986,
            position: {
              x: 1166,
              y: 10391
            },
            killerId: 5,
            victimId: 8,
            assistingParticipantIds: [2, 3]
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 955207,
            participantId: 3,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 958904,
            wardType: 'SIGHT_WARD',
            creatorId: 3
          }
        ],
        timestamp: 960488
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 6253,
              y: 6614
            },
            currentGold: 647,
            totalGold: 5957,
            level: 11,
            xp: 7491,
            minionsKilled: 108,
            jungleMinionsKilled: 9,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 5910,
              y: 5965
            },
            currentGold: 283,
            totalGold: 4858,
            level: 8,
            xp: 4889,
            minionsKilled: 5,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 6435,
              y: 6103
            },
            currentGold: 322,
            totalGold: 5547,
            level: 9,
            xp: 5510,
            minionsKilled: 13,
            jungleMinionsKilled: 50,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 5416,
              y: 5010
            },
            currentGold: 336,
            totalGold: 4236,
            level: 8,
            xp: 4657,
            minionsKilled: 59,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 6492,
              y: 6067
            },
            currentGold: 672,
            totalGold: 6487,
            level: 12,
            xp: 8615,
            minionsKilled: 118,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 11458,
              y: 8248
            },
            currentGold: 1480,
            totalGold: 5005,
            level: 10,
            xp: 6166,
            minionsKilled: 16,
            jungleMinionsKilled: 44,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 6628,
              y: 6214
            },
            currentGold: 1773,
            totalGold: 4124,
            level: 8,
            xp: 4878,
            minionsKilled: 14,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 4622,
              y: 13821
            },
            currentGold: 426,
            totalGold: 4976,
            level: 10,
            xp: 6632,
            minionsKilled: 94,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 6154,
              y: 5723
            },
            currentGold: 461,
            totalGold: 6086,
            level: 8,
            xp: 4855,
            minionsKilled: 103,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 6957,
              y: 6436
            },
            currentGold: 1223,
            totalGold: 5523,
            level: 10,
            xp: 7199,
            minionsKilled: 107,
            jungleMinionsKilled: 4,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'ITEM_PURCHASED',
            timestamp: 961181,
            participantId: 2,
            itemId: 3114
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 965340,
            participantId: 9,
            itemId: 1043
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 965340,
            participantId: 9,
            itemId: 1042
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 966726,
            participantId: 9,
            itemId: 1036
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 968706,
            position: {
              x: 13509,
              y: 3856
            },
            killerId: 10,
            victimId: 4,
            assistingParticipantIds: []
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 971676,
            participantId: 1,
            itemId: 1026
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 971973,
            participantId: 1,
            itemId: 1052
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 979002,
            participantId: 8,
            itemId: 3751
          },
          {
            type: 'WARD_PLACED',
            timestamp: 979761,
            wardType: 'YELLOW_TRINKET',
            creatorId: 7
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 988773,
            participantId: 2,
            itemId: 1028
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 989301,
            participantId: 2,
            itemId: 1006
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 990951,
            participantId: 10,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 991314,
            participantId: 3,
            itemId: 1408
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 991314,
            participantId: 3,
            itemId: 3133
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 991314,
            participantId: 3,
            itemId: 3711
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 993495,
            participantId: 3,
            itemId: 3077
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 994254,
            participantId: 5,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 996960,
            participantId: 3,
            itemId: 3117
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 996960,
            participantId: 3,
            itemId: 1001
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 999931,
            participantId: 3,
            itemId: 1036
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1001251,
            participantId: 4,
            itemId: 3067
          },
          {
            type: 'ITEM_SOLD',
            timestamp: 1001515,
            participantId: 5,
            itemId: 1029
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1001779,
            participantId: 1,
            skillSlot: 4,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1003165,
            wardType: 'YELLOW_TRINKET',
            creatorId: 1
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1003627,
            participantId: 5,
            itemId: 3145
          },
          {
            type: 'WARD_KILL',
            timestamp: 1012708,
            wardType: 'CONTROL_WARD',
            killerId: 10
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 1013864,
            position: {
              x: 6154,
              y: 5723
            },
            killerId: 1,
            victimId: 9,
            assistingParticipantIds: [2]
          }
        ],
        timestamp: 1020512
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 7623,
              y: 6154
            },
            currentGold: 585,
            totalGold: 6295,
            level: 11,
            xp: 7909,
            minionsKilled: 113,
            jungleMinionsKilled: 9,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 394,
              y: 461
            },
            currentGold: 693,
            totalGold: 5268,
            level: 9,
            xp: 5311,
            minionsKilled: 5,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 2146,
              y: 8397
            },
            currentGold: 249,
            totalGold: 5874,
            level: 9,
            xp: 6017,
            minionsKilled: 13,
            jungleMinionsKilled: 51,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 7239,
              y: 3295
            },
            currentGold: 995,
            totalGold: 4895,
            level: 9,
            xp: 5296,
            minionsKilled: 62,
            jungleMinionsKilled: 6,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 2438,
              y: 12497
            },
            currentGold: 1345,
            totalGold: 7160,
            level: 12,
            xp: 9456,
            minionsKilled: 126,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 6090,
              y: 5790
            },
            currentGold: 2084,
            totalGold: 5609,
            level: 11,
            xp: 7382,
            minionsKilled: 22,
            jungleMinionsKilled: 46,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 9798,
              y: 9503
            },
            currentGold: 422,
            totalGold: 4472,
            level: 9,
            xp: 5060,
            minionsKilled: 14,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 3243,
              y: 13271
            },
            currentGold: 831,
            totalGold: 5381,
            level: 11,
            xp: 7309,
            minionsKilled: 106,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 5868,
              y: 5958
            },
            currentGold: 644,
            totalGold: 6619,
            level: 9,
            xp: 5755,
            minionsKilled: 107,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 9815,
              y: 9595
            },
            currentGold: 176,
            totalGold: 5976,
            level: 11,
            xp: 7330,
            minionsKilled: 107,
            jungleMinionsKilled: 4,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1021539,
            participantId: 6,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 1022573,
            position: {
              x: 6513,
              y: 6118
            },
            killerId: 10,
            victimId: 3,
            assistingParticipantIds: [7]
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 1023629,
            position: {
              x: 6917,
              y: 6256
            },
            killerId: 5,
            victimId: 10,
            assistingParticipantIds: [2, 3, 1]
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1025213,
            participantId: 7,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 1026170,
            position: {
              x: 7256,
              y: 6013
            },
            killerId: 4,
            victimId: 7,
            assistingParticipantIds: [2, 3, 1, 5]
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1026698,
            participantId: 2,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1029041,
            participantId: 10,
            skillSlot: 4,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1032110,
            participantId: 3,
            itemId: 1028
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1034453,
            wardType: 'YELLOW_TRINKET',
            creatorId: 5
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1035509,
            participantId: 7,
            itemId: 3117
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1035542,
            participantId: 4,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1037390,
            participantId: 9,
            itemId: 1036
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1039238,
            wardType: 'YELLOW_TRINKET',
            creatorId: 8
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1039601,
            participantId: 7,
            itemId: 2049
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1041713,
            participantId: 10,
            itemId: 3136
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1066602,
            participantId: 9,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 1070133,
            position: {
              x: 7623,
              y: 6154
            },
            killerId: 9,
            victimId: 1,
            assistingParticipantIds: [6]
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1074098,
            participantId: 1,
            itemId: 1028
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1075023,
            participantId: 6,
            skillSlot: 4,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1079878,
            participantId: 8,
            skillSlot: 4,
            levelUpType: 'NORMAL'
          }
        ],
        timestamp: 1080538
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 10419,
              y: 1444
            },
            currentGold: 744,
            totalGold: 6454,
            level: 11,
            xp: 8026,
            minionsKilled: 115,
            jungleMinionsKilled: 9,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 5711,
              y: 5684
            },
            currentGold: 297,
            totalGold: 5592,
            level: 9,
            xp: 5722,
            minionsKilled: 9,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 3080,
              y: 5913
            },
            currentGold: 371,
            totalGold: 5996,
            level: 9,
            xp: 6017,
            minionsKilled: 13,
            jungleMinionsKilled: 51,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 10316,
              y: 2845
            },
            currentGold: 396,
            totalGold: 5046,
            level: 9,
            xp: 5353,
            minionsKilled: 62,
            jungleMinionsKilled: 6,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 2996,
              y: 13653
            },
            currentGold: 452,
            totalGold: 7717,
            level: 13,
            xp: 10192,
            minionsKilled: 133,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 10494,
              y: 3188
            },
            currentGold: 3149,
            totalGold: 6674,
            level: 11,
            xp: 8315,
            minionsKilled: 28,
            jungleMinionsKilled: 56,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 1384,
              y: 10838
            },
            currentGold: 861,
            totalGold: 4911,
            level: 9,
            xp: 5060,
            minionsKilled: 14,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 3498,
              y: 13785
            },
            currentGold: 1435,
            totalGold: 5985,
            level: 11,
            xp: 8006,
            minionsKilled: 109,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 7402,
              y: 10021
            },
            currentGold: 389,
            totalGold: 7164,
            level: 10,
            xp: 6186,
            minionsKilled: 107,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 1232,
              y: 10483
            },
            currentGold: 1107,
            totalGold: 6907,
            level: 11,
            xp: 8442,
            minionsKilled: 122,
            jungleMinionsKilled: 4,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'WARD_PLACED',
            timestamp: 1080604,
            wardType: 'YELLOW_TRINKET',
            creatorId: 6
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1081431,
            participantId: 2,
            itemId: 3801
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1081431,
            participantId: 2,
            itemId: 1028
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1081431,
            participantId: 2,
            itemId: 1006
          },
          {
            type: 'ITEM_SOLD',
            timestamp: 1085193,
            participantId: 2,
            itemId: 2055
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1089681,
            wardType: 'YELLOW_TRINKET',
            creatorId: 3
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1091166,
            participantId: 2,
            itemId: 3107
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1091166,
            participantId: 2,
            itemId: 3114
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1091166,
            participantId: 2,
            itemId: 3801
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 1093906,
            position: {
              x: 5312,
              y: 5192
            },
            killerId: 6,
            victimId: 3,
            assistingParticipantIds: [9]
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1096513,
            participantId: 4,
            itemId: 1028
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1096942,
            participantId: 4,
            itemId: 1036
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1096975,
            participantId: 9,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'BUILDING_KILL',
            timestamp: 1100440,
            position: {
              x: 5048,
              y: 4812
            },
            killerId: 9,
            assistingParticipantIds: [6, 7],
            teamId: 100,
            buildingType: 'TOWER_BUILDING',
            laneType: 'MID_LANE',
            towerType: 'INNER_TURRET'
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 1105130,
            position: {
              x: 3498,
              y: 13785
            },
            killerId: 5,
            victimId: 8,
            assistingParticipantIds: []
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 1107803,
            position: {
              x: 2996,
              y: 13653
            },
            killerId: 10,
            victimId: 5,
            assistingParticipantIds: [8]
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1112027,
            participantId: 9,
            itemId: 3144
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1112027,
            participantId: 9,
            itemId: 1036
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1112027,
            participantId: 9,
            itemId: 1036
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1123215,
            wardType: 'YELLOW_TRINKET',
            creatorId: 4
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1128697,
            wardType: 'YELLOW_TRINKET',
            creatorId: 7
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1135367,
            wardType: 'YELLOW_TRINKET',
            creatorId: 10
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1136588,
            participantId: 5,
            itemId: 3152
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1136588,
            participantId: 5,
            itemId: 3145
          }
        ],
        timestamp: 1140552
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 12075,
              y: 1864
            },
            currentGold: 1230,
            totalGold: 6940,
            level: 12,
            xp: 8900,
            minionsKilled: 127,
            jungleMinionsKilled: 9,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 4654,
              y: 4908
            },
            currentGold: 876,
            totalGold: 6171,
            level: 10,
            xp: 6226,
            minionsKilled: 10,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 4834,
              y: 5072
            },
            currentGold: 770,
            totalGold: 6395,
            level: 10,
            xp: 6540,
            minionsKilled: 17,
            jungleMinionsKilled: 54,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 4816,
              y: 5173
            },
            currentGold: 349,
            totalGold: 5299,
            level: 9,
            xp: 5372,
            minionsKilled: 62,
            jungleMinionsKilled: 6,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 3753,
              y: 6415
            },
            currentGold: 812,
            totalGold: 8077,
            level: 13,
            xp: 10607,
            minionsKilled: 140,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 11471,
              y: 8693
            },
            currentGold: 39,
            totalGold: 7297,
            level: 12,
            xp: 8875,
            minionsKilled: 28,
            jungleMinionsKilled: 57,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 6125,
              y: 6232
            },
            currentGold: 1352,
            totalGold: 5402,
            level: 9,
            xp: 5143,
            minionsKilled: 14,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 6221,
              y: 6539
            },
            currentGold: 320,
            totalGold: 6390,
            level: 11,
            xp: 8420,
            minionsKilled: 117,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 6339,
              y: 6216
            },
            currentGold: 649,
            totalGold: 7424,
            level: 10,
            xp: 6345,
            minionsKilled: 109,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 6779,
              y: 6196
            },
            currentGold: 1473,
            totalGold: 7273,
            level: 12,
            xp: 8610,
            minionsKilled: 123,
            jungleMinionsKilled: 4,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'CHAMPION_KILL',
            timestamp: 1143819,
            position: {
              x: 10316,
              y: 2845
            },
            killerId: 6,
            victimId: 4,
            assistingParticipantIds: []
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1145073,
            participantId: 6,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'BUILDING_KILL',
            timestamp: 1145733,
            position: {
              x: 981,
              y: 10441
            },
            killerId: 10,
            assistingParticipantIds: [7],
            teamId: 100,
            buildingType: 'TOWER_BUILDING',
            laneType: 'TOP_LANE',
            towerType: 'OUTER_TURRET'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1146558,
            wardType: 'YELLOW_TRINKET',
            creatorId: 9
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1148043,
            wardType: 'YELLOW_TRINKET',
            creatorId: 1
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1150914,
            wardType: 'YELLOW_TRINKET',
            creatorId: 9
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1150947,
            participantId: 8,
            itemId: 3111
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1150947,
            participantId: 8,
            itemId: 1001
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1152333,
            participantId: 5,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1153191,
            participantId: 3,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1158902,
            participantId: 4,
            itemId: 1001
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1159397,
            participantId: 8,
            itemId: 1057
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1167295,
            participantId: 2,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ELITE_MONSTER_KILL',
            timestamp: 1171685,
            position: {
              x: 4628,
              y: 9972
            },
            killerId: 7,
            monsterType: 'RIFTHERALD'
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1174457,
            participantId: 9,
            itemId: 3340
          },
          {
            type: 'BUILDING_KILL',
            timestamp: 1176470,
            position: {
              x: 8955,
              y: 8510
            },
            killerId: 0,
            assistingParticipantIds: [],
            teamId: 200,
            buildingType: 'TOWER_BUILDING',
            laneType: 'MID_LANE',
            towerType: 'OUTER_TURRET'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1178153,
            participantId: 6,
            itemId: 3078
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1178153,
            participantId: 6,
            itemId: 1042
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1179143,
            participantId: 1,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1182674,
            participantId: 6,
            itemId: 1042
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1186140,
            wardType: 'SIGHT_WARD',
            creatorId: 7
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1192940,
            wardType: 'YELLOW_TRINKET',
            creatorId: 5
          }
        ],
        timestamp: 1200564
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 13042,
              y: 3130
            },
            currentGold: 569,
            totalGold: 7194,
            level: 12,
            xp: 9254,
            minionsKilled: 134,
            jungleMinionsKilled: 9,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 6704,
              y: 1328
            },
            currentGold: 77,
            totalGold: 6472,
            level: 10,
            xp: 6414,
            minionsKilled: 12,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 6548,
              y: 1128
            },
            currentGold: 1056,
            totalGold: 6681,
            level: 10,
            xp: 7053,
            minionsKilled: 20,
            jungleMinionsKilled: 59,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 6565,
              y: 1719
            },
            currentGold: 565,
            totalGold: 5515,
            level: 9,
            xp: 5526,
            minionsKilled: 65,
            jungleMinionsKilled: 6,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 6982,
              y: 1650
            },
            currentGold: 990,
            totalGold: 8255,
            level: 13,
            xp: 10761,
            minionsKilled: 143,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 7924,
              y: 963
            },
            currentGold: 970,
            totalGold: 8228,
            level: 13,
            xp: 10156,
            minionsKilled: 43,
            jungleMinionsKilled: 61,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 7943,
              y: 1774
            },
            currentGold: 1646,
            totalGold: 5696,
            level: 9,
            xp: 5853,
            minionsKilled: 16,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 7771,
              y: 1548
            },
            currentGold: 469,
            totalGold: 6539,
            level: 11,
            xp: 8507,
            minionsKilled: 117,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 8310,
              y: 1081
            },
            currentGold: 1006,
            totalGold: 7781,
            level: 10,
            xp: 7020,
            minionsKilled: 117,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 8097,
              y: 1777
            },
            currentGold: 1654,
            totalGold: 7454,
            level: 12,
            xp: 8736,
            minionsKilled: 126,
            jungleMinionsKilled: 4,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'WARD_PLACED',
            timestamp: 1202445,
            wardType: 'YELLOW_TRINKET',
            creatorId: 8
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1214560,
            wardType: 'YELLOW_TRINKET',
            creatorId: 4
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1219125,
            wardType: 'YELLOW_TRINKET',
            creatorId: 7
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1225009,
            participantId: 10,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1227882,
            wardType: 'YELLOW_TRINKET',
            creatorId: 8
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 1233540,
            position: {
              x: 13042,
              y: 3130
            },
            killerId: 6,
            victimId: 1,
            assistingParticipantIds: [7, 9]
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1237206,
            participantId: 1,
            itemId: 3116
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1237206,
            participantId: 1,
            itemId: 1026
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1237206,
            participantId: 1,
            itemId: 1052
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1237206,
            participantId: 1,
            itemId: 1028
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1238130,
            participantId: 6,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1243509,
            wardType: 'YELLOW_TRINKET',
            creatorId: 5
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1244664,
            participantId: 2,
            itemId: 3114
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1245522,
            participantId: 2,
            itemId: 1001
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1246215,
            wardType: 'SIGHT_WARD',
            creatorId: 7
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1248560,
            wardType: 'YELLOW_TRINKET',
            creatorId: 6
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1248890,
            wardType: 'YELLOW_TRINKET',
            creatorId: 10
          }
        ],
        timestamp: 1260575
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 3668,
              y: 1508
            },
            currentGold: 300,
            totalGold: 7360,
            level: 12,
            xp: 9369,
            minionsKilled: 136,
            jungleMinionsKilled: 9,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 2752,
              y: 1830
            },
            currentGold: 245,
            totalGold: 6640,
            level: 10,
            xp: 6501,
            minionsKilled: 12,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 5271,
              y: 3293
            },
            currentGold: 375,
            totalGold: 6850,
            level: 11,
            xp: 7507,
            minionsKilled: 22,
            jungleMinionsKilled: 59,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 1742,
              y: 2517
            },
            currentGold: 268,
            totalGold: 5718,
            level: 9,
            xp: 5652,
            minionsKilled: 66,
            jungleMinionsKilled: 6,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 3965,
              y: 2569
            },
            currentGold: 423,
            totalGold: 8488,
            level: 13,
            xp: 11135,
            minionsKilled: 149,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 7050,
              y: 2808
            },
            currentGold: 2104,
            totalGold: 9362,
            level: 13,
            xp: 10443,
            minionsKilled: 47,
            jungleMinionsKilled: 61,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 6668,
              y: 4574
            },
            currentGold: 2193,
            totalGold: 6243,
            level: 10,
            xp: 6145,
            minionsKilled: 16,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 6536,
              y: 2496
            },
            currentGold: 1001,
            totalGold: 7071,
            level: 12,
            xp: 8840,
            minionsKilled: 118,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 8563,
              y: 2223
            },
            currentGold: 1724,
            totalGold: 8499,
            level: 11,
            xp: 7412,
            minionsKilled: 122,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 6905,
              y: 2750
            },
            currentGold: 2216,
            totalGold: 8016,
            level: 12,
            xp: 9085,
            minionsKilled: 127,
            jungleMinionsKilled: 4,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1261169,
            participantId: 9,
            itemId: 3513
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1273558,
            participantId: 1,
            itemId: 1052
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 1280857,
            position: {
              x: 5364,
              y: 1191
            },
            killerId: 6,
            victimId: 2,
            assistingParticipantIds: [8, 9, 10]
          },
          {
            type: 'BUILDING_KILL',
            timestamp: 1282059,
            position: {
              x: 6919,
              y: 1483
            },
            killerId: 9,
            assistingParticipantIds: [7],
            teamId: 100,
            buildingType: 'TOWER_BUILDING',
            laneType: 'BOT_LANE',
            towerType: 'INNER_TURRET'
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 1283948,
            position: {
              x: 6116,
              y: 1695
            },
            killerId: 6,
            victimId: 4,
            assistingParticipantIds: [8, 7, 9, 10]
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1285870,
            participantId: 8,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1286596,
            participantId: 9,
            skillSlot: 4,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1287026,
            participantId: 4,
            itemId: 3044
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1287026,
            participantId: 4,
            itemId: 1028
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1287026,
            participantId: 4,
            itemId: 1036
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1292386,
            participantId: 7,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1293317,
            participantId: 3,
            itemId: 3052
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1293317,
            participantId: 3,
            itemId: 1036
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1293317,
            participantId: 3,
            itemId: 1028
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1294274,
            participantId: 3,
            itemId: 1028
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1297607,
            participantId: 8,
            itemId: 2003
          },
          {
            type: 'BUILDING_KILL',
            timestamp: 1300157,
            position: {
              x: 4281,
              y: 1253
            },
            killerId: 10,
            assistingParticipantIds: [6, 7, 9],
            teamId: 100,
            buildingType: 'TOWER_BUILDING',
            laneType: 'BOT_LANE',
            towerType: 'BASE_TURRET'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1301939,
            participantId: 5,
            itemId: 3047
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1301939,
            participantId: 5,
            itemId: 1001
          },
          {
            type: 'BUILDING_KILL',
            timestamp: 1308720,
            position: {
              x: 3452,
              y: 1236
            },
            killerId: 9,
            assistingParticipantIds: [8, 6, 7, 10],
            teamId: 100,
            buildingType: 'INHIBITOR_BUILDING',
            laneType: 'BOT_LANE',
            towerType: 'UNDEFINED_TURRET'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1317465,
            participantId: 3,
            skillSlot: 4,
            levelUpType: 'NORMAL'
          }
        ],
        timestamp: 1320601
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 8224,
              y: 2231
            },
            currentGold: 770,
            totalGold: 7830,
            level: 13,
            xp: 10164,
            minionsKilled: 147,
            jungleMinionsKilled: 13,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 4635,
              y: 8316
            },
            currentGold: 407,
            totalGold: 6802,
            level: 10,
            xp: 6501,
            minionsKilled: 12,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 2911,
              y: 8376
            },
            currentGold: 683,
            totalGold: 7158,
            level: 11,
            xp: 8077,
            minionsKilled: 22,
            jungleMinionsKilled: 63,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 5651,
              y: 5610
            },
            currentGold: 467,
            totalGold: 5917,
            level: 9,
            xp: 5803,
            minionsKilled: 68,
            jungleMinionsKilled: 6,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 879,
              y: 766
            },
            currentGold: 646,
            totalGold: 8711,
            level: 13,
            xp: 11317,
            minionsKilled: 149,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 4979,
              y: 10055
            },
            currentGold: 2252,
            totalGold: 9510,
            level: 13,
            xp: 10554,
            minionsKilled: 47,
            jungleMinionsKilled: 62,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 4830,
              y: 9914
            },
            currentGold: 2363,
            totalGold: 6413,
            level: 10,
            xp: 6186,
            minionsKilled: 16,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 4992,
              y: 10190
            },
            currentGold: 1223,
            totalGold: 7293,
            level: 12,
            xp: 9115,
            minionsKilled: 120,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 4377,
              y: 10144
            },
            currentGold: 2023,
            totalGold: 8798,
            level: 11,
            xp: 7797,
            minionsKilled: 131,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 4824,
              y: 10605
            },
            currentGold: 2439,
            totalGold: 8239,
            level: 12,
            xp: 9395,
            minionsKilled: 132,
            jungleMinionsKilled: 4,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'WARD_PLACED',
            timestamp: 1330039,
            wardType: 'YELLOW_TRINKET',
            creatorId: 1
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1330798,
            wardType: 'YELLOW_TRINKET',
            creatorId: 10
          },
          {
            type: 'ELITE_MONSTER_KILL',
            timestamp: 1335914,
            position: {
              x: 9866,
              y: 4414
            },
            killerId: 6,
            monsterType: 'DRAGON',
            monsterSubType: 'FIRE_DRAGON'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1346855,
            wardType: 'YELLOW_TRINKET',
            creatorId: 4
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1350585,
            wardType: 'YELLOW_TRINKET',
            creatorId: 6
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1357188,
            wardType: 'YELLOW_TRINKET',
            creatorId: 8
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1363860,
            wardType: 'CONTROL_WARD',
            creatorId: 6
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1363860,
            participantId: 6,
            itemId: 2055
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1364058,
            wardType: 'YELLOW_TRINKET',
            creatorId: 7
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1366236,
            wardType: 'SIGHT_WARD',
            creatorId: 7
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1366269,
            participantId: 1,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1368383,
            wardType: 'YELLOW_TRINKET',
            creatorId: 5
          }
        ],
        timestamp: 1380612
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 7076,
              y: 3716
            },
            currentGold: 1193,
            totalGold: 8253,
            level: 13,
            xp: 10787,
            minionsKilled: 156,
            jungleMinionsKilled: 19,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 9915,
              y: 5608
            },
            currentGold: 575,
            totalGold: 6970,
            level: 10,
            xp: 6579,
            minionsKilled: 12,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 9856,
              y: 5972
            },
            currentGold: 955,
            totalGold: 7430,
            level: 12,
            xp: 8580,
            minionsKilled: 24,
            jungleMinionsKilled: 69,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 11604,
              y: 1527
            },
            currentGold: 682,
            totalGold: 6132,
            level: 10,
            xp: 6344,
            minionsKilled: 71,
            jungleMinionsKilled: 6,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 8248,
              y: 6280
            },
            currentGold: 890,
            totalGold: 8955,
            level: 14,
            xp: 11778,
            minionsKilled: 155,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 14040,
              y: 14137
            },
            currentGold: 473,
            totalGold: 10331,
            level: 14,
            xp: 11998,
            minionsKilled: 49,
            jungleMinionsKilled: 75,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 8592,
              y: 7848
            },
            currentGold: 238,
            totalGold: 6888,
            level: 10,
            xp: 7166,
            minionsKilled: 16,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 2328,
              y: 12017
            },
            currentGold: 737,
            totalGold: 7907,
            level: 13,
            xp: 10465,
            minionsKilled: 128,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 7227,
              y: 7785
            },
            currentGold: 436,
            totalGold: 9411,
            level: 12,
            xp: 8777,
            minionsKilled: 139,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 13501,
              y: 2772
            },
            currentGold: 461,
            totalGold: 8661,
            level: 13,
            xp: 10123,
            minionsKilled: 132,
            jungleMinionsKilled: 4,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'ELITE_MONSTER_KILL',
            timestamp: 1382862,
            position: {
              x: 5007,
              y: 10471
            },
            killerId: 6,
            monsterType: 'BARON_NASHOR'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1388613,
            participantId: 9,
            itemId: 3153
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1388613,
            participantId: 9,
            itemId: 3144
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1388613,
            participantId: 9,
            itemId: 1043
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1390203,
            participantId: 9,
            itemId: 1038
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1390830,
            wardType: 'YELLOW_TRINKET',
            creatorId: 1
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1390962,
            participantId: 10,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1392150,
            participantId: 7,
            itemId: 2045
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1392150,
            participantId: 7,
            itemId: 2049
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1392843,
            participantId: 10,
            itemId: 3151
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1392843,
            participantId: 10,
            itemId: 3136
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1394596,
            participantId: 10,
            itemId: 3020
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1394596,
            participantId: 10,
            itemId: 1001
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1394895,
            participantId: 7,
            itemId: 3105
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1396380,
            participantId: 7,
            itemId: 1033
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1396842,
            participantId: 8,
            itemId: 3010
          },
          {
            type: 'ITEM_UNDO',
            timestamp: 1397469,
            participantId: 7,
            afterId: 0,
            beforeId: 1033
          },
          {
            type: 'ITEM_UNDO',
            timestamp: 1397931,
            participantId: 7,
            afterId: 0,
            beforeId: 3105
          },
          {
            type: 'ITEM_UNDO',
            timestamp: 1398393,
            participantId: 7,
            afterId: 0,
            beforeId: 2045
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1399496,
            participantId: 7,
            itemId: 3190
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1401905,
            participantId: 7,
            itemId: 1028
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1404618,
            wardType: 'YELLOW_TRINKET',
            creatorId: 3
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1406369,
            participantId: 6,
            skillSlot: 2,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1408684,
            wardType: 'YELLOW_TRINKET',
            creatorId: 2
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1411449,
            wardType: 'YELLOW_TRINKET',
            creatorId: 2
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1417300,
            participantId: 5,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1417465,
            participantId: 4,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1417705,
            wardType: 'YELLOW_TRINKET',
            creatorId: 3
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1419292,
            participantId: 8,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1426523,
            participantId: 3,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1427018,
            participantId: 6,
            itemId: 3036
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1432774,
            participantId: 9,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1438684,
            wardType: 'SIGHT_WARD',
            creatorId: 3
          }
        ],
        timestamp: 1440620
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            position: {
              x: 4265,
              y: 2682
            },
            currentGold: 388,
            totalGold: 8513,
            level: 13,
            xp: 11078,
            minionsKilled: 158,
            jungleMinionsKilled: 20,
            dominionScore: 0,
            teamScore: 0
          },
          '2': {
            participantId: 2,
            position: {
              x: 872,
              y: 4552
            },
            currentGold: 1015,
            totalGold: 7410,
            level: 11,
            xp: 7394,
            minionsKilled: 13,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '3': {
            participantId: 3,
            position: {
              x: 753,
              y: 4251
            },
            currentGold: 1471,
            totalGold: 7946,
            level: 12,
            xp: 9283,
            minionsKilled: 25,
            jungleMinionsKilled: 70,
            dominionScore: 0,
            teamScore: 0
          },
          '4': {
            participantId: 4,
            position: {
              x: 7812,
              y: 766
            },
            currentGold: 928,
            totalGold: 6378,
            level: 10,
            xp: 6642,
            minionsKilled: 74,
            jungleMinionsKilled: 6,
            dominionScore: 0,
            teamScore: 0
          },
          '5': {
            participantId: 5,
            position: {
              x: 1209,
              y: 5180
            },
            currentGold: 1297,
            totalGold: 9361,
            level: 14,
            xp: 12386,
            minionsKilled: 166,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '6': {
            participantId: 6,
            position: {
              x: 7849,
              y: 3276
            },
            currentGold: 406,
            totalGold: 10764,
            level: 14,
            xp: 12479,
            minionsKilled: 49,
            jungleMinionsKilled: 77,
            dominionScore: 0,
            teamScore: 0
          },
          '7': {
            participantId: 7,
            position: {
              x: 1812,
              y: 5255
            },
            currentGold: 610,
            totalGold: 7260,
            level: 11,
            xp: 7821,
            minionsKilled: 16,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '8': {
            participantId: 8,
            position: {
              x: 715,
              y: 4507
            },
            currentGold: 1338,
            totalGold: 8508,
            level: 13,
            xp: 11011,
            minionsKilled: 134,
            jungleMinionsKilled: 0,
            dominionScore: 0,
            teamScore: 0
          },
          '9': {
            participantId: 9,
            position: {
              x: 1204,
              y: 5400
            },
            currentGold: 1230,
            totalGold: 10204,
            level: 12,
            xp: 9311,
            minionsKilled: 148,
            jungleMinionsKilled: 1,
            dominionScore: 0,
            teamScore: 0
          },
          '10': {
            participantId: 10,
            position: {
              x: 3874,
              y: 2494
            },
            currentGold: 943,
            totalGold: 9143,
            level: 13,
            xp: 11072,
            minionsKilled: 132,
            jungleMinionsKilled: 4,
            dominionScore: 0,
            teamScore: 0
          }
        },
        events: [
          {
            type: 'WARD_PLACED',
            timestamp: 1441148,
            wardType: 'YELLOW_TRINKET',
            creatorId: 9
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1446470,
            wardType: 'SIGHT_WARD',
            creatorId: 7
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1450638,
            participantId: 6,
            itemId: 3363
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1450638,
            participantId: 6,
            itemId: 3340
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1451826,
            participantId: 7,
            skillSlot: 4,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1452793,
            participantId: 1,
            itemId: 3136
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1452793,
            participantId: 1,
            itemId: 1052
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1453922,
            participantId: 6,
            itemId: 3006
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1453922,
            participantId: 6,
            itemId: 1001
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1453922,
            participantId: 6,
            itemId: 1042
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1459914,
            wardType: 'SIGHT_WARD',
            creatorId: 7
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1461649,
            wardType: 'YELLOW_TRINKET',
            creatorId: 9
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1467042,
            wardType: 'YELLOW_TRINKET',
            creatorId: 5
          },
          {
            type: 'BUILDING_KILL',
            timestamp: 1467966,
            position: {
              x: 1512,
              y: 6699
            },
            killerId: 9,
            assistingParticipantIds: [8, 7],
            teamId: 100,
            buildingType: 'TOWER_BUILDING',
            laneType: 'TOP_LANE',
            towerType: 'INNER_TURRET'
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 1478874,
            position: {
              x: 7812,
              y: 766
            },
            killerId: 10,
            victimId: 4,
            assistingParticipantIds: []
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1479995,
            wardType: 'SIGHT_WARD',
            creatorId: 3
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1487418,
            wardType: 'YELLOW_TRINKET',
            creatorId: 1
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1491917,
            wardType: 'BLUE_TRINKET',
            creatorId: 6
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 1497409,
            position: {
              x: 715,
              y: 4507
            },
            killerId: 3,
            victimId: 8,
            assistingParticipantIds: [2, 5]
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 1498458,
            position: {
              x: 872,
              y: 4552
            },
            killerId: 9,
            victimId: 2,
            assistingParticipantIds: [8]
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1498623,
            participantId: 2,
            skillSlot: 4,
            levelUpType: 'NORMAL'
          }
        ],
        timestamp: 1500624
      },
      {
        participantFrames: {
          '1': {
            participantId: 1,
            currentGold: 469,
            totalGold: 8594,
            level: 13,
            xp: 11078,
            minionsKilled: 158,
            jungleMinionsKilled: 20
          },
          '2': {
            participantId: 2,
            currentGold: 294,
            totalGold: 7519,
            level: 11,
            xp: 7394,
            minionsKilled: 13,
            jungleMinionsKilled: 1
          },
          '3': {
            participantId: 3,
            currentGold: 103,
            totalGold: 8078,
            level: 12,
            xp: 9375,
            minionsKilled: 26,
            jungleMinionsKilled: 70
          },
          '4': {
            participantId: 4,
            currentGold: 83,
            totalGold: 6483,
            level: 10,
            xp: 6686,
            minionsKilled: 74,
            jungleMinionsKilled: 6
          },
          '5': {
            participantId: 5,
            currentGold: 368,
            totalGold: 9443,
            level: 14,
            xp: 12386,
            minionsKilled: 166,
            jungleMinionsKilled: 1
          },
          '6': {
            participantId: 6,
            currentGold: 1009,
            totalGold: 11367,
            level: 14,
            xp: 12891,
            minionsKilled: 57,
            jungleMinionsKilled: 77
          },
          '7': {
            participantId: 7,
            currentGold: 1735,
            totalGold: 8385,
            level: 12,
            xp: 9293,
            minionsKilled: 18,
            jungleMinionsKilled: 1
          },
          '8': {
            participantId: 8,
            currentGold: 40,
            totalGold: 9090,
            level: 14,
            xp: 11456,
            minionsKilled: 134,
            jungleMinionsKilled: 0
          },
          '9': {
            participantId: 9,
            currentGold: 2336,
            totalGold: 11311,
            level: 13,
            xp: 10380,
            minionsKilled: 157,
            jungleMinionsKilled: 1
          },
          '10': {
            participantId: 10,
            currentGold: 1828,
            totalGold: 10028,
            level: 14,
            xp: 12581,
            minionsKilled: 136,
            jungleMinionsKilled: 4
          }
        },
        events: [
          {
            type: 'CHAMPION_KILL',
            timestamp: 1501226,
            position: {
              x: 4508,
              y: 2803
            },
            killerId: 10,
            victimId: 1,
            assistingParticipantIds: []
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 1505683,
            position: {
              x: 1164,
              y: 5381
            },
            killerId: 9,
            victimId: 5,
            assistingParticipantIds: [8, 7]
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1506046,
            participantId: 10,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 1507333,
            position: {
              x: 972,
              y: 5361
            },
            killerId: 7,
            victimId: 3,
            assistingParticipantIds: [8, 9]
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1509181,
            participantId: 7,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1510798,
            participantId: 4,
            itemId: 3071
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1510798,
            participantId: 4,
            itemId: 3044
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1510798,
            participantId: 4,
            itemId: 3067
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1511161,
            participantId: 8,
            skillSlot: 3,
            levelUpType: 'NORMAL'
          },
          {
            type: 'WARD_PLACED',
            timestamp: 1511524,
            wardType: 'YELLOW_TRINKET',
            creatorId: 7
          },
          {
            type: 'SKILL_LEVEL_UP',
            timestamp: 1511755,
            participantId: 9,
            skillSlot: 1,
            levelUpType: 'NORMAL'
          },
          {
            type: 'BUILDING_KILL',
            timestamp: 1512283,
            position: {
              x: 2177,
              y: 1807
            },
            killerId: 0,
            assistingParticipantIds: [],
            teamId: 100,
            buildingType: 'TOWER_BUILDING',
            laneType: 'MID_LANE',
            towerType: 'NEXUS_TURRET'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1512580,
            participantId: 3,
            itemId: 3748
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1512580,
            participantId: 3,
            itemId: 3077
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1512580,
            participantId: 3,
            itemId: 1028
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1512580,
            participantId: 3,
            itemId: 3052
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1512976,
            participantId: 2,
            itemId: 3028
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1513075,
            participantId: 8,
            itemId: 3001
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1513075,
            participantId: 8,
            itemId: 3010
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1513075,
            participantId: 8,
            itemId: 1057
          },
          {
            type: 'BUILDING_KILL',
            timestamp: 1516581,
            position: {
              x: 1169,
              y: 4287
            },
            killerId: 9,
            assistingParticipantIds: [7],
            teamId: 100,
            buildingType: 'TOWER_BUILDING',
            laneType: 'TOP_LANE',
            towerType: 'BASE_TURRET'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1518530,
            participantId: 8,
            itemId: 1029
          },
          {
            type: 'ITEM_SOLD',
            timestamp: 1520392,
            participantId: 5,
            itemId: 2031
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1522529,
            participantId: 5,
            itemId: 1031
          },
          {
            type: 'BUILDING_KILL',
            timestamp: 1523597,
            position: {
              x: 1748,
              y: 2270
            },
            killerId: 10,
            assistingParticipantIds: [],
            teamId: 100,
            buildingType: 'TOWER_BUILDING',
            laneType: 'MID_LANE',
            towerType: 'NEXUS_TURRET'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1525984,
            participantId: 3,
            itemId: 1031
          },
          {
            type: 'BUILDING_KILL',
            timestamp: 1526017,
            position: {
              x: 1171,
              y: 3571
            },
            killerId: 9,
            assistingParticipantIds: [7],
            teamId: 100,
            buildingType: 'INHIBITOR_BUILDING',
            laneType: 'TOP_LANE',
            towerType: 'UNDEFINED_TURRET'
          },
          {
            type: 'ITEM_PURCHASED',
            timestamp: 1534492,
            participantId: 8,
            itemId: 1031
          },
          {
            type: 'ITEM_DESTROYED',
            timestamp: 1534492,
            participantId: 8,
            itemId: 1029
          },
          {
            type: 'CHAMPION_KILL',
            timestamp: 1535549,
            position: {
              x: 1208,
              y: 870
            },
            killerId: 7,
            victimId: 4,
            assistingParticipantIds: [6, 9, 10]
          }
        ],
        timestamp: 1560624
      }
    ],
    frameInterval: 60000
  }
};

const createTestMatchResult = function(matchResult) {
  return defaultsDeep(matchResult, matchResultDefaults);
};

export default createTestMatchResult;
