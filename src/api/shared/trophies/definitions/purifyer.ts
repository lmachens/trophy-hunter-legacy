import SCORES from '../scores';
import { ARAM } from '../types';

const purifyer = {
  name: 'purifyer',
  title: 'Purifyer',
  description: 'Score at least 30 kills. (ARAM: 32 kills).',
  svgPath:
    'M94 67.656v78.094h124.063V67.656H94zm-74.156 49.5v75.875l97.78 98.032h144.44l-.002-173.906H236.75V164.438H75.312V117.155H19.844zM280.75 136.03v89.407h99l-46.625 46.75H280.75v18.688h60.125l2.75-2.75 58.625-58.78 2.72-2.72v-1.188h.342V136.03H280.75zM424 154.407v51.75h68.53v-51.75H424zM165.906 309.75c.198 13.433 5.876 25.525 14.938 34.125L115.75 429.97c-25.832 2.44-47.42 20.308-56.97 45.217h126.064c-8.29-21.625-25.665-37.942-47-43.468l23.125-30.564h101.31l23.095 30.563c-21.332 5.527-38.68 21.844-46.97 43.467h126.032c-9.546-24.906-31.11-42.775-56.937-45.218l-63.28-83.658c10.65-8.667 17.47-21.81 17.686-36.562h-96zm30.813 44.156c5.34 2.05 11.124 3.156 17.186 3.156 4.702 0 9.237-.678 13.53-1.937l20.69 27.344h-73l21.593-28.564z',
  score: SCORES.EPIC,
  obtainedCheck: ({ match, trophiesCategory }) => {
    if (trophiesCategory === ARAM) {
      return match.participant.stats.kills >= 32;
    }

    return match.participant.stats.kills >= 30;
  },
  context: 'matches',
  attribute: 'capability'
};

export default purifyer;
