const kogMaw1 = {
  title: 'Path Of The Living Artillery',
  name: 'kogMaw1',
  championId: 96, // KogMaw
  leaves: [
    {
      trophyName: 'flail',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'tripleKill',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'glutton',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'vengeance',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theZombie',
      x: 1,
      y: 1,
      parents: ['flail', 'tripleKill']
    },
    {
      trophyName: 'grimReaper',
      x: 5,
      y: 1,
      parents: ['glutton', 'vengeance']
    },
    {
      trophyName: 'livingArtillery',
      x: 3,
      y: 2,
      parents: ['theZombie', 'grimReaper']
    }
  ]
};

export default kogMaw1;
