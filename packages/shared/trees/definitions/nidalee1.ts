const nidalee1 = {
  title: 'Path Of The Cougar',
  name: 'nidalee1',
  championId: 76, // Nidalee
  leaves: [
    {
      trophyName: 'firstBlood',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'myJungle',
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
      trophyName: 'towerDive',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theSacrifice',
      x: 1,
      y: 1,
      parents: ['firstBlood', 'myJungle']
    },
    {
      trophyName: 'bloodthirst',
      x: 5,
      y: 1,
      parents: ['dragonSlayer', 'towerDive']
    },
    {
      trophyName: 'theCougar',
      x: 3,
      y: 2,
      parents: ['theSacrifice', 'bloodthirst']
    }
  ]
};

export default nidalee1;
