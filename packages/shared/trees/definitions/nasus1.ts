const nasus1 = {
  title: 'Path Of The Curator Of The Sands',
  name: 'nasus1',
  championId: 75,
  leaves: [
    {
      trophyName: 'careful',
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
      trophyName: 'goliath',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theBull',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theElephant',
      x: 1,
      y: 1,
      parents: ['careful', 'hextechLord']
    },
    {
      trophyName: 'demolitionPear',
      x: 5,
      y: 1,
      parents: ['goliath', 'theBull']
    },
    {
      trophyName: 'trinityForce',
      x: 3,
      y: 2,
      parents: ['theElephant', 'demolitionPear']
    }
  ]
};

export default nasus1;
