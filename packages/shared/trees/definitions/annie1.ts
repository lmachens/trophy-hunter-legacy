const annie1 = {
  title: 'Path Of The Dark Child',
  name: 'annie1',
  championId: 1,
  leaves: [
    {
      trophyName: 'shockwave',
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
      trophyName: 'bullying',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theTiger',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'maniac',
      x: 1,
      y: 1,
      parents: ['shockwave', 'tripleKill']
    },
    {
      trophyName: 'theZombie',
      x: 5,
      y: 1,
      parents: ['bullying', 'theTiger']
    },
    {
      trophyName: 'unleashThePower',
      x: 3,
      y: 2,
      parents: ['maniac', 'theZombie']
    }
  ]
};

export default annie1;
