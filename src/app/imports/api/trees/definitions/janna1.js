const janna1 = {
  title: 'Path Of The Storms Fury',
  name: 'janna1',
  championId: 40,
  leaves: [
    {
      trophyName: 'feedThem',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'lightBringer',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theElephant',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'bigBrother',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'guardianAngel',
      x: 1,
      y: 1,
      parents: ['feedThem', 'lightBringer']
    },
    {
      trophyName: 'highSociety',
      x: 5,
      y: 1,
      parents: ['theElephant', 'bigBrother']
    },
    {
      trophyName: 'tornado',
      x: 3,
      y: 2,
      parents: ['guardianAngel', 'highSociety']
    }
  ]
};

export default janna1;
