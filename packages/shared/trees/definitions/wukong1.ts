const wukong1 = {
  title: 'Path Of The Monkey King',
  name: 'wukong1',
  championId: 62,
  leaves: [
    {
      trophyName: 'grimReaper',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'invade',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'locusts',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'omnipresent',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'stomp',
      x: 1,
      y: 1,
      parents: ['grimReaper', 'invade']
    },
    {
      trophyName: 'theFinalHour',
      x: 5,
      y: 1,
      parents: ['locusts', 'omnipresent']
    },
    {
      trophyName: 'pyromania',
      x: 3,
      y: 2,
      parents: ['stomp', 'theFinalHour']
    }
  ]
};

export default wukong1;
