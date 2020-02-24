const yorick1 = {
  title: 'Path Of The Shepherd Of Souls',
  name: 'yorick1',
  championId: 83,
  leaves: [
    {
      trophyName: 'battery',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'curtainCall',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'neutralizer',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'annihilation',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'careful',
      x: 1,
      y: 1,
      parents: ['battery', 'curtainCall']
    },
    {
      trophyName: 'overfed',
      x: 5,
      y: 1,
      parents: ['neutralizer', 'annihilation']
    },
    {
      trophyName: 'glutton',
      x: 3,
      y: 2,
      parents: ['careful', 'overfed']
    }
  ]
};

export default yorick1;
