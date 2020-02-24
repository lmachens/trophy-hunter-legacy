const anivia1 = {
  title: 'Path Of The Cryophoenix',
  name: 'anivia1',
  championId: 34,
  leaves: [
    {
      trophyName: 'careful',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'damageDealer',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'smartness',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'superiorBrain',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'tornado',
      x: 1,
      y: 1,
      parents: ['careful', 'damageDealer']
    },
    {
      trophyName: 'wizard',
      x: 5,
      y: 1,
      parents: ['smartness', 'superiorBrain']
    },
    {
      trophyName: 'thePhoenix',
      x: 3,
      y: 2,
      parents: ['tornado', 'wizard']
    }
  ]
};

export default anivia1;
