const nocturne1 = {
  title: 'Path Of The Eternal Nightmare',
  name: 'nocturne1',
  championId: 56, // Nocturne
  leaves: [
    {
      trophyName: 'firstBlood',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'unleashThePower',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'lunatic',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'trophyHunter',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theGoblin',
      x: 1,
      y: 1,
      parents: ['firstBlood', 'unleashThePower']
    },
    {
      trophyName: 'darkBinding',
      x: 5,
      y: 1,
      parents: ['lunatic', 'trophyHunter']
    },
    {
      trophyName: 'soulHarvest',
      x: 3,
      y: 2,
      parents: ['theGoblin', 'darkBinding']
    }
  ]
};

export default nocturne1;
