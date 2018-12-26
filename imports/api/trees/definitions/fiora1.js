const fiora1 = {
  title: 'Path Of The Duelist',
  name: 'fiora1',
  championId: 114, // Fiora
  leaves: [
    {
      trophyName: 'duelist',
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
      trophyName: 'appetizer',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'siegeRam',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'loneWolf',
      x: 1,
      y: 1,
      parents: ['duelist', 'theViking']
    },
    {
      trophyName: 'explosiveCharge',
      x: 5,
      y: 1,
      parents: ['appetizer', 'siegeRam']
    },
    {
      trophyName: 'grandChallenge',
      x: 3,
      y: 2,
      parents: ['loneWolf', 'explosiveCharge']
    }
  ]
};

export default fiora1;
