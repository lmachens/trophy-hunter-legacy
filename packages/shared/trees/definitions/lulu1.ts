const lulu1 = {
  title: 'Path Of The Far Sorceress',
  name: 'lulu1',
  championId: 117,
  leaves: [
    {
      trophyName: 'bloodBrothers',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theHound',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'octopus',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'greyEminence',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'lightBringer',
      x: 1,
      y: 1,
      parents: ['bloodBrothers', 'theHound']
    },
    {
      trophyName: 'nurturing',
      x: 5,
      y: 1,
      parents: ['octopus', 'greyEminence']
    },
    {
      trophyName: 'mafiaBoss',
      x: 3,
      y: 2,
      parents: ['lightBringer', 'nurturing']
    }
  ]
};

export default lulu1;
