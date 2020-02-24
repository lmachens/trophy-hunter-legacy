const sejuani1 = {
  title: 'Path Of The Fury Of The North',
  name: 'sejuani1',
  championId: 113,
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
      trophyName: 'octopus',
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
      trophyName: 'pentaAssist',
      x: 1,
      y: 1,
      parents: ['teamPlayer', 'feedThem']
    },
    {
      trophyName: 'clothArmor',
      x: 5,
      y: 1,
      parents: ['octopus', 'theBull']
    },
    {
      trophyName: 'cursedGrounds',
      x: 3,
      y: 2,
      parents: ['pentaAssist', 'clothArmor']
    }
  ]
};

export default sejuani1;
