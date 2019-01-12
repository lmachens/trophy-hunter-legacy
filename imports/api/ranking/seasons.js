export const SEASONS = {
  S9: 'S9',
  S8: 'S8',
  ALLTIME: 'alltime',
  TOURNAMENT1: 'tournament1'
};

export const fieldsBySeason = {
  [SEASONS.ALLTIME]: 'rank',
  [SEASONS.S9]: 's9Rank',
  [SEASONS.S8]: 'seasonRank',
  [SEASONS.TOURNAMENT1]: 'tournamentRank'
};

export const scoreFieldsBySeason = {
  [SEASONS.ALLTIME]: 'score',
  [SEASONS.S9]: 's9Score',
  [SEASONS.S8]: 'seasonScore',
  [SEASONS.TOURNAMENT1]: 'tournamentScore'
};
