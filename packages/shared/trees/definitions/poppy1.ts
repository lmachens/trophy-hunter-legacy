const poppy1 = {
  title: 'Path Of The Keeper Of The Hammer',
  name: 'poppy1',
  championId: 78,
  leaves: [
    {
      trophyName: 'dominating',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theGriffin',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'lunatic',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'quadraKill',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'dwarfKing',
      x: 1,
      y: 1,
      parents: ['dominating', 'theGriffin']
    },
    {
      trophyName: 'controller',
      x: 5,
      y: 1,
      parents: ['lunatic', 'quadraKill']
    },
    {
      trophyName: 'machete',
      x: 3,
      y: 2,
      parents: ['dwarfKing', 'controller']
    }
  ]
};

export default poppy1;
