import { CLOSE_ENCYCLOPEDIA, OPEN_ENCYCLOPEDIA } from '../types';

export const encyclopediaDialog = (
  state = {
    open: false
  },
  action
) => {
  const { type, ...data } = action;
  switch (type) {
    case OPEN_ENCYCLOPEDIA:
      return { ...state, open: true, tab: data.tab, value: data.value };
    case CLOSE_ENCYCLOPEDIA:
      return { ...state, open: false };
    default:
      return state;
  }
};
