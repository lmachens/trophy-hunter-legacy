const maokai1 = {
  title: 'Path Of The Twisted Treant',
  name: 'maokai1',
  championId: 57,
  leaves: [
    {
      trophyName: 'stomp',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'lifeAndDeath',
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
      trophyName: 'giantsBelt',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theBull',
      x: 1,
      y: 1,
      parents: ['stomp', 'lifeAndDeath']
    },
    {
      trophyName: 'goliath',
      x: 5,
      y: 1,
      parents: ['careful', 'giantsBelt']
    },
    {
      trophyName: 'battery',
      x: 3,
      y: 2,
      parents: ['theBull', 'goliath']
    }
  ]
};

export default maokai1;
