import SCORES from '../scores';

const lifeAndDeath = {
  name: 'lifeAndDeath',
  title: 'Life And Death',
  description: 'Deal and heal more than 1200 with grasp of the undying (rune).',
  svgPath:
    'M266.3 30.62V397.5c20.1-1.1 37.7-5.2 51.3-11.8 15.8-7.7 26.2-18.3 31-32l17.9 6.1c-6.6 19.1-21.3 33.7-40.6 42.9-16.8 8.3-37.2 12.8-59.6 13.7v64.9c43.9-3.1 83.8-26.9 113.7-64.9 31.9-40.7 52-97.5 52-160.4 0-62.9-20.1-119.7-52-160.44-29.9-38.03-69.8-61.92-113.7-64.94zm-19 .95C88.21 38.6 72.04 223.4 72.04 272.8c0 33.6 47.26 18.6 50.36 50.4l16.8 140.6c0 15.3 73.2 18.7 108.1 17.3v-40.4h-16.7v-24.1h-14.8v24.1h-18.9v-24.1h-14.6v24.1h-18.9v-24.1h-17.8v-18.9h17.8v-24.1h18.9v24.1h14.6v-24.1h18.9v24.1h14.8v-24.1h16.7v-31.3l-40.9 10.3 40.9-64.9zM173.2 226.7c25.8 0 52 4.1 54.2 12.5 8.6 32.4 4.4 57.8-16.8 67.2-63.4 27.8-88.2-16.8-88.2-67.2 0-8.4 25.2-12.5 50.8-12.5zm159.1 3c19.1 0 34.7 15.7 34.7 34.7 0 19-15.6 34.6-34.7 34.6-18.9 0-34.6-15.6-34.6-34.6s15.7-34.7 34.6-34.7zm0 19c-8.7 0-15.7 6.9-15.7 15.7 0 8.8 7 15.8 15.7 15.8 8.9 0 15.8-7 15.8-15.8s-6.9-15.7-15.8-15.7z',
  score: SCORES.MEDIUM,
  obtainedCheck: ({ match }) =>
    match.participant.stats.perk0 === 8437 &&
    match.participant.stats.perk0Var1 >= 1200 &&
    match.participant.stats.perk0Var2 >= 1200,
  context: 'matches',
  attribute: 'robustness',
  runeId: 8437
};

export default lifeAndDeath;
