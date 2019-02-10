import { fetchIfNeeded } from './_helpers';
import {
  RECEIVE_MATCHUP_STATS,
  RECEIVE_MATCHUP_STATS_ERROR,
  REQUEST_MATCHUP_STATS,
  CLEAR_MATCHUP_STATS
} from '../types';

import { Meteor } from 'meteor/meteor';

export const clearMatchupStats = () => {
  return {
    type: CLEAR_MATCHUP_STATS
  };
};

const requestMatchupStats = identifier => {
  return {
    type: REQUEST_MATCHUP_STATS,
    data: {
      identifier
    }
  };
};

export const receiveMatchupStats = ({ identifier, stats }) => {
  return {
    type: RECEIVE_MATCHUP_STATS,
    data: {
      identifier,
      stats,
      receivedAt: Date.now()
    }
  };
};

const receiveMatchupStatsError = ({ identifier, error }) => {
  return {
    type: RECEIVE_MATCHUP_STATS_ERROR,
    data: {
      identifier,
      error,
      receivedAt: Date.now()
    }
  };
};

export const fetchMatchupStats = identifier => {
  return dispatch => {
    dispatch(requestMatchupStats(identifier));
    return new Promise(resolve => {
      const params = identifier.split('&');
      const champ1Id = parseInt(params[0]);
      const champ2Id = parseInt(params[1]);
      const role = params[2];
      Meteor.call('getMatchupStats', { champ1Id, champ2Id, role }, (error, stats) => {
        if (error) {
          return resolve(dispatch(receiveMatchupStatsError({ identifier, error })));
        }
        return resolve(dispatch(receiveMatchupStats({ identifier, stats })));
      });
    });
  };
};

const ttl = 1000 * 60 * 60 * 24;
export const fetchMatchupStatsIfNeeded = fetchIfNeeded(
  fetchMatchupStats,
  'trophyStatsByTrophyName',
  ttl
);
