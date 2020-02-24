const riven1 = {
  title: 'Path Of The Exile',
  name: 'riven1',
  championId: 92, // Riven
  leaves: [
    {
      trophyName: 'firstBlood',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'unleashThePower',
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
      trophyName: 'theSpartan',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theViking',
      x: 1,
      y: 1,
      parents: ['firstBlood', 'unleashThePower']
    },
    {
      trophyName: 'silverBullets',
      x: 5,
      y: 1,
      parents: ['bullying', 'theSpartan']
    },
    {
      trophyName: 'shockwave',
      x: 3,
      y: 2,
      parents: ['theViking', 'silverBullets']
    }
  ]
};

export default riven1;
