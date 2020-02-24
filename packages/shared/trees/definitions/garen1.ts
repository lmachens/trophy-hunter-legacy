const garen1 = {
  title: 'Path Of The Demacian',
  name: 'garen1',
  championId: 86,
  leaves: [
    {
      trophyName: 'careful',
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
      trophyName: 'unleashThePower',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'battery',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'giantsBelt',
      x: 1,
      y: 1,
      parents: ['careful', 'siegeRam']
    },
    {
      trophyName: 'theCannon',
      x: 5,
      y: 1,
      parents: ['unleashThePower', 'battery']
    },
    {
      trophyName: 'theKnight',
      x: 3,
      y: 2,
      parents: ['giantsBelt', 'theCannon']
    }
  ]
};

export default garen1;
