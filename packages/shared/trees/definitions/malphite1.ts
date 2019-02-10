const malphite1 = {
  title: 'Path Of The Monolith Shard',
  name: 'malphite1',
  championId: 54,
  leaves: [
    {
      trophyName: 'theBull',
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
      trophyName: 'unleashThePower',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'quadraAssist',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'thornmail',
      x: 1,
      y: 1,
      parents: ['theBull', 'towerDive']
    },
    {
      trophyName: 'theElephant',
      x: 5,
      y: 1,
      parents: ['unleashThePower', 'quadraAssist']
    },
    {
      trophyName: 'rockSolid',
      x: 3,
      y: 2,
      parents: ['thornmail', 'theElephant']
    }
  ]
};

export default malphite1;
