const skarner1 = {
  title: 'Path Of The Crystal Vanguard',
  name: 'skarner1',
  championId: 72,
  leaves: [
    {
      trophyName: 'theGriffin',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theHound',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theDragonMaster',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'cursedGrounds',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'baronNashor',
      x: 1,
      y: 1,
      parents: ['theGriffin', 'theHound']
    },
    {
      trophyName: 'theGoblin',
      x: 5,
      y: 1,
      parents: ['theDragonMaster', 'cursedGrounds']
    },
    {
      trophyName: 'unleashThePower',
      x: 3,
      y: 2,
      parents: ['baronNashor', 'theGoblin']
    }
  ]
};

export default skarner1;
