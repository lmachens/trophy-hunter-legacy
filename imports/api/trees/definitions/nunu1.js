const nunu1 = {
  title: 'Path Of Snowballs',
  name: 'nunu1',
  championId: 20,
  leaves: [
    {
      trophyName: 'theDragonMaster',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theElephant',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theGoblin',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'snowball',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'energized',
      x: 1,
      y: 1,
      parents: ['theDragonMaster', 'theElephant']
    },
    {
      trophyName: 'dragonSlayer',
      x: 5,
      y: 1,
      parents: ['theGoblin', 'snowball']
    },
    {
      trophyName: 'intruder',
      x: 3,
      y: 2,
      parents: ['energized', 'dragonSlayer']
    }
  ]
};

export default nunu1;
