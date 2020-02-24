const sion1 = {
  title: 'Path Of The Undead Juggernaut',
  name: 'sion1',
  championId: 14,
  leaves: [
    {
      trophyName: 'theZombie',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'skullHunter',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'disruptor',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'giantsBelt',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theBull',
      x: 1,
      y: 1,
      parents: ['theZombie', 'skullHunter']
    },
    {
      trophyName: 'goliath',
      x: 5,
      y: 1,
      parents: ['disruptor', 'giantsBelt']
    },
    {
      trophyName: 'sai',
      x: 3,
      y: 2,
      parents: ['theBull', 'goliath']
    }
  ]
};

export default sion1;
