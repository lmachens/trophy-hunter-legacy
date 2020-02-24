const talon1 = {
  title: "Path Of The Blade's Shadow",
  name: 'talon1',
  championId: 91,
  leaves: [
    {
      trophyName: 'firstBlood',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'bombardment',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'quadraKill',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'assassinsCreed',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'precision',
      x: 1,
      y: 1,
      parents: ['firstBlood', 'bombardment']
    },
    {
      trophyName: 'lunatic',
      x: 5,
      y: 1,
      parents: ['quadraKill', 'assassinsCreed']
    },
    {
      trophyName: 'thePiranha',
      x: 3,
      y: 2,
      parents: ['precision', 'lunatic']
    }
  ]
};

export default talon1;
