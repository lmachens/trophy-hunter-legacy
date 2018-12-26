const heimerdinger1 = {
  title: 'Path Of The Revered Inventor',
  name: 'heimerdinger1',
  championId: 74,
  leaves: [
    {
      trophyName: 'duelist',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'firstBlood',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'earlyBird',
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
      trophyName: 'smartness',
      x: 1,
      y: 1,
      parents: ['duelist', 'firstBlood']
    },
    {
      trophyName: 'controller',
      x: 5,
      y: 1,
      parents: ['earlyBird', 'demolitionPear']
    },
    {
      trophyName: 'superiorBrain',
      x: 3,
      y: 2,
      parents: ['smartness', 'controller']
    }
  ]
};

export default heimerdinger1;
