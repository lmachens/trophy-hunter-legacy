const xinZhao1 = {
  title: 'Path Of The Seneschal of Demacia',
  name: 'xinZhao1',
  championId: 5,
  leaves: [
    {
      trophyName: 'dusk',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'flameBreathe',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'david',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'controller',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theDragonMaster',
      x: 1,
      y: 1,
      parents: ['dusk', 'flameBreathe']
    },
    {
      trophyName: 'skullHunter',
      x: 5,
      y: 1,
      parents: ['david', 'controller']
    },
    {
      trophyName: 'myJungle',
      x: 3,
      y: 2,
      parents: ['theDragonMaster', 'skullHunter']
    }
  ]
};

export default xinZhao1;
