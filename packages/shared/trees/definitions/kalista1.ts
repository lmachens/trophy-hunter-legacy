const kalista1 = {
  title: 'Path Of The Spear Of Vengeance',
  name: 'kalista1',
  championId: 429,
  leaves: [
    {
      trophyName: 'stomp',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'snowball',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'bloodBrothers',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'vengeance',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'earlyBird',
      x: 1,
      y: 1,
      parents: ['stomp', 'snowball']
    },
    {
      trophyName: 'tripleKill',
      x: 5,
      y: 1,
      parents: ['bloodBrothers', 'vengeance']
    },
    {
      trophyName: 'machete',
      x: 3,
      y: 2,
      parents: ['earlyBird', 'tripleKill']
    }
  ]
};

export default kalista1;
