const aurelionSol1 = {
  title: 'Path Of The Star Forger',
  name: 'aurelionSol1',
  championId: 136,
  leaves: [
    {
      trophyName: 'baronNashor',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'hextechLord',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'unleashThePower',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'flameHorizon',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'damageDealer',
      x: 1,
      y: 1,
      parents: ['baronNashor', 'hextechLord']
    },
    {
      trophyName: 'trophyHunter',
      x: 5,
      y: 1,
      parents: ['unleashThePower', 'flameHorizon']
    },
    {
      trophyName: 'billGates',
      x: 3,
      y: 2,
      parents: ['damageDealer', 'trophyHunter']
    }
  ]
};

export default aurelionSol1;
