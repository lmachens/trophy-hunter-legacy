const jayce1 = {
  title: 'Path Of The Defender Of Tomorrow',
  name: 'jayce1',
  championId: 126,
  leaves: [
    {
      trophyName: 'explosiveCharge',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'earlyBird',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'precision',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'duelist',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'siegeRam',
      x: 1,
      y: 1,
      parents: ['explosiveCharge', 'earlyBird']
    },
    {
      trophyName: 'noxianArmy',
      x: 5,
      y: 1,
      parents: ['precision', 'duelist']
    },
    {
      trophyName: 'bombardment',
      x: 3,
      y: 2,
      parents: ['siegeRam', 'noxianArmy']
    }
  ]
};

export default jayce1;
