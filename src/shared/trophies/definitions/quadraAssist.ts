import { ARAM } from '../types';
import SCORES from '../scores';

const quadraAssist = {
  name: 'quadraAssist',
  title: 'Quadra Assist',
  description:
    'Achieve four assists with no more than ten seconds between two successive assists. (Aram: achieve two quadra assists).',
  svgPath:
    'M257.635 19.707L235.02 57.67h45.228l-22.613-37.963zm-105.03 56.658v23.703H362.67V76.365H152.604zm41.375 42.4c18.588 20.862 30.24 45.644 38.967 72.128 4.876-1.883 10.014-3.222 15.344-3.952v-50.57h18.69v50.567c5.24.716 10.297 2.02 15.1 3.85 8.63-26.39 20.246-51.114 39.008-72.023H193.98zM78.898 150.21V360.25h23.657V150.21H78.898zm333.823 0V360.25h23.657V150.21H412.72zm-18.695 41.31c-20.847 18.572-45.605 30.22-72.064 38.945 1.89 4.88 3.24 10.02 3.974 15.357h50.498v18.69h-50.48c-.713 5.252-2.014 10.318-3.847 15.13 26.352 8.627 51.038 20.234 71.92 38.967V191.52zm-272.775.01v127.075c20.888-18.737 45.58-30.343 71.938-38.97-1.832-4.81-3.132-9.874-3.844-15.123h-50.506v-18.69h50.523c.736-5.334 2.083-10.474 3.972-15.35-26.465-8.725-51.23-20.37-72.082-38.94zm136.408 13.532c-27.628 0-50.226 22.598-50.226 50.227 0 27.627 22.598 50.224 50.226 50.224s50.225-22.597 50.225-50.225c0-27.63-22.597-50.227-50.225-50.227zm0 18.69c17.528 0 31.535 14.01 31.535 31.537 0 17.526-14.007 31.534-31.535 31.534-17.527 0-31.537-14.008-31.537-31.535 0-17.53 14.01-31.538 31.538-31.538zm-197.455 8.762l-38.03 22.654 38.03 22.652v-45.306zm394.87.004v45.298l38.023-22.648-38.024-22.65zM232.907 319.56c-8.72 26.427-20.358 51.154-38.902 71.98h127.056c-18.717-20.87-30.32-45.54-38.943-71.872-4.815 1.84-9.883 3.148-15.138 3.865v50.43h-18.687V323.53c-5.346-.732-10.498-2.078-15.387-3.97zm-80.304 90.674v23.704h210.068v-23.704H152.604zm82.4 42.4l22.63 37.993 22.634-37.994h-45.264z',
  score: SCORES.MEDIUM,
  obtainedCheck: ({ match, trophiesCategory }) => {
    if (trophiesCategory === ARAM) return match.participant.stats.quadraAssists >= 2;

    return match.participant.stats.quadraAssists >= 1;
  },
  context: 'matches',
  attribute: 'cooperation'
};

export default quadraAssist;
