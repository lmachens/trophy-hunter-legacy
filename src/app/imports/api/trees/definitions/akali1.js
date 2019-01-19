const akali1 = {
  title: 'Path Of The Rogue Assassin',
  name: 'akali1',
  championId: 84,
  leaves: [
    {
      trophyName: 'unleashThePower',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'glutton',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'assassinsCreed',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'firstBlood',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'deadlyShadow',
      x: 1,
      y: 1,
      parents: ['unleashThePower', 'glutton']
    },
    {
      trophyName: 'overload',
      x: 5,
      y: 1,
      parents: ['assassinsCreed', 'firstBlood']
    },
    {
      trophyName: 'tuorsAxe',
      x: 3,
      y: 2,
      parents: ['deadlyShadow', 'overload']
    }
  ]
};

export default akali1;
