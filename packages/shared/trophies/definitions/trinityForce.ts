import SCORES from '../scores';

const trinityForce = {
  name: 'trinityForce',
  title: 'Trinity Force',
  description:
    'Use your powerspike. Kill an opponent in the three minutes after you finish trinity force.',
  svgPath:
    'M256 59.72L142.687 256h226.625L256 59.72zM369.313 256L256 452.28h226.625L369.312 256zM256 452.28L142.687 256 29.376 452.28H256z',
  score: SCORES.MEDIUM,
  obtainedCheck: ({ match }) => match.participant.stats.trinityForceKills >= 1,
  context: 'matches',
  attribute: 'lethality'
};

export default trinityForce;
