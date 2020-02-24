const kayle1 = {
  title: 'Path Of The Judicator',
  name: 'kayle1',
  championId: 10, // Kha'Zix
  leaves: [
    {
      trophyName: 'siegeRam',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'flameHorizon',
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
      trophyName: 'machete',
      x: 1,
      y: 1,
      parents: ['siegeRam', 'flameHorizon']
    },
    {
      trophyName: 'billGates',
      x: 5,
      y: 1,
      parents: ['chaliceOfRecovery', 'keyTargets']
    },
    {
      trophyName: 'rejuvenation',
      x: 3,
      y: 2,
      parents: ['machete', 'billGates']
    }
  ]
};

export default kayle1;
