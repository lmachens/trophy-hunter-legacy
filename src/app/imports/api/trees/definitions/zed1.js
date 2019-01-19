const zed1 = {
  title: 'Path Of The Shadow Master',
  name: 'zed1',
  championId: 238, // Zed
  leaves: [
    {
      trophyName: 'keyTargets',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'deadlyShadow',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'tripleKill',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'assassinsCreed',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'killerInstinct',
      x: 1,
      y: 1,
      parents: ['keyTargets', 'deadlyShadow']
    },
    {
      trophyName: 'firstBlood',
      x: 5,
      y: 1,
      parents: ['tripleKill', 'assassinsCreed']
    },
    {
      trophyName: 'deathMarks',
      x: 3,
      y: 2,
      parents: ['killerInstinct', 'firstBlood']
    }
  ]
};

export default zed1;
