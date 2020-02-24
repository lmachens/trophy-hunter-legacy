import SCORES from '../scores';

const superiorEquipment = {
  name: 'superiorEquipment',
  title: 'Superior Equipment',
  description:
    'Have more than 1.67 times more damage dealt to champions than damage taken (from 2.0 times: SuperiorBrain).',
  svgPath:
    'M262.406 17.188c-27.22 8.822-54.017 28.012-72.375 55.53 17.544 47.898 17.544 57.26 0 105.157 19.92 15.463 40.304 24.76 60.782 27.47-2.063-25.563-3.63-51.13 1.125-76.69-13.625-1.483-23.374-5.995-37-13.874V82.563c35.866 19.096 61.84 18.777 98.813 0v32.22c-13.364 6.497-21.886 11.16-35.25 13.218 3.614 25.568 3.48 51.15 1.375 76.72 18.644-3.265 37.236-12.113 55.5-26.845-14.353-47.897-14.355-57.26 0-105.156-16.982-28.008-47.453-46.633-72.97-55.532zm-129.594 8.218c-25.906 110.414-27.35 215.33-27.4 330.922-18.84-1.537-37.582-5.12-56.027-11.12v28.554h69.066c8.715 35.025 6.472 70.052-1.036 105.078h28.13c-7.195-35.026-8.237-70.053-.872-105.078h68.904v-28.555c-18.49 4.942-37.256 8.552-56.097 10.46.082-114.94 2.496-223.068-24.667-330.26zm89.47 202.375c0 117.27 25.517 233.342 120.155 257.97C446.62 464.716 462.72 345.374 462.72 227.78H222.28z',
  score: SCORES.MEDIUM,
  obtainedCheck: ({ match }) =>
    match.participant.stats.damageDealtToTakenRatio >= 1.67 &&
    match.participant.stats.damageDealtToTakenRatio < 2,
  context: 'matches',
  attribute: 'power'
};

export default superiorEquipment;
