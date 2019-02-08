const xerath1 = {
  title: 'Path Of The Magus Ascendant',
  name: 'xerath1',
  championId: 101,
  leaves: [
    {
      trophyName: 'kitchenKnife',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'feedThem',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'dusk',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'energized',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'glassCannon',
      x: 1,
      y: 1,
      parents: ['kitchenKnife', 'feedThem']
    },
    {
      trophyName: 'flail',
      x: 5,
      y: 1,
      parents: ['dusk', 'energized']
    },
    {
      trophyName: 'thePiranha',
      x: 3,
      y: 2,
      parents: ['glassCannon', 'flail']
    }
  ]
};

export default xerath1;
