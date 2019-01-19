import { firstBloodStreak as firstBloodStreakBadge } from '/imports/api/badges/definitions';

const firstBloodStreak = {
  name: 'firstBloodStreak',
  title: 'First Blood Streak',
  description: 'Consecutive first bloods.',
  type: 'straight',
  property: 'firstBloodKill',
  badge: firstBloodStreakBadge
};

export default firstBloodStreak;
