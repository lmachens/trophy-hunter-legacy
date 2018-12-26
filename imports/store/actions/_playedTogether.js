import { fetchIfNeeded } from './_helpers';
import {
  RECEIVE_PLAYED_TOGETHER,
  RECEIVE_PLAYED_TOGETHER_ERROR,
  REQUEST_PLAYED_TOGETHER,
  CLEAR_PLAYED_TOGETHER
} from '../types';

import { Meteor } from 'meteor/meteor';

export const clearPlayedTogether = () => {
  return {
    type: CLEAR_PLAYED_TOGETHER
  };
};

const requestPlayedTogether = identifier => {
  return {
    type: REQUEST_PLAYED_TOGETHER,
    data: { identifier }
  };
};

export const receivePlayedTogether = (identifier, playedTogether) => {
  return {
    type: RECEIVE_PLAYED_TOGETHER,
    data: {
      identifier,
      playedTogether,
      receivedAt: Date.now()
    }
  };
};

const receivePlayedTogetherError = (identifier, error) => {
  return {
    type: RECEIVE_PLAYED_TOGETHER_ERROR,
    data: {
      identifier,
      error,
      receivedAt: Date.now()
    }
  };
};

export const fetchPlayedTogether = identifier => {
  return dispatch => {
    dispatch(requestPlayedTogether(identifier));
    return new Promise(resolve => {
      const params = identifier.split('-');
      const platformId = params[0];
      const summonerIds = params[1].split('.').map(summonerId => parseInt(summonerId));
      Meteor.call(
        'getPlayedTogether',
        {
          platformId,
          summonerIds
        },
        (error, result) => {
          if (error) {
            return resolve(dispatch(receivePlayedTogetherError(identifier, error)));
          }
          return resolve(dispatch(receivePlayedTogether(identifier, result)));
        }
      );
    });
  };
};

const ttl = 1000 * 60 * 30;
export const fetchPlayedTogetherIfNeeded = fetchIfNeeded(
  fetchPlayedTogether,
  'playedTogetherBySummonerIds',
  ttl
);
