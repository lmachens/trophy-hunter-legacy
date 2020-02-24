import { mostKillsStreak as mostKillsStreakBadge } from '/imports/api/badges/definitions';

const mostKillsStreak = {
  name: 'mostKillsStreak',
  title: 'Most Kills Streak',
  description: 'Consecutive most kills.',
  type: 'straight',
  property: 'mostKills',
  badge: mostKillsStreakBadge
};

export default mostKillsStreak;
