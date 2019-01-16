const thirtySeconds = 30 * 1000;
const fifteenMinutes = 15 * 60 * 1000;
const thirtyMinutes = 30 * 60 * 1000;
const fourtyFiveMinutes = 45 * 60 * 1000;

export default function extendKillStats(extendedMatchResult) {
  const events = extendedMatchResult.events;
  // add levels to kills
  events.allKills.forEach(kill => {
    kill.killerLevel =
      events.participantsLevelUps[kill.killerId] &&
      events.participantsLevelUps[kill.killerId].filter(lvlUp => kill.timestamp >= lvlUp.timestamp)
        .length;
    kill.victimLevel =
      events.participantsLevelUps[kill.victimId] &&
      events.participantsLevelUps[kill.victimId].filter(lvlUp => kill.timestamp >= lvlUp.timestamp)
        .length;
  });

  // add respawn time to kill/death
  // formula on summonersRift: 8 + 2.5 * level + [between 15-30] TIME-15min / 30 * 0.00425  + [between 30-45] TIME-30min / 30 * 0.003
  if (extendedMatchResult.isSummonersRift && extendedMatchResult.isModeClassic) {
    events.allKills.forEach(kill => {
      let basetimer = 0;
      if (kill.victimLevel <= 6) {
        basetimer = 4 + 2 * kill.victimLevel;
      } else if (kill.victimLevel === 7) {
        basetimer = 21;
      } else {
        basetimer = 8 + 2.5 * kill.victimLevel;
      }
      let timeMultiplier = 1.0;
      if (kill.timestamp > fifteenMinutes && kill.timestamp <= thirtyMinutes) {
        timeMultiplier += ((kill.timestamp - fifteenMinutes) / thirtySeconds) * 0.00425;
      } else if (kill.timestamp > thirtyMinutes && kill.timestamp <= fourtyFiveMinutes) {
        timeMultiplier += 0.1275 + ((kill.timestamp - thirtyMinutes) / thirtySeconds) * 0.003;
      } else if (kill.timestamp > fourtyFiveMinutes) {
        timeMultiplier += 0.2175 + ((kill.timestamp - fourtyFiveMinutes) / thirtySeconds) * 0.0175;
      }
      // time multiplier maxes out at 50%
      timeMultiplier = Math.max(timeMultiplier, 1.5);
      kill.deathTime = basetimer * timeMultiplier * 1000;
    });
  }
}
