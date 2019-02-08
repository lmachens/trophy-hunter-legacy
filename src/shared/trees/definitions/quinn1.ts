const quinn1 = {
  title: 'Path Of Demacias Wings',
  name: 'quinn1',
  championId: 133,
  leaves: [
    {
      trophyName: 'hextechLord',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'snowball',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'silverBullets',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'demolitionPear',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'deadlyVenom',
      x: 1,
      y: 1,
      parents: ['hextechLord', 'snowball']
    },
    {
      trophyName: 'curtainCall',
      x: 5,
      y: 1,
      parents: ['silverBullets', 'demolitionPear']
    },
    {
      trophyName: 'superiorBrain',
      x: 3,
      y: 2,
      parents: ['deadlyVenom', 'curtainCall']
    }
  ]
};

export default quinn1;
