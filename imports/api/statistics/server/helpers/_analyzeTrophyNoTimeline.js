import Matches from '/imports/api/statistics/server/matches';

export const analyzeTrophyNoTimeline = () => {
  console.log('analyzeTrophyNoTimeline');
  let counter = {};
  let count = 0;
  Matches.find(
    {
      mapId: 11,
      gameType: 'MATCHED_GAME',
      gameMode: 'CLASSIC'
    },
    {
      limit: 20000
    }
  ).forEach(match => {
    Object.values(match.participants).forEach(part => {
      if (!(part.stats.perk0 === 8005)) return;

      const statCount = part.stats.perk0Var1;

      const championId = Math.floor(statCount / 100);
      if (counter[championId] === undefined) {
        //const championInfo = champions[championId];
        counter[championId] = { champ: championId, StatPercent: 0, games: 0 };
      }

      counter[championId].StatPercent =
        (counter[championId].StatPercent * counter[championId].games + statCount) /
        (counter[championId].games + 1);
      counter[championId].games++;
      count++;
    });

    if (count % 50 === 0) {
      console.log('count:' + count);
    }
  });
  counter = Object.values(counter);
  counter.sort(function(a, b) {
    return b.StatPercent - a.StatPercent;
  });
  let rank = 1;
  counter.forEach(c => {
    c.StatPercent = (100 * c.games) / count;
    console.log(`${rank}: ${c.champ}, ${c.StatPercent}, ${c.games}`);
    rank++;
  });
};
