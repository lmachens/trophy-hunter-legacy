const pyke1 = {
  title: 'Path Of The Bloodharber Ripper',
  name: 'pyke1',
  championId: 555,
  leaves: [
    {
      trophyName: 'theRoam',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'bloodBrothers',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'radar',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'lightBringer',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'zenithBlade',
      x: 1,
      y: 1,
      parents: ['theRoam', 'bloodBrothers']
    },
    {
      trophyName: 'theWanderer',
      x: 5,
      y: 1,
      parents: ['radar', 'lightBringer']
    },
    {
      trophyName: 'deathFromBelow',
      x: 3,
      y: 2,
      parents: ['zenithBlade', 'theWanderer']
    }
  ]
};

export default pyke1;
