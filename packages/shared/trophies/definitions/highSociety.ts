import SCORES from '../scores';
import { ARAM } from '../types';

const highSociety = {
  name: 'highSociety',
  title: 'High Society',
  description:
    'Let others do the dirty work. Score at least 20 assists. (from 30: Mafia Boss) (ARAM: 30 assists, from 40 assists: Mafia Boss).',
  svgPath:
    'M92.906 94.813l60.438 79.75 78.125-79.75H92.905zm189.25 0L359.25 173.5l58.688-78.688H282.155zm-25.344.843l-84.718 86.47H341.53l-84.717-86.47zm177.907 7.906l-58.626 78.563H494.53l-59.81-78.563zm-358.064.75l-57.78 77.813h116.78l-59-77.813zm-58.5 96.5L226.562 429.22 143.344 200.81H18.156zm145.063 0l93.593 256.844 93.593-256.844H163.22zm207.06 0L287.064 429.22 495.469 200.81H370.28z',
  score: SCORES.MEDIUM,
  obtainedCheck: ({ match, trophiesCategory }) => {
    if (trophiesCategory === ARAM) {
      return match.participant.stats.assists >= 30 && match.participant.stats.assists < 40;
    }

    return match.participant.stats.assists >= 20 && match.participant.stats.assists < 30;
  },
  context: 'matches',
  attribute: 'cooperation'
};

export default highSociety;
