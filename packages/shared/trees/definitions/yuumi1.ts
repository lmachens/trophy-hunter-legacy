const yuumi1 = {
  title: 'Path Of Magical Kitties',
  name: 'yuumi1',
  championId: 350,
  leaves: [
    {
      trophyName: 'theCompanion',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'bloodBrothers',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'careful',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'octopus',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'tripleAssist',
      x: 1,
      y: 1,
      parents: ['theCompanion', 'bloodBrothers']
    },
    {
      trophyName: 'feedThem',
      x: 5,
      y: 1,
      parents: ['careful', 'octopus']
    },
    {
      trophyName: 'quackery',
      x: 3,
      y: 2,
      parents: ['tripleAssist', 'feedThem']
    }
  ]
};

export default yuumi1;
