const varus1 = {
  title: 'Path Of Retribution',
  name: 'varus1',
  championId: 110, // Varus
  leaves: [
    {
      trophyName: 'farmer',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'explosive',
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
      trophyName: 'explosiveCharge',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'glassCannon',
      x: 1,
      y: 1,
      parents: ['farmer', 'explosive']
    },
    {
      trophyName: 'legendary',
      x: 5,
      y: 1,
      parents: ['deadlyVenom', 'explosiveCharge']
    },
    {
      trophyName: 'precision',
      x: 3,
      y: 2,
      parents: ['glassCannon', 'legendary']
    }
  ]
};

export default varus1;
