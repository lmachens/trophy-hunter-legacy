const warwick1 = {
  title: 'Path Of Hunger',
  name: 'warwick1',
  championId: 19, // Warwick
  leaves: [
    {
      trophyName: 'theHound',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'myJungle',
      x: 2,
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
      trophyName: 'wolfPack',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'loneWolf',
      x: 1,
      y: 1,
      parents: ['theHound', 'myJungle']
    },
    {
      trophyName: 'dragonSlayer',
      x: 5,
      y: 1,
      parents: ['battery', 'wolfPack']
    },
    {
      trophyName: 'bloodthirst',
      x: 3,
      y: 2,
      parents: ['loneWolf', 'dragonSlayer']
    }
  ]
};

export default warwick1;
