export default function extendParticipantStats({ gameDuration }, participant) {
  const result: any = {};
  result.validMatch = 1;

  result.totalCs =
    participant.stats.totalMinionsKilled +
    participant.stats.neutralMinionsKilledTeamJungle +
    participant.stats.neutralMinionsKilledEnemyJungle;
  result.gameDuration = gameDuration;
  result.killParticipations = participant.stats.kills + participant.stats.assists;
  result.damageTanked = participant.stats.totalDamageTaken + participant.stats.damageSelfMitigated;

  // per minute stats
  result.visionScorePerMin = (participant.stats.visionScore / gameDuration) * 60;
  result.totalHealPerMin = (participant.stats.totalHeal / gameDuration) * 60;
  result.totalDamageToObjectivesPerMin =
    (participant.stats.totalDamageToObjectives / gameDuration) * 60;
  result.assistsPerMin = (participant.stats.assists / gameDuration) * 60;
  result.killsPerMin = (participant.stats.kills / gameDuration) * 60;
  result.killParticipationsPerMin = (result.killParticipations / gameDuration) * 60;
  result.totalCsPerMin = (result.totalCs / gameDuration) * 60;
  result.totalDamageDealtToChampionsPerMin =
    (participant.stats.totalDamageDealtToChampions / gameDuration) * 60;
  result.goldEarnedPerMin = (participant.stats.goldEarned / gameDuration) * 60;
  result.damageTankedPerMin = (result.damageTanked / gameDuration) * 60;

  result.killParticipation =
    (participant.stats.kills + participant.stats.assists) / Math.max(1, participant.team.kills);
  result.damageDealtToTakenRatio =
    participant.stats.totalDamageDealtToChampions /
    Math.max(1.0, participant.stats.totalDamageTaken);
  result.damageTankedPerDeath = result.damageTanked / Math.max(participant.stats.deaths, 1);
  result.longestTimeSpentLiving = participant.stats.longestTimeSpentLiving || gameDuration;
  result.leastDeaths =
    participant.stats.deaths <= Math.min(...participant.others.map(other => other.stats.deaths));
  result.mostDeaths =
    participant.stats.deaths >= Math.max(...participant.others.map(other => other.stats.deaths));
  result.mostCS =
    participant.stats.totalMinionsKilled >=
    Math.max(...participant.others.map(other => other.stats.totalMinionsKilled));
  // the +1 in next line doesnt really change the result and is an easy way to avoid division by zero.
  result.mostDamagePerGold =
    participant.stats.totalDamageDealtToChampions / (participant.stats.goldEarned + 1) >=
    Math.max(
      ...participant.others.map(
        other => other.stats.totalDamageDealtToChampions / (other.stats.goldEarned + 1)
      )
    );
  result.damagePerGold =
    participant.stats.totalDamageDealtToChampions / (participant.stats.goldEarned + 1);
  result.mostDamage =
    participant.stats.totalDamageDealtToChampions >=
    Math.max(...participant.others.map(other => other.stats.totalDamageDealtToChampions));
  result.mostDestructs =
    participant.stats.inhibitorKills + participant.stats.turretKills >=
    Math.max(
      ...participant.others.map(other => other.stats.inhibitorKills + other.stats.turretKills)
    );
  result.mostJnglCS =
    participant.stats.neutralMinionsKilledEnemyJungle >=
      participant.stats.others.maxEnemyJungleCs &&
    participant.stats.neutralMinionsKilledTeamJungle >= participant.stats.others.maxTeamJungleCs;
  result.mostKills =
    participant.stats.kills >= Math.max(...participant.others.map(other => other.stats.kills)) &&
    participant.stats.kills > 0;
  result.mostKP =
    participant.stats.kills + participant.stats.assists >=
    Math.max(...participant.others.map(other => other.stats.kills + other.stats.assists));
  result.mostVisionScore =
    participant.stats.visionScore >
    Math.max(...participant.others.map(other => other.stats.visionScore));
  result.leastVisionScore =
    participant.stats.visionScore <
    Math.min(
      ...participant.others.map(other => {
        return other.stats.visionScore;
      })
    );
  result.firstTurretParticipation =
    participant.stats.firstTowerKill || participant.stats.firstTowerAssist;

  // compute damageShare
  let teammatesDamage = 0;
  participant.team.participants.forEach(teammate => {
    teammatesDamage += teammate.stats.totalDamageDealtToChampions;
  });
  participant.stats.damageShare = participant.stats.totalDamageDealtToChampions / teammatesDamage;
  return result;
}
