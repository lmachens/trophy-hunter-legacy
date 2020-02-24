const zac1 = {
  title: 'Path Of The Secret Weapon',
  name: 'zac1',
  championId: 154,
  leaves: [
    {
      trophyName: 'theHound',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'towerDive',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'baronNashor',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'lastResort',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theGoblin',
      x: 1,
      y: 1,
      parents: ['theHound', 'towerDive']
    },
    {
      trophyName: 'theDragonMaster',
      x: 5,
      y: 1,
      parents: ['baronNashor', 'lastResort']
    },
    {
      trophyName: 'theCat',
      x: 3,
      y: 2,
      parents: ['theGoblin', 'theDragonMaster']
    }
  ]
};

export default zac1;
