const tahmKench1 = {
  title: 'Path Of The River King',
  name: 'tahmKench1',
  championId: 223,
  leaves: [
    {
      trophyName: 'quadraAssist',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theElephant',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'nurturing',
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
      trophyName: 'greyEminence',
      x: 1,
      y: 1,
      parents: ['quadraAssist', 'theElephant']
    },
    {
      trophyName: 'theWanderer',
      x: 5,
      y: 1,
      parents: ['nurturing', 'radar']
    },
    {
      trophyName: 'deepSea',
      x: 3,
      y: 2,
      parents: ['greyEminence', 'theWanderer']
    }
  ]
};

export default tahmKench1;
