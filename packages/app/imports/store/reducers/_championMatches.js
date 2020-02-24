import {
  RECEIVE_CHAMPION_MATCHES,
  RECEIVE_CHAMPION_MATCHES_ERROR,
  REQUEST_CHAMPION_MATCHES,
  CLEAR_CHAMPION_MATCHES
} from '../types';
import { clearExpired } from './_helpers';

const championMatches = (
  state = {
    isFetching: false,
    matches: null,
    error: null
  },
  action
) => {
  const { type, ...data } = action;
  switch (type) {
    case REQUEST_CHAMPION_MATCHES:
      return { ...state, isFetching: true, error: null };
    case RECEIVE_CHAMPION_MATCHES:
      return {
        ...state,
        isFetching: false,
        error: null,
        matches: data.matches,
        lastUpdated: data.receivedAt
      };
    case RECEIVE_CHAMPION_MATCHES_ERROR:
      return { ...state, isFetching: false, error: data.error, lastUpdated: data.receivedAt };
    default:
      return state;
  }
};

export const championMatchesByChampionId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CHAMPION_MATCHES:
    case REQUEST_CHAMPION_MATCHES:
    case RECEIVE_CHAMPION_MATCHES_ERROR:
      return { ...state, [action.championId]: championMatches(state[action.championId], action) };
    case CLEAR_CHAMPION_MATCHES:
      return clearExpired(state);
    default:
      return state;
  }
};
