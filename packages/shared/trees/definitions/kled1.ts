const kled1 = {
  title: 'Path Of Skaarl',
  name: 'kled1',
  championId: 240, // Kled
  leaves: [
    {
      trophyName: 'machete',
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
      trophyName: 'theBull',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theGriffin',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'invade',
      x: 1,
      y: 1,
      parents: ['machete', 'firstBlood']
    },
    {
      trophyName: 'skullMedal',
      x: 5,
      y: 1,
      parents: ['theBull', 'theGriffin']
    },
    {
      trophyName: 'revenge',
      x: 3,
      y: 2,
      parents: ['invade', 'skullMedal']
    }
  ]
};

export default kled1;
