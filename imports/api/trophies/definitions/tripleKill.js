import SCORES from '../scores';

const tripleKill = {
  name: 'tripleKill',
  title: 'Triple Kill',
  description: 'Achieve a triple kill.',
  svgPath:
    'M190.03 21.97c-.71-.003-1.422.01-2.124.03 38.633 74.657 186.967 157.52 307.906 333.03-38.488-159.928-215.34-332.78-305.78-333.06zM83.53 65.374c61.253 98.216 249.157 212.75 375.75 378.844C420.49 283.03 173.3 62.907 83.53 65.374zm-67.31 81.313c59.365 87.324 194.506 155.172 355.03 345.125-38.792-161.19-265.263-347.592-355.03-345.125z',
  score: SCORES.MEDIUM,
  obtainedCheck: ({ match }) =>
    match.participant.stats.tripleKills - match.participant.stats.quadraKills >= 1,
  context: 'matches',
  attribute: 'power'
};

export default tripleKill;
