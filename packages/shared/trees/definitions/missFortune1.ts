const missFortune1 = {
  title: 'Path Of The Bounty Hunter',
  name: 'missFortune1',
  championId: 21,
  leaves: [
    {
      trophyName: 'landlord',
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
      trophyName: 'unleashThePower',
      x: 4,
      y: 0,
      parents: []
    },
    {
      trophyName: 'superiorPosition',
      x: 6,
      y: 0,
      parents: []
    },
    {
      trophyName: 'silverBullets',
      x: 1,
      y: 1,
      parents: ['landlord', 'machete']
    },
    {
      trophyName: 'tripleKill',
      x: 5,
      y: 1,
      parents: ['unleashThePower', 'superiorPosition']
    },
    {
      trophyName: 'shockwave',
      x: 3,
      y: 2,
      parents: ['silverBullets', 'tripleKill']
    }
  ]
};

export default missFortune1;
