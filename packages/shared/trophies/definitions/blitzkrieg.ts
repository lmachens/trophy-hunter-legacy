import SCORES from '../scores';

const blitzkrieg = {
    name: 'blitzkrieg',
    title: 'Blitzkrieg',
    description: 'Achieve a kill before reaching level 3',
    svgPath:
        'M0 0h512v512H0z',
    score: SCORES.HARD,
    obtainedCheck: ({ match }) => {

        return match.participant.stats.blitzkrieg;
    },
    context: 'matches',
    attribute: 'lethality'
};

export default blitzkrieg;
