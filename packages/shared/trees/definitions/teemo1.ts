const teemo1 = {
  title: 'Path Of The Scout',
  name: 'teemo1',
  championId: 17,
  leaves: [
    {
      trophyName: 'farmer',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'hextechLord',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'kitchenKnife',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'duelist',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'deathMarks',
      x: 1,
      y: 1,
      parents: ['farmer', 'hextechLord']
    },
    {
      trophyName: 'smartness',
      x: 5,
      y: 1,
      parents: ['kitchenKnife', 'duelist']
    },
    {
      trophyName: 'wujuStyle',
      x: 3,
      y: 2,
      parents: ['deathMarks', 'smartness']
    }
  ]
};

export default teemo1;
