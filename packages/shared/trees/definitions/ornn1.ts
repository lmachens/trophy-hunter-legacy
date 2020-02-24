const ornn1 = {
  title: 'Path Of The Forge God',
  name: 'ornn1',
  championId: 516,
  leaves: [
    {
      trophyName: 'careful',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theViking',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theBull',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'noxianShield',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'siegeRam',
      x: 1,
      y: 1,
      parents: ['careful', 'theViking']
    },
    {
      trophyName: 'theElephant',
      x: 5,
      y: 1,
      parents: ['theBull', 'noxianShield']
    },
    {
      trophyName: 'thorsHammer',
      x: 3,
      y: 2,
      parents: ['siegeRam', 'theElephant']
    }
  ]
};

export default ornn1;
