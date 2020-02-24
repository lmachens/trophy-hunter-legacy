const vi1 = {
  title: 'Path Of The Piltover Enforcer',
  name: 'vi1',
  championId: 254,
  leaves: [
    {
      trophyName: 'dusk',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'towerDive',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'feedThem',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theCougar',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'deepSea',
      x: 1,
      y: 1,
      parents: ['dusk', 'towerDive']
    },
    {
      trophyName: 'stomp',
      x: 5,
      y: 1,
      parents: ['feedThem', 'theCougar']
    },
    {
      trophyName: 'theBear',
      x: 3,
      y: 2,
      parents: ['deepSea', 'stomp']
    }
  ]
};

export default vi1;
