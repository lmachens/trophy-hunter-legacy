import Matches from '/imports/api/statistics/server/matches';

export const analyzeStatByPosition = () => {
  console.log('analyzeStatByPosition');
  let counter = {};
  let count = 0;
  Matches.find(
    {
      mapId: 11,
      gameType: 'MATCHED_GAME',
      gameMode: 'CLASSIC'
    },
    {
      limit: 200000
    }
  ).forEach(match => {
    if (!match.timeline) {
      return;
    }
    Object.values(match.participants).forEach(part => {
      if (!part.stats.firstBloodKill) {
        return;
      }
      const lane = part.timeline.lane + '-' + part.timeline.role;
      const statCount = part.stats.win ? 100 : 0;
      if (counter[lane] === undefined) {
        counter[lane] = { lane: lane, StatPercent: 0, games: 0 };
      }
      counter[lane].StatPercent =
        (counter[lane].StatPercent * counter[lane].games + statCount) / (counter[lane].games + 1);
      counter[lane].games++;
    });

    count++;

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
    console.log(`${rank}: ${c.lane}, ${c.StatPercent}, ${c.games}`);
    rank++;
  });
};
