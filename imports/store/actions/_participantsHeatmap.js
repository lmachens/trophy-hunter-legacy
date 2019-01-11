import { fetchIfNeeded } from './_helpers';
import {
  CLEAR_PARTICIPANT_HEATMAP,
  RECEIVE_PARTICIPANT_HEATMAP,
  RECEIVE_PARTICIPANT_HEATMAP_ERROR,
  REQUEST_PARTICIPANT_HEATMAP
} from '../types';

import { Meteor } from 'meteor/meteor';

export const clearParticipantHeatmap = () => {
  return {
    type: CLEAR_PARTICIPANT_HEATMAP
  };
};

const requestParticipantHeatmap = identifier => {
  return {
    type: REQUEST_PARTICIPANT_HEATMAP,
    data: {
      identifier
    }
  };
};

export const receiveParticipantHeatmap = (identifier, heatmap) => {
  return {
    type: RECEIVE_PARTICIPANT_HEATMAP,
    data: {
      identifier,
      heatmap,
      receivedAt: Date.now()
    }
  };
};

const receiveParticipantHeatmapError = (identifier, error) => {
  return {
    type: RECEIVE_PARTICIPANT_HEATMAP_ERROR,
    data: {
      identifier,
      error,
      receivedAt: Date.now()
    }
  };
};

export const fetchParticipantHeatmap = identifier => {
  return dispatch => {
    dispatch(requestParticipantHeatmap(identifier));
    return new Promise(resolve => {
      const params = identifier.split('&');
      const platformId = params[0];
      const summonerId = parseInt(params[1]) || params[1];
      const championId = parseInt(params[2]);
      const role = params[3];
      const mapId = parseInt(params[4]);
      Meteor.call(
        'getParticipantHeatmap',
        {
          platformId,
          summonerId,
          championId,
          role,
          mapId
        },
        (error, result) => {
          if (error) {
            return resolve(dispatch(receiveParticipantHeatmapError(identifier, error)));
          }
          return resolve(dispatch(receiveParticipantHeatmap(identifier, result)));
        }
      );
    });
  };
};

const ttl = 1000 * 60 * 30;
export const fetchParticipantHeatmapIfNeeded = fetchIfNeeded(
  fetchParticipantHeatmap,
  'participantsHeatmapByParticipant',
  ttl
);
