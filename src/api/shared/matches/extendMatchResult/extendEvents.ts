import groupBy from 'lodash.groupby';
import zip from 'lodash.zip';
import extendKillStats from './extendKillStats';

function extendGeneralEvents(extendedMatchResult) {
  const events: any = {};
  extendedMatchResult.events = events;
  // add frame to events
  extendedMatchResult.timeline.frames.forEach((frame, index) => {
    frame.events.forEach(event => {
      event.frame = index;
    });
  });

  // all events in a single array:
  const all = extendedMatchResult.timeline.frames
    .map(num => num.events)
    .reduce((a, b) => a.concat(b), []);
  events.all = all;

  // level ups
  const allLevelUps = all.filter(
    event => event.type === 'SKILL_LEVEL_UP' && event.levelUpType === 'NORMAL'
  );
  events.allLevelUps = allLevelUps;
  const participantsLevelUps = groupBy(events.allLevelUps, event => {
    return event.participantId;
  });
  events.participantsLevelUps = participantsLevelUps;

  const allKills = all.filter(event => event.type === 'CHAMPION_KILL');
  events.allKills = allKills;
  const killEventsByParticipant = groupBy(allKills, event => event.killerId);
  events.killEventsByParticipant = killEventsByParticipant;

  const deathEventsByParticipant = groupBy(allKills, event => event.victimId);
  events.deathEventsByParticipant = deathEventsByParticipant;

  extendKillStats(extendedMatchResult);

  events.turretKills = all.filter(event => {
    return event.type === 'BUILDING_KILL' && event.buildingType === 'TOWER_BUILDING';
  });

  events.dragonKills = all.filter(event => {
    return event.type === 'ELITE_MONSTER_KILL' && event.monsterType === 'DRAGON';
  });

  events.allBuildingKills = all.filter(event => {
    return event.type === 'BUILDING_KILL';
  });

  // epic monster kills
  events.allEliteMonsterKills = events.all.filter(event => event.type === 'ELITE_MONSTER_KILL');
}

function extendKillEvents(events) {
  // extend with victim last death Info and shutdown score count of current killing spree of victim.
  events.allKills.forEach(kill => {
    const deathEvents = events.deathEventsByParticipant[kill.victimId];
    const victimLastDeath = deathEvents
      ? Math.max(
          ...deathEvents.map(vicDeath =>
            vicDeath.timestamp < kill.timestamp ? vicDeath.timestamp : 0
          )
        )
      : 0;
    const killEvents = events.killEventsByParticipant[kill.victimId];
    const shutDownScore = killEvents
      ? killEvents.filter(
          vicKill => vicKill.timestamp > victimLastDeath && vicKill.timestamp < kill.timestamp
        ).length
      : 0;
    kill.shutDownScore = shutDownScore;
  });
}

export default function extendEvents(extendedMatchResult, matchExtensionParameters) {
  extendGeneralEvents(extendedMatchResult);

  extendTeamEvents(extendedMatchResult, extendedMatchResult.teams[0]);
  extendTeamEvents(extendedMatchResult, extendedMatchResult.teams[1]);
  extendTeamEvents_2(extendedMatchResult);

  matchExtensionParameters.extendParticipants.forEach(participant => {
    extendParticipantEvents(extendedMatchResult, participant);
  });

  extendKillEvents(extendedMatchResult.events);
}

function extendTeamEvents(extendedMatchResult, team) {
  const { events, teamThreshold } = extendedMatchResult;
  team.events = {};
  team.events.kills = events.allKills.filter(kill => team.idCheck(kill.killerId));
  team.events.hiveKills = team.events.kills.filter(
    event => event.assistingParticipantIds.length >= 4
  );
  team.events.deaths = events.allKills.filter(kill => team.idCheck(kill.victimId));
  team.events.buildingKills = events.allBuildingKills.filter(event => {
    return team.teamId !== event.teamId;
  });
  team.events.turretKills = team.events.buildingKills.filter(event => {
    return event.type === 'BUILDING_KILL' && event.buildingType === 'TOWER_BUILDING';
  });

  team.events.keyTargets = extendedMatchResult.timeline.frames.map(frame => {
    let frames;
    if (team.teamId === 100) {
      frames = Object.values(frame.participantFrames).slice(teamThreshold);
    } else {
      frames = Object.values(frame.participantFrames).slice(0, teamThreshold);
    }
    return frames.sort((a, b) => b.totalGold - a.totalGold)[0];
  });

  // gold
  team.events.totalGoldFrames = extendedMatchResult.timeline.frames.map(({ participantFrames }) => {
    let result = 0;
    let from;
    let to;
    if (team.teamId === 100) {
      from = 1;
      to = teamThreshold + 1;
    } else {
      from = teamThreshold + 1;
      to = teamThreshold * 2 + 1;
    }
    for (let i = from; i < to; i++) {
      if (participantFrames[i]) {
        result += participantFrames[i].totalGold;
      }
    }
    return result;
  });
  const teamEliteMonsterKills = events.allEliteMonsterKills.filter(event =>
    team.idCheck(event.killerId)
  );
  team.events.eliteMonsterKills = teamEliteMonsterKills;

  team.events.dragonKills = teamEliteMonsterKills.filter(event => event.monsterType === 'DRAGON');
  team.events.waterDragons = teamEliteMonsterKills.filter(
    event => event.monsterSubType === 'WATER_DRAGON'
  );
  team.events.fireDragons = teamEliteMonsterKills.filter(
    event => event.monsterSubType === 'FIRE_DRAGON'
  );
  team.events.earthDragons = teamEliteMonsterKills.filter(
    event => event.monsterSubType === 'EARTH_DRAGON'
  );
  team.events.airDragons = teamEliteMonsterKills.filter(
    event => event.monsterSubType === 'AIR_DRAGON'
  );
  team.events.elderDragons = teamEliteMonsterKills.filter(
    event => event.monsterSubType === 'ELDER_DRAGON'
  );
  team.events.baronKills = teamEliteMonsterKills.filter(
    event => event.monsterType === 'BARON_NASHOR'
  );
}
// this is in an extra function because it needs stats of both teams
function extendTeamEvents_2(extendedMatchResult) {
  const teamGoldDiffFrames = zip(
    extendedMatchResult.teams[0].events.totalGoldFrames,
    extendedMatchResult.teams[1].events.totalGoldFrames
  ).map(frame => frame[0] - frame[1]);
  extendedMatchResult.isRivalry = teamGoldDiffFrames
    .slice(0, 15)
    .every(diff => Math.abs(diff) < 2000);

  const teamGoldChangeFrames = zip(
    teamGoldDiffFrames.slice(0, teamGoldDiffFrames.length - 1),
    teamGoldDiffFrames.slice(1)
  ).map(frame => frame[1] - frame[0]);
  extendedMatchResult.teams[0].maxGoldSwing = Math.max(...teamGoldChangeFrames);
  extendedMatchResult.teams[0].maxGoldDown = Math.min(...teamGoldDiffFrames);
  extendedMatchResult.teams[1].maxGoldSwing = Math.min(...teamGoldChangeFrames);
  extendedMatchResult.teams[1].maxGoldDown = Math.max(...teamGoldDiffFrames);
}

function extendParticipantEvents(extendedMatchResult, participant) {
  participant.events = {};
  participant.events.skillUps = extendedMatchResult.events.allLevelUps.filter(
    event => event.participantId === participant.participantId
  );
  participant.events.killParticipations = participant.team.events.kills.filter(
    event =>
      event.killerId === participant.participantId ||
      event.assistingParticipantIds.includes(participant.participantId)
  );
  participant.events.kills = participant.events.killParticipations.filter(
    event => event.killerId === participant.participantId
  );
  participant.events.deaths = participant.opponentTeam.events.kills.filter(
    event => event.victimId === participant.participantId
  );

  participant.events.turretKills = participant.team.events.turretKills.filter(
    event =>
      event.killerId === participant.participantId ||
      event.assistingParticipantIds.some(id => id === participant.participantId)
  );

  participant.events.takedownsByVictimPre10 = Object.values(
    groupBy(
      participant.events.killParticipations.filter(event => event.timestamp <= 10 * 60000),
      event => event.victimId
    )
  );
  participant.events.killsByVictim = Object.values(
    groupBy(participant.events.kills, event => event.victimId)
  );
  participant.events.soloKills = participant.events.kills.filter(
    event => !event.assistingParticipantIds || !event.assistingParticipantIds.length
  );
  participant.events.assists = participant.events.killParticipations.filter(event =>
    event.assistingParticipantIds.includes(participant.participantId)
  );
  participant.events.assistsByKiller = Object.values(
    groupBy(participant.events.assists, event => event.killerId)
  );
  participant.events.baronKills = participant.team.events.baronKills.filter(
    event => event.killerId === participant.participantId
  );
  participant.events.teamDeathsBeforeBaron = participant.events.baronKills.map(baron =>
    participant.opponentTeam.events.kills.filter(
      kill => baron.timestamp > kill.timestamp && baron.timestamp <= kill.timestamp + 40000
    )
  );
}
