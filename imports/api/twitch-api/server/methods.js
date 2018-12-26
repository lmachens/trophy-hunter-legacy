import { Meteor } from 'meteor/meteor';
import TrophyHunters from '/imports/api/trophy-hunters/trophyHunters';
import { check } from 'meteor/check';

Meteor.methods({
  channelClick(userId) {
    this.unblock();
    check(userId, String);
    const trophyHunter = TrophyHunters.findOne({ userId, 'items.twitch': { $exists: true } });
    if (!trophyHunter) {
      throw new Meteor.Error('Trophy hunter not found');
    }

    const update = {};
    if (!trophyHunter.items.twitch.clicks) {
      update.$set = {
        'items.twitch.clicks': 1
      };
    } else {
      update.$inc = {
        'items.twitch.clicks': 1
      };
    }
    return TrophyHunters.update(trophyHunter._id, update);
  }
});
