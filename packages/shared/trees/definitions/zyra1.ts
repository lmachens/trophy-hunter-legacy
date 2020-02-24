const zyra1 = {
  title: 'Path Of The Rise Of The Thorns',
  name: 'zyra1',
  championId: 143,
  leaves: [
    {
      trophyName: 'comradeInArms',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'flail',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'stomp',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'annihilation',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'teamEffort',
      x: 1,
      y: 1,
      parents: ['comradeInArms', 'flail']
    },
    {
      trophyName: 'superiorBrain',
      x: 5,
      y: 1,
      parents: ['stomp', 'annihilation']
    },
    {
      trophyName: 'nurturing',
      x: 3,
      y: 2,
      parents: ['teamEffort', 'superiorBrain']
    }
  ]
};

export default zyra1;
