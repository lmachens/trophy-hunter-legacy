const nami1 = {
  title: 'Path Of The Tides',
  name: 'nami1',
  championId: 267, // Nami
  leaves: [
    {
      trophyName: 'careful',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'teamPlayer',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'quackery',
      x: 2,
      y: 1,
      parents: ['careful']
    },
    {
      trophyName: 'controller',
      x: 3,
      y: 1,
      parents: ['careful', 'teamPlayer']
    },
    {
      trophyName: 'watcher',
      x: 4,
      y: 1,
      parents: ['teamPlayer']
    },
    {
      trophyName: 'octopus',
      x: 3,
      y: 2,
      parents: ['quackery', 'controller', 'watcher']
    }
  ]
};

export default nami1;
