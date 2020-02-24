const urgot1 = {
  title: 'Path Of The Dreadnought',
  name: 'urgot1',
  championId: 6,
  leaves: [
    {
      trophyName: 'farmer',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'assassinsCreed',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'explosiveCharge',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'kitchenKnife',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'thePolice',
      x: 1,
      y: 1,
      parents: ['farmer', 'assassinsCreed']
    },
    {
      trophyName: 'landlord',
      x: 5,
      y: 1,
      parents: ['explosiveCharge', 'kitchenKnife']
    },
    {
      trophyName: 'trophyHunter',
      x: 3,
      y: 2,
      parents: ['thePolice', 'landlord']
    }
  ]
};

export default urgot1;
