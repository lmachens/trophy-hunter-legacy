const karthus1 = {
  title: 'Path Of The Deathsinger',
  name: 'karthus1',
  championId: 30,
  leaves: [
    {
      trophyName: 'flail',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'bombardment',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'pentaAssist',
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
      trophyName: 'livingArtillery',
      x: 1,
      y: 1,
      parents: ['flail', 'bombardment']
    },
    {
      trophyName: 'wizard',
      x: 5,
      y: 1,
      parents: ['pentaAssist', 'mercenary']
    },
    {
      trophyName: 'thePiranha',
      x: 3,
      y: 2,
      parents: ['livingArtillery', 'wizard']
    }
  ]
};

export default karthus1;
