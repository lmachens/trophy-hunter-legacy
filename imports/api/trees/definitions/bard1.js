const bard1 = {
  title: 'Path Of The Wandering Caretaker',
  name: 'bard1',
  championId: 432, // Bard
  leaves: [
    {
      trophyName: 'david',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'greyEminence',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'radar',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'invade',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'lightBringer',
      x: 1,
      y: 1,
      parents: ['david', 'greyEminence']
    },
    {
      trophyName: 'neutralizer',
      x: 5,
      y: 1,
      parents: ['radar', 'invade']
    },
    {
      trophyName: 'theWanderer',
      x: 3,
      y: 2,
      parents: ['lightBringer', 'neutralizer']
    }
  ]
};

export default bard1;
