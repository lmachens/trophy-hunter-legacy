const corki1 = {
  title: 'Path Of The Daring Bombardier',
  name: 'corki1',
  championId: 42, // Corki
  leaves: [
    {
      trophyName: 'farmer',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theGriffin',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'wizard',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'billGates',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theBee',
      x: 1,
      y: 1,
      parents: ['farmer', 'theGriffin']
    },
    {
      trophyName: 'rockSurfing',
      x: 5,
      y: 1,
      parents: ['wizard', 'billGates']
    },
    {
      trophyName: 'trinityForce',
      x: 3,
      y: 2,
      parents: ['theBee', 'rockSurfing']
    }
  ]
};

export default corki1;
