const rammus1 = {
  title: 'Path Of The Armordillo',
  name: 'rammus1',
  championId: 33,
  leaves: [
    {
      trophyName: 'feedThem',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'comradeInArms',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'bullying',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'giantsBelt',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'darkBinding',
      x: 1,
      y: 1,
      parents: ['feedThem', 'comradeInArms']
    },
    {
      trophyName: 'controller',
      x: 5,
      y: 1,
      parents: ['bullying', 'giantsBelt']
    },
    {
      trophyName: 'theTortoise',
      x: 3,
      y: 2,
      parents: ['darkBinding', 'controller']
    }
  ]
};

export default rammus1;
