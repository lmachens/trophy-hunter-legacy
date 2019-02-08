const shyvana1 = {
  title: 'Path Of The Dragon',
  name: 'shyvana1',
  championId: 102, // Shyvana
  leaves: [
    {
      trophyName: 'myJungle',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'skullHunter',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'clothArmor',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'mercenary',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'pyromania',
      x: 1,
      y: 1,
      parents: ['myJungle', 'skullHunter']
    },
    {
      trophyName: 'sigurd',
      x: 5,
      y: 1,
      parents: ['clothArmor', 'mercenary']
    },
    {
      trophyName: 'flameBreathe',
      x: 3,
      y: 2,
      parents: ['pyromania', 'sigurd']
    }
  ]
};

export default shyvana1;
