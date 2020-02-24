// these are stats based on the group of all participants.
export default function extendAllGroupMatchStats(extendedMatchResult) {
  const { participants } = extendedMatchResult;
  // simple max and min stats
  extendedMatchResult.maxKills = Math.max(...participants.map(p => p.stats.kills));
  extendedMatchResult.maxTotalDamageDealtToChampions = Math.max(
    ...participants.map(p => p.stats.totalDamageDealtToChampions)
  );
  extendedMatchResult.maxAssists = Math.max(...participants.map(p => p.stats.assists));
  extendedMatchResult.maxTotalHeal = Math.max(...participants.map(p => p.stats.totalHeal));
  extendedMatchResult.maxTotalDamageTaken = Math.max(
    ...participants.map(p => p.stats.totalDamageTaken)
  );
  extendedMatchResult.maxDamageSelfMitigated = Math.max(
    ...participants.map(p => p.stats.damageSelfMitigated)
  );
  extendedMatchResult.maxTotalTimeCrowdControlDealt = Math.max(
    ...participants.map(p => p.stats.totalTimeCrowdControlDealt)
  );
  extendedMatchResult.maxTotalMinionsKilled = Math.max(
    ...participants.map(p => p.stats.totalMinionsKilled)
  );
  extendedMatchResult.maxKillParticipation = Math.max(
    ...participants.map(p => p.stats.kills + p.stats.assists)
  );
  // extendedMatchResult.maxDamagePerGold = Math.max(...participants.map((p) => p.stats.totalDamageDealtToChampions / (p.stats.goldEarned + 1)));
  extendedMatchResult.maxWardsKilled = Math.max(...participants.map(p => p.stats.wardsKilled));
  extendedMatchResult.maxWardsPlaced = Math.max(...participants.map(p => p.stats.wardsPlaced));
  extendedMatchResult.maxVisionWardsBoughtInGame = Math.max(
    ...participants.map(p => p.stats.visionWardsBoughtInGame)
  );
  extendedMatchResult.maxNeutralMinionsKilled = Math.max(
    ...participants.map(p => p.stats.neutralMinionsKilled)
  );
  extendedMatchResult.minDeaths = Math.min(...participants.map(p => p.stats.deaths));
  extendedMatchResult.minTotalDamageTaken = Math.min(
    ...participants.map(p => p.stats.totalDamageTaken)
  );
}
