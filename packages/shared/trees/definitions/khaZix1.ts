const khaZix1 = {
  title: 'Path Of The Voidreaver',
  name: 'khaZix1',
  championId: 121, // Kha'Zix
  leaves: [
    {
      trophyName: 'killerInstinct',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'assassinsCreed',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'trophyHunter',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'firstBlood',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'lunatic',
      x: 1,
      y: 1,
      parents: ['killerInstinct', 'assassinsCreed']
    },
    {
      trophyName: 'jungleOfTraps',
      x: 5,
      y: 1,
      parents: ['trophyHunter', 'firstBlood']
    },
    {
      trophyName: 'overload',
      x: 3,
      y: 2,
      parents: ['lunatic', 'jungleOfTraps']
    }
  ]
};

export default khaZix1;
