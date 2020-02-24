const swain1 = {
  title: 'Path Of The Master Tactician',
  name: 'swain1',
  championId: 50,
  leaves: [
    {
      trophyName: 'unleashThePower',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'quadraAssist',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'shockwave',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'skullHunter',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'loneWolf',
      x: 1,
      y: 1,
      parents: ['unleashThePower', 'quadraAssist']
    },
    {
      trophyName: 'glutton',
      x: 5,
      y: 1,
      parents: ['shockwave', 'skullHunter']
    },
    {
      trophyName: 'battery',
      x: 3,
      y: 2,
      parents: ['loneWolf', 'glutton']
    }
  ]
};

export default swain1;
