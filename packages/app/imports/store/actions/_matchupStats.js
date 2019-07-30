import { fetchIfNeeded } from './_helpers';
import {
  RECEIVE_MATCHUP_STATS,
  RECEIVE_MATCHUP_STATS_ERROR,
  REQUEST_MATCHUP_STATS,
  CLEAR_MATCHUP_STATS
} from '../types';
import axios from 'axios';

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
      const mapId = parseInt(params[2]);

      axios
        .get(
          `https://champs.th.gl/matchups?champ1Id=${champ1Id}&champ2Id=${champ2Id}&mapId=${mapId}`
        )
        .then(result => result.data)
        .then(matchup => {
          return resolve(dispatch(receiveMatchupStats({ identifier, stats: matchup })));
        })
        .catch(error => {
          console.error(error);
          return resolve(
            dispatch(receiveMatchupStatsError({ identifier, error: 'Can not fetch' }))
          );
        });
    });
  };
};

const ttl = 1000 * 60 * 3;
export const fetchMatchupStatsIfNeeded = fetchIfNeeded(
  fetchMatchupStats,
  'trophyStatsByTrophyName',
  ttl
);
