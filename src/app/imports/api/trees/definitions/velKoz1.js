const velKoz1 = {
  title: 'Path Of The Void Eye',
  name: 'velKoz1',
  championId: 161,
  leaves: [
    {
      trophyName: 'burningComet',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'livingArtillery',
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
      trophyName: 'unleashThePower',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'glassCannon',
      x: 1,
      y: 1,
      parents: ['burningComet', 'livingArtillery']
    },
    {
      trophyName: 'wizard',
      x: 5,
      y: 1,
      parents: ['kitchenKnife', 'unleashThePower']
    },
    {
      trophyName: 'tuorsAxe',
      x: 3,
      y: 2,
      parents: ['glassCannon', 'wizard']
    }
  ]
};

export default velKoz1;
