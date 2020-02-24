const lucian1 = {
  title: 'Path Of The Purifier',
  name: 'lucian1',
  championId: 236,
  leaves: [
    {
      trophyName: 'comradeInArms',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'killerInstinct',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'snowball',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'billGates',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'silverBullets',
      x: 1,
      y: 1,
      parents: ['comradeInArms', 'killerInstinct']
    },
    {
      trophyName: 'lunatic',
      x: 5,
      y: 1,
      parents: ['snowball', 'billGates']
    },
    {
      trophyName: 'explosive',
      x: 3,
      y: 2,
      parents: ['silverBullets', 'lunatic']
    }
  ]
};

export default lucian1;
