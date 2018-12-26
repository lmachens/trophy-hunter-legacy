const rengar1 = {
  title: 'Hunters Talisman',
  name: 'rengar1',
  championId: 107, // Rengar
  leaves: [
    {
      trophyName: 'firstBlood',
      x: 1,
      y: 0,
      parents: []
    },
    {
      trophyName: 'dusk',
      x: 3,
      y: 0,
      parents: []
    },
    {
      trophyName: 'hextechLord',
      x: 5,
      y: 0,
      parents: []
    },
    {
      trophyName: 'killerInstinct',
      x: 2,
      y: 1,
      parents: ['firstBlood', 'dusk']
    },
    {
      trophyName: 'theHound',
      x: 4,
      y: 1,
      parents: ['dusk', 'hextechLord']
    },
    {
      trophyName: 'stomp',
      x: 3,
      y: 2,
      parents: ['killerInstinct', 'theHound']
    }
  ]
};

export default rengar1;
