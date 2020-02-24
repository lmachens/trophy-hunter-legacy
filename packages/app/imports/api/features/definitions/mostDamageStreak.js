import { mostDamageStreak as mostDamageStreakBadge } from '/imports/api/badges/definitions';

const mostDamageStreak = {
  name: 'mostDamageStreak',
  title: 'Most Damage Streak',
  description: 'Consecutive highest damage to champions.',
  type: 'straight',
  property: 'mostDamage',
  badge: mostDamageStreakBadge
};

export default mostDamageStreak;
