const qiyana1 = {
  title: 'Path Of The Empress Of The Elements',
  name: 'qiyana1',
  championId: 246,
  leaves: [
    {
      trophyName: 'doubleKill',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'livingArtillery',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'quadraKill',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'precision',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'overfed',
      x: 1,
      y: 1,
      parents: ['doubleKill', 'livingArtillery']
    },
    {
      trophyName: 'noxianArmy',
      x: 5,
      y: 1,
      parents: ['quadraKill', 'precision']
    },
    {
      trophyName: 'bullying',
      x: 3,
      y: 2,
      parents: ['overfed', 'noxianArmy']
    }
  ]
};

export default qiyana1;
