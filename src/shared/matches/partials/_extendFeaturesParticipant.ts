export function extendFeaturesParticipant(match, participant) {
  const result: any = {};

  // team events
  result.earliestBaron = participant.team.events.baronKills
    ? Math.min(...participant.team.events.baronKills.map(kill => kill.timestamp))
    : Infinity;
  result.earliestDragon = participant.team.events.dragonKills
    ? Math.min(...participant.team.events.dragonKills.map(kill => kill.timestamp))
    : Infinity;
  result.earliestElderDragon = participant.team.events.elderDragons
    ? Math.min(...participant.team.events.elderDragons.map(kill => kill.timestamp))
    : Infinity;
  result.goldDeficitComeback = participant.stats.win ? participant.team.events.maxGoldDown : 0.0;

  // participant events
  result.earliestFirstTurret = participant.events.turretKills
    ? Math.min(...participant.events.turretKills.map(kill => kill.timestamp))
    : Infinity;
  result.earliestLevel18 = participant.events.turretKills
    ? Math.min(...participant.events.turretKills.map(kill => kill.timestamp))
    : Infinity;

  // stats for streaks
  result.highestDamageToChampions = participant.stats.mostDamage;
  result.loss = !participant.stats.win;
  result.mostCs = participant.stats.mostCS;

  return result;
}
