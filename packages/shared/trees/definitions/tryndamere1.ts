const tryndamere1 = {
  title: 'Path Of The Barbarian King',
  name: 'tryndamere1',
  championId: 23,
  leaves: [
    {
      trophyName: 'neutralizer',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'uncounterable',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'unstoppable',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'spinningBlades',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'maniac',
      x: 1,
      y: 1,
      parents: ['neutralizer', 'uncounterable']
    },
    {
      trophyName: 'theFinalHour',
      x: 5,
      y: 1,
      parents: ['unstoppable', 'spinningBlades']
    },
    {
      trophyName: 'grandChallenge',
      x: 3,
      y: 2,
      parents: ['maniac', 'theFinalHour']
    }
  ]
};

export default tryndamere1;
