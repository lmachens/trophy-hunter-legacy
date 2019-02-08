const rakan1 = {
  title: 'Path Of The Charmer',
  name: 'rakan1',
  championId: 497,
  leaves: [
    {
      trophyName: 'octopus',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'tripleAssist',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'chaliceOfRecovery',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'highSociety',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'nurturing',
      x: 1,
      y: 1,
      parents: ['octopus', 'tripleAssist']
    },
    {
      trophyName: 'wolfPack',
      x: 5,
      y: 1,
      parents: ['chaliceOfRecovery', 'highSociety']
    },
    {
      trophyName: 'ninjas',
      x: 3,
      y: 2,
      parents: ['nurturing', 'wolfPack']
    }
  ]
};

export default rakan1;
