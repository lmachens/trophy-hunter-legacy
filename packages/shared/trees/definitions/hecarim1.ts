const hecarim1 = {
  title: 'Path Of The Shadow Of War',
  name: 'hecarim1',
  championId: 120,
  leaves: [
    {
      trophyName: 'flameBreathe',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'trophyHunter',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'baronNashor',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'sasquatch',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'thePolice',
      x: 1,
      y: 1,
      parents: ['flameBreathe', 'trophyHunter']
    },
    {
      trophyName: 'myJungle',
      x: 5,
      y: 1,
      parents: ['baronNashor', 'sasquatch']
    },
    {
      trophyName: 'phoenixStance',
      x: 3,
      y: 2,
      parents: ['thePolice', 'myJungle']
    }
  ]
};

export default hecarim1;
