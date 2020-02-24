const alistar1 = {
  title: 'Path Of The Horns',
  name: 'alistar1',
  championId: 12, // Alistar
  leaves: [
    {
      trophyName: 'teamPlayer',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'feedThem',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'stomp',
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
      trophyName: 'annihilation',
      x: 1,
      y: 1,
      parents: ['teamPlayer', 'feedThem']
    },
    {
      trophyName: 'clothArmor',
      x: 5,
      y: 1,
      parents: ['stomp', 'theBull']
    },
    {
      trophyName: 'unbreakableWill',
      x: 3,
      y: 2,
      parents: ['annihilation', 'clothArmor']
    }
  ]
};

export default alistar1;
