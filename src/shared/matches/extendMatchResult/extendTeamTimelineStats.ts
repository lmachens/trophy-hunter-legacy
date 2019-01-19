import groupBy from 'lodash.groupby';

export default function extendTeamTimelineStats(team) {
  team.locustsKills = team.events.kills.filter(
    event => event.assistingParticipantIds.length >= 3
  ).length;

  team.locustsKillsARAM = team.events.kills.filter(
    event => event.assistingParticipantIds.length >= 4
  ).length;

  team.teamEffortKills = team.events.kills.filter(
    event => event.assistingParticipantIds.length >= 4
  ).length;

  team.hiveVictims = Object.values(groupBy(team.events.hiveKills, event => event.victimId)).length;
  team.totalHiveKills = team.events.hiveKills.length;

  team.energizedScore = Math.max(
    ...team.events.baronKills.map(
      event =>
        team.events.buildingKills.filter(
          bKill => bKill.timestamp < event.timestamp + 210000 && bKill.timestamp > event.timestamp
        ).length
    )
  );
  team.waterDragons = team.events.waterDragons.length;
  team.fireDragons = team.events.fireDragons.length;
  team.airDragons = team.events.airDragons.length;
  team.earthDragons = team.events.earthDragons.length;
}
