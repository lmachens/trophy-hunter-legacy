const graves1 = {
  title: 'Path Of The Outlaw',
  name: 'graves1',
  championId: 104,
  leaves: [
    {
      trophyName: 'annihilation',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'revenge',
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
      trophyName: 'vengeance',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'thorsHammer',
      x: 1,
      y: 1,
      parents: ['annihilation', 'revenge']
    },
    {
      trophyName: 'theSheriff',
      x: 5,
      y: 1,
      parents: ['towerDive', 'vengeance']
    },
    {
      trophyName: 'curtainCall',
      x: 3,
      y: 2,
      parents: ['thorsHammer', 'theSheriff']
    }
  ]
};

export default graves1;
