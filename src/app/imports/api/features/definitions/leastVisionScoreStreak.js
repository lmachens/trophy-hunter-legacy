import { leastVisionScoreStreak as leastVisionScoreStreakBadge } from '/imports/api/badges/definitions';

const leastVisionScoreStreak = {
  name: 'leastVisionScoreStreak',
  title: 'Lowest Vision Score Streak',
  description: 'Consecutive lowest vision score.',
  type: 'straight',
  property: 'leastVisionScore',
  badge: leastVisionScoreStreakBadge
};

export default leastVisionScoreStreak;
