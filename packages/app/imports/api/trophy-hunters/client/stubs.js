import { Match, check } from 'meteor/check';

import { Meteor } from 'meteor/meteor';
import TrophyHunters from '/imports/api/trophy-hunters/trophyHunters';
import items from '/imports/api/items/items';

Meteor.methods({
  unlockItem(itemName, details) {
    this.unblock();
    check(itemName, String);
    check(details, Match.Maybe(Object));

    // Make sure the user is logged in
    const userId = Meteor.userId();
    if (!userId) {
      throw new Meteor.Error('not-authorized');
    }

    const trophyHunter = TrophyHunters.findOne({ userId });
    if (!trophyHunter) {
      throw new Meteor.Error('Trophy hunter not found');
    }

    const item = items.find(i => i.name === itemName);
    if (!item) {
      throw new Meteor.Error('Item not found');
    }

    const purchased = trophyHunter.items[itemName];

    if (!purchased && item.trophyPoints < 0 && trophyHunter.trophyPoints < item.trophyPoints * -1) {
      throw new Meteor.Error('Not enough trophy points');
    }

    details.timestamp = new Date();

    const set = {
      [`items.${itemName}`]: details
    };
    if (!purchased) {
      set.trophyPoints = trophyHunter.trophyPoints + item.trophyPoints;
    }
    TrophyHunters.update(trophyHunter._id, {
      $set: set
    });
    return true;
  }
});
