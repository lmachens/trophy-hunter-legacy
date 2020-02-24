import { ARAM } from '../types';

import SCORES from '../scores';

const mercenary = {
  name: 'mercenary',
  title: 'Mercenary',
  description:
    'You dont miss any fight. Be involved in more than 66% of your teams kills. (from 80%: Omnipresent)(ARAM: 80%-90%).',
  svgPath:
    'M81.375 21.313l-7.22 124.25 36.376 22.25.814 46.375 10.906-2.907 79.72 295.25 18.03-4.874L140.312 206.5l10.813-2.875-22.03-39.5 21.093-38.813-68.813-104zM271.53 23l-30.092 3.125L262 88.28c-16.84 4.572-30.57 20.85-36.375 42.376l43.906 11.313 48.626-10.532c-5.86-21.992-19.883-38.68-37.062-43.22l20.562-62.093L271.53 23zm-48.75 126.22c-.075 1.558-.127 3.13-.124 4.718.07 32.086 16.668 58.92 38.78 65.562l.002-60.313-38.657-9.968zm98.22.718l-40.875 8.875v61.375c23.323-5.21 41.072-32.752 41-66.032-.003-1.415-.06-2.825-.125-4.22zm31.875 71.125c-74.427 0-134.97 60.54-134.97 134.968 0 74.43 60.543 134.94 134.97 134.94 74.427 0 134.938-60.51 134.938-134.94 0-74.426-60.51-134.967-134.938-134.967zm0 18.687c64.327 0 116.25 51.954 116.25 116.28 0 64.328-51.923 116.25-116.25 116.25s-116.28-51.922-116.28-116.25c0-64.326 51.953-116.28 116.28-116.28zm-1.375 20.53c-52.91 0-95.813 42.873-95.813 95.783 0 52.91 42.904 95.812 95.813 95.812 52.91 0 95.78-42.903 95.78-95.813 0-52.91-42.87-95.78-95.78-95.78z',
  score: SCORES.MEDIUM,
  obtainedCheck: ({ match, trophiesCategory }) => {
    if (trophiesCategory === ARAM) {
      return (
        match.participant.stats.killParticipation >= 0.8 &&
        match.participant.stats.killParticipation < 0.9
      );
    }

    return (
      match.participant.stats.killParticipation >= 0.66 &&
      match.participant.stats.killParticipation < 0.8
    );
  },
  context: 'matches',
  attribute: 'wisdom'
};

export default mercenary;
