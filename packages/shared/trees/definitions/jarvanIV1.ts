const jarvanIV1 = {
  title: 'Path Of The Exemplar Of Demacia',
  name: 'jarvanIV1',
  championId: 59,
  leaves: [
    {
      trophyName: 'sheepHunter',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'noxianKnight',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'siegeMaster',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'earlyBird',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'wujuStyle',
      x: 1,
      y: 1,
      parents: ['sheepHunter', 'noxianKnight']
    },
    {
      trophyName: 'feedThem',
      x: 5,
      y: 1,
      parents: ['siegeMaster', 'earlyBird']
    },
    {
      trophyName: 'dragonSlayer',
      x: 3,
      y: 2,
      parents: ['wujuStyle', 'feedThem']
    }
  ]
};

export default jarvanIV1;
