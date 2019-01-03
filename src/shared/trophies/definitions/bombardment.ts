import { ARAM } from '../types';
import SCORES from '../scores';

const bombardment = {
  name: 'bombardment',
  title: 'Bombardment',
  description:
    'Deal more than 1000 damage to champions per minute. (ARAM: 1500 damage per minute.)',
  svgPath:
    'M288.625 19.625C252.95 45.54 233.16 81.95 226.655 126.938l41.095 23.687c9.348-5.82 17.33-12.415 24.22-19.656 4.383 22.757 20.633 45.578 39.874 56.686l65.5 37.813c24.465 14.124 54.433 9.697 73.812-8.907l7.97 4.593 17.312-30-7.938-4.594c6.426-26.087-4.752-54.28-29.22-68.406l-65.5-37.812c-19.76-11.41-48.63-13.89-70.78-5.53 2.947-10.077 5.108-20.605 6.688-31.47l-41.063-23.72zm12.313 174.97c-49.957 19.17-84.558 55.62-106.313 106.31l40.688 40.72c12.79-3.888 24.24-9.11 34.593-15.438-2 28.05 9.847 59.878 28.906 78.938l64.907 64.906c24.242 24.245 60.782 28.477 89.342 12.75l7.875 7.876 29.72-29.72-7.844-7.873c15.736-28.564 11.465-65.097-12.782-89.344l-64.905-64.908c-19.58-19.58-52.628-31.56-81.22-28.718 6.62-10.884 12.457-22.543 17.72-34.78l-40.688-40.72zm-182.157.655c-35.453-.015-68.357 12.318-99 35.22l12.72 47.468c11.113 2.584 21.805 3.602 32.156 3.343-13.452 19.88-18.267 48.465-12.312 70.69l20.28 75.686c7.576 28.27 32.77 46.972 60.595 47.53l2.468 9.19 34.656-9.282-2.47-9.188c23.81-14.4 36.262-43.205 28.69-71.47l-20.25-75.686c-6.117-22.822-25.445-45.77-47.783-55.875 9.534-5.22 18.83-11.36 27.94-18.156l-12.72-47.44c-8.458-1.34-16.787-2.027-24.97-2.03z',
  score: SCORES.MEDIUM,
  obtainedCheck: ({ match, trophiesCategory }) => {
    if (trophiesCategory === ARAM)
      return (60 * match.participant.stats.totalDamageDealtToChampions) / match.gameDuration > 1500;

    return (60 * match.participant.stats.totalDamageDealtToChampions) / match.gameDuration > 1000;
  },
  context: 'matches',
  attribute: 'power'
};

export default bombardment;
