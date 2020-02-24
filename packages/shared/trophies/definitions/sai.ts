import SCORES from '../scores';
import { ARAM } from '../types';

const sai = {
  name: 'sai',
  title: 'Sai',
  description:
    'Achieve a takedown on at least four enemy champions before ten minutes (ARAM: five takedowns).',
  svgPath:
    'M476.953 34.873C470.795 28.715 237.497 251.72 162.997 326.2l22.628 22.628C261.473 273.082 483.11 41.03 476.953 34.873zM233.747 166.356c-.24-.24-.6-.335-1.07-.293-9.55.855-113.11 97.3-143.888 124.035-3.515 3.515-3.515 9.213 0 12.728l43.84 43.842-13.442 13.504 32.53 32.53 13.443-13.507L209 423.037c3.515 3.514 9.213 3.514 12.728 0 28.048-32.29 129.91-138.957 123.743-144.957L215.363 403.944l-107.48-107.48zm-120.442 213.39l-2.346 21.12 21.12-2.346zm14.072 37.406l-18.455 2.05-2.062 18.564zM94.63 384.844L74.666 404.9l17.955-1.996zm-4.045 36.396l-32.575 3.62 28.955 28.958zM44.82 434.232l-9.9 9.9 33.122 33.12 9.902-9.896z',
  score: SCORES.HARD,
  obtainedCheck: ({ match, trophiesCategory }) => {
    if (trophiesCategory === ARAM) {
      return match.participant.stats.takeDownsPre10 >= 5;
    }

    return match.participant.stats.takeDownsPre10 >= 4;
  },
  context: 'matches',
  attribute: 'lethality'
};

export default sai;
