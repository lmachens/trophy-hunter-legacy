const diana1 = {
  title: 'Path Of The Scorn Of The Moon',
  name: 'diana1',
  championId: 131,
  leaves: [
    {
      trophyName: 'theGoblin',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'firstBlood',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'zenithBlade',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theSpartan',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'revenge',
      x: 1,
      y: 1,
      parents: ['theGoblin', 'firstBlood']
    },
    {
      trophyName: 'dominating',
      x: 5,
      y: 1,
      parents: ['zenithBlade', 'theSpartan']
    },
    {
      trophyName: 'carryMode',
      x: 3,
      y: 2,
      parents: ['revenge', 'dominating']
    }
  ]
};

export default diana1;
