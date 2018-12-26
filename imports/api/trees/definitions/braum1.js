const braum1 = {
  title: 'Path Of Unity',
  name: 'braum1',
  championId: 201, // Braum
  leaves: [
    {
      trophyName: 'teamEffort',
      x: 3,
      y: 0,
      parents: []
    },
    {
      trophyName: 'quadraAssist',
      x: 1,
      y: 1,
      parents: ['teamEffort']
    },
    {
      trophyName: 'locusts',
      x: 5,
      y: 1,
      parents: ['teamEffort']
    },
    {
      trophyName: 'bigBrother',
      x: 0,
      y: 2,
      parents: ['quadraAssist']
    },
    {
      trophyName: 'pentaAssist',
      x: 2,
      y: 2,
      parents: ['quadraAssist']
    },
    {
      trophyName: 'curse',
      x: 4,
      y: 2,
      parents: ['locusts']
    },
    {
      trophyName: 'highSociety',
      x: 6,
      y: 2,
      parents: ['locusts']
    }
  ]
};

export default braum1;
