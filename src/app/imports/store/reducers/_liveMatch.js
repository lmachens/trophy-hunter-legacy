import {
  SELECT_FIRST_TEAM_TARGET,
  SELECT_MAP_TARGET,
  SELECT_ROLE,
  SELECT_SECOND_TEAM_TARGET,
  SET_LIVE_MATCH
} from '../types';

export const liveMatch = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case SELECT_MAP_TARGET:
      return { ...state, mapTarget: data.mapTarget };
    case SET_LIVE_MATCH:
      return { ...data.liveMatch };
    case SELECT_FIRST_TEAM_TARGET:
      return { ...state, firstTeamTarget: data.firstTeamTarget };
    case SELECT_SECOND_TEAM_TARGET:
      return { ...state, secondTeamTarget: data.secondTeamTarget };
    case SELECT_ROLE: {
      const participant =
        state.firstTeam.find(
          participant => participant.participantId === data.participant.participantId
        ) ||
        state.secondTeam.find(
          participant => participant.participantId === data.participant.participantId
        );
      participant.role = data.role;
      if (state.mapTarget && state.mapTarget.participantId === participant.participantId) {
        state.mapTarget.role = data.role;
      } else if (!state.mapTarget && data.role === 'JUNGLE') {
        state.mapTarget = participant;
      }
      if (
        state.firstTeamTarget &&
        state.firstTeamTarget.participantId === participant.participantId
      )
        state.firstTeamTarget.role = data.role;
      if (
        state.secondTeamTarget &&
        state.secondTeamTarget.participantId === participant.participantId
      )
        state.secondTeamTarget.role = data.role;
      return { ...state };
    }
    default:
      return state;
  }
};
