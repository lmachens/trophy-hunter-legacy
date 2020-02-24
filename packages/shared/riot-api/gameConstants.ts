// https://developer.riotgames.com/game-constants.html

export const MATCHMAKING = {
  CUSTOM: 0,
  NORMAL_3x3: 8, // deprecated
  NORMAL_5x5_BLIND: 2, // deprecated
  NORMAL_5x5_DRAFT: 14,
  RANKED_SOLO_5x5: 4, // deprecated
  RANKED_PREMADE_5x5: 6, // deprecated
  RANKED_PREMADE_3x3: 9, // deprecated
  RANKED_FLEX_TT: 9, // deprecated
  RANKED_TEAM_3x3: 41, // deprecated
  RANKED_TEAM_5x5: 42, // deprecated
  ODIN_5x5_BLIND: 16, // deprecated
  ODIN_5x5_DRAFT: 17, // deprecated
  BOT_5x5: 7, // deprecated
  BOT_ODIN_5x5: 25, // deprecated
  BOT_5x5_INTRO: 31, // deprecated
  BOT_5x5_BEGINNER: 32, // deprecated
  BOT_5x5_INTERMEDIATE: 33, // deprecated
  BOT_SR_5x5_INTRO: 830,
  BOT_SR_5x5_BEGINNER: 840,
  BOT_SR_5x5_INTERMEDIATE: 850,
  BOT_TT_3x3: 52, // deprecated
  BOT_TT_3x3_INTERMEDIATE: 800,
  BOT_TT_3x3_INTRO: 810,
  BOT_TT_3x3_BEGINNER: 820,
  GROUP_FINDER_5x5: 61, // deprecated
  ARAM_5x5: 65, // deprecated
  ONEFORALL_5x5: 70,
  FIRSTBLOOD_1x1: 72,
  FIRSTBLOOD_2x2: 73,
  SR_6x6: 75,
  URF_5x5: 76,
  ONEFORALL_MIRRORMODE_5x5: 78,
  BOT_URF_5x5: 83,
  NIGHTMARE_BOT_5x5_RANK1: 91, // deprecated
  NIGHTMARE_BOT_5x5_RANK2: 92, // deprecated
  NIGHTMARE_BOT_5x5_RANK5: 93, // deprecated
  ASCENSION_5x5: 96, // deprecated
  HEXAKILL: 98,
  BILGEWATER_ARAM_5x5: 100,
  KING_PORO_5x5: 300, // deprecated
  COUNTER_PICK: 310,
  BILGEWATER_5x5: 313,
  SIEGE: 315, // deprecated
  DEFINITELY_NOT_DOMINION_5x5: 317,
  ARURF_5X5: 318, // deprecated
  ALL_RANDOM_GAMES: 325,
  NORMAL_DRAFT_PICK_5x5: 400,
  TEAM_BUILDER_DRAFT_RANKED_5x5: 410, // deprecated
  RANKED_SOLO_SR: 420,
  TB_BLIND_SUMMONERS_RIFT_5x5: 430,
  RANKED_FLEX_SR: 440,
  TEAM_BUILDER_RANKED_SOLO: 420,
  ARAM_5v5: 450,
  BLIND_PICK_3v3: 460,
  RANKED_3v3: 470,
  ASSASSINATE_5x5: 600,
  DARKSTAR_3x3: 610,
  TT_COOP_VS_AI_INTRO: 800,
  TT_COOP_VS_AI_BEGINNER: 820,
  SR_COOP_VS_AI_INTRO: 830,
  SR_COOP_VS_AI_BEGINNER: 840,
  SR_COOP_VS_AI_INTERMEDIATE: 850,
  SR_ARURF: 900,
  ASCENSION: 910,
  PORO_KING: 920,
  NEXUS_SIEGE: 940,
  DOOM_BOTS_VOTING: 950,
  DOOM_BOTS_STANDARD: 960,
  STAR_GUARDIAN_NORMAL: 980,
  STAR_GUARDIAN_ONSLAUGHT: 990,
  PROJECT_HUNTERS: 1000,
  SNOW_ARURF: 1010,
  ONE_FOR_ALL: 1020,
  OTHER: -1
};

export const activeMatchModes = [
  'ARAM_5v5',
  'BILGEWATER_ARAM_5x5',
  'CUSTOM',
  'NORMAL_DRAFT_PICK_5x5',
  'TB_BLIND_SUMMONERS_RIFT_5x5',
  'BLIND_PICK_3v3',
  'RANKED_3v3',
  'RANKED_FLEX_SR',
  'RANKED_SOLO_SR',
  'OTHER'
];

export const matchedMatchModes = [
  MATCHMAKING.TB_BLIND_SUMMONERS_RIFT_5x5,
  MATCHMAKING.BLIND_PICK_3v3,
  MATCHMAKING.RANKED_3v3,
  MATCHMAKING.BILGEWATER_ARAM_5x5,
  MATCHMAKING.ARAM_5v5,
  MATCHMAKING.NORMAL_DRAFT_PICK_5x5,
  MATCHMAKING.RANKED_SOLO_SR,
  MATCHMAKING.RANKED_FLEX_SR
];

export const gameQueueConfigIdLabels = {
  [MATCHMAKING.CUSTOM]: 'Custom',
  [MATCHMAKING.NORMAL_3x3]: 'Normal 3v3',
  [MATCHMAKING.NORMAL_5x5_BLIND]: 'Normal 5v5 Blind',
  [MATCHMAKING.NORMAL_5x5_DRAFT]: 'Normal 5v5 Draft',
  [MATCHMAKING.RANKED_SOLO_5x5]: 'Ranked Solo 5v5',
  [MATCHMAKING.RANKED_PREMADE_5x5]: 'Ranked Premade 5v5', // deprecated
  [MATCHMAKING.RANKED_PREMADE_3x3]: 'Ranked Premade 3v3', // deprecated
  [MATCHMAKING.RANKED_FLEX_TT]: 'Ranked Flex 3v3',
  [MATCHMAKING.RANKED_TEAM_3x3]: 'Ranked Team 3v3', // deprecated
  [MATCHMAKING.RANKED_TEAM_5x5]: 'Ranked Team 5v5',
  [MATCHMAKING.ODIN_5x5_BLIND]: 'Dominion 5v5 Blind',
  [MATCHMAKING.ODIN_5x5_DRAFT]: 'Dominion 5v5 Draft',
  [MATCHMAKING.BOT_5x5]: 'Coop vs AI', // deprecated
  [MATCHMAKING.BOT_ODIN_5x5]: 'Dominion Coop vs AI',
  [MATCHMAKING.BOT_5x5_INTRO]: 'Coop vs AI Intro Bot',
  [MATCHMAKING.BOT_5x5_BEGINNER]: 'Coop vs AI Beginner Bot',
  [MATCHMAKING.BOT_5x5_INTERMEDIATE]: 'Coop vs AI Intermediate Bot',
  [MATCHMAKING.BOT_SR_5x5_INTRO]: 'Coop vs AI Intro Bot',
  [MATCHMAKING.BOT_SR_5x5_BEGINNER]: 'Coop vs AI Beginner Bot',
  [MATCHMAKING.BOT_SR_5x5_INTERMEDIATE]: 'Coop vs AI Intermediate Bot',
  [MATCHMAKING.GROUP_FINDER_5x5]: 'Team Builder',
  [MATCHMAKING.ARAM_5x5]: 'ARAM',
  [MATCHMAKING.ONEFORALL_5x5]: 'One for All',
  [MATCHMAKING.FIRSTBLOOD_1x1]: 'Snowdown Showdown 1v1',
  [MATCHMAKING.FIRSTBLOOD_2x2]: 'Snowdown Showdown 2v2',
  [MATCHMAKING.SR_6x6]: '6x6 Hexakill',
  [MATCHMAKING.URF_5x5]: 'Ultra Rapid Fire',
  [MATCHMAKING.ONEFORALL_MIRRORMODE_5x5]: 'One for All (Mirror mode)',
  [MATCHMAKING.BOT_URF_5x5]: 'Ultra Rapid Fire vs AI',
  [MATCHMAKING.NIGHTMARE_BOT_5x5_RANK1]: '	Doom Bots Rank 1',
  [MATCHMAKING.NIGHTMARE_BOT_5x5_RANK2]: 'Doom Bots Rank 2',
  [MATCHMAKING.NIGHTMARE_BOT_5x5_RANK5]: 'Doom Bots Rank 5',
  [MATCHMAKING.ASCENSION_5x5]: 'Ascension',
  [MATCHMAKING.BILGEWATER_ARAM_5x5]: "Butcher's Bridge",
  [MATCHMAKING.KING_PORO_5x5]: 'King Poro',
  [MATCHMAKING.COUNTER_PICK]: 'Nemesis',
  [MATCHMAKING.BILGEWATER_5x5]: 'Black Market Brawlers',
  [MATCHMAKING.SIEGE]: 'Nexus Siege',
  [MATCHMAKING.NEXUS_SIEGE]: 'Nexus Siege',
  [MATCHMAKING.DEFINITELY_NOT_DOMINION_5x5]: 'Definitely Not Dominion',
  [MATCHMAKING.ARURF_5X5]: 'All Random URF',
  [MATCHMAKING.NORMAL_DRAFT_PICK_5x5]: 'Normal 5v5 Draft',
  [MATCHMAKING.TEAM_BUILDER_DRAFT_RANKED_5x5]: 'Ranked 5v5 Draft', // deprecated
  [MATCHMAKING.RANKED_SOLO_SR]: 'Ranked Solo/Duo',
  [MATCHMAKING.TB_BLIND_SUMMONERS_RIFT_5x5]: 'Normal 5v5 Blind Pick',
  [MATCHMAKING.RANKED_FLEX_SR]: 'Ranked Flex',
  [MATCHMAKING.ASSASSINATE_5x5]: 'Blood Hunt Assassin',
  [MATCHMAKING.DARKSTAR_3x3]: 'Darkstar',
  [MATCHMAKING.ARAM_5v5]: 'ARAM',
  [MATCHMAKING.BLIND_PICK_3v3]: 'Normal 3v3',
  [MATCHMAKING.RANKED_3v3]: 'Ranked Flex 3v3',
  [MATCHMAKING.SR_ARURF]: 'ARURF',
  [MATCHMAKING.SNOW_ARURF]: 'Snow ARURF',
  [MATCHMAKING.ASCENSION]: 'Ascension',
  [MATCHMAKING.PORO_KING]: 'Poro King',
  [MATCHMAKING.DOOM_BOTS_VOTING]: 'Doom Bots Voting',
  [MATCHMAKING.DOOM_BOTS_STANDARD]: 'Doom Bots Standard',
  [MATCHMAKING.STAR_GUARDIAN_NORMAL]: 'Star Guardian Normal',
  [MATCHMAKING.STAR_GUARDIAN_ONSLAUGHT]: 'Star Guardian Onslaught',
  [MATCHMAKING.PROJECT_HUNTERS]: 'Project Hunters',
  [MATCHMAKING.ONE_FOR_ALL]: 'One for All',
  [MATCHMAKING.OTHER]: 'Other'
};

export const MAP_NAMES = {
  SUMMONERS_RIFT_SUMMER: 1, // Original Summer Variant
  SUMMONERS_RIFT_AUTUMN: 2, // Original Autumn Variant
  THE_PROVING_GROUNDS: 3, // Tutorial Map
  THE_CRYSTAL_SCAR: 8, // Dominion Map
  SUMMONERS_RIFT: 11, // Current Version
  HOWLING_ABYSS: 12, // ARAM Map
  BUTCHERS_BRIDGE: 14, // ARAM Map
  COSMIC_RUINS: 16, // Darkstar Map
  VALORAN_CITY_PARK: 18, // Star Guardian Invasion Map
  SUBSTRUCTURE_43: 19 // PROJECT: Hunters Map
};

export const mapIdNames = {
  [MAP_NAMES.SUMMONERS_RIFT_SUMMER]: 'SUMMONERS_RIFT_SUMMER',
  [MAP_NAMES.SUMMONERS_RIFT_AUTUMN]: 'SUMMONERS_RIFT_AUTUMN',
  [MAP_NAMES.THE_PROVING_GROUNDS]: 'THE_PROVING_GROUNDS',
  [MAP_NAMES.THE_CRYSTAL_SCAR]: 'THE_CRYSTAL_SCAR',
  [MAP_NAMES.SUMMONERS_RIFT]: 'SUMMONERS_RIFT',
  [MAP_NAMES.HOWLING_ABYSS]: 'HOWLING_ABYSS',
  [MAP_NAMES.BUTCHERS_BRIDGE]: 'BUTCHERS_BRIDGE',
  [MAP_NAMES.COSMIC_RUINS]: 'COSMIC_RUINS',
  [MAP_NAMES.VALORAN_CITY_PARK]: 'VALORAN_CITY_PARK',
  [MAP_NAMES.SUBSTRUCTURE_43]: 'SUBSTRUCTURE_43'
};

export const mapIdLabels = {
  [MAP_NAMES.SUMMONERS_RIFT_SUMMER]: "Summoner's Rift",
  [MAP_NAMES.SUMMONERS_RIFT_AUTUMN]: "Summoner's Rift",
  [MAP_NAMES.THE_PROVING_GROUNDS]: 'The Proving Grounds',
  [MAP_NAMES.THE_CRYSTAL_SCAR]: 'The Crystal Scar',
  [MAP_NAMES.SUMMONERS_RIFT]: "Summoner's Rift",
  [MAP_NAMES.HOWLING_ABYSS]: 'Howling Abyss',
  [MAP_NAMES.BUTCHERS_BRIDGE]: "Butcher's Bridge",
  [MAP_NAMES.COSMIC_RUINS]: 'Cosmic Ruins',
  [MAP_NAMES.VALORAN_CITY_PARK]: 'Valoran City Park',
  [MAP_NAMES.SUBSTRUCTURE_43]: 'Substructure 43'
};

export const queuesByMatchId = {
  [MAP_NAMES.SUMMONERS_RIFT]: [
    MATCHMAKING.RANKED_SOLO_SR,
    MATCHMAKING.RANKED_FLEX_SR,
    MATCHMAKING.NORMAL_DRAFT_PICK_5x5,
    MATCHMAKING.TB_BLIND_SUMMONERS_RIFT_5x5
  ]
};

export const domains = {
  [MAP_NAMES.THE_PROVING_GROUNDS]: {
    min: { x: -500, y: -500 },
    max: { x: 15000, y: 15000 }
  },
  [MAP_NAMES.THE_CRYSTAL_SCAR]: {
    min: { x: 0, y: 0 },
    max: { x: 13987, y: 13987 }
  },
  [MAP_NAMES.SUMMONERS_RIFT]: {
    min: { x: -120, y: -120 },
    max: { x: 14870, y: 14980 },
    turretPositions: {
      team100: [
        [10504, 1029],
        [981, 10441],
        [6919, 1483],
        [4281, 1253],
        [5846, 6396],
        [5048, 4812],
        [3651, 3696],
        [2177, 1807],
        [1748, 2270],
        [1512, 6699],
        [1169, 4287]
      ],
      team200: [
        [13866, 4505],
        [8955, 8510],
        [9767, 10113],
        [11134, 11207],
        [4318, 13875],
        [7943, 13411],
        [10481, 13650],
        [12611, 13084],
        [13052, 12612],
        [13327, 8226],
        [13624, 10572]
      ]
    },
    buffPositions: [[7700, 3800], [3600, 8000], [7100, 11000], [11100, 6900]]
  },
  [MAP_NAMES.HOWLING_ABYSS]: {
    min: { x: -28, y: -19 },
    max: { x: 12849, y: 12858 }
  },
  [MAP_NAMES.BUTCHERS_BRIDGE]: {
    min: { x: -28, y: -19 },
    max: { x: 12849, y: 12858 }
  },
  [MAP_NAMES.COSMIC_RUINS]: {
    min: { x: 20, y: 20 },
    max: { x: 6970, y: 6970 }
  },
  [MAP_NAMES.VALORAN_CITY_PARK]: {
    min: { x: -120, y: -120 },
    max: { x: 14870, y: 14980 }
  },
  [MAP_NAMES.SUBSTRUCTURE_43]: {
    min: { x: -120, y: -120 },
    max: { x: 14870, y: 14980 }
  }
};
