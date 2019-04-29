const yasuo1 = {
  title: 'Path Of The Unforgiven',
  name: 'yasuo1',
  championId: 157,
  leaves: [
    {
      trophyName: 'duelist',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theGriffin',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'vengeance',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'doubleKill',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'unleashThePower',
      x: 1,
      y: 1,
      parents: ['duelist', 'theGriffin']
    },
    {
      trophyName: 'pyromania',
      x: 5,
      y: 1,
      parents: ['vengeance', 'doubleKill']
    },
    {
      trophyName: 'noxianArmy',
      x: 3,
      y: 2,
      parents: ['unleashThePower', 'pyromania']
    }
  ]
};

export default yasuo1;
