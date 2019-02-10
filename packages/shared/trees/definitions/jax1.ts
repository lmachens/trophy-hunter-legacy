const jax1 = {
  title: 'Path Of The Grandmaster',
  name: 'jax1',
  championId: 24,
  leaves: [
    {
      trophyName: 'trophyHunter',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'firstBlood',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'tripleKill',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'clothArmor',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theDragonMaster',
      x: 1,
      y: 1,
      parents: ['trophyHunter', 'firstBlood']
    },
    {
      trophyName: 'assassinsCreed',
      x: 5,
      y: 1,
      parents: ['tripleKill', 'clothArmor']
    },
    {
      trophyName: 'carryMode',
      x: 3,
      y: 2,
      parents: ['theDragonMaster', 'assassinsCreed']
    }
  ]
};

export default jax1;
