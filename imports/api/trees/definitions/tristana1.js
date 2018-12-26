const tristana1 = {
  title: 'Path Of The Yordle Gunner',
  name: 'tristana1',
  championId: 18, // Tristana
  leaves: [
    {
      trophyName: 'glutton',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'tuorsAxe',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'towerDive',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'david',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'explosive',
      x: 1,
      y: 1,
      parents: ['glutton', 'tuorsAxe']
    },
    {
      trophyName: 'comradeInArms',
      x: 5,
      y: 1,
      parents: ['towerDive', 'david']
    },
    {
      trophyName: 'explosiveCharge',
      x: 3,
      y: 2,
      parents: ['explosive', 'comradeInArms']
    }
  ]
};

export default tristana1;
