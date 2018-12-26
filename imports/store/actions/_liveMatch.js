import {
  SELECT_FIRST_TEAM_TARGET,
  SELECT_MAP_TARGET,
  SELECT_ROLE,
  SELECT_SECOND_TEAM_TARGET,
  SET_LIVE_MATCH
} from '../types';

export const setLiveMatch = liveMatch => {
  return {
    type: SET_LIVE_MATCH,
    data: {
      liveMatch
    }
  };
};

export const selectMapTarget = mapTarget => {
  return {
    type: SELECT_MAP_TARGET,
    data: {
      mapTarget
    }
  };
};

export const selectFirstTeamTarget = firstTeamTarget => {
  return {
    type: SELECT_FIRST_TEAM_TARGET,
    data: {
      firstTeamTarget
    }
  };
};

export const selectSecondTeamTarget = secondTeamTarget => {
  return {
    type: SELECT_SECOND_TEAM_TARGET,
    data: {
      secondTeamTarget
    }
  };
};

export const selectRole = (role, participant) => {
  return {
    type: SELECT_ROLE,
    data: {
      role,
      participant
    }
  };
};
