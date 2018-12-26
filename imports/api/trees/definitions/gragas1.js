const gragas1 = {
  title: 'Path Of The Rabble Rouser',
  name: 'gragas1',
  championId: 79,
  leaves: [
    {
      trophyName: 'energized',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'neutralizer',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'battery',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'myJungle',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theHound',
      x: 1,
      y: 1,
      parents: ['energized', 'neutralizer']
    },
    {
      trophyName: 'invade',
      x: 5,
      y: 1,
      parents: ['battery', 'myJungle']
    },
    {
      trophyName: 'overfed',
      x: 3,
      y: 2,
      parents: ['theHound', 'invade']
    }
  ]
};

export default gragas1;
