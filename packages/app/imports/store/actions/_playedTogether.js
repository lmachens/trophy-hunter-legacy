import { fetchIfNeeded } from './_helpers';
import {
  RECEIVE_PLAYED_TOGETHER,
  RECEIVE_PLAYED_TOGETHER_ERROR,
  REQUEST_PLAYED_TOGETHER,
  CLEAR_PLAYED_TOGETHER
} from '../types';

import { getPlayedTogether } from '/imports/shared/th-api/index.ts';

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
      const params = identifier.split('&');
      const platformId = params[0];
      const summonerNames = params[1].split('|th|');
      getPlayedTogether({ platformId, summonerNames })
        .then(result => {
          resolve(dispatch(receivePlayedTogether(identifier, result)));
        })
        .catch(error => {
          resolve(dispatch(receivePlayedTogetherError(identifier, error)));
        });
    });
  };
};

const ttl = 1000 * 60 * 30;
export const fetchPlayedTogetherIfNeeded = fetchIfNeeded(
  fetchPlayedTogether,
  'playedTogetherBySummonerNames',
  ttl
);
