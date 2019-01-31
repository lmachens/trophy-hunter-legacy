import groupBy from 'lodash.groupby';
import zip from 'lodash.zip';
import { domains } from '../../riot-api/gameConstants';

import RANGE from '../../champions/range';
import champions from '../../riot-api/champions';

const turretRange = 500;

export default function extendParticipantTimelineStats(extendedMatchResult, participant) {
  const events = extendedMatchResult.events;

  const championIdsByParticipantId = {};
  extendedMatchResult.participants.forEach(p => {
    championIdsByParticipantId[p.participantId] = p.championId;
  });

  // check for early first turret.
  {
    if (events.turretKills.length > 0) {
      const firstTurretDeath = events.turretKills[0];
      const isEarly = firstTurretDeath.timestamp < 10 * 60 * 1000;
      const isEarlyARAM = firstTurretDeath.timestamp < 5 * 60 * 1000;
      const isEarlyTT = firstTurretDeath.timestamp < 8 * 60 * 1000;
      const isKiller = firstTurretDeath.killerId === participant.participantId;
      const isAssistant = firstTurretDeath.assistingParticipantIds.some(
        id => id === participant.participantId
      );
      participant.stats.earlyFirstTurret = isEarly && (isKiller || isAssistant);
      participant.stats.earlyFirstTurretARAM = isEarlyARAM && (isKiller || isAssistant);
      participant.stats.earlyFirstTurretTT = isEarlyTT && (isKiller || isAssistant);
    }
  }

  // check for early first dragon
  {
    if (events.dragonKills.length > 0) {
      const firstDragonDeath = events.dragonKills[0];
      const isEarly = firstDragonDeath.timestamp < 10 * 60 * 1000;
      const isKiller = firstDragonDeath.killerId === participant.participantId;
      participant.stats.earlyFirstDragon = isEarly && isKiller;
    }
  }

  // count special kills
  {
    if (extendedMatchResult.isSummonersRift) {
      participant.stats.invadeKillParticipations = participant.events.killParticipations.filter(
        event => event.timestamp < 75000
      ).length;
    }

    participant.stats.annihilations = zip(
      participant.events.killParticipations,
      participant.events.killParticipations.slice(4)
    ).filter(event => event[1] && event[0].timestamp + 15000 >= event[1].timestamp).length;

    participant.stats.grimReaperKills = participant.events.kills.filter(
      event => event.timestamp >= extendedMatchResult.gameDuration * 1000 - 60000
    ).length;

    // kills before 10 minutes.
    participant.stats.killsPre10 = participant.events.kills.filter(
      event => event.timestamp < 600000
    ).length;

    // assisted teammates before 12 minutes.
    const assistsBefore12 = participant.events.assists.filter(event => event.timestamp < 720000);
    participant.stats.assistedTeammmatesBefore12 = Object.values(
      groupBy(assistsBefore12, event => event.killerId)
    ).length;

    // kills before 12 minutes.
    participant.stats.snowballKills = participant.events.kills.filter(
      event => event.timestamp < 720000
    ).length;

    // kills in last 10 minutes.
    participant.stats.finalHourKills = participant.events.kills.filter(
      event => event.timestamp >= extendedMatchResult.gameDuration * 1000 - 600000
    ).length;

    participant.stats.shutDowns = participant.events.kills.filter(
      kill => kill.shutDownScore >= 3
    ).length;

    participant.stats.bullyingScore = Math.max(
      ...participant.events.killsByVictim.map(event => event.length)
    );

    // 5 takedowns before 10 minutes
    participant.stats.takeDownsPre10 = participant.events.takedownsByVictimPre10.length;

    // kill your killer in 60 seconds after you respawn.
    participant.stats.revengeKills = participant.events.kills.filter(
      kill =>
        participant.events.deaths.filter(death => {
          const isKillerNowVictim = death.killerId === kill.victimId;
          const isDeathBeforeKill = death.timestamp < kill.timestamp;
          const isDeathAtMost60SBefore = death.timestamp + death.deathTime + 60000 > kill.timestamp;
          return isKillerNowVictim && isDeathBeforeKill && isDeathAtMost60SBefore;
        }).length > 0
    ).length;
  }

  participant.stats.victimCount = participant.events.killsByVictim.length;

  participant.stats.feedThemScore = participant.events.assistsByKiller.length === 4 ? 1 : 0;
  if (participant.stats.feedThemScore === 1) {
    participant.stats.feedThemScore = Math.min(
      ...participant.events.assistsByKiller.map(p => p.length)
    );
  }

  participant.stats.keyTargetKills = participant.events.kills.filter(
    event => participant.team.events.keyTargets[event.frame].participantId === event.victimId
  ).length;

  participant.stats.soloKills = participant.events.soloKills.length;
  participant.stats.soloKillsPre10 = participant.events.soloKills.filter(
    soloKill => soloKill.timestamp <= 600000
  ).length;

  // test for league of draven game
  if (participant.stats.win) {
    const assistsToParticipantById = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    participant.events.kills.forEach(kill => {
      if (kill.assistingParticipantIds.length > 0) {
        kill.assistingParticipantIds.forEach(assistantId => {
          assistsToParticipantById[assistantId - 1] = assistsToParticipantById[assistantId - 1] + 1;
        });
      }
    });
    let teammatesMoreAssistsThanKills = true;
    participant.team.participants.forEach(teammate => {
      if (
        teammate.participantId !== participant.participantId &&
        teammate.stats.kills > assistsToParticipantById[teammate.participantId - 1]
      ) {
        teammatesMoreAssistsThanKills = false;
      }
    });
    participant.stats.leagueOfDravenGame = teammatesMoreAssistsThanKills;
  }

  // test for Grand Challenge game
  {
    let isGrandChallengeGame = false;
    participant.events.soloKills.forEach(kill => {
      participant.team.events.buildingKills.forEach(destruct => {
        const destructIsInTimeFrame =
          destruct.timestamp >= kill.timestamp && kill.timestamp + 20000 >= destruct.timestamp;
        const isInhibOrInhibTurret =
          destruct.buildingType === 'INHIBITOR_BUILDING' ||
          (destruct.buildingType === 'TOWER_BUILDING' && destruct.towerType === 'BASE_TOWER');
        const participantIsKillerOrAssistantOfDesctruct =
          destruct.killerId === participant.participantId ||
          destruct.assistingParticipantIds.some(id => id === participant.participantId);
        if (
          destructIsInTimeFrame &&
          isInhibOrInhibTurret &&
          participantIsKillerOrAssistantOfDesctruct
        ) {
          isGrandChallengeGame = true;
        }
      });
    });
    participant.stats.isGrandChallengeGame = isGrandChallengeGame;
  }

  // test for cursedGroundKills
  if (extendedMatchResult.isSummonersRift) {
    let cursedGroundKills = 0;
    participant.events.kills.forEach(kill => {
      const earlyEnough = kill.timestamp <= 10 * 60 * 1000;
      domains[extendedMatchResult.mapId].buffPositions.forEach(buffPosition => {
        const distanceToBuff = Math.sqrt(
          (kill.position.x - buffPosition[0]) * (kill.position.x - buffPosition[0]) +
            (kill.position.y - buffPosition[1]) * (kill.position.y - buffPosition[1])
        );
        if (distanceToBuff <= 1250 && earlyEnough) {
          cursedGroundKills++;
        }
      });
    });
    participant.stats.cursedGroundKills = cursedGroundKills;
  }

  // test for rock-surfing kills
  if (extendedMatchResult.isSummonersRift && participant.timeline.lane === 'MIDDLE') {
    let rockSurfingKills = 0;
    participant.events.killParticipations.forEach(kill => {
      const isOnBotlane =
        kill.position.x - kill.position.y >= 8000 ||
        kill.position.x >= 13000 ||
        kill.position.y <= 2000;
      const isEarlyEnough = kill.timestamp <= 10 * 60 * 1000;
      if (isOnBotlane && isEarlyEnough) {
        rockSurfingKills++;
      }
    });
    participant.stats.rockSurfingKills = rockSurfingKills;
  }

  // test for Zenith Blade
  if (extendedMatchResult.isSummonersRift) {
    let zenithBladeKills = 0;
    participant.events.killParticipations.forEach(kill => {
      const isEarlyEnough = kill.timestamp <= 4 * 60 * 1000;
      const isLateEnough = kill.timestamp >= 2 * 60 * 1000;
      if (isLateEnough && isEarlyEnough) {
        zenithBladeKills++;
      }
    });
    participant.stats.zenithBladeKills = zenithBladeKills;
  }

  // test for the cougar
  if (
    extendedMatchResult.isSummonersRift &&
    participant.timeline.lane === 'JUNGLE' &&
    participant.timeline.goldPerMinDeltas
  ) {
    const goldAt10 = participant.timeline.goldPerMinDeltas['0-10'] * 10;
    const otherJungler = participant.opponentTeam.participants.find(
      player => player.timeline.lane === 'JUNGLE'
    );
    if (otherJungler && otherJungler.timeline.goldPerMinDeltas) {
      const goldAt10OtherJungler = otherJungler.timeline.goldPerMinDeltas['0-10'] * 10;
      participant.stats.theCougar = goldAt10OtherJungler + 1000 <= goldAt10;
    }
  }

  // test for the spartan
  if (
    extendedMatchResult.isSummonersRift &&
    participant.timeline.role === 'SOLO' &&
    participant.timeline.xpPerMinDeltas
  ) {
    const xpAt10 = participant.timeline.xpPerMinDeltas['0-10'] * 10;
    const otherLaner = participant.opponentTeam.participants.find(
      player =>
        player.timeline.role === 'SOLO' && player.timeline.lane === participant.timeline.lane
    );
    if (otherLaner && otherLaner.timeline.xpPerMinDeltas) {
      const xpAt10OtherLaner = otherLaner.timeline.xpPerMinDeltas['0-10'] * 10;
      participant.stats.theSpartan = xpAt10OtherLaner + 1200 <= xpAt10;
    }
  }

  // test for flame Breathe
  if (extendedMatchResult.isSummonersRift && participant.timeline.lane === 'JUNGLE') {
    const ownCS = participant.stats.totalMinionsKilled + participant.stats.neutralMinionsKilled;

    const otherCSMax = Math.max(
      ...extendedMatchResult.others.map(
        other => other.stats.totalMinionsKilled + other.stats.neutralMinionsKilled
      )
    );
    if (ownCS > otherCSMax) {
      participant.stats.flameBreathe = true;
    }
  }

  // check theKnight
  if (extendedMatchResult.isSummonersRift && extendedMatchResult.isModeClassic) {
    events.allKills.forEach((kill, index) => {
      if (index < 9) {
        return;
      }
      if (kill.victimId === participant.participantId) {
        return;
      }
      if (participant.stats.singleAlive) {
        return;
      }

      let currentDeaths = 1;

      for (let i = 1; i < 9; i++) {
        const otherKill = events.allKills[index - i];
        const killedBefore = otherKill.timestamp <= kill.timestamp;
        const stillDead = otherKill.timestamp + otherKill.deathTime >= kill.timestamp;
        const notParticipant = otherKill.victimId !== participant.participantId;
        currentDeaths += killedBefore && stillDead && notParticipant ? 1 : 0;
        if (!(killedBefore && stillDead && notParticipant)) {
          break;
        }
      }
      if (currentDeaths === 9) {
        participant.stats.singleAlive = true;
      }
    });
  }

  // test for unleash the power
  if (
    events.participantsLevelUps[participant.participantId - 1] &&
    events.participantsLevelUps[participant.participantId - 1].length > 5
  ) {
    const levelSixTime = events.participantsLevelUps[participant.participantId - 1][5].timestamp;

    const hasKillInTimeframe = participant.events.kills.some(
      kill => kill.timestamp > levelSixTime && kill.timestamp - 30000 < levelSixTime
    );
    const hasKillInTimeframeARAM = participant.events.kills.some(
      kill => kill.timestamp > levelSixTime && kill.timestamp - 20000 < levelSixTime
    );
    if (hasKillInTimeframe) {
      participant.stats.unleashThePower = true;
    }
    if (hasKillInTimeframeARAM) {
      participant.stats.unleashThePowerARAM = true;
    }
  }

  // test for theWanderer
  if (extendedMatchResult.isSummonersRift && participant.timeline.lane === 'BOTTOM') {
    participant.stats.theWanderer =
      Object.keys(
        groupBy(
          participant.events.killParticipations.filter(
            kill => kill.timestamp < 15 * 60 * 1000 // 15 minutes
          ),
          kill => kill.victimId
        )
      ).length === 5;
  }

  // test for siege Master
  if (extendedMatchResult.isSummonersRift) {
    const turretPositions =
      participant.teamId === 100
        ? domains[extendedMatchResult.mapId].turretPositions.team200
        : domains[extendedMatchResult.mapId].turretPositions.team100;
    participant.stats.siegeMasterKills = participant.events.kills.filter(kill => {
      const isUnderTurret = turretPositions.some(
        pos =>
          Math.sqrt(
            Math.pow(kill.position.x - pos[0], 2) + Math.pow(kill.position.y - pos[1], 2)
          ) <= turretRange
      );
      return isUnderTurret;
    }).length;
  }

  // check for flame horizon and precision
  if (extendedMatchResult.isSummonersRift) {
    const laneOpponents = participant.opponentTeam.participants.filter(
      teammate =>
        teammate.timeline.lane === participant.timeline.lane &&
        teammate.timeline.role === participant.timeline.role &&
        'JUNGLE' !== participant.timeline.lane &&
        'DUO_SUPPORT' !== participant.timeline.role
    );
    if (laneOpponents.length === 1) {
      const laneOpponent = laneOpponents[0];
      participant.stats.flameHorizon =
        laneOpponent.stats.totalMinionsKilled + laneOpponent.stats.neutralMinionsKilled + 100 <=
        participant.stats.totalMinionsKilled + participant.stats.neutralMinionsKilled;

      if (participant.timeline && participant.timeline.creepsPerMinDeltas) {
        participant.stats.csLaneDiffAt10 =
          participant.timeline.creepsPerMinDeltas['0-10'] * 10 -
          laneOpponent.timeline.creepsPerMinDeltas['0-10'] * 10;
      }
    }
    if (laneOpponents.length === 2) {
      // this can happen on botlane if the system doesnt understand who is adc and who is support
      let laneOpponent1CS =
        laneOpponents[0].stats.totalMinionsKilled + laneOpponents[0].stats.neutralMinionsKilled;
      let laneOpponent2CS =
        laneOpponents[1].stats.totalMinionsKilled + laneOpponents[1].stats.neutralMinionsKilled;
      let laneOpponentMaxCs = laneOpponent1CS > laneOpponent2CS ? laneOpponent1CS : laneOpponent2CS;
      participant.stats.flameHorizon =
        laneOpponentMaxCs + 100 <=
        participant.stats.totalMinionsKilled + participant.stats.neutralMinionsKilled;

      // precision
      if (participant.timeline && participant.timeline.creepsPerMinDeltas) {
        laneOpponent1CS = laneOpponents[0].timeline.creepsPerMinDeltas['0-10'];
        laneOpponent2CS = laneOpponents[1].timeline.creepsPerMinDeltas['0-10'];
        laneOpponentMaxCs = laneOpponent1CS > laneOpponent2CS ? laneOpponent1CS : laneOpponent2CS;
        participant.stats.csLaneDiffAt10 =
          participant.timeline.creepsPerMinDeltas['0-10'] * 10 - laneOpponentMaxCs;
      }
    }
    // dominus
    if (participant.timeline && participant.timeline.creepsPerMinDeltas) {
      participant.stats.dominus =
        participant.stats.csLaneDiffAt10 > 10 &&
        participant.stats.soloKillsPre10 > 1 &&
        participant.stats.killsPre10 > 3;
    }
  }

  // check for trinityForceKills
  {
    const trinityForceBuy = events.all.find(
      event =>
        event.participantId === participant.participantId &&
        event.type === 'ITEM_PURCHASED' &&
        event.itemId === 3078
    );
    if (trinityForceBuy !== undefined) {
      const trinityForceBuyTime = trinityForceBuy.timestamp;
      participant.stats.trinityForceKills = participant.events.kills.filter(
        kill =>
          kill.timestamp > trinityForceBuyTime && trinityForceBuyTime <= kill.timestamp + 180000
      ).length;
    }
  }

  // check for darkin blade kills
  {
    const buyEvent = events.all.find(
      event =>
        event.participantId === participant.participantId &&
        event.type === 'ITEM_PURCHASED' &&
        event.itemId === 3124
    );
    if (buyEvent !== undefined) {
      const buyTime = buyEvent.timestamp;
      participant.stats.darkinBladeKills = participant.events.kills.filter(
        kill => kill.timestamp > buyTime && buyTime <= kill.timestamp + 90000
      ).length;
    }
  }

  // Wuju Style
  {
    participant.stats.killsOnMelees = participant.events.kills.filter(event => {
      const champion = champions[championIdsByParticipantId[event.victimId]];
      return champion && champion.range === RANGE.MELEE;
    }).length;
    participant.stats.killedByMelees = participant.events.deaths.filter(event => {
      if (event.killerId === 0) {
        return false;
      }
      const champion = champions[championIdsByParticipantId[event.killerId]];
      return champion && champion.range === RANGE.MELEE;
    }).length;
  }

  // elder into baron
  {
    participant.stats.elderIntoBaron = participant.team.events.elderDragons.some(elderKill =>
      participant.team.events.baronKills.some(
        baronKill =>
          baronKill.timestamp > elderKill.timestamp &&
          elderKill.timestamp + 60000 > baronKill.timestamp
      )
    );
  }

  participant.stats.loneWolfKills = zip(
    participant.events.soloKills,
    participant.events.soloKills.slice(1)
  ).filter(kills => {
    if (!kills[1]) {
      return false;
    }
    const timestampDiff = kills[1].timestamp - kills[0].timestamp;
    return timestampDiff <= 10000;
  }).length;

  participant.stats.vengeanceScore = participant.events.kills
    .map(
      kill =>
        events.killEventsByParticipant[kill.victimId] &&
        events.killEventsByParticipant[kill.victimId].filter(vicKill => {
          const isVicKillBeforeKill = vicKill.timestamp < kill.timestamp;
          const isVicKillAtMost10SBefore = vicKill.timestamp + 10000 > kill.timestamp;
          return isVicKillBeforeKill && isVicKillAtMost10SBefore;
        })
    )
    .reduce((a, b) => a.concat(b), []).length;

  // Only allow summoner's rift.
  if (extendedMatchResult.isSummonersRift) {
    participant.stats.wolfPackKillParticipations = participant.events.killParticipations.filter(
      kill => {
        const notMid = Math.abs(kill.position.x - kill.position.y) < 1000;
        let beyondTheRiver;
        let xInJungle;
        let yInJungle;

        if (participant.teamId === 100) {
          beyondTheRiver = kill.position.x + kill.position.y > 16600;
          xInJungle = kill.position.x < 13000;
          yInJungle = kill.position.y < 13000;
        } else {
          beyondTheRiver = kill.position.x + kill.position.y < 13000;
          xInJungle = kill.position.x > 1880;
          yInJungle = kill.position.y > 1880;
        }
        return beyondTheRiver && xInJungle && yInJungle && notMid && kill.timestamp < 600000;
      }
    ).length;
  }

  const participantDuoKillParticipations = participant.events.killParticipations.filter(
    event => event.assistingParticipantIds.length === 1
  );

  const participantDuoKillParticipationsByTeammate = Object.values(
    groupBy(participantDuoKillParticipations, event =>
      event.killerId === participant.participantId
        ? event.assistingParticipantIds[0]
        : event.killerId
    )
  );

  participant.stats.duoTriplekill = participantDuoKillParticipationsByTeammate.some(
    (duoKills: any) =>
      zip(duoKills, duoKills.slice(1), duoKills.slice(2)).some(triple => {
        const isDefined = triple[2] !== undefined;
        if (!isDefined) {
          return false;
        }
        const isMultiKill12 = triple[0].timestamp + 10000 > triple[1].timestamp;
        const isMultiKill23 = triple[1].timestamp + 10000 > triple[2].timestamp;
        return isMultiKill12 && isMultiKill23;
      })
  );

  participant.stats.maxDuoKills = Math.max(
    ...participantDuoKillParticipationsByTeammate.map((event: any) => event.length)
  );

  participant.stats.nonBullDeaths = participant.events.deaths.filter(
    event => event.assistingParticipantIds.length < 2
  ).length;
  participant.stats.zombieKills = participant.events.kills.filter(event =>
    participant.events.deaths.some(
      death => event.timestamp > death.timestamp && event.timestamp < 10000 + death.timestamp
    )
  ).length;

  participant.stats.houndAssists = participant.events.assists.filter(
    event => event.timestamp < 600000
  ).length;
  participant.stats.houndAssistsARAM = participant.events.assists.filter(
    event => event.timestamp < 300000
  ).length;

  const participantMultiAssistEvents = zip(
    participant.events.assists,
    participant.events.assists.slice(1),
    participant.events.assists.slice(2),
    participant.events.assists.slice(3),
    participant.events.assists.slice(4)
  );

  participant.stats.tripleAssists = participantMultiAssistEvents.filter(multiAssist => {
    const firstTwoKillsSpree =
      multiAssist[1] && multiAssist[0].timestamp + 10000 > multiAssist[1].timestamp;
    const secondTwoKillsSpree =
      multiAssist[2] && multiAssist[1].timestamp + 10000 > multiAssist[2].timestamp;
    const thirdTwoKillsSpree =
      multiAssist[3] && multiAssist[2].timestamp + 10000 > multiAssist[3].timestamp;

    return firstTwoKillsSpree && secondTwoKillsSpree && !thirdTwoKillsSpree;
  }).length;

  participant.stats.quadraAssists = participantMultiAssistEvents.filter(multiAssist => {
    const firstTwoKillsSpree =
      multiAssist[1] && multiAssist[0].timestamp + 10000 > multiAssist[1].timestamp;
    const secondTwoKillsSpree =
      multiAssist[2] && multiAssist[1].timestamp + 10000 > multiAssist[2].timestamp;
    const thirdTwoKillsSpree =
      multiAssist[3] && multiAssist[2].timestamp + 10000 > multiAssist[3].timestamp;
    const fourthTwoKillsSpree =
      multiAssist[4] && multiAssist[3].timestamp + 10000 > multiAssist[4].timestamp;

    return firstTwoKillsSpree && secondTwoKillsSpree && thirdTwoKillsSpree && !fourthTwoKillsSpree;
  }).length;

  participant.stats.pentaAssists = participantMultiAssistEvents.filter(multiAssist => {
    const firstTwoKillsSpree =
      multiAssist[1] && multiAssist[0].timestamp + 10000 > multiAssist[1].timestamp;
    const secondTwoKillsSpree =
      multiAssist[2] && multiAssist[1].timestamp + 10000 > multiAssist[2].timestamp;
    const thirdTwoKillsSpree =
      multiAssist[3] && multiAssist[2].timestamp + 10000 > multiAssist[3].timestamp;
    const fourthTwoKillsSpree =
      multiAssist[4] && multiAssist[3].timestamp + 10000 > multiAssist[4].timestamp;

    return firstTwoKillsSpree && secondTwoKillsSpree && thirdTwoKillsSpree && fourthTwoKillsSpree;
  }).length;

  const participantKillEventsByMin = participant.events.killParticipations.map(killEvent =>
    Math.floor(killEvent.timestamp / 1000)
  );
  participant.stats.onFire = participantKillEventsByMin.some(multiAssist => {
    const twoMinConsecutiveKills = participantKillEventsByMin.some(
      kill => multiAssist + 1 === kill
    );
    const threeMinConsecutiveKills = participantKillEventsByMin.some(
      kill => multiAssist + 2 === kill
    );
    const fourMinConsecutiveKills = participantKillEventsByMin.some(
      kill => multiAssist + 3 === kill
    );
    const fiveMinConsecutiveKills = participantKillEventsByMin.some(
      kill => multiAssist + 4 === kill
    );

    return (
      twoMinConsecutiveKills &&
      threeMinConsecutiveKills &&
      fourMinConsecutiveKills &&
      fiveMinConsecutiveKills
    );
  });

  // check if kill was a towerdive on summonersRift
  if (extendedMatchResult.isSummonersRift) {
    const firstTurretDeath = Math.min(
      ...events.turretKills.map(turretKill => turretKill.timestamp)
    );
    const turretPositions =
      participant.teamId === 100
        ? domains[extendedMatchResult.mapId].turretPositions.team200
        : domains[extendedMatchResult.mapId].turretPositions.team100;
    participant.stats.underTurretKills = participant.events.killParticipations.filter(kill => {
      const preFirstTurretDeath = kill.timestamp <= firstTurretDeath;
      const isUnderTurret = turretPositions.some(
        pos =>
          Math.sqrt(
            Math.pow(kill.position.x - pos[0], 2) + Math.pow(kill.position.y - pos[1], 2)
          ) <= turretRange
      );
      const notDiedInThe10SecsBeforeOrAfter = !participant.events.deaths.some(
        death =>
          death.timestamp + 10000 >= kill.timestamp && death.timestamp - 10000 < kill.timestamp
      );
      let noAssistantDiedBeforeOrAfter = true;
      if (kill.assistingParticipantIds.length) {
        noAssistantDiedBeforeOrAfter = !kill.assistingParticipantIds.some(
          assistantId =>
            events.deathEventsByParticipant[assistantId] &&
            events.deathEventsByParticipant[assistantId].some(
              death =>
                death.timestamp + 10000 >= kill.timestamp &&
                death.timestamp - 10000 < kill.timestamp
            )
        );
      }
      return (
        isUnderTurret &&
        preFirstTurretDeath &&
        notDiedInThe10SecsBeforeOrAfter &&
        noAssistantDiedBeforeOrAfter
      );
    }).length;
  }

  // check for shockwave kills
  participant.stats.shockwaveKills = participant.events.kills.filter((kill, index) => {
    if (index !== 0) {
      const otherKill = participant.events.kills[index - 1];
      const in1SecFromEachOther = kill.timestamp - otherKill.timestamp <= 1000;
      const sufficientClose =
        Math.sqrt(
          (kill.position.x - otherKill.position.x) * (kill.position.x - otherKill.position.x) +
            (kill.position.y - otherKill.position.y) * (kill.position.y - otherKill.position.y)
        ) <= 350;
      return in1SecFromEachOther && sufficientClose;
    }
    return false;
  }).length;

  // check for roaming kills
  if (extendedMatchResult.isSummonersRift && participant.timeline.role === 'DUO_SUPPORT') {
    const middleX = 7435;
    const middleY = 7490;
    const adc = participant.team.participants.find(
      teammate => teammate.timeline.role === 'DUO_CARRY'
    );
    if (!adc) {
      participant.stats.roamingKills = 0;
    } else {
      const adcDeaths = participant.team.events.deaths.filter(
        death => death.victimId === adc.participantId
      );

      participant.stats.roamingKills = participant.events.killParticipations.filter(kill => {
        const before10Mins = kill.timestamp <= 60 * 10000;
        const midLane =
          Math.sqrt(
            (kill.position.x - middleX) * (kill.position.x - middleX) +
              (kill.position.y - middleY) * (kill.position.y - middleY)
          ) <= 2000;
        // adc didnt die +- 10 sec of that roaming kill
        const noADCDeath20Sec = !adcDeaths.some(
          death =>
            death.timestamp + 10000 < kill.timestamp && death.timestamp - 10000 > kill.timestamp
        );
        return before10Mins && midLane && noADCDeath20Sec;
      }).length;
    }
  }

  // check for DeathMarkKills
  {
    const coolDown = 30000;
    let lastDeathMarkKill = -30000;
    let deathMarkKills = 0;
    for (let i = 0; i < participant.events.kills.length; i++) {
      const kill = participant.events.kills[i];
      const notInCooldownTime = kill.timestamp > lastDeathMarkKill + coolDown;
      const noDeathAfter = participant.events.deaths.every(
        death => death.timestamp < kill.timestamp || kill.timestamp + 30000 < death.timestamp
      );
      if (notInCooldownTime && noDeathAfter) {
        lastDeathMarkKill = kill.timestamp;
        deathMarkKills += 1;
      }
    }
    participant.stats.deathMarkKills = deathMarkKills;
  }

  // check for TeamfightKills
  if (extendedMatchResult.isSummonersRift) {
    const teamFightRange = 2500;
    const teamFightTimeRange = 10000;
    participant.stats.teamfightLastKills = events.allKills.filter((kill, index) => {
      if (index < 3 || kill.killerId !== participant.participantId) {
        return false;
      }
      const kill1 = events.allKills[index - 3];
      const kill2 = events.allKills[index - 2];
      const kill3 = events.allKills[index - 1];
      const killAfter =
        index >= events.allKills.length - 2 ? undefined : events.allKills[index + 1];
      const kill1InRange =
        Math.sqrt(
          (kill1.position.x - kill2.position.x) * (kill1.position.x - kill2.position.x) +
            (kill1.position.y - kill2.position.y) * (kill1.position.y - kill2.position.y)
        ) < teamFightRange;
      const kill1CloseInTime = kill2.timestamp - kill1.timestamp < teamFightTimeRange;
      const kill2InRange =
        Math.sqrt(
          (kill2.position.x - kill3.position.x) * (kill2.position.x - kill3.position.x) +
            (kill2.position.y - kill3.position.y) * (kill2.position.y - kill3.position.y)
        ) < teamFightRange;
      const kill2CloseInTime = kill3.timestamp - kill2.timestamp < teamFightTimeRange;
      const kill3InRange =
        Math.sqrt(
          (kill3.position.x - kill.position.x) * (kill3.position.x - kill.position.x) +
            (kill3.position.y - kill.position.y) * (kill3.position.y - kill.position.y)
        ) < teamFightRange;
      const kill3CloseInTime = kill.timestamp - kill3.timestamp < teamFightTimeRange;
      let noAfterKill = true;
      if (index < events.allKills.length - 2) {
        const killAfterInRange =
          Math.sqrt(
            (killAfter.position.x - kill.position.x) * (killAfter.position.x - kill.position.x) +
              (killAfter.position.y - kill.position.y) * (killAfter.position.y - kill.position.y)
          ) < teamFightRange;
        const killAfterCloseInTime = killAfter.timestamp - kill.timestamp < teamFightTimeRange;
        noAfterKill = !(killAfterInRange && killAfterCloseInTime);
      }
      return (
        kill1InRange &&
        kill1CloseInTime &&
        kill2InRange &&
        kill2CloseInTime &&
        kill3InRange &&
        kill3CloseInTime &&
        noAfterKill
      );
    }).length;
  }

  {
    const gameLongEnough = extendedMatchResult.gameDuration > 20 * 60;
    const atLeastOneKill = participant.stats.kills > 0;
    const killTimingsOK = participant.events.kills.every((kill, index) => {
      let killInTiming = true;
      if (index === 0) {
        // 5 min after minions spawn
        killInTiming = kill.timestamp < 375000;
      } else {
        // less than 5 min between consecutive kills
        killInTiming = kill.timestamp < participant.events.kills[index - 1].timestamp + 300000;
      }
      if (index === participant.events.kills.length - 1) {
        // In 5 min before end
        killInTiming =
          killInTiming && kill.timestamp >= extendedMatchResult.gameDuration * 1000 - 300000;
      }
      return killInTiming;
    });
    participant.stats.isBloodthirstGame = gameLongEnough && atLeastOneKill && killTimingsOK;
  }

  {
    const gameLongEnough = extendedMatchResult.gameDuration > 30 * 60;
    const mostDamage = participant.stats.mostDamage;
    const NotDieAfter30Minutes = participant.events.deaths.every(
      death => death.timestamp < extendedMatchResult.gameDuration * 1000 - 300000
    );
    participant.stats.isGloriousEvolutionGame =
      gameLongEnough && mostDamage && NotDieAfter30Minutes;
  }
  // kill & lvlUps
  const participantLevelDiffKills = participant.events.kills.map(kill => {
    return kill.killerLevel - kill.victimLevel;
  });

  participant.stats.dwarfKills = participantLevelDiffKills.filter(lvlDiff => lvlDiff <= -1).length;

  participant.stats.davidKills = participantLevelDiffKills.filter(lvlDiff => lvlDiff <= -2).length;
  participant.stats.sheepKills = participantLevelDiffKills.filter(lvlDiff => lvlDiff >= 2).length;

  const participantKillsBeforeBaron = participant.team.events.baronKills.map(baron =>
    participant.events.kills.filter(
      kill => baron.timestamp > kill.timestamp && baron.timestamp <= kill.timestamp + 40000
    )
  );
  participant.stats.pirateScore = Math.max(
    0,
    Math.max(...participant.events.teamDeathsBeforeBaron.map(deaths => deaths.length))
  );

  participant.stats.unlockTheBeastScore = Math.max(
    ...participantKillsBeforeBaron.map(kills => kills.length)
  );

  // a sacrifice is a elite monster kill where the killer dies in 5 seconds after.
  participant.stats.sacrificeScore = participant.team.events.eliteMonsterKills.filter(
    teamEliteMonsterKill => {
      const participantIsKiller = teamEliteMonsterKill.killerId === participant.participantId;
      const participantDieIn5SecsAfter = participant.events.deaths.some(
        death =>
          death.timestamp > teamEliteMonsterKill.timestamp &&
          death.timestamp < teamEliteMonsterKill.timestamp + 5000
      );
      return participantIsKiller && participantDieIn5SecsAfter;
    }
  ).length;

  // baronClearKills
  participant.stats.baronClearParticipations = participant.events.killParticipations.filter(kp =>
    participant.opponentTeam.events.baronKills.some(
      baron => baron.timestamp < kp.timestamp && kp.timestamp < baron.timestamp + 210000
    )
  ).length;

  const fedTeammate = participant.team.participants.find(
    teammate =>
      teammate.participantId !== participant.participantId &&
      (teammate.stats.kills >= extendedMatchResult.maxKills &&
        teammate.stats.totalDamageDealtToChampions >=
          participant.stats.others.maxTotalDamageDealtToChampions)
  );
  participant.stats.fedTeamMateAssistsPre10 = participant.events.assists.filter(
    assist =>
      fedTeammate &&
      assist.timestamp < 10 * 60 * 1000 &&
      assist.killerId === fedTeammate.participantId
  ).length;

  // extend feature trophyHunt:
  participant.stats.trophyHunt =
    extendedMatchResult.isSummonersRift && participant.stats.victimCount >= 5;

  if (participant.stats.trophyHunt) {
    // this is the time when the participant has achieved a kill on each of the opponents.
    participant.stats.earliestTrophyHunt = Math.max(
      ...participant.events.killsByVictim.map(kills =>
        Math.min(...kills.map(kill => kill.timestamp))
      )
    );
  } else {
    participant.stats.earliestTrophyHunt = 6000000;
  } // 100 minuts. just a very big number. If this is set to 0, it will not work when checking for the minimal earliest trophy hunt  (for summoner features).
}
