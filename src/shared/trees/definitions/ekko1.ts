const ekko1 = {
  title: 'Path Of The Boy Who Shattered Time',
  name: 'ekko1',
  championId: 245, // Ekko
  leaves: [
    {
      trophyName: 'wizard',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'trophyHunter',
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
      trophyName: 'snowball',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'energized',
      x: 1,
      y: 1,
      parents: ['wizard', 'trophyHunter']
    },
    {
      trophyName: 'duelist',
      x: 5,
      y: 1,
      parents: ['stomp', 'snowball']
    },
    {
      trophyName: 'towerDive',
      x: 3,
      y: 2,
      parents: ['energized', 'duelist']
    }
  ]
};

export default ekko1;
