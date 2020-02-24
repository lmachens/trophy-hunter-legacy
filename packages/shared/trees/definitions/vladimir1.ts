const vladimir1 = {
  title: 'Path Of The Crimson Reaper',
  name: 'vladimir1',
  championId: 8,
  leaves: [
    {
      trophyName: 'disruptor',
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
      trophyName: 'theZombie',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theSacrifice',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'battery',
      x: 1,
      y: 1,
      parents: ['disruptor', 'bombardment']
    },
    {
      trophyName: 'dusk',
      x: 5,
      y: 1,
      parents: ['theZombie', 'theSacrifice']
    },
    {
      trophyName: 'flameHorizon',
      x: 3,
      y: 2,
      parents: ['battery', 'dusk']
    }
  ]
};

export default vladimir1;
