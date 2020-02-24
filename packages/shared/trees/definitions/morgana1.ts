const morgana1 = {
  title: 'Path Of The Fallen Angel',
  name: 'morgana1',
  championId: 25, // Morgana
  leaves: [
    {
      trophyName: 'octopus',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'bloodBrothers',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'watcher',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'radar',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'quadraAssist',
      x: 1,
      y: 1,
      parents: ['octopus', 'bloodBrothers']
    },
    {
      trophyName: 'theElephant',
      x: 5,
      y: 1,
      parents: ['watcher', 'radar']
    },
    {
      trophyName: 'darkBinding',
      x: 3,
      y: 2,
      parents: ['quadraAssist', 'theElephant']
    }
  ]
};

export default morgana1;
