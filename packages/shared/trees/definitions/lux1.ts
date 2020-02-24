const lux1 = {
  title: 'Path Of The Lady Of Luminosity',
  name: 'lux1',
  championId: 99,
  leaves: [
    {
      trophyName: 'flail',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'david',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'teamPlayer',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'radar',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'annihilation',
      x: 1,
      y: 1,
      parents: ['flail', 'david']
    },
    {
      trophyName: 'lightBringer',
      x: 5,
      y: 1,
      parents: ['teamPlayer', 'radar']
    },
    {
      trophyName: 'superiorBrain',
      x: 3,
      y: 2,
      parents: ['annihilation', 'lightBringer']
    }
  ]
};

export default lux1;
