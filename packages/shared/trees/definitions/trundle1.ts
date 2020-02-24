const trundle1 = {
  title: 'Path Of The Frost Troll King',
  name: 'trundle1',
  championId: 48,
  leaves: [
    {
      trophyName: 'myJungle',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'watcher',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'dragonSlayer',
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
      trophyName: 'zenithBlade',
      x: 1,
      y: 1,
      parents: ['myJungle', 'watcher']
    },
    {
      trophyName: 'cursedGrounds',
      x: 5,
      y: 1,
      parents: ['dragonSlayer', 'clothArmor']
    },
    {
      trophyName: 'theCougar',
      x: 3,
      y: 2,
      parents: ['zenithBlade', 'cursedGrounds']
    }
  ]
};

export default trundle1;
