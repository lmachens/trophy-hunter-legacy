const blitzcrank1 = {
  title: 'Path Of The Great Steam Golem',
  name: 'blitzcrank1',
  championId: 53,
  leaves: [
    {
      trophyName: 'theWanderer',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'controller',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'nurturing',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'radar',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'skullHunter',
      x: 1,
      y: 1,
      parents: ['theWanderer', 'controller']
    },
    {
      trophyName: 'rivalry',
      x: 5,
      y: 1,
      parents: ['nurturing', 'radar']
    },
    {
      trophyName: 'theRoam',
      x: 3,
      y: 2,
      parents: ['skullHunter', 'rivalry']
    }
  ]
};

export default blitzcrank1;
