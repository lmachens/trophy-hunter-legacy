const kennen1 = {
  title: 'Path Of The Heart Of The Tempest',
  name: 'kennen1',
  championId: 85,
  leaves: [
    {
      trophyName: 'assassinsCreed',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'careful',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'deepSea',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'dusk',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'explosive',
      x: 1,
      y: 1,
      parents: ['assassinsCreed', 'careful']
    },
    {
      trophyName: 'hardHitter',
      x: 5,
      y: 1,
      parents: ['deepSea', 'dusk']
    },
    {
      trophyName: 'rivalry',
      x: 3,
      y: 2,
      parents: ['explosive', 'hardHitter']
    }
  ]
};

export default kennen1;
