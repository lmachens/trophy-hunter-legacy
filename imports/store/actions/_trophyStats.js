import {
  CLEAR_TROPHY_STATS,
  RECEIVE_TROPHY_STATS,
  RECEIVE_TROPHY_STATS_ERROR,
  REQUEST_TROPHY_STATS
} from '../types';
import { fetchIfNeeded } from './_helpers';

import { Meteor } from 'meteor/meteor';

export const clearTrophyStats = () => {
  return {
    type: CLEAR_TROPHY_STATS
  };
};

const requestTrophyStats = trophyName => {
  return {
    type: REQUEST_TROPHY_STATS,
    trophyName
  };
};

const receiveTrophyStats = (trophyName, stats) => {
  return {
    type: RECEIVE_TROPHY_STATS,
    trophyName,
    stats
  };
};

const receiveTrophyStatsError = (trophyName, error) => {
  return {
    type: RECEIVE_TROPHY_STATS_ERROR,
    trophyName,
    error
  };
};

export const fetchTrophyStats = trophyName => {
  return dispatch => {
    dispatch(requestTrophyStats(trophyName));
    return new Promise(resolve => {
      Meteor.call('getTrophyStats', trophyName, (error, result) => {
        if (error) {
          return resolve(dispatch(receiveTrophyStatsError(trophyName, error)));
        }
        return resolve(dispatch(receiveTrophyStats(trophyName, result)));
      });
    });
  };
};

const ttl = 1000 * 60 * 60 * 24;
export const fetchTrophyStatsIfNeeded = fetchIfNeeded(
  fetchTrophyStats,
  'trophyStatsByTrophyName',
  ttl
);
