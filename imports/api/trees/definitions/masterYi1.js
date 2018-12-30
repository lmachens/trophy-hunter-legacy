const masterYi1 = {
  title: 'Path of the Wuju Bladesman',
  name: 'masterYi1',
  championId: 11, // Master Yi
  leaves: [
    {
      trophyName: 'lastResort',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'cursedGrounds',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'intruder',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'tripleKill',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theDragonMaster',
      x: 1,
      y: 1,
      parents: ['lastResort', 'cursedGrounds']
    },
    {
      trophyName: 'assassinsCreed',
      x: 5,
      y: 1,
      parents: ['intruder', 'tripleKill']
    },
    {
      trophyName: 'thePirate',
      x: 3,
      y: 2,
      parents: ['theDragonMaster', 'assassinsCreed']
    }
  ]
};

export default masterYi1;
