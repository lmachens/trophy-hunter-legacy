const leeSin1 = {
  title: 'Path of the Fists',
  name: 'leeSin1',
  championId: 64, // LeeSin
  leaves: [
    {
      trophyName: 'invade',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'wolfPack',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'chaliceOfRecovery',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'keyTargets',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'assassinsCreed',
      x: 1,
      y: 1,
      parents: ['invade', 'wolfPack']
    },
    {
      trophyName: 'theElephant',
      x: 5,
      y: 1,
      parents: ['chaliceOfRecovery', 'keyTargets']
    },
    {
      trophyName: 'thePirate',
      x: 3,
      y: 2,
      parents: ['assassinsCreed', 'theElephant']
    }
  ]
};

export default leeSin1;
