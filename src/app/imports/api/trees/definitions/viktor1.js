const viktor1 = {
  title: 'Path Of The Machine Herald',
  name: 'viktor1',
  championId: 112,
  leaves: [
    {
      trophyName: 'wizard',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'precision',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'deadlyVenom',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'flameHorizon',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'superiorBrain',
      x: 1,
      y: 1,
      parents: ['wizard', 'precision']
    },
    {
      trophyName: 'theFinalHour',
      x: 5,
      y: 1,
      parents: ['deadlyVenom', 'flameHorizon']
    },
    {
      trophyName: 'gloriousEvolution',
      x: 3,
      y: 2,
      parents: ['superiorBrain', 'theFinalHour']
    }
  ]
};

export default viktor1;
