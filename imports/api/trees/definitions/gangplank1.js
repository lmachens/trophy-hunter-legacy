const gangplank1 = {
  title: 'Path Of The Saltwater Scourge',
  name: 'gangplank1',
  championId: 41, // Gangplank
  leaves: [
    {
      trophyName: 'comradeInArms',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theGriffin',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'billGates',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'explosive',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'lifeAndDeath',
      x: 1,
      y: 1,
      parents: ['comradeInArms', 'theGriffin']
    },
    {
      trophyName: 'bombardment',
      x: 5,
      y: 1,
      parents: ['billGates', 'explosive']
    },
    {
      trophyName: 'trinityForce',
      x: 3,
      y: 2,
      parents: ['lifeAndDeath', 'bombardment']
    }
  ]
};

export default gangplank1;
