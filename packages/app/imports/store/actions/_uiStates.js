import { SET_UI_STATE } from '../types';

export const setUIState = state => {
  return {
    type: SET_UI_STATE,
    data: {
      state
    }
  };
};
