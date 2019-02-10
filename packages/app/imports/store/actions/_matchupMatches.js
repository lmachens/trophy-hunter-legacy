import { fetchIfNeeded } from './_helpers';
import {
  CLEAR_MATCHUP_MATCHES,
  RECEIVE_MATCHUP_MATCHES,
  RECEIVE_MATCHUP_MATCHES_ERROR,
  REQUEST_MATCHUP_MATCHES
} from '../types';

import { Meteor } from 'meteor/meteor';

export const clearMatchupMatches = () => {
  return {
    type: CLEAR_MATCHUP_MATCHES
  };
};

const requestMatchupMatches = identifier => {
  return {
    type: REQUEST_MATCHUP_MATCHES,
    data: {
      identifier
    }
  };
};

export const receiveMatchupMatches = ({ identifier, matches }) => {
  return {
    type: RECEIVE_MATCHUP_MATCHES,
    data: {
      identifier,
      matches,
      receivedAt: Date.now()
    }
  };
};

const receiveMatchupMatchesError = ({ identifier, error }) => {
  return {
    type: RECEIVE_MATCHUP_MATCHES_ERROR,
    data: {
      identifier,
      error,
      receivedAt: Date.now()
    }
  };
};

export const fetchMatchupMatches = identifier => {
  return dispatch => {
    dispatch(requestMatchupMatches(identifier));
    return new Promise(resolve => {
      const params = identifier.split('&');
      const champ1Id = parseInt(params[0]);
      const champ2Id = parseInt(params[1]);
      const mapId = parseInt(params[2]);
      Meteor.call('getMatchupMatches', { champ1Id, champ2Id, mapId }, (error, matches) => {
        if (error) {
          return resolve(dispatch(receiveMatchupMatchesError({ identifier, error })));
        }
        return resolve(dispatch(receiveMatchupMatches({ identifier, matches })));
      });
    });
  };
};

const ttl = 1000 * 60 * 60 * 2;
export const fetchMatchupMatchesIfNeeded = fetchIfNeeded(
  fetchMatchupMatches,
  'trophyStatsByTrophyName',
  ttl
);
