const kindred1 = {
  title: 'Path Of The Eternal Hunters',
  name: 'kindred1',
  championId: 203,
  leaves: [
    {
      trophyName: 'machete',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'revenge',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'smartness',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'tripleAssist',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theBee',
      x: 1,
      y: 1,
      parents: ['machete', 'revenge']
    },
    {
      trophyName: 'superiorBrain',
      x: 5,
      y: 1,
      parents: ['smartness', 'tripleAssist']
    },
    {
      trophyName: 'theGoblin',
      x: 3,
      y: 2,
      parents: ['theBee', 'superiorBrain']
    }
  ]
};

export default kindred1;
