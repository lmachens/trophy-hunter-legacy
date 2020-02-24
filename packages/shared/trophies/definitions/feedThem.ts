import SCORES from '../scores';
import { ARAM } from '../types';

const feedThem = {
  name: 'feedThem',
  title: 'Feed Them',
  description: 'Assist each of your teammates for a kill. (ARAM: Assist 3 kills to each teammate).',
  svgPath:
    'M137.618 70.504a88.18 88.18 0 0 0-12.686.95c-33.832 5.003-62.022 29.192-80.271 65.89-18.25 36.698-26.008 85.566-18.286 137.306 7.723 51.741 29.418 96.251 57.598 126.082 28.18 29.832 62.216 44.819 96.049 39.815 33.832-5.004 62.023-29.194 80.273-65.893 4.264-8.573 7.948-17.818 11.002-27.601-29.163.07-58.834-2.573-92.08-24.287 48.479-14.36 82.354-48.492 100.926-72.243-.456-8.287-.298-4.69-1.565-13.173-7.722-51.741-29.415-96.253-57.595-126.084-24.658-26.103-53.8-40.838-83.365-40.762zm342 120.432c-1.774-.05-3.796.302-6.05 1.144-61.083 22.839-94.235 69.736-123.236 107.965-20.787 2.903-39.96 3.415-74.875 31.642-7.837 6.337 55.494 52.937 95.13-26.869 9.846-19.825 21.522-41.774 105.06-84.914 16.706-8.627 16.388-28.62 3.97-28.968zm-229.961 6.834l13.13 12.31c-17.392 18.552-47.5 23.81-71.523 21.414l1.787-17.912c19.327 1.928 45.89-4.382 56.606-15.812zm95.683 67.12c-5.603-.104-12.685 6.982-19.012 7.532-10.729.932-22.902-8.439-32.173-2.96-6.089 3.6-3.494 14.436-8.485 19.446-6.841 6.868-23.232 2.649-26.611 11.735-2.378 6.394 8.78 18.488 8.78 18.488 14.428-14.452 33.354-34.107 78.66-32.62 0 0 7.594-15.785 2.456-20.23-1.108-.959-2.322-1.366-3.615-1.39zm-205.28 23.026l9.977 14.982c-13.398 9.818-24.506 21.8-16.61 37.338 5.734 8.493 14.467 18.545 25.628 18.659l.303 17.996c-18.143-1.22-34.222-14.025-41.89-28.329-11.537-27.086 2.768-47.184 22.593-60.646z',
  score: SCORES.EASY,
  obtainedCheck: ({ match, trophiesCategory }) => {
    if (trophiesCategory === ARAM) {
      return match.participant.stats.feedThemScore >= 3;
    }

    return match.participant.stats.feedThemScore >= 1;
  },
  context: 'matches',
  attribute: 'cooperation'
};

export default feedThem;
