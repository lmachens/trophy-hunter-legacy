const evelynn1 = {
  title: "Path Of The Agony's Embrace",
  name: 'evelynn1',
  championId: 28,
  leaves: [
    {
      trophyName: 'soulHarvest',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'noxianShield',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'tripleAssist',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'thePolice',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'machete',
      x: 1,
      y: 1,
      parents: ['soulHarvest', 'noxianShield']
    },
    {
      trophyName: 'assassinsCreed',
      x: 5,
      y: 1,
      parents: ['tripleAssist', 'thePolice']
    },
    {
      trophyName: 'immortal',
      x: 3,
      y: 2,
      parents: ['machete', 'assassinsCreed']
    }
  ]
};

export default evelynn1;
