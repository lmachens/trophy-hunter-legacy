import {
  RECEIVE_PARTICIPANT_MATCHES,
  RECEIVE_PARTICIPANT_MATCHES_ERROR,
  REQUEST_PARTICIPANT_MATCHES,
  CLEAR_PARTICIPANT_MATCHES
} from '../types';
import { clearExpired } from './_helpers';

const participantMatches = (
  state = {
    isFetching: false,
    matches: null,
    error: null
  },
  action
) => {
  const { type, data } = action;
  switch (type) {
    case REQUEST_PARTICIPANT_MATCHES:
      return { ...state, isFetching: true, error: null };
    case RECEIVE_PARTICIPANT_MATCHES:
      return {
        ...state,
        isFetching: false,
        error: null,
        matches: data.matches,
        lastUpdated: data.receivedAt
      };
    case RECEIVE_PARTICIPANT_MATCHES_ERROR:
      return { ...state, isFetching: false, error: data.error, lastUpdated: data.receivedAt };
    default:
      return state;
  }
};

export const matchesByParticipant = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case RECEIVE_PARTICIPANT_MATCHES:
    case REQUEST_PARTICIPANT_MATCHES:
    case RECEIVE_PARTICIPANT_MATCHES_ERROR: {
      return { ...state, [data.identifier]: participantMatches(state[data.identifier], action) };
    }
    case CLEAR_PARTICIPANT_MATCHES:
      return clearExpired(state);
    default:
      return state;
  }
};
