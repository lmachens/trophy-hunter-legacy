const jinx1 = {
  title: 'Path Of The Fishbone',
  name: 'jinx1',
  championId: 222, // Jinx
  leaves: [
    {
      trophyName: 'godlike',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'comradeInArms',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'landlord',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'enrage',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'david',
      x: 1,
      y: 1,
      parents: ['godlike', 'comradeInArms']
    },
    {
      trophyName: 'quadraKill',
      x: 5,
      y: 1,
      parents: ['landlord', 'enrage']
    },
    {
      trophyName: 'silverBullets',
      x: 3,
      y: 2,
      parents: ['david', 'quadraKill']
    }
  ]
};

export default jinx1;
