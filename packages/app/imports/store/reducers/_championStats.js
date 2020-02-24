import {
  RECEIVE_CHAMPION_STATS,
  RECEIVE_CHAMPION_STATS_ERROR,
  REQUEST_CHAMPION_STATS,
  CLEAR_CHAMPION_STATS
} from '../types';
import { clearExpired } from './_helpers';

const championStats = (
  state = {
    isFetching: false,
    stats: null,
    error: null
  },
  action
) => {
  const { type, ...data } = action;
  switch (type) {
    case REQUEST_CHAMPION_STATS:
      return { ...state, isFetching: true, error: null };
    case RECEIVE_CHAMPION_STATS:
      return {
        ...state,
        isFetching: false,
        error: null,
        stats: data.stats,
        lastUpdated: data.receivedAt
      };
    case RECEIVE_CHAMPION_STATS_ERROR:
      return { ...state, isFetching: false, error: data.error, lastUpdated: data.receivedAt };
    default:
      return state;
  }
};

export const championStatsByChampionId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CHAMPION_STATS:
    case REQUEST_CHAMPION_STATS:
    case RECEIVE_CHAMPION_STATS_ERROR:
      return { ...state, [action.championId]: championStats(state[action.championId], action) };
    case CLEAR_CHAMPION_STATS:
      return clearExpired(state);
    default:
      return state;
  }
};
