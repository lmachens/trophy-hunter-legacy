const aatrox1 = {
  title: 'Path Of The Darkin Blade',
  name: 'aatrox1',
  championId: 266,
  leaves: [
    {
      trophyName: 'theViking',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'tripleKill',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'goliath',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'loneWolf',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'overfed',
      x: 1,
      y: 1,
      parents: ['theViking', 'tripleKill']
    },
    {
      trophyName: 'theSpartan',
      x: 5,
      y: 1,
      parents: ['goliath', 'loneWolf']
    },
    {
      trophyName: 'darkinBlade',
      x: 3,
      y: 2,
      parents: ['overfed', 'theSpartan']
    }
  ]
};

export default aatrox1;
