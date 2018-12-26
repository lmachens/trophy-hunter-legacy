import { ARAM } from '../types';
import SCORES from '../scores';

const machete = {
  name: 'machete',
  title: 'Machete',
  description:
    'Deal more than 50000 total damage to champions. (from 75000: Rageblade)(ARAM: 55000 total damage, from 80000 Rageblade)',
  svgPath:
    'M485.813 19.125l-85.594 28.563c5.54 36.314 1.39 77.714-19.095 122.937-25.507 56.312-75.953 118.53-163.53 186.22l-11.25-14.908c85.803-66.357 133.95-126.46 157.75-179 17.45-38.53 22.02-72.994 18.81-103.687L170.94 295.063l-22-29.125-14.907 11.25 23.095 30.562-.25.188 34.22 44.968c.022-.018.038-.044.06-.062l11.814 15.625.968 1.374 6.843 8.97-21 35.155 16.032 9.592L230.032 383l3.25-5.406-.126-.156c149.192-98.997 283.78-234.44 252.656-358.313zm-27.407 211.563c-3.195 44.583-12.58 64.095-21.875 78.03-4.663 6.994-9.53 13.964-9.53 23.032 0 18.143 14.388 33.094 32.53 33.094 18.144 0 33.126-14.95 33.126-33.094 0-10.064-6.316-17.154-11.78-24.72-9.717-13.458-18.577-32.888-22.47-76.342zm-85.03 83.156c-4.187 58.39-16.517 83.938-28.688 102.187-6.11 9.164-12.47 18.28-12.47 30.158 0 23.76 18.865 43.343 42.626 43.343 23.76 0 43.375-19.582 43.375-43.342 0-13.182-8.283-22.467-15.44-32.375-12.724-17.626-24.305-43.055-29.405-99.97zM142.03 319.28c-4.855 3.834-9.67 7.734-14.405 11.72 3.36 9.22 7.55 20.726 11.875 32.72 3.4 9.423 6.637 18.544 9.594 26.905 8.9-9.123 18.042-17.753 27.5-25.875l-34.563-45.47zm-29.53 24.876c-7.328 6.596-14.497 13.383-21.53 20.344l25 63.594c6.146-7.627 12.39-14.988 18.75-22.094-.052-.145-.075-.26-.126-.406-3.47-9.91-8.09-22.787-12.688-35.53-3.423-9.494-6.464-17.82-9.406-25.908zm-35.844 34.97c-8.362 8.813-16.52 17.888-24.47 27.218l32.19 64.28c6.026-8.72 12.082-17.21 18.25-25.405l-25.97-66.095zm-37.5 42.968c-6.48 8.057-12.824 16.29-19.03 24.687 2.195 26.79 25.804 46.102 46.093 51.064 2.042-3.18 4.103-6.317 6.155-9.438l-33.22-66.312z',
  score: SCORES.HARD,
  obtainedCheck: ({ match, trophiesCategory }) => {
    if (trophiesCategory === ARAM)
      return (
        match.participant.stats.totalDamageDealtToChampions >= 55000 &&
        match.participant.stats.totalDamageDealtToChampions < 80000
      );

    return (
      match.participant.stats.totalDamageDealtToChampions >= 50000 &&
      match.participant.stats.totalDamageDealtToChampions < 75000
    );
  },
  context: 'matches',
  attribute: 'power'
};

export default machete;
