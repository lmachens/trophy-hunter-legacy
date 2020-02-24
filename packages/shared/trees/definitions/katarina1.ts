const katarina1 = {
  title: 'Path Of The Sinister Blade',
  name: 'katarina1',
  championId: 55,
  leaves: [
    {
      trophyName: 'killerInstinct',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'kitchenKnife',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'rockSurfing',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'overload',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'snowball',
      x: 1,
      y: 1,
      parents: ['killerInstinct', 'kitchenKnife']
    },
    {
      trophyName: 'loneWolf',
      x: 5,
      y: 1,
      parents: ['rockSurfing', 'overload']
    },
    {
      trophyName: 'sinisterBlades',
      x: 3,
      y: 2,
      parents: ['snowball', 'loneWolf']
    }
  ]
};

export default katarina1;
