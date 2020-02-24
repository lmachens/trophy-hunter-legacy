import TrophyHunters from '../../trophyHunters';
import { check } from 'meteor/check';

const getTrophyHunterByName = function(name) {
  check(name, String);
  this.unblock();

  return TrophyHunters.find(
    {
      summonerName: new RegExp(name, 'ig')
    },
    {
      fields: { userId: 1, summonerName: 1, region: 1 },
      limit: 5
    }
  )
    .fetch()
    .map(({ userId, summonerName, region }) => ({
      userId,
      fullName: `${summonerName} (${region})`
    }));
};

export { getTrophyHunterByName };
