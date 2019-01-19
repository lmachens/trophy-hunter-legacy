const leona1 = {
  title: 'Path Of Sunlight',
  name: 'leona1',
  championId: 89, // Leona
  leaves: [
    {
      trophyName: 'octopus',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'tripleAssist',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'feedThem',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'clothArmor',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'bigBrother',
      x: 1,
      y: 1,
      parents: ['octopus', 'tripleAssist']
    },
    {
      trophyName: 'nurturing',
      x: 5,
      y: 1,
      parents: ['feedThem', 'clothArmor']
    },
    {
      trophyName: 'zenithBlade',
      x: 3,
      y: 2,
      parents: ['bigBrother', 'nurturing']
    }
  ]
};

export default leona1;
