const taliyah1 = {
  title: 'Path Of The Stone Weaver',
  name: 'taliyah1',
  championId: 163, // Taliyah
  leaves: [
    {
      trophyName: 'theGriffin',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'mercenary',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'vengeance',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'farmer',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'wizard',
      x: 1,
      y: 1,
      parents: ['theGriffin', 'mercenary']
    },
    {
      trophyName: 'goliath',
      x: 5,
      y: 1,
      parents: ['vengeance', 'farmer']
    },
    {
      trophyName: 'rockSurfing',
      x: 3,
      y: 2,
      parents: ['wizard', 'goliath']
    }
  ]
};

export default taliyah1;
