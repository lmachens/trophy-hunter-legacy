const leBlanc1 = {
  title: 'Path Of The Deceiver',
  name: 'leBlanc1',
  championId: 7,
  leaves: [
    {
      trophyName: 'lunatic',
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
      trophyName: 'keyTargets',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'loneWolf',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'rockSurfing',
      x: 1,
      y: 1,
      parents: ['lunatic', 'tripleKill']
    },
    {
      trophyName: 'theSpartan',
      x: 5,
      y: 1,
      parents: ['keyTargets', 'loneWolf']
    },
    {
      trophyName: 'assassinsCreed',
      x: 3,
      y: 2,
      parents: ['rockSurfing', 'theSpartan']
    }
  ]
};

export default leBlanc1;
