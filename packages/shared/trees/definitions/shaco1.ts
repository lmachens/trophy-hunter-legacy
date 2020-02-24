const shaco1 = {
  title: 'Path Of The Clown',
  name: 'shaco1',
  championId: 35, // Shaco
  leaves: [
    {
      trophyName: 'maniac',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'dragonSlayer',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'keyTargets',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'myJungle',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'assassinsCreed',
      x: 1,
      y: 1,
      parents: ['maniac', 'dragonSlayer']
    },
    {
      trophyName: 'bloodthirst',
      x: 5,
      y: 1,
      parents: ['keyTargets', 'myJungle']
    },
    {
      trophyName: 'cursedGrounds',
      x: 3,
      y: 2,
      parents: ['assassinsCreed', 'bloodthirst']
    }
  ]
};

export default shaco1;
