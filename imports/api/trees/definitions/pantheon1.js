const pantheon1 = {
  title: 'Path Of The Spartan',
  name: 'pantheon1',
  championId: 80, // Pantheon
  leaves: [
    {
      trophyName: 'firstBlood',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theViking',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'bullying',
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
      trophyName: 'assassinsCreed',
      x: 1,
      y: 1,
      parents: ['firstBlood', 'theViking']
    },
    {
      trophyName: 'towerDive',
      x: 5,
      y: 1,
      parents: ['bullying', 'snowball']
    },
    {
      trophyName: 'theSpartan',
      x: 3,
      y: 2,
      parents: ['assassinsCreed', 'towerDive']
    }
  ]
};

export default pantheon1;
