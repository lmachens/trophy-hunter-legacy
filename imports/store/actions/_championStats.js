import { fetchIfNeeded } from './_helpers';
import {
  RECEIVE_CHAMPION_STATS,
  RECEIVE_CHAMPION_STATS_ERROR,
  REQUEST_CHAMPION_STATS,
  CLEAR_CHAMPION_STATS
} from '../types';

import { Meteor } from 'meteor/meteor';

export const clearChampionStats = () => {
  return {
    type: CLEAR_CHAMPION_STATS
  };
};

const requestChampionStats = championId => {
  return {
    type: REQUEST_CHAMPION_STATS,
    championId
  };
};

export const receiveChampionStats = (championId, { byMap, stats }) => {
  return {
    type: RECEIVE_CHAMPION_STATS,
    championId,
    byMap,
    stats,
    receivedAt: Date.now()
  };
};

const receiveChampionStatsError = (championId, error) => {
  return {
    type: RECEIVE_CHAMPION_STATS_ERROR,
    championId,
    error,
    receivedAt: Date.now()
  };
};

export const fetchChampionStats = championId => {
  return dispatch => {
    dispatch(requestChampionStats(championId));
    return new Promise(resolve => {
      Meteor.call('getChampionStats', championId, (error, result) => {
        if (error || !result) {
          return resolve(dispatch(receiveChampionStatsError(championId, error)));
        }
        return resolve(dispatch(receiveChampionStats(championId, result)));
      });
    });
  };
};

const ttl = 1000 * 60 * 60 * 24;
export const fetchChampionStatsIfNeeded = fetchIfNeeded(
  fetchChampionStats,
  'championStatsByChampionId',
  ttl
);
