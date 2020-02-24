const choGath1 = {
  title: 'Path Of The Carnivore',
  name: 'choGath1',
  championId: 31, // Chogath
  leaves: [
    {
      trophyName: 'duelist',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'bullying',
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
      trophyName: 'giantsBelt',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'sheepHunter',
      x: 1,
      y: 1,
      parents: ['duelist', 'bullying']
    },
    {
      trophyName: 'clothArmor',
      x: 5,
      y: 1,
      parents: ['goliath', 'giantsBelt']
    },
    {
      trophyName: 'uncounterable',
      x: 3,
      y: 2,
      parents: ['sheepHunter', 'clothArmor']
    }
  ]
};

export default choGath1;
