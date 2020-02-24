const sona1 = {
  title: 'Path Of The Maven Of The Stars',
  name: 'sona1',
  championId: 37,
  leaves: [
    {
      trophyName: 'comradeInArms',
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
      trophyName: 'greyEminence',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'deathFromBelow',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'pentaAssist',
      x: 1,
      y: 1,
      parents: ['comradeInArms', 'tripleAssist']
    },
    {
      trophyName: 'flail',
      x: 5,
      y: 1,
      parents: ['greyEminence', 'deathFromBelow']
    },
    {
      trophyName: 'highSociety',
      x: 3,
      y: 2,
      parents: ['pentaAssist', 'flail']
    }
  ]
};

export default sona1;
