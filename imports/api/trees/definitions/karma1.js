const karma1 = {
  title: 'Path Of The Enlightend One',
  name: 'karma1',
  championId: 43,
  leaves: [
    {
      trophyName: 'octopus',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'flail',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'radar',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'greyEminence',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'pentaAssist',
      x: 1,
      y: 1,
      parents: ['octopus', 'flail']
    },
    {
      trophyName: 'invade',
      x: 5,
      y: 1,
      parents: ['radar', 'greyEminence']
    },
    {
      trophyName: 'theCompanion',
      x: 3,
      y: 2,
      parents: ['pentaAssist', 'invade']
    }
  ]
};

export default karma1;
