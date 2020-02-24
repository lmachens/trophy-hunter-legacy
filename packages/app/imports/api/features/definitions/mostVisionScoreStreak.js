import { mostVisionScoreStreak as mostVisionScoreStreakBadge } from '/imports/api/badges/definitions';

const mostVisionScoreStreak = {
  name: 'mostVisionScoreStreak',
  title: 'Highest Vision Score Streak',
  description: 'Consecutive highest vision score.',
  type: 'straight',
  property: 'mostVisionScore',
  badge: mostVisionScoreStreakBadge
};

export default mostVisionScoreStreak;
