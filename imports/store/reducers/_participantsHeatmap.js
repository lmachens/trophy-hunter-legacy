import {
  RECEIVE_PARTICIPANT_HEATMAP,
  RECEIVE_PARTICIPANT_HEATMAP_ERROR,
  REQUEST_PARTICIPANT_HEATMAP,
  CLEAR_PARTICIPANT_HEATMAP
} from '../types';
import { clearExpired } from './_helpers';

const participantsHeatmap = (
  state = {
    isFetching: false,
    error: false,
    framesByTeamId: {}
  },
  action
) => {
  const { type, data } = action;
  switch (type) {
    case REQUEST_PARTICIPANT_HEATMAP:
      return { ...state, isFetching: true, error: null };
    case RECEIVE_PARTICIPANT_HEATMAP:
      return {
        ...state,
        isFetching: false,
        error: null,
        ...data.heatmap,
        lastUpdated: data.receivedAt
      };
    case RECEIVE_PARTICIPANT_HEATMAP_ERROR:
      return { ...state, isFetching: false, error: data.error, lastUpdated: data.receivedAt };
    default:
      return state;
  }
};

export const participantsHeatmapByParticipant = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case RECEIVE_PARTICIPANT_HEATMAP:
    case REQUEST_PARTICIPANT_HEATMAP:
    case RECEIVE_PARTICIPANT_HEATMAP_ERROR: {
      return {
        ...state,
        [data.identifier]: participantsHeatmap(state[data.identifier], action)
      };
    }
    case CLEAR_PARTICIPANT_HEATMAP:
      return clearExpired(state);
    default:
      return state;
  }
};
