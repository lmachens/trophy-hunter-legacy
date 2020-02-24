const thresh1 = {
  title: 'Path Of Souls',
  name: 'thresh1',
  championId: 412, // Thresh
  leaves: [
    {
      trophyName: 'octopus',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'controller',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'bigBrother',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theElephant',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'bloodBrothers',
      x: 1,
      y: 1,
      parents: ['octopus', 'controller']
    },
    {
      trophyName: 'nurturing',
      x: 5,
      y: 1,
      parents: ['bigBrother', 'theElephant']
    },
    {
      trophyName: 'theRoam',
      x: 3,
      y: 2,
      parents: ['bloodBrothers', 'nurturing']
    }
  ]
};

export default thresh1;
