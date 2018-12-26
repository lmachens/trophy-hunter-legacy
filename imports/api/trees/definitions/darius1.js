const darius1 = {
  title: 'Path Of Iron',
  name: 'darius1',
  championId: 122, // Darius
  leaves: [
    {
      trophyName: 'clothArmor',
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
      trophyName: 'siegeRam',
      x: 1,
      y: 1,
      parents: ['clothArmor', 'mercenary']
    },
    {
      trophyName: 'farmer',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'battery',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'goliath',
      x: 5,
      y: 1,
      parents: ['farmer', 'battery']
    },
    {
      trophyName: 'noxianArmy',
      x: 3,
      y: 2,
      parents: ['siegeRam', 'goliath']
    }
  ]
};

export default darius1;
