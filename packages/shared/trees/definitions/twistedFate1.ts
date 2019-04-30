const twistedFate1 = {
  title: 'Path Of The Card Master',
  name: 'twistedFate1',
  championId: 157,
  leaves: [
    {
      trophyName: 'flail',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'deathMarks',
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
      trophyName: 'legendary',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'smartness',
      x: 1,
      y: 1,
      parents: ['flail', 'deathMarks']
    },
    {
      trophyName: 'explosive',
      x: 5,
      y: 1,
      parents: ['carryMode', 'legendary']
    },
    {
      trophyName: 'precision',
      x: 3,
      y: 2,
      parents: ['smartness', 'explosive']
    }
  ]
};

export default twistedFate1;
