const singed1 = {
  title: 'Path Of The Mad Chemist',
  name: 'singed1',
  championId: 27,
  leaves: [
    {
      trophyName: 'battery',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'careful',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'siegeMaster',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theViking',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'lifeAndDeath',
      x: 1,
      y: 1,
      parents: ['battery', 'careful']
    },
    {
      trophyName: 'chaliceOfRecovery',
      x: 5,
      y: 1,
      parents: ['siegeMaster', 'theViking']
    },
    {
      trophyName: 'tornado',
      x: 3,
      y: 2,
      parents: ['lifeAndDeath', 'chaliceOfRecovery']
    }
  ]
};

export default singed1;
