import { fetchIfNeeded } from './_helpers';
import {
  RECEIVE_PARTICIPANT_MATCHES,
  RECEIVE_PARTICIPANT_MATCHES_ERROR,
  REQUEST_PARTICIPANT_MATCHES,
  CLEAR_PARTICIPANT_MATCHES
} from '../types';

import { Meteor } from 'meteor/meteor';

export const clearParticipantMatches = () => {
  return {
    type: CLEAR_PARTICIPANT_MATCHES
  };
};

const requestParticipantMatches = identifier => {
  return {
    type: REQUEST_PARTICIPANT_MATCHES,
    data: {
      identifier
    }
  };
};

export const receiveParticipantMatches = ({ identifier, matches }) => {
  return {
    type: RECEIVE_PARTICIPANT_MATCHES,
    data: {
      identifier,
      matches,
      receivedAt: Date.now()
    }
  };
};

const receiveParticipantMatchesError = ({ identifier, error }) => {
  return {
    type: RECEIVE_PARTICIPANT_MATCHES_ERROR,
    data: {
      identifier,
      error,
      receivedAt: Date.now()
    }
  };
};

export const fetchParticipantMatches = identifier => {
  return dispatch => {
    dispatch(requestParticipantMatches(identifier));
    return new Promise(resolve => {
      const params = identifier.split('-');
      const platformId = params[0];
      const summonerId = parseInt(params[1]);
      Meteor.call('getParticipantMatches', { platformId, summonerId }, (error, matches) => {
        if (error) {
          return resolve(dispatch(receiveParticipantMatchesError({ identifier, error })));
        }
        return resolve(dispatch(receiveParticipantMatches({ identifier, matches })));
      });
    });
  };
};

const ttl = 1000 * 60 * 30;
export const fetchParticipantMatchesIfNeeded = fetchIfNeeded(
  fetchParticipantMatches,
  'trophyStatsByTrophyName',
  ttl
);
