import {
  RECEIVE_MATCHUP_MATCHES,
  RECEIVE_MATCHUP_MATCHES_ERROR,
  REQUEST_MATCHUP_MATCHES,
  CLEAR_MATCHUP_MATCHES
} from '../types';
import { clearExpired } from './_helpers';

const matchupMatches = (
  state = {
    isFetching: false,
    matches: null,
    error: null
  },
  action
) => {
  const { type, data } = action;
  switch (type) {
    case REQUEST_MATCHUP_MATCHES:
      return { ...state, isFetching: true, error: null };
    case RECEIVE_MATCHUP_MATCHES:
      return {
        ...state,
        isFetching: false,
        error: null,
        matches: data.matches,
        lastUpdated: data.receivedAt
      };
    case RECEIVE_MATCHUP_MATCHES_ERROR:
      return { ...state, isFetching: false, error: data.error, lastUpdated: data.receivedAt };
    default:
      return state;
  }
};

export const matchesByMatchup = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case RECEIVE_MATCHUP_MATCHES:
    case REQUEST_MATCHUP_MATCHES:
    case RECEIVE_MATCHUP_MATCHES_ERROR: {
      return { ...state, [data.identifier]: matchupMatches(state[data.identifier], action) };
    }
    case CLEAR_MATCHUP_MATCHES:
      return clearExpired(state);
    default:
      return state;
  }
};
