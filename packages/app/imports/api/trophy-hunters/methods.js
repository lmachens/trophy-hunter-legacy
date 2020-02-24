import { Match, check } from 'meteor/check';

import { Meteor } from 'meteor/meteor';
import TrophyHunters from '/imports/api/trophy-hunters/trophyHunters';

Meteor.methods({
  updateSettings(field, value) {
    this.unblock();

    check(field, String);
    check(value, Match.OneOf(Boolean));

    const userId = Meteor.userId();
    if (!userId) {
      throw new Meteor.Error('not-authorized');
    }
    const update = {};
    if (!value) {
      update.$set = {
        [`settings.${field}`]: true
      };
    } else {
      update.$unset = {
        [`settings.${field}`]: true
      };
    }

    return TrophyHunters.update(
      {
        userId
      },
      update
    );
  },
  changeCustomTree(treeName) {
    this.unblock();
    check(treeName, String);

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
        customTree: treeName
      }
    });
  }
});
