const galio1 = {
  title: 'Path Of The Colossus',
  name: 'galio1',
  championId: 3, // Galio
  leaves: [
    {
      trophyName: 'theGriffin',
      x: 3,
      y: 0,
      parents: []
    },
    {
      trophyName: 'vengeance',
      x: 1,
      y: 1,
      parents: ['theGriffin']
    },
    {
      trophyName: 'neutralizer',
      x: 5,
      y: 1,
      parents: ['theGriffin']
    },
    {
      trophyName: 'thornmail',
      x: 0,
      y: 2,
      parents: ['vengeance']
    },
    {
      trophyName: 'theSheriff',
      x: 2,
      y: 2,
      parents: ['vengeance']
    },
    {
      trophyName: 'theTortoise',
      x: 4,
      y: 2,
      parents: ['neutralizer']
    },
    {
      trophyName: 'thePhoenix',
      x: 6,
      y: 2,
      parents: ['neutralizer']
    }
  ]
};

export default galio1;
