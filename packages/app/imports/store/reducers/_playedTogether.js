import {
  RECEIVE_PLAYED_TOGETHER,
  RECEIVE_PLAYED_TOGETHER_ERROR,
  REQUEST_PLAYED_TOGETHER,
  CLEAR_PLAYED_TOGETHER
} from '../types';
import { clearExpired } from './_helpers';

const playedTogether = (
  state = {
    isFetching: false,
    error: false,
    playedTogether: {}
  },
  action
) => {
  const { type, data } = action;
  switch (type) {
    case REQUEST_PLAYED_TOGETHER:
      return { ...state, isFetching: true, error: null, lastUpdated: Date.now() };
    case RECEIVE_PLAYED_TOGETHER:
      return {
        ...state,
        isFetching: false,
        error: null,
        playedTogether: data.playedTogether,
        lastUpdated: Date.now()
      };
    case RECEIVE_PLAYED_TOGETHER_ERROR:
      return { ...state, isFetching: false, error: data.error, lastUpdated: Date.now() };
    default:
      return state;
  }
};

export const playedTogetherBySummonerNames = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case RECEIVE_PLAYED_TOGETHER:
    case REQUEST_PLAYED_TOGETHER:
    case RECEIVE_PLAYED_TOGETHER_ERROR: {
      return {
        ...state,
        [data.identifier]: playedTogether(state[data.identifier], action)
      };
    }
    case CLEAR_PLAYED_TOGETHER:
      return clearExpired(state);
    default:
      return state;
  }
};
