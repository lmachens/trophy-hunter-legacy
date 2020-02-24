import SCORES from '../scores';

const towerDive = {
  name: 'towerDive',
  title: 'Towerdive',
  description:
    'Kill an opponent underneath his turret before the first turret falls without you or any assistant dying +- 10 seconds (SummonersRift).',
  svgPath:
    'M71 22.406v102.53h202.25v18.69h-73.22v36.968h-18.686v-36.97H79.156l43.375 53.782h180.44v18.688H180.905v36.97H162.22v-36.97h-39.407v163.562h58.53v-44.75H157.47V316.22h74.155V282.56H193.72v-18.687h97.218v18.688h-40.625v33.656h73.28v18.686h-32.437v44.75h26.313v18.688h-63.69l-2.686 74.03-18.688-.687 2.656-73.343H93.032V398h-.22l-28.687 92.844h79.844l9.81-70.688 18.5 2.563-9.468 68.124H453.25L424.562 398h-30.03V197.78l51.812-64.25V22.407h-64.406v52.438h-39.22V22.406h-65.124v52.438h-38.53V22.406h-65.126v52.438h-38.5V22.406H71zm129.03 312.5v44.75h72.44v-44.75h-72.44z',
  score: SCORES.MEDIUM,
  obtainedCheck: ({ match }) => match.participant.stats.underTurretKills >= 1,
  context: 'matches',
  attribute: 'combat'
};

export default towerDive;
