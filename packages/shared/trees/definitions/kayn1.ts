const kayn1 = {
  title: 'Path Of The Shadow Reaper',
  name: 'kayn1',
  championId: 141,
  leaves: [
    {
      trophyName: 'firstBlood',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'towerDive',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'bullying',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'tripleKill',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'sai',
      x: 1,
      y: 1,
      parents: ['firstBlood', 'towerDive']
    },
    {
      trophyName: 'bloodthirst',
      x: 5,
      y: 1,
      parents: ['bullying', 'tripleKill']
    },
    {
      trophyName: 'flameBreathe',
      x: 3,
      y: 2,
      parents: ['sai', 'bloodthirst']
    }
  ]
};

export default kayn1;
