const xayah1 = {
  title: 'Path Of The Rebel',
  name: 'xayah1',
  championId: 498,
  leaves: [
    {
      trophyName: 'bloodBrothers',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'towerDive',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'doubleKill',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'silverBullets',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theWhale',
      x: 1,
      y: 1,
      parents: ['bloodBrothers', 'towerDive']
    },
    {
      trophyName: 'carryMode',
      x: 5,
      y: 1,
      parents: ['doubleKill', 'silverBullets']
    },
    {
      trophyName: 'ninjas',
      x: 3,
      y: 2,
      parents: ['theWhale', 'carryMode']
    }
  ]
};

export default xayah1;
