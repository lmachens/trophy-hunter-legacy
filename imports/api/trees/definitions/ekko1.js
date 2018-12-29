const ekko1 = {
  title: 'Path Of The Boy Who Shattered Time',
  name: 'ekko1',
  championId: 245, // Ekko
  leaves: [
    {
      trophyName: 'wizard',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'glutton',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'fullHouse',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'snowball',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'loneWolf',
      x: 1,
      y: 1,
      parents: ['wizard', 'glutton']
    },
    {
      trophyName: 'duelist',
      x: 5,
      y: 1,
      parents: ['fullHouse', 'snowball']
    },
    {
      trophyName: 'glassCannon',
      x: 3,
      y: 2,
      parents: ['loneWolf', 'duelist']
    }
  ]
};

export default ekko1;
