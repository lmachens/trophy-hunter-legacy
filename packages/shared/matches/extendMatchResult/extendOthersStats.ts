export default function extendOthersStats(others) {
  const result: any = {};
  result.maxTotalDamageDealtToChampions = Math.max(
    ...others.map(p => p.stats.totalDamageDealtToChampions)
  );
  result.maxTeamJungleCs = Math.max(...others.map(p => p.stats.neutralMinionsKilledTeamJungle));
  result.maxEnemyJungleCs = Math.max(...others.map(p => p.stats.neutralMinionsKilledEnemyJungle));
  result.maxChampLevel = Math.max(...others.map(p => p.stats.champLevel));
  result.maxGoldSpent = Math.max(...others.map(p => p.stats.goldSpent));
  result.maxTotalHeal = Math.max(...others.map(p => p.stats.totalHeal));
  result.maxTotalDamageTaken = Math.max(...others.map(p => p.stats.totalDamageTaken));
  result.minDeaths = Math.min(...others.map(other => other.stats.deaths));
  result.maxKills = Math.max(...others.map(other => other.stats.kills));
  result.maxAssists = Math.max(...others.map(other => other.stats.assists));
  result.maxKillParticipations = Math.max(
    ...others.map(other => other.stats.assists + other.stats.kills)
  );
  result.maxTotalMinionsKilled = Math.max(...others.map(other => other.stats.totalMinionsKilled));
  result.damagePerGold = Math.max(
    ...others.map(other => other.stats.totalDamageDealtToChampions / (other.stats.goldEarned + 1))
  );
  result.maxTotalTimeCrowdControlDealt = Math.max(
    ...others.map(other => other.stats.totalTimeCrowdControlDealt)
  );
  result.maxCsTen = Math.max(
    ...others.map(p =>
      p.timeline && p.timeline.creepsPerMinDeltas ? p.timeline.creepsPerMinDeltas['0-10'] : 0
    )
  );
  result.maxCsTwenty = Math.max(
    ...others.map(p =>
      p.timeline && p.timeline.creepsPerMinDeltas
        ? p.timeline.creepsPerMinDeltas['0-10'] + p.timeline.creepsPerMinDeltas['10-20']
        : 0
    )
  );

  return result;
}
