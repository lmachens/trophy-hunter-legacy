import { LOGGED_IN, LOGGED_OUT, LOGGING_IN, RECEIVE_TROPHY_HUNTER } from '../types';

export const account = (
  state = {
    userId: null,
    loggingIn: false,
    trophyHunter: null
  },
  action
) => {
  const { type, ...data } = action;
  switch (type) {
    case LOGGED_IN:
      return { ...state, userId: data.userId };
    case LOGGED_OUT:
      return { ...state, userId: null };
    case LOGGING_IN:
      return { ...state, loggingIn: data.loggingIn };
    case RECEIVE_TROPHY_HUNTER:
      return { ...state, trophyHunter: data.trophyHunter };
    default:
      return state;
  }
};
