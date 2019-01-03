import SCORES from '../scores';
import { TWISTED_TREELINE } from '../types';

const deadlyShadow = {
  name: 'deadlyShadow',
  title: 'Deadly Shadow',
  description:
    'Have most kills while taking least damage in the game. (Twisted Treeline: At least 2 more kills than the next player).',
  svgPath:
    'M128.912 21.563c-.507.012-1.01.043-1.504.11C97.753 25.525 74.6 57.76 74.6 96.662c0 21.547 7.39 40.787 18.767 54.5-61.678 11.593-66.342 115.44-66.342 188.347h42.772l11.348 152.158h108.68L199.86 339.51h40.593c0-73.108 1.47-178.783-65.904-189.22 10.89-13.647 17.893-32.613 17.893-53.628 0-41.496-26.445-74.99-58.923-74.99-1.523 0-3.087-.146-4.608-.11zm239.828 0c-.507.012-1.01.043-1.504.11-29.655 3.853-52.808 36.087-52.808 74.99 0 21.547 7.39 40.787 18.767 54.5-61.678 11.593-66.34 115.44-66.34 188.347h30.323l-10.17-11.422c-.31-51.837 1.858-95.18 24.008-135.484l-1.543 146.906h.152l11.348 152.158h86.013l-66.03-12.006c-11.876-104.37-18.402-205.544-4.09-308.36 0 0 9.455-6.07 24.03-13.396-14.157-12.08-23.552-33.24-23.552-57.345 0-37.564 22.797-68.013 50.918-68.013 8.887 0 17.24 3.046 24.51 8.392-10.45-11.98-24.28-19.268-39.424-19.268-1.523 0-3.087-.146-4.608-.11zm69.192 171.308l1.685 147.214 22.324-.262c.31-51.836-1.86-106.647-24.008-146.95zm1.685 147.214h-.002l.002.006v-.006z',
  score: SCORES.VERY_HARD,
  obtainedCheck: ({ match, trophiesCategory }) => {
    if (trophiesCategory === TWISTED_TREELINE)
      return (
        match.participant.stats.kills >= match.participant.stats.others.maxKills + 2 &&
        match.participant.stats.totalDamageTaken === match.minTotalDamageTaken
      );

    return (
      match.participant.stats.kills >= match.maxKills &&
      match.participant.stats.totalDamageTaken === match.minTotalDamageTaken
    );
  },
  context: 'matches',
  attribute: 'lethality'
};

export default deadlyShadow;
