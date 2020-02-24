import {
  CLEAR_TROPHY_STATS,
  RECEIVE_TROPHY_STATS,
  RECEIVE_TROPHY_STATS_ERROR,
  REQUEST_TROPHY_STATS
} from '../types';
import { clearExpired } from './_helpers';

const trophyStats = (
  state = {
    isFetching: false,
    stats: null,
    error: null
  },
  action
) => {
  const { type, ...data } = action;
  switch (type) {
    case REQUEST_TROPHY_STATS:
      return { ...state, isFetching: true, error: null, lastUpdated: Date.now() };
    case RECEIVE_TROPHY_STATS:
      return {
        ...state,
        isFetching: false,
        error: null,
        stats: data.stats,
        lastUpdated: Date.now()
      };
    case RECEIVE_TROPHY_STATS_ERROR:
      return { ...state, isFetching: false, error: data.error, lastUpdated: Date.now() };
    default:
      return state;
  }
};

export const trophyStatsByTrophyName = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TROPHY_STATS:
    case REQUEST_TROPHY_STATS:
    case RECEIVE_TROPHY_STATS_ERROR:
      return { ...state, [action.trophyName]: trophyStats(state[action.trophyName], action) };
    case CLEAR_TROPHY_STATS:
      return clearExpired(state);
    default:
      return state;
  }
};
