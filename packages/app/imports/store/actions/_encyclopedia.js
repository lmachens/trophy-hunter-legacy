import { CLOSE_ENCYCLOPEDIA, OPEN_ENCYCLOPEDIA } from '../types';

export const openEncyclopediaEntry = ({ tab, value }) => {
  return {
    type: OPEN_ENCYCLOPEDIA,
    tab,
    value
  };
};

export const closeEncyclopedia = () => {
  return {
    type: CLOSE_ENCYCLOPEDIA
  };
};
