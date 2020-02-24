import SCORES from '../scores';

const darkinBlade = {
  name: 'darkinBlade',
  title: 'Darkin Blade',
  description:
    'Use your powerspike. Kill an opponent in 90 seconds after you finish Guinsoos Rageblade.',
  svgPath:
    'M495.063 17.063L323.375 64.374 19.03 368.72v56.155l297.47-297.47c22.103-22.1 44.235-31.255 61.656-30.53 38.327 1.594 54.864 49.01 5.844 98.03L85.312 493h54.72L446 187.03l49.063-169.968zM360.78 126l-18.686.313.375 22.968-22.97-.374-.313 18.688 23.594.406.408 23.594 18.687-.313-.375-22.968 22.97.375.31-18.687-23.592-.406L360.78 126zm-69.092 61.5l-18.22 4.125 7.188 31.906 1.313 5.876 5.874 1.22 31.22 6.593 3.873-18.282-13.593-2.875 12.53-12.5-13.218-13.22-13.312 13.313-3.656-16.156zm-49.72 38.25l-2.25 28.156-27.468 1.813 1.25 18.655 30.844-2.03 17.937 17.936 13.22-13.217-17.5-17.5 2.594-32.313-18.625-1.5zm-43.437 55.625l-18.28 3.875 7.22 34.125-34.845-6.875L149 330.844l48.72 9.594 13.874 2.718-2.938-13.844-10.125-47.937zm-57 76.094l-16.78 16.78L97.062 368l-4.093 18.25 26.06 5.875 5.345 25.344 18.313-3.845-5.375-25.53 17.437-17.408-13.22-13.218zm-57.155 44.936l-18.688.313.376 22.967-22.938-.375L42.812 444l23.563.375.406 23.594 18.69-.314-1.095-65.25zm-53.844 66.03l-11.5 11.533V493h13.407l11.313-11.344-13.22-13.22z',
  score: SCORES.HARD,
  obtainedCheck: ({ match }) => match.participant.stats.darkinBladeKills >= 1,
  context: 'matches',
  attribute: 'lethality'
};

export default darkinBlade;
