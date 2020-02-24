const gnar1 = {
  title: 'Path Of Gnar',
  name: 'gnar1',
  championId: 150, // Gnar
  leaves: [
    {
      trophyName: 'siegeRam',
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
      trophyName: 'bullying',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'doubleKill',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'thorsHammer',
      x: 1,
      y: 1,
      parents: ['siegeRam', 'theViking']
    },
    {
      trophyName: 'noxianKnight',
      x: 5,
      y: 1,
      parents: ['bullying', 'doubleKill']
    },
    {
      trophyName: 'flameHorizon',
      x: 3,
      y: 2,
      parents: ['thorsHammer', 'noxianKnight']
    }
  ]
};

export default gnar1;
