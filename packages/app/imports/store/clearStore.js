import {
  clearChampionMatches,
  clearChampionStats,
  clearMatchupMatches,
  clearMatchupStats,
  clearParticipantMatches,
  clearTrophyStats,
  clearPlayedTogether,
  clearParticipantPerformance,
  clearParticipantHeatmap
} from './actions';

const clearStore = store => {
  store.dispatch(clearChampionMatches());
  store.dispatch(clearChampionStats());
  store.dispatch(clearMatchupMatches());
  store.dispatch(clearMatchupStats());
  store.dispatch(clearParticipantMatches());
  store.dispatch(clearParticipantHeatmap());
  store.dispatch(clearParticipantPerformance());
  store.dispatch(clearPlayedTogether());
  store.dispatch(clearTrophyStats());
};

export const clearStoreInterval = store => {
  setTimeout(() => clearStore(store), 1000 * 60);
  setInterval(() => clearStore(store), 1000 * 60 * 60);
};
