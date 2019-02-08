const kassadin1 = {
  title: 'Path Of The Void Walker',
  name: 'kassadin1',
  championId: 38, // Kassadin
  leaves: [
    {
      trophyName: 'overfed',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'rivalry',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'duelist',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'trophyHunterKing',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'annihilation',
      x: 1,
      y: 1,
      parents: ['overfed', 'rivalry']
    },
    {
      trophyName: 'grandChallenge',
      x: 5,
      y: 1,
      parents: ['duelist', 'trophyHunterKing']
    },
    {
      trophyName: 'voidAura',
      x: 3,
      y: 2,
      parents: ['annihilation', 'grandChallenge']
    }
  ]
};

export default kassadin1;
