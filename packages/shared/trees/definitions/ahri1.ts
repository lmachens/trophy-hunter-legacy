const ahri1 = {
  title: 'Path Of The Nine-Tailed Fox',
  name: 'ahri1',
  championId: 103,
  leaves: [
    {
      trophyName: 'assassinsCreed',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'tripleKill',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'duelist',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'superiorEquipment',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'overfed',
      x: 1,
      y: 1,
      parents: ['assassinsCreed', 'tripleKill']
    },
    {
      trophyName: 'bullying',
      x: 5,
      y: 1,
      parents: ['duelist', 'superiorEquipment']
    },
    {
      trophyName: 'glassCannon',
      x: 3,
      y: 2,
      parents: ['overfed', 'bullying']
    }
  ]
};

export default ahri1;
