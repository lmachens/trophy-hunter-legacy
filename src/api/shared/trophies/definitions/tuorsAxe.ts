import SCORES from '../scores';
import { TWISTED_TREELINE } from '../types';

const tuorsAxe = {
  name: 'tuorsAxe',
  title: 'Tuors Axe',
  description:
    'Deal at least 50% more damage to champions than the next player. (Twisted Treeline: 70% more damage).',
  svgPath:
    'M410.111 19.227c-30.273 24.244-54.01 38.397-64.185 48.595-3.275 3.282-6.306 9.048-6.942 13.737-.635 4.688 0 7.362 3.696 9.888l.03.022 26.237 18.263c3.331 2.28 5.415 1.79 9.274-.753 3.859-2.544 7.746-7.862 9.043-11.82 4.932-15.06 10.217-40.706 22.847-77.932zM223.744 80.4l22.512 49.926 12.244-3.66 26.297 18.307 20.568-29.545-26.297-18.309-.818-12.752zm213.617 10.075c-8.55 27.087-19.112 42.762-30.402 51.693 9.52 86.157-6.922 139.588-36.24 176.05-29.489 36.674-70.552 55.661-107.828 76.76l-.33-.585c-25.015 65.265-80.115 86.461-90.413 96.18 22.75-4.801 59.344-12.892 99.313-27.067l13.912-25.713 14.76 11.988 19.387-24.158 18.917 8.637c45.358-24.275 87.766-58.087 112.547-105.406l-29.853-31.133s23.152 9.639 37.289 15.21c15.986-38.703 20.594-85.644 7.137-142.62l-19.737-8.479 14.711-10.41c-5.668-19.218-13.309-39.511-23.17-60.947zM333.28 106.834l-7.998 11.49 24.621 17.14 7.998-11.49zm-18.283 26.264L206.443 289.033l24.621 17.14 108.553-155.935zm74.793 17.945c-10.18 2.917-20.429 2.443-29.926 1.617l-9.67 13.893c4.545.037 9.59.076 17.09.408l7.022.31 1.4 6.885c3.138 15.415 2.372 23.17.193 33.455l-1.357 6.409-41.213 4.29-8.754-14.956-39.845 57.238c7.454 6.985 12.313 17.027 16.898 27.732 5.522 12.893 9.917 26.966 13.213 37.684l-17.207 5.289c-3.27-10.632-7.545-24.194-12.553-35.887-3.45-8.053-7.596-15.104-11.025-19.486l-14.701 21.119c11.199-5.136 14.528-1.936 15.216 11.395 1.222 23.658-.71 44.203-4.789 62.09 32.689-18.075 64.305-35.478 86.908-63.589 25.345-31.52 40.708-77.016 33.1-155.896zM153.775 180.91l22.778 49.543 12.244-3.66 26.297 18.307 19.492-27.998-26.063-18.647-.716-12.896zm184.096 3.342l-1.967 2.826 7.098 12.129 16.553-1.723c.637-3.887.606-7.262-.237-12.709-7.835-.175-13.724-.142-21.447-.523zm10.203 46.408c4.954-.05 9.92.196 14.733.565l9.572.732-1.348 9.504c-3.157 22.254-9.29 40.648-34.42 56.969l-6.16 4-5.154-5.235c-7.064-7.174-12.988-15.598-16.594-24.267-3.605-8.67-5.503-18.525-.008-27.092 5.602-8.734 15.21-12.344 24.727-13.969 4.758-.812 9.699-1.157 14.652-1.207zm-.572 18.135c-3.989.038-7.771.254-11.053.814-6.995 1.194-11.06 3.542-12.601 5.946-.48.747-.973 4.573 1.476 10.46 1.675 4.028 4.489 8.562 7.852 12.846 12.538-9.42 16.091-17.623 18.373-30.05-1.364-.021-2.718-.029-4.047-.016zm-151.344 55.012l-7.998 11.49 24.621 17.14 7.998-11.49zm-18.283 26.263L63.755 494h36.556l102.187-146.791z',
  score: SCORES.HARD,
  obtainedCheck: ({ match, trophiesCategory }) => {
    if (trophiesCategory === TWISTED_TREELINE) {
      return (
        match.participant.stats.totalDamageDealtToChampions >=
        1.7 * match.participant.stats.others.maxTotalDamageDealtToChampions
      );
    }

    return (
      match.participant.stats.totalDamageDealtToChampions >=
      1.5 * match.participant.stats.others.maxTotalDamageDealtToChampions
    );
  },
  context: 'matches',
  attribute: 'power'
};

export default tuorsAxe;
