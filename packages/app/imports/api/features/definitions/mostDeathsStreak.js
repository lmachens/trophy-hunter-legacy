import { mostDeathsStreak as mostDeathsStreakBadge } from '/imports/api/badges/definitions';

const mostDeathsStreak = {
  name: 'mostDeathsStreak',
  title: 'Most Deaths Streak',
  description: 'Consecutive most deaths.',
  type: 'straight',
  property: 'mostDeaths',
  badge: mostDeathsStreakBadge
};

export default mostDeathsStreak;
