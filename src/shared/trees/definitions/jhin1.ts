const jhin1 = {
  title: 'Path Of The Virtuoso',
  name: 'jhin1',
  championId: 202, // Jhin
  leaves: [
    {
      trophyName: 'david',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'killerInstinct',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'appetizer',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'comradeInArms',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'glassCannon',
      x: 1,
      y: 1,
      parents: ['david', 'killerInstinct']
    },
    {
      trophyName: 'explosive',
      x: 5,
      y: 1,
      parents: ['appetizer', 'comradeInArms']
    },
    {
      trophyName: 'curtainCall',
      x: 3,
      y: 2,
      parents: ['glassCannon', 'explosive']
    }
  ]
};

export default jhin1;
