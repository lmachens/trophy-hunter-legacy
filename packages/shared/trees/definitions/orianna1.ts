const orianna1 = {
  title: 'Path Of Clockwork',
  name: 'orianna1',
  championId: 61, // Orianna
  leaves: [
    {
      trophyName: 'teamEffort',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'landlord',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'quadraAssist',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'tripleKill',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'annihilation',
      x: 1,
      y: 1,
      parents: ['teamEffort', 'landlord']
    },
    {
      trophyName: 'wizard',
      x: 5,
      y: 1,
      parents: ['quadraAssist', 'tripleKill']
    },
    {
      trophyName: 'shockwave',
      x: 3,
      y: 2,
      parents: ['annihilation', 'wizard']
    }
  ]
};

export default orianna1;
