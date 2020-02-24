const sylas1 = {
  title: 'Path Of The Unshackled',
  name: 'sylas1',
  championId: 517,
  leaves: [
    {
      trophyName: 'unstoppable',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'chaliceOfRecovery',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'overfed',
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
      trophyName: 'demolitionPear',
      x: 1,
      y: 1,
      parents: ['unstoppable', 'chaliceOfRecovery']
    },
    {
      trophyName: 'highSociety',
      x: 5,
      y: 1,
      parents: ['overfed', 'skullHunter']
    },
    {
      trophyName: 'theTiger',
      x: 3,
      y: 2,
      parents: ['demolitionPear', 'highSociety']
    }
  ]
};

export default sylas1;
