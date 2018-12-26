import { mostCSStreak as mostCSStreakBadge } from '/imports/api/badges/definitions';

const mostCSStreak = {
  name: 'mostCSStreak',
  title: 'Most CS',
  description: 'Consecutive most minions killed.',
  type: 'straight',
  property: 'mostCS',
  badge: mostCSStreakBadge
};

export default mostCSStreak;
