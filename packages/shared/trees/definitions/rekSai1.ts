const rekSai1 = {
  title: 'Path Of The Void Burrower',
  name: 'rekSai1',
  championId: 421,
  leaves: [
    {
      trophyName: 'maniac',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theElephant',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'intruder',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'invade',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'trophyHunter',
      x: 1,
      y: 1,
      parents: ['maniac', 'theElephant']
    },
    {
      trophyName: 'demolitionPear',
      x: 5,
      y: 1,
      parents: ['intruder', 'invade']
    },
    {
      trophyName: 'theCat',
      x: 3,
      y: 2,
      parents: ['trophyHunter', 'demolitionPear']
    }
  ]
};

export default rekSai1;
