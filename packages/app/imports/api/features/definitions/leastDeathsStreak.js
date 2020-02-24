import { leastDeathsStreak as leastDeathsStreakBadge } from '/imports/api/badges/definitions';

const leastDeathsStreak = {
  name: 'leastDeathsStreak',
  title: 'Least Deaths Streak',
  description: 'Consecutive least deaths.',
  type: 'straight',
  property: 'leastDeaths',
  badge: leastDeathsStreakBadge
};

export default leastDeathsStreak;
