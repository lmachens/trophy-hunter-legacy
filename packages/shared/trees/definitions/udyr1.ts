const udyr1 = {
  title: 'Path Of The Spirit Walker',
  name: 'udyr1',
  championId: 77,
  leaves: [
    {
      trophyName: 'myJungle',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'mudkipsPenta',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'flameBreathe',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'intruder',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'sasquatch',
      x: 1,
      y: 1,
      parents: ['myJungle', 'mudkipsPenta']
    },
    {
      trophyName: 'towerDive',
      x: 5,
      y: 1,
      parents: ['flameBreathe', 'intruder']
    },
    {
      trophyName: 'phoenixStance',
      x: 3,
      y: 2,
      parents: ['sasquatch', 'towerDive']
    }
  ]
};

export default udyr1;
