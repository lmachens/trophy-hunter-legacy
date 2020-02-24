const camille1 = {
  title: 'Path Of The Steel Shadow',
  name: 'camille1',
  championId: 164,
  leaves: [
    {
      trophyName: 'theViking',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'loneWolf',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'noxianArmy',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'trophyHunter',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'snowball',
      x: 1,
      y: 1,
      parents: ['theViking', 'loneWolf']
    },
    {
      trophyName: 'theSpartan',
      x: 5,
      y: 1,
      parents: ['noxianArmy', 'trophyHunter']
    },
    {
      trophyName: 'trinityForce',
      x: 3,
      y: 2,
      parents: ['snowball', 'theSpartan']
    }
  ]
};

export default camille1;
