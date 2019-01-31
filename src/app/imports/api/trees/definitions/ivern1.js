const ivern1 = {
  title: 'Path Of The Green Father',
  name: 'ivern1',
  championId: 427,
  leaves: [
    {
      trophyName: 'myJungle',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'careful',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'highSociety',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theElephant',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'baronNashor',
      x: 1,
      y: 1,
      parents: ['myJungle', 'careful']
    },
    {
      trophyName: 'visionGame',
      x: 5,
      y: 1,
      parents: ['highSociety', 'theElephant']
    },
    {
      trophyName: 'sasquatch',
      x: 3,
      y: 2,
      parents: ['baronNashor', 'visionGame']
    }
  ]
};

export default ivern1;
