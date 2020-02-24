import { SET_UI_STATE } from '../types';

export const uiStates = (
  state = {
    build: 'highestCount',
    startFrame: 1,
    endFrame: 4,
    matchType: 'matchup',
    skill: 'highestCount'
  },
  action
) => {
  const { type, data } = action;
  switch (type) {
    case SET_UI_STATE:
      return { ...state, ...data.state };
    default:
      return state;
  }
};
