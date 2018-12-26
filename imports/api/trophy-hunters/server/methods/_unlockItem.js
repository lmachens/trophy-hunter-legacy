import { Match, check } from 'meteor/check';
import { addReferrer } from './_addReferrer';

import { Meteor } from 'meteor/meteor';
import TrophyHunters from '../../trophyHunters';
import { addFeedback } from './_addFeedback';
import items from '../../../items/items';

const unlockItem = function(itemName, details = {}, targetUserId) {
  this.unblock();
  check(itemName, String);
  check(details, Object);
  check(targetUserId, Match.Maybe(String));

  // Make sure the user is logged in
  const userId = targetUserId || Meteor.userId();
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

  const purchased = trophyHunter.items[itemName] || trophyHunter.items[`${itemName}Purchased`];

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

  if (itemName === 'feedback') {
    addFeedback(details, trophyHunter);
  }
  if (itemName === 'referrer') {
    const { category, details: referrerUserId } = details;
    if (category === 'trophyHunter') {
      addReferrer(referrerUserId);
    }
  }
  return true;
};

export { unlockItem };
