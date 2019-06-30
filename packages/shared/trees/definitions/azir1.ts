const azir1 = {
  title: 'Path Of The Emperor Of The Sands',
  name: 'azir1',
  championId: 268,
  leaves: [
    {
      trophyName: 'towerDive',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theCompanion',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'carryMode',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'unstoppable',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theSphinx',
      x: 1,
      y: 1,
      parents: ['towerDive', 'theCompanion']
    },
    {
      trophyName: 'theBee',
      x: 5,
      y: 1,
      parents: ['carryMode', 'unstoppable']
    },
    {
      trophyName: 'sandsOfTime',
      x: 3,
      y: 2,
      parents: ['theSphinx', 'theBee']
    }
  ]
};

export default azir1;
