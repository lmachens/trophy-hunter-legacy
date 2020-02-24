import Notifications, { notificationTypes } from '../../../notifications/notifications';

import { Meteor } from 'meteor/meteor';
import TrophyHunters from '../../trophyHunters';
import { check } from 'meteor/check';

const toggleFriend = function(friendUserId) {
  this.unblock();
  check(friendUserId, String);

  // Make sure the user is logged in
  const userId = Meteor.userId();
  if (!userId) {
    throw new Meteor.Error('not-authorized');
  }

  const trophyHunter = TrophyHunters.findOne({ userId: friendUserId }, { fields: { _id: 1 } });
  if (!trophyHunter) {
    throw new Meteor.Error('Trophy hunter not found');
  }

  const self = TrophyHunters.findOne({ userId }, { fields: { friends: 1 } });
  const isFriend = self.friends && self.friends.includes(friendUserId);
  if (isFriend) {
    TrophyHunters.update(self._id, {
      $pull: {
        friends: friendUserId
      }
    });
    TrophyHunters.update(trophyHunter._id, {
      $pull: {
        followers: userId
      }
    });
  } else {
    TrophyHunters.update(self._id, {
      $addToSet: {
        friends: friendUserId
      }
    });
    TrophyHunters.update(trophyHunter._id, {
      $addToSet: {
        followers: userId
      }
    });

    Notifications.insert({
      userId: friendUserId,
      read: false,
      type: notificationTypes.NEW_FOLLOWER,
      data: {
        userId
      }
    });
  }
  return true;
};

export { toggleFriend };
