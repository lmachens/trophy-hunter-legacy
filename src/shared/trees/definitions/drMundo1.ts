const drMundo1 = {
  title: 'Path Of The Madman',
  name: 'drMundo1',
  championId: 36, // Dr Mundo
  leaves: [
    {
      trophyName: 'sheepHunter',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theElephant',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'goliath',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'giantsBelt',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'battery',
      x: 1,
      y: 1,
      parents: ['sheepHunter', 'theElephant']
    },
    {
      trophyName: 'theBull',
      x: 5,
      y: 1,
      parents: ['goliath', 'giantsBelt']
    },
    {
      trophyName: 'lifeAndDeath',
      x: 3,
      y: 2,
      parents: ['battery', 'theBull']
    }
  ]
};

export default drMundo1;
