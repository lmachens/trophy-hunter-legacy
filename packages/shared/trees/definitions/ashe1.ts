const ashe1 = {
  title: 'Path Of The Frost Archer',
  name: 'ashe1',
  championId: 22,
  leaves: [
    {
      trophyName: 'siegeRam',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'david',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'trophyHunter',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'tripleKill',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'deadlyVenom',
      x: 1,
      y: 1,
      parents: ['siegeRam', 'david']
    },
    {
      trophyName: 'theBee',
      x: 5,
      y: 1,
      parents: ['trophyHunter', 'tripleKill']
    },
    {
      trophyName: 'glassCannon',
      x: 3,
      y: 2,
      parents: ['deadlyVenom', 'theBee']
    }
  ]
};

export default ashe1;
