import extendTeamStats from './extendTeamStats';

function extendTeamsMatchStats(extendedMatchResult) {
  // Extend both teams stats
  const extendedTeamStats = extendTeamStats(extendedMatchResult.teams[0]);
  Object.assign(extendedMatchResult.teams[0], extendedTeamStats);
  const extendedTeamStats2 = extendTeamStats(extendedMatchResult.teams[1]);
  Object.assign(extendedMatchResult.teams[1], extendedTeamStats2);
}

export default extendTeamsMatchStats;
