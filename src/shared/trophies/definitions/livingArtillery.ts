import SCORES from '../scores';
import { TWISTED_TREELINE } from '../types';

const livingArtillery = {
  name: 'livingArtillery',
  title: 'Living Artillery',
  description: 'Deal more than 35% of your teams damage. (Twisted Treeline: more than 50%).',
  svgPath:
    'M372.386 52.97l-14.822 13.064 103.244 117.142 14.822-13.064zm-30.23 26.646l-36.649 32.303 15.549 17.64zm16.865 16.346l-20.442 48.382-1.457 3.448 19.012 21.57 21.897-51.832zm-67.537 28.318L119.939 275.485l.054.062-1.294 1.141c-19.625 17.298-36.277 35.67-49.407 53.91l92.854 105.356c19.745-10.734 40.062-24.948 59.687-42.246l1.295-1.143.055.063 6.23-5.493 165.313-145.713zm102.615 11.482l-20.443 48.385-1.456 3.445 20.838 23.641 21.897-51.83zm36.904 41.873l-20.441 48.385-.973 2.303 37.194-32.783zM58.583 346.723c-4.228 6.959-7.93 13.848-11.015 20.592-6.73 14.712-10.7 28.778-11.157 41.78-.457 13.001 2.827 25.259 10.93 34.452 8.103 9.194 19.85 13.989 32.805 15.168 12.955 1.18 27.408-.992 42.847-5.822 7.078-2.214 14.377-5.02 21.811-8.342z',
  score: SCORES.HARD,
  obtainedCheck: ({ match, trophiesCategory }) => {
    if (trophiesCategory === TWISTED_TREELINE) return match.participant.stats.damageShare >= 0.5;

    return match.participant.stats.damageShare >= 0.35;
  },
  context: 'matches',
  attribute: 'power'
};

export default livingArtillery;
