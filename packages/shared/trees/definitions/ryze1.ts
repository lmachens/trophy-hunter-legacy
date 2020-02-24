const ryze1 = {
  title: 'Path Of The Rune Mage',
  name: 'ryze1',
  championId: 13, // ryze1
  leaves: [
    {
      trophyName: 'rivalry',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theBull',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'wizard',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'hextechLord',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'grimReaper',
      x: 1,
      y: 1,
      parents: ['rivalry', 'theBull']
    },
    {
      trophyName: 'clothArmor',
      x: 5,
      y: 1,
      parents: ['wizard', 'hextechLord']
    },
    {
      trophyName: 'energized',
      x: 3,
      y: 2,
      parents: ['grimReaper', 'clothArmor']
    }
  ]
};

export default ryze1;
