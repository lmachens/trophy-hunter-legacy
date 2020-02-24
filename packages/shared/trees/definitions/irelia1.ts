const irelia1 = {
  title: 'Path Of The Spinning Blades',
  name: 'irelia1',
  championId: 39, // Gnar
  leaves: [
    {
      trophyName: 'precision',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'duelist',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'trinityForce',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'silverBullets',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theSpartan',
      x: 1,
      y: 1,
      parents: ['precision', 'duelist']
    },
    {
      trophyName: 'tripleKill',
      x: 5,
      y: 1,
      parents: ['trinityForce', 'silverBullets']
    },
    {
      trophyName: 'spinningBlades',
      x: 3,
      y: 2,
      parents: ['theSpartan', 'tripleKill']
    }
  ]
};

export default irelia1;
