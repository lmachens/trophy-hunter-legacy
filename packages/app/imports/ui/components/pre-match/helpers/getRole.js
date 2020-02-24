export const getRole = championStats => {
  if (!championStats) {
    return null;
  }
  const roles = Object.keys(championStats);
  let mostPlayedRole;
  roles.forEach(role => {
    if (
      !mostPlayedRole ||
      championStats[mostPlayedRole].gamesPlayed < championStats[role].gamesPlayed
    ) {
      mostPlayedRole = role;
    }
  });
  return mostPlayedRole;
};
