import { fetchIfNeeded } from './_helpers';
import {
  RECEIVE_CHAMPION_MATCHES,
  RECEIVE_CHAMPION_MATCHES_ERROR,
  REQUEST_CHAMPION_MATCHES,
  CLEAR_CHAMPION_MATCHES
} from '../types';

import { Meteor } from 'meteor/meteor';

export const clearChampionMatches = () => {
  return {
    type: CLEAR_CHAMPION_MATCHES
  };
};

const requestChampionMatches = championId => {
  return {
    type: REQUEST_CHAMPION_MATCHES,
    championId
  };
};

const receiveChampionMatches = (championId, matches) => {
  return {
    type: RECEIVE_CHAMPION_MATCHES,
    championId,
    matches,
    receivedAt: Date.now()
  };
};

const receiveChampionMatchesError = (championId, error) => {
  return {
    type: RECEIVE_CHAMPION_MATCHES_ERROR,
    championId,
    error,
    receivedAt: Date.now()
  };
};

export const fetchChampionMatches = championId => {
  return dispatch => {
    dispatch(requestChampionMatches(championId));
    return new Promise(resolve => {
      Meteor.call('getMatchesWithTrophyHunter', championId, (error, result) => {
        if (error || !result) {
          return resolve(dispatch(receiveChampionMatchesError(championId, error)));
        }
        return resolve(dispatch(receiveChampionMatches(championId, result)));
      });
    });
  };
};

const ttl = 1000 * 60 * 60 * 2;
export const fetchChampionMatchesIfNeeded = fetchIfNeeded(
  fetchChampionMatches,
  'championMatchesByChampionId',
  ttl
);
