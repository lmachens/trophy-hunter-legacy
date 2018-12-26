const kaisa1 = {
  title: 'Path Of The Void Daughter',
  name: 'kaisa1',
  championId: 145,
  leaves: [
    {
      trophyName: 'david',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'grimReaper',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'landlord',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'livingArtillery',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theFinalHour',
      x: 1,
      y: 1,
      parents: ['david', 'grimReaper']
    },
    {
      trophyName: 'glutton',
      x: 5,
      y: 1,
      parents: ['landlord', 'livingArtillery']
    },
    {
      trophyName: 'bombardment',
      x: 3,
      y: 2,
      parents: ['theFinalHour', 'glutton']
    }
  ]
};

export default kaisa1;
