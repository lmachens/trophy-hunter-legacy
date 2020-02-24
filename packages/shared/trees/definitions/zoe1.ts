const zoe1 = {
  title: 'Path Of The Aspect Of Twilight',
  name: 'zoe1',
  championId: 142,
  leaves: [
    {
      trophyName: 'assassinsCreed',
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
      trophyName: 'wizard',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'maniac',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'thePiranha',
      x: 1,
      y: 1,
      parents: ['assassinsCreed', 'trophyHunter']
    },
    {
      trophyName: 'neutralizer',
      x: 5,
      y: 1,
      parents: ['wizard', 'maniac']
    },
    {
      trophyName: 'bombardment',
      x: 3,
      y: 2,
      parents: ['thePiranha', 'neutralizer']
    }
  ]
};

export default zoe1;
