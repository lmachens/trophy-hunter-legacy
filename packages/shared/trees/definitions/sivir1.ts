const sivir1 = {
  title: 'Path Of The Battle Mistress',
  name: 'sivir1',
  championId: 15,
  leaves: [
    {
      trophyName: 'precision',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'machete',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'careful',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'superiorBrain',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'deadlyVenom',
      x: 1,
      y: 1,
      parents: ['precision', 'machete']
    },
    {
      trophyName: 'flameHorizon',
      x: 5,
      y: 1,
      parents: ['careful', 'superiorBrain']
    },
    {
      trophyName: 'landlord',
      x: 3,
      y: 2,
      parents: ['deadlyVenom', 'flameHorizon']
    }
  ]
};

export default sivir1;
