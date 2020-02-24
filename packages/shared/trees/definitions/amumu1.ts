const amumu1 = {
  title: 'Path Of The Sad Mummy',
  name: 'amumu1',
  championId: 32,
  leaves: [
    {
      trophyName: 'teamEffort',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'doubleKill',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'myJungle',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'stomp',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theCougar',
      x: 1,
      y: 1,
      parents: ['teamEffort', 'doubleKill']
    },
    {
      trophyName: 'wolfPack',
      x: 5,
      y: 1,
      parents: ['myJungle', 'stomp']
    },
    {
      trophyName: 'towerDive',
      x: 3,
      y: 2,
      parents: ['theCougar', 'wolfPack']
    }
  ]
};

export default amumu1;
