const syndra1 = {
  title: 'Path Of The Dark Sovereign',
  name: 'syndra1',
  championId: 134, // Syndra
  leaves: [
    {
      trophyName: 'duelist',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'wizard',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'maniac',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'deathMarks',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'overfed',
      x: 1,
      y: 1,
      parents: ['duelist', 'wizard']
    },
    {
      trophyName: 'bullying',
      x: 5,
      y: 1,
      parents: ['maniac', 'deathMarks']
    },
    {
      trophyName: 'unleashThePower',
      x: 3,
      y: 2,
      parents: ['overfed', 'bullying']
    }
  ]
};

export default syndra1;
