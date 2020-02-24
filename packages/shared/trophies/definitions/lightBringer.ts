import SCORES from '../scores';

const lightBringer = {
  name: 'lightBringer',
  title: 'Light Bringer',
  description: 'Place at least 25 wards.',
  svgPath:
    'M258.75 23.563c-27.913 0-93.875 87.237-93.875 158.593 0 59.35 29.018 79.715 68.625 94.875-15.47-15.607-26.03-43.75-26.03-76.186 0-49.232 31.292-89.188 53.25-89.188 21.132 0 53.25 39.955 53.25 89.188 0 30.39-9.41 56.833-23.283 72.937 36.097-18.016 61.938-35.72 61.938-91.624 0-71.356-66.786-158.594-93.875-158.594zm6.72 175.906l-18.5 2.686c5.764 39.366 6.665 69.034 4.25 97.875-24.957-.97-49.677-5.972-73.69-14.75v95.47c-3.295 25.668-22.434 30.526-22.093 53.47.29 19.547 14.998 26.003 22.094 17.624v36.28h164.69v-88.343c8.615 10.89 27.17 3.06 27.53-21.31.432-29.117-24.597-34.605-27.53-68.814V285.28c-23.916 8.88-48.17 13.702-72.314 14.72 2.337-29.752 1.383-60.792-4.437-100.53z',
  score: SCORES.MEDIUM,
  obtainedCheck: ({ match }) => match.participant.stats.wardsPlaced >= 25,
  context: 'matches',
  attribute: 'wisdom'
};

export default lightBringer;
