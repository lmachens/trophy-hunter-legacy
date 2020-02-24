const renekton1 = {
  title: 'Path Of The Butcher Of The Sands',
  name: 'renekton1',
  championId: 58,
  leaves: [
    {
      trophyName: 'theViking',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theSpartan',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'goliath',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'bullying',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'clothArmor',
      x: 1,
      y: 1,
      parents: ['theViking', 'theSpartan']
    },
    {
      trophyName: 'duelist',
      x: 5,
      y: 1,
      parents: ['goliath', 'bullying']
    },
    {
      trophyName: 'dominus',
      x: 3,
      y: 2,
      parents: ['clothArmor', 'duelist']
    }
  ]
};

export default renekton1;
