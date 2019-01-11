import { fetchIfNeeded } from './_helpers';
import {
  CLEAR_PARTICIPANT_PERFORMANCE,
  RECEIVE_PARTICIPANT_PERFORMANCE,
  RECEIVE_PARTICIPANT_PERFORMANCE_ERROR,
  REQUEST_PARTICIPANT_PERFORMANCE
} from '../types';

import { Meteor } from 'meteor/meteor';

export const clearParticipantPerformance = () => {
  return {
    type: CLEAR_PARTICIPANT_PERFORMANCE
  };
};

const requestParticipantPerformance = identifier => {
  return {
    type: REQUEST_PARTICIPANT_PERFORMANCE,
    data: { identifier }
  };
};

export const receiveParticipantPerformance = (identifier, performance) => {
  return {
    type: RECEIVE_PARTICIPANT_PERFORMANCE,
    data: {
      identifier,
      performance,
      receivedAt: Date.now()
    }
  };
};

const receiveParticipantPerformanceError = (identifier, error) => {
  return {
    type: RECEIVE_PARTICIPANT_PERFORMANCE_ERROR,
    data: {
      identifier,
      error,
      receivedAt: Date.now()
    }
  };
};

export const fetchParticipantPerformance = identifier => {
  return dispatch => {
    dispatch(requestParticipantPerformance(identifier));
    return new Promise(resolve => {
      const params = identifier.split('&');
      const platformId = params[0];
      const summonerId = parseInt(params[1]) || params[1];
      const championId = parseInt(params[2]);
      Meteor.call(
        'getParticipantPerformance',
        {
          platformId,
          summonerId,
          championId
        },
        (error, result) => {
          if (error) {
            return resolve(dispatch(receiveParticipantPerformanceError(identifier, error)));
          }
          return resolve(dispatch(receiveParticipantPerformance(identifier, result)));
        }
      );
    });
  };
};

const ttl = 1000 * 60 * 30;
export const fetchParticipantPerformanceIfNeeded = fetchIfNeeded(
  fetchParticipantPerformance,
  'participantsPerformanceByParticipant',
  ttl
);
