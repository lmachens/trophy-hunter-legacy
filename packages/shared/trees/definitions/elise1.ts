const elise1 = {
  title: 'Path Of The Spider Queen',
  name: 'elise1',
  championId: 60, // Elise
  leaves: [
    {
      trophyName: 'thePolice',
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
      trophyName: 'snowball',
      x: 1,
      y: 1,
      parents: ['thePolice', 'earlyBird']
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
      parents: ['snowball', 'wolfPack']
    }
  ]
};

export default elise1;
