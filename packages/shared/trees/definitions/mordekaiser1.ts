const mordekaiser1 = {
  title: 'Path Of The Iron Revenant',
  name: 'mordekaiser1',
  championId: 82,
  leaves: [
    {
      trophyName: 'bloodBrothers',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theDragonMaster',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'stomp',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'theBull',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'baronNashor',
      x: 1,
      y: 1,
      parents: ['bloodBrothers', 'theDragonMaster']
    },
    {
      trophyName: 'demolitionPear',
      x: 5,
      y: 1,
      parents: ['stomp', 'theBull']
    },
    {
      trophyName: 'revenantOfTheKaiser',
      x: 3,
      y: 2,
      parents: ['baronNashor', 'demolitionPear']
    }
  ]
};

export default mordekaiser1;
