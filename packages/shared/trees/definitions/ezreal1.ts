const ezreal1 = {
  title: 'Path Of The Prodigal Explorer',
  name: 'ezreal1',
  championId: 81, // Ezreal
  leaves: [
    {
      trophyName: 'comradeInArms',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'david',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'trinityForce',
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
      trophyName: 'livingArtillery',
      x: 1,
      y: 1,
      parents: ['comradeInArms', 'david']
    },
    {
      trophyName: 'billGates',
      x: 5,
      y: 1,
      parents: ['trinityForce', 'deathMarks']
    },
    {
      trophyName: 'kleptomaniac',
      x: 3,
      y: 2,
      parents: ['livingArtillery', 'billGates']
    }
  ]
};

export default ezreal1;
