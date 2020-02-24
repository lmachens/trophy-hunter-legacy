const nautilus1 = {
  title: 'Path Of The Titan Of The Depths',
  name: 'nautilus1',
  championId: 111,
  leaves: [
    {
      trophyName: 'lastResort',
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
      trophyName: 'watcher',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'teamPlayer',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'baronNashor',
      x: 1,
      y: 1,
      parents: ['lastResort', 'tripleAssist']
    },
    {
      trophyName: 'noxianShield',
      x: 5,
      y: 1,
      parents: ['watcher', 'teamPlayer']
    },
    {
      trophyName: 'giantsBelt',
      x: 3,
      y: 2,
      parents: ['baronNashor', 'noxianShield']
    }
  ]
};

export default nautilus1;
