const illaoi1 = {
  title: 'Path Of The Kraken Priestess',
  name: 'illaoi1',
  championId: 420,
  leaves: [
    {
      trophyName: 'duelist',
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
      trophyName: 'theViking',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theBull',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'tripleKill',
      x: 1,
      y: 1,
      parents: ['duelist', 'firstBlood']
    },
    {
      trophyName: 'flameHorizon',
      x: 5,
      y: 1,
      parents: ['theViking', 'theBull']
    },
    {
      trophyName: 'loneWolf',
      x: 3,
      y: 2,
      parents: ['tripleKill', 'flameHorizon']
    }
  ]
};

export default illaoi1;
