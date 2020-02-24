const rumble1 = {
  title: 'Path Of The Mechanized Menace',
  name: 'rumble1',
  championId: 68,
  leaves: [
    {
      trophyName: 'bombardment',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'tripleKill',
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
      trophyName: 'burningComet',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'annihilation',
      x: 1,
      y: 1,
      parents: ['bombardment', 'tripleKill']
    },
    {
      trophyName: 'theCannon',
      x: 5,
      y: 1,
      parents: ['goliath', 'burningComet']
    },
    {
      trophyName: 'wizard',
      x: 3,
      y: 2,
      parents: ['annihilation', 'theCannon']
    }
  ]
};

export default rumble1;
