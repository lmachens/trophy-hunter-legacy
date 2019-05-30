import SCORES from '../scores';

const damageDealer = {
  name: 'damageDealer',
  title: 'Damage Dealer',
  description: 'Deal more than 100k total damage (from 150k Hard Hitter)',
  svgPath:
    'M324.52 191.715a97.542 97.542 0 0 0-4.228-4.229L256 22.303l-64.291 165.183a93.225 93.225 0 0 0-4.222 4.224L22.301 255.998l165.179 64.291a97.542 97.542 0 0 0 4.229 4.229L256 489.697l64.284-165.174a95.208 95.208 0 0 0 4.237-4.233l165.178-64.287zM256 297.773c-23.067 0-41.77-18.705-41.77-41.775 0-23.067 18.703-41.767 41.77-41.767 23.068 0 41.767 18.7 41.767 41.767 0 23.07-18.7 41.775-41.767 41.775z',
  score: SCORES.EASY,
  obtainedCheck: ({ match }) =>
    match.participant.stats.totalDamageDealt >= 100000 &&
    match.participant.stats.totalDamageDealt < 150000,
  context: 'matches',
  attribute: 'capability'
};

export default damageDealer;
