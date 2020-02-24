const veigar1 = {
  title: 'Path Of The Tiny Master Of Evil',
  name: 'veigar1',
  championId: 45,
  leaves: [
    {
      trophyName: 'chaliceOfRecovery',
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
      trophyName: 'deadlyVenom',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'glutton',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'curtainCall',
      x: 1,
      y: 1,
      parents: ['chaliceOfRecovery', 'bombardment']
    },
    {
      trophyName: 'darkBinding',
      x: 5,
      y: 1,
      parents: ['deadlyVenom', 'glutton']
    },
    {
      trophyName: 'annihilation',
      x: 3,
      y: 2,
      parents: ['curtainCall', 'darkBinding']
    }
  ]
};

export default veigar1;
