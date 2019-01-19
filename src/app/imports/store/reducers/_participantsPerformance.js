import {
  CLEAR_PARTICIPANT_PERFORMANCE,
  RECEIVE_PARTICIPANT_PERFORMANCE,
  RECEIVE_PARTICIPANT_PERFORMANCE_ERROR,
  REQUEST_PARTICIPANT_PERFORMANCE
} from '../types';
import { clearExpired } from './_helpers';

const participantsPerformance = (
  state = {
    isFetching: false,
    error: false,
    stats: null,
    trophyHunter: null,
    summonerLevel: null,
    championMastery: null,
    leaguePositions: null,
    badges: null
  },
  action
) => {
  const { type, data } = action;
  switch (type) {
    case REQUEST_PARTICIPANT_PERFORMANCE:
      return { ...state, isFetching: true, error: null };
    case RECEIVE_PARTICIPANT_PERFORMANCE:
      return {
        ...state,
        isFetching: false,
        error: null,
        ...data.performance,
        lastUpdated: data.receivedAt
      };
    case RECEIVE_PARTICIPANT_PERFORMANCE_ERROR:
      return { ...state, isFetching: false, error: data.error, lastUpdated: data.receivedAt };
    default:
      return state;
  }
};

export const participantsPerformanceByParticipant = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case RECEIVE_PARTICIPANT_PERFORMANCE:
    case REQUEST_PARTICIPANT_PERFORMANCE:
    case RECEIVE_PARTICIPANT_PERFORMANCE_ERROR: {
      return {
        ...state,
        [data.identifier]: participantsPerformance(state[data.identifier], action)
      };
    }
    case CLEAR_PARTICIPANT_PERFORMANCE:
      return clearExpired(state);
    default:
      return state;
  }
};
