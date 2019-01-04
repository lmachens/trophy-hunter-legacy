import { MAP_NAMES } from '/imports/shared/riot-api/gameConstants.ts';
import Matches from '/imports/api/statistics/server/matches';
import champions from '/imports/shared/riot-api/champions.ts';
import extendMatchResult from '/imports/shared/matches/extendMatchResult/index.ts';

export const analyzeStatByChampion = () => {
  console.log('analyzeStatByChampion');
  let counter = {};
  let count = 0;
  Matches.find({
    mapId: MAP_NAMES.SUMMONERS_RIFT,
    gameType: 'MATCHED_GAME',
    gameMode: 'CLASSIC',
    timeline: { $exists: true }
  }).forEach(match => {
    Object.values(match.participants).forEach(part => {
      if (!part.stats.firstBloodKill) {
        return;
      }
      try {
        extendMatchResult(null, match, null, {
          withTimeline: true,
          extendStatsParticipantIds: [part.participantId],
          extendParticipants: []
        });
      } catch (err) {
        console.log('error: ' + err);
        console.log(match.gameId);
        console.log(part.participantId);
      }
      const championId = part.championId;
      const statCount = part.stats.win ? 100 : 0;
      if (counter[championId] === undefined) {
        const championInfo = champions[championId];
        counter[championId] = { champ: championInfo.name, statPercent: 0, games: 0 };
      }
      counter[championId].statPercent =
        (counter[championId].statPercent * counter[championId].games + statCount) /
        (counter[championId].games + 1);
      counter[championId].games++;
    });

    count++;

    if (count % 50 === 0) {
      console.log('count:' + count);
    }
  });
  counter = Object.values(counter);
  counter.sort(function(a, b) {
    return b.statPercent - a.statPercent;
  });
  let rank = 1;
  counter.forEach(c => {
    console.log(`${rank}: ${c.champ}, ${c.statPercent}, ${c.games}`);
    rank++;
  });
};
