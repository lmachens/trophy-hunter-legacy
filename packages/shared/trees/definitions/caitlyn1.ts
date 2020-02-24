const caitlyn1 = {
  title: 'Path Of The Sheriff',
  name: 'caitlyn1',
  championId: 51, // Caitlyn
  leaves: [
    {
      trophyName: 'bloodBrothers',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'siegeRam',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'silverBullets',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'thePolice',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'flameHorizon',
      x: 1,
      y: 1,
      parents: ['bloodBrothers', 'siegeRam']
    },
    {
      trophyName: 'theCannon',
      x: 5,
      y: 1,
      parents: ['silverBullets', 'thePolice']
    },
    {
      trophyName: 'siegeMaster',
      x: 3,
      y: 2,
      parents: ['flameHorizon', 'theCannon']
    }
  ]
};

export default caitlyn1;
