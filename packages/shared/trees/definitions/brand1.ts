const brand1 = {
  title: 'Path Of The Burning Vengeance',
  name: 'brand1',
  championId: 63, // Brand
  leaves: [
    {
      trophyName: 'flail',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'tuorsAxe',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'unleashThePower',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'vengeance',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'superiorBrain',
      x: 1,
      y: 1,
      parents: ['flail', 'tuorsAxe']
    },
    {
      trophyName: 'wizard',
      x: 5,
      y: 1,
      parents: ['unleashThePower', 'vengeance']
    },
    {
      trophyName: 'burningComet',
      x: 3,
      y: 2,
      parents: ['superiorBrain', 'wizard']
    }
  ]
};

export default brand1;
