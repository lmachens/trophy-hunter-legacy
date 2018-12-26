const draven1 = {
  title: 'Path Of Draven',
  name: 'draven1',
  championId: 119, // Draven
  leaves: [
    {
      trophyName: 'killerInstinct',
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
      trophyName: 'deadlyVenom',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'hextechLord',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'snowball',
      x: 1,
      y: 1,
      parents: ['killerInstinct', 'firstBlood']
    },
    {
      trophyName: 'glutton',
      x: 5,
      y: 1,
      parents: ['deadlyVenom', 'hextechLord']
    },
    {
      trophyName: 'leagueOfDraven',
      x: 3,
      y: 2,
      parents: ['snowball', 'glutton']
    }
  ]
};

export default draven1;
