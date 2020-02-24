const fiddlesticks1 = {
  title: 'Path Of The Harbinger Of Doom',
  name: 'fiddlesticks1',
  championId: 9,
  leaves: [
    {
      trophyName: 'feedThem',
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
      trophyName: 'nurturing',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'radar',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'skullHunter',
      x: 1,
      y: 1,
      parents: ['feedThem', 'tripleAssist']
    },
    {
      trophyName: 'theCannon',
      x: 5,
      y: 1,
      parents: ['nurturing', 'radar']
    },
    {
      trophyName: 'theSacrifice',
      x: 3,
      y: 2,
      parents: ['skullHunter', 'theCannon']
    }
  ]
};

export default fiddlesticks1;
