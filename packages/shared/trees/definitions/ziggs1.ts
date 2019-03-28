const ziggs1 = {
  title: 'Path Of The Hexplosives Expert',
  name: 'ziggs1',
  championId: 115,
  leaves: [
    {
      trophyName: 'kitchenKnife',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'maniac',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'carryMode',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'energized',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'hextechLord',
      x: 1,
      y: 1,
      parents: ['kitchenKnife', 'maniac']
    },
    {
      trophyName: 'legendary',
      x: 5,
      y: 1,
      parents: ['carryMode', 'energized']
    },
    {
      trophyName: 'quadraKill',
      x: 3,
      y: 2,
      parents: ['hextechLord', 'legendary']
    }
  ]
};

export default ziggs1;
