const zilean1 = {
  title: 'Path Of The Chronokeeper',
  name: 'zilean1',
  championId: 26,
  leaves: [
    {
      trophyName: 'theElephant',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'lightBringer',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'dusk',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'bloodBrothers',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'bigBrother',
      x: 1,
      y: 1,
      parents: ['theElephant', 'lightBringer']
    },
    {
      trophyName: 'octopus',
      x: 5,
      y: 1,
      parents: ['dusk', 'bloodBrothers']
    },
    {
      trophyName: 'theTortoise',
      x: 3,
      y: 2,
      parents: ['bigBrother', 'octopus']
    }
  ]
};

export default zilean1;
