const vayne1 = {
  title: 'Path Of The Night Hunter',
  name: 'vayne1',
  championId: 67,
  leaves: [
    {
      trophyName: 'theBee',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'keyTargets',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'david',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'fullHouse',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'ninjas',
      x: 1,
      y: 1,
      parents: ['theBee', 'keyTargets']
    },
    {
      trophyName: 'glutton',
      x: 5,
      y: 1,
      parents: ['david', 'fullHouse']
    },
    {
      trophyName: 'theFinalHour',
      x: 3,
      y: 2,
      parents: ['ninjas', 'glutton']
    }
  ]
};

export default vayne1;
