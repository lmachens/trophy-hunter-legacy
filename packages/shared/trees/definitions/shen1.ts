const shen1 = {
  title: 'Path Of Twilight',
  name: 'shen1',
  championId: 98, // Shen
  leaves: [
    {
      trophyName: 'bloodBrothers',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'feedThem',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'teamPlayer',
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
      trophyName: 'radar',
      x: 1,
      y: 1,
      parents: ['bloodBrothers', 'feedThem']
    },
    {
      trophyName: 'clothArmor',
      x: 5,
      y: 1,
      parents: ['teamPlayer', 'lightBringer']
    },
    {
      trophyName: 'sai',
      x: 3,
      y: 2,
      parents: ['radar', 'clothArmor']
    }
  ]
};

export default shen1;
