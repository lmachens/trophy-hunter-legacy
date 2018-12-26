const soraka1 = {
  title: 'Path Of The Starchild',
  name: 'soraka1',
  championId: 16,
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
      trophyName: 'controller',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'healer',
      x: 1,
      y: 1,
      parents: ['comradeInArms', 'tripleAssist']
    },
    {
      trophyName: 'guardianAngel',
      x: 5,
      y: 1,
      parents: ['greyEminence', 'controller']
    },
    {
      trophyName: 'preserver',
      x: 3,
      y: 2,
      parents: ['healer', 'guardianAngel']
    }
  ]
};

export default soraka1;
