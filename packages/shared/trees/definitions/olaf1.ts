const olaf1 = {
  title: 'Path Of The Viking',
  name: 'olaf1',
  championId: 2,
  leaves: [
    {
      trophyName: 'myJungle',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'dusk',
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
      trophyName: 'cursedGrounds',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'comradeInArms',
      x: 1,
      y: 1,
      parents: ['myJungle', 'dusk']
    },
    {
      trophyName: 'theCougar',
      x: 5,
      y: 1,
      parents: ['stomp', 'cursedGrounds']
    },
    {
      trophyName: 'theViking',
      x: 3,
      y: 2,
      parents: ['comradeInArms', 'theCougar']
    }
  ]
};

export default olaf1;
