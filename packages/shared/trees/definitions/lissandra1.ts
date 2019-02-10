const lissandra1 = {
  title: 'Path Of The Ice Witch',
  name: 'lissandra1',
  championId: 127,
  leaves: [
    {
      trophyName: 'unleashThePower',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'mercenary',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'noxianArmy',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'shockwave',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theElephant',
      x: 1,
      y: 1,
      parents: ['unleashThePower', 'mercenary']
    },
    {
      trophyName: 'keyTargets',
      x: 5,
      y: 1,
      parents: ['noxianArmy', 'shockwave']
    },
    {
      trophyName: 'revenge',
      x: 3,
      y: 2,
      parents: ['theElephant', 'keyTargets']
    }
  ]
};

export default lissandra1;
