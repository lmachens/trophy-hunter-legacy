function getAdditionalTeamStats(teammates) {
  const result: any = {};
  result.kills = teammates.map(p => p.stats.kills).reduce((memo, num) => memo + num);
  result.deaths = teammates.map(p => p.stats.deaths).reduce((memo, num) => memo + num);
  result.minDeaths = Math.min(...teammates.map(p => p.stats.deaths));
  result.maxKillParticipation = Math.max(...teammates.map(p => p.stats.kills + p.stats.assists));
  result.maxAssists = Math.max(...teammates.map(p => p.stats.assists));
  result.maxDamageTanked = Math.max(
    ...teammates.map(p => p.stats.damageSelfMitigated + p.stats.totalDamageTaken)
  );
  result.maxDamageSelfMitigated = Math.max(...teammates.map(p => p.stats.damageSelfMitigated));
  result.maxDamageDealtToTurrets = Math.max(...teammates.map(p => p.stats.damageDealtToTurrets));

  return result;
}

function getParticipantsMatchStats(participants) {
  const result: any = {};
  // simple max and min stats
  result.maxKills = Math.max(...participants.map(p => p.stats.kills));
  result.maxTotalDamageDealtToChampions = Math.max(
    ...participants.map(p => p.stats.totalDamageDealtToChampions)
  );
  result.maxAssists = Math.max(...participants.map(p => p.stats.assists));
  result.maxTotalHeal = Math.max(...participants.map(p => p.stats.totalHeal));
  result.maxTotalDamageTaken = Math.max(...participants.map(p => p.stats.totalDamageTaken));
  result.maxDamageSelfMitigated = Math.max(...participants.map(p => p.stats.damageSelfMitigated));
  result.maxTotalTimeCrowdControlDealt = Math.max(
    ...participants.map(p => p.stats.totalTimeCrowdControlDealt)
  );
  result.maxTotalMinionsKilled = Math.max(...participants.map(p => p.stats.totalMinionsKilled));
  result.maxKillParticipation = Math.max(...participants.map(p => p.stats.kills + p.stats.assists));
  //result.maxDamagePerGold = Math.max(...participants.map((p) => p.stats.totalDamageDealtToChampions / (p.stats.goldEarned + 1)));
  result.maxWardsKilled = Math.max(...participants.map(p => p.stats.wardsKilled));
  result.maxWardsPlaced = Math.max(...participants.map(p => p.stats.wardsPlaced));
  result.maxVisionWardsBoughtInGame = Math.max(
    ...participants.map(p => p.stats.visionWardsBoughtInGame)
  );
  result.maxNeutralMinionsKilled = Math.max(...participants.map(p => p.stats.neutralMinionsKilled));
  result.minDeaths = Math.min(...participants.map(p => p.stats.deaths));
  result.minTotalDamageTaken = Math.min(...participants.map(p => p.stats.totalDamageTaken));

  return result;
}

function getOthersMatchStats(others) {
  const result: any = {};
  result.maxTotalDamageDealtToChampionsOthers = Math.max(
    ...others.map(p => p.stats.totalDamageDealtToChampions)
  );
  result.maxTeamJungleCsOthers = Math.max(
    ...others.map(p => p.stats.neutralMinionsKilledTeamJungle)
  );
  result.maxEnemyJungleCsOthers = Math.max(
    ...others.map(p => p.stats.neutralMinionsKilledEnemyJungle)
  );
  result.maxChampLevelOthers = Math.max(...others.map(p => p.stats.champLevel));
  result.maxGoldSpentOthers = Math.max(...others.map(p => p.stats.goldSpent));
  result.maxCsTenOthers = Math.max(
    ...others.map(p =>
      p.timeline && p.timeline.creepsPerMinDeltas ? p.timeline.creepsPerMinDeltas['0-10'] : 0
    )
  );
  result.maxCsTwentyOthers = Math.max(
    ...others.map(p =>
      p.timeline && p.timeline.creepsPerMinDeltas
        ? p.timeline.creepsPerMinDeltas['0-10'] + p.timeline.creepsPerMinDeltas['10-20']
        : 0
    )
  );

  return result;
}

function getAdditionalParticipantStats(
  { gameDuration, maxEnemyJungleCsOthers, maxTeamJungleCsOthers },
  participant
) {
  const result: any = {};
  result.validMatch = 1;
  result.killParticipation =
    (participant.stats.kills + participant.stats.assists) / Math.max(1, participant.team.kills);
  result.damageDealtToTakenRatio =
    participant.stats.totalDamageDealtToChampions /
    Math.max(1.0, participant.stats.totalDamageTaken);
  result.damageTankedPerDeath =
    (participant.stats.totalDamageTaken + participant.stats.damageSelfMitigated) /
    Math.max(participant.stats.deaths, 1);
  result.longestTimeSpentLiving = participant.stats.longestTimeSpentLiving || gameDuration;
  result.leastDeaths =
    participant.stats.deaths <= Math.min(...participant.others.map(other => other.stats.deaths));
  result.mostDeaths =
    participant.stats.deaths >= Math.max(...participant.others.map(other => other.stats.deaths));
  result.mostCS =
    participant.stats.totalMinionsKilled >=
    Math.max(...participant.others.map(other => other.stats.totalMinionsKilled));
  //the +1 in next line doesnt really change the result and is an easy way to avoid division by zero.
  result.mostDamagePerGold =
    participant.stats.totalDamageDealtToChampions / (participant.stats.goldEarned + 1) >=
    Math.max(
      ...participant.others.map(
        other => other.stats.totalDamageDealtToChampions / (other.stats.goldEarned + 1)
      )
    );
  result.mostDamage =
    participant.stats.totalDamageDealtToChampions >=
    Math.max(...participant.others.map(other => other.stats.totalDamageDealtToChampions));
  result.mostDestructs =
    participant.stats.inhibitorKills + participant.stats.turretKills >=
    Math.max(
      ...participant.others.map(other => other.stats.inhibitorKills + other.stats.turretKills)
    );
  result.mostJnglCS =
    participant.stats.neutralMinionsKilledEnemyJungle >= maxEnemyJungleCsOthers &&
    participant.stats.neutralMinionsKilledTeamJungle >= maxTeamJungleCsOthers;
  result.mostKills =
    participant.stats.kills >= Math.max(...participant.others.map(other => other.stats.kills));
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
  return result;
}

function getOpponentsMatchStats(opponents) {
  const result: any = {};
  result.maxTotalDamageDealtToChampionsOpponents = Math.max(
    ...opponents.map(p => p.stats.totalDamageDealtToChampions)
  );

  return result;
}
export default function extendMatchStats(extendedMatchResult, participant) {
  const { participants } = extendedMatchResult;

  // Extend team
  const additionalTeamStats = getAdditionalTeamStats(participant.team.participants);
  Object.assign(participant.team, additionalTeamStats);

  // Extend participants match stats
  const participantsMatchStats = getParticipantsMatchStats(participants);
  Object.assign(extendedMatchResult, participantsMatchStats);

  // Extend others match stats
  const othersMatchStats = getOthersMatchStats(participant.others);
  Object.assign(extendedMatchResult, othersMatchStats);

  // Extend participant
  const additionalParticipantStats = getAdditionalParticipantStats(extendedMatchResult, participant);
  Object.assign(participant.stats, additionalParticipantStats);

  // Extend opponents match stats
  const opponentsMatchStats = getOpponentsMatchStats(participant.opponentTeam.participants);
  Object.assign(extendedMatchResult, opponentsMatchStats);
}
