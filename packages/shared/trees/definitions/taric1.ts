const taric1 = {
  title: 'Path Of The Valoran Shield',
  name: 'taric1',
  championId: 44, // Taric
  leaves: [
    {
      trophyName: 'watcher',
      x: 0,
      y: 0,
      parents: []
    },
    {
      trophyName: 'teamEffort',
      x: 2,
      y: 0,
      parents: []
    },
    {
      trophyName: 'octopus',
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
      trophyName: 'quackery',
      x: 1,
      y: 1,
      parents: ['watcher', 'teamEffort']
    },
    {
      trophyName: 'pentaAssist',
      x: 5,
      y: 1,
      parents: ['octopus', 'controller']
    },
    {
      trophyName: 'theGuard',
      x: 3,
      y: 2,
      parents: ['quackery', 'pentaAssist']
    }
  ]
};

export default taric1;
