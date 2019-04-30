const neeko1 = {
  title: 'Path Of The Curious Chameleon',
  name: 'neeko1',
  championId: 518,
  leaves: [
    {
      trophyName: 'theHound',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'feedThem',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'ninjas',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'mercenary',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'teamPlayer',
      x: 1,
      y: 1,
      parents: ['theHound', 'feedThem']
    },
    {
      trophyName: 'stomp',
      x: 5,
      y: 1,
      parents: ['ninjas', 'mercenary']
    },
    {
      trophyName: 'theBlackFlag',
      x: 3,
      y: 2,
      parents: ['teamPlayer', 'stomp']
    }
  ]
};

export default neeko1;
