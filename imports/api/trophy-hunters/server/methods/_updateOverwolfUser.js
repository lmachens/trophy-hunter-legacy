import { Match, check } from 'meteor/check';

import { Meteor } from 'meteor/meteor';
import TrophyHunters from '../../trophyHunters';

const updateOverwolfUser = function(overwolfUser) {
  this.unblock();
  check(overwolfUser, Match.Maybe(Object));

  // Make sure the user is logged in
  const userId = Meteor.userId();
  if (!userId) {
    throw new Meteor.Error('not-authorized');
  }

  const trophyHunter = TrophyHunters.findOne({ userId });
  if (!trophyHunter) {
    throw new Meteor.Error('Trophy hunter not found');
  }

  return TrophyHunters.update(trophyHunter._id, {
    $set: {
      overwolfUser
    }
  });
};

export { updateOverwolfUser };
