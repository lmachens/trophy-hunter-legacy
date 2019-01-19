import {
  RECEIVE_MATCHUP_STATS,
  RECEIVE_MATCHUP_STATS_ERROR,
  REQUEST_MATCHUP_STATS,
  CLEAR_MATCHUP_STATS
} from '../types';
import { clearExpired } from './_helpers';

const matchupStats = (
  state = {
    isFetching: false,
    stats: null,
    error: null
  },
  action
) => {
  const { type, data } = action;
  switch (type) {
    case REQUEST_MATCHUP_STATS:
      return { ...state, isFetching: true, error: null };
    case RECEIVE_MATCHUP_STATS:
      return {
        ...state,
        isFetching: false,
        error: null,
        stats: data.stats,
        lastUpdated: data.receivedAt
      };
    case RECEIVE_MATCHUP_STATS_ERROR:
      return { ...state, isFetching: false, error: data.error, lastUpdated: data.receivedAt };
    default:
      return state;
  }
};

export const statsByMatchup = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case RECEIVE_MATCHUP_STATS:
    case REQUEST_MATCHUP_STATS:
    case RECEIVE_MATCHUP_STATS_ERROR: {
      return { ...state, [data.identifier]: matchupStats(state[data.identifier], action) };
    }
    case CLEAR_MATCHUP_STATS:
      return clearExpired(state);
    default:
      return state;
  }
};
