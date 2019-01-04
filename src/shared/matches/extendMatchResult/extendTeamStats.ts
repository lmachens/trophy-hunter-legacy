import * as groupBy from 'lodash.groupby';

export default function extendTeamStats(team) {
  const teammates = team.participants;
  const result: any = {};
  result.physicalDamageTotal = teammates
    .map(p => p.stats.physicalDamageDealtToChampions)
    .reduce((memo, num) => memo + num);
  result.magicalDamageTotal = teammates
    .map(p => p.stats.magicDamageDealtToChampions)
    .reduce((memo, num) => memo + num);
  result.trueDamageTotal = teammates
    .map(p => p.stats.trueDamageDealtToChampions)
    .reduce((memo, num) => memo + num);
  result.physicalDamageRatio =
    result.physicalDamageTotal /
    (result.physicalDamageTotal + result.magicalDamageTotal + result.trueDamageTotal + 1); // die +1 soll nur einfach abfangen falls der nenner aus irgendeinem grund 0 ist.
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
  result.maxTotalDamageDealtToChampions = Math.max(
    ...teammates.map(p => p.stats.totalDamageDealtToChampions)
  );
  if (team.opponentTeam.events) {
    result.totalBaronClear = team.opponentTeam.events.baronKills.some(
      baron =>
        Object.keys(
          groupBy(
            team.events.kills.filter(
              kill => baron.timestamp < kill.timestamp && kill.timestamp < baron.timestamp + 210000
            ),
            k => k.victimId
          )
        ).length >= 5
    );
  }
  return result;
}
