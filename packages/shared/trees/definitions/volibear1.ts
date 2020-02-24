const volibear1 = {
  title: 'Path Of The Thunders Roar',
  name: 'volibear1',
  championId: 106,
  leaves: [
    {
      trophyName: 'giantsBelt',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'battery',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'dragonSlayer',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'jungleOfTraps',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'baronNashor',
      x: 1,
      y: 1,
      parents: ['giantsBelt', 'battery']
    },
    {
      trophyName: 'theDragonMaster',
      x: 5,
      y: 1,
      parents: ['dragonSlayer', 'jungleOfTraps']
    },
    {
      trophyName: 'theBull',
      x: 3,
      y: 2,
      parents: ['baronNashor', 'theDragonMaster']
    }
  ]
};

export default volibear1;
