import { Match, check } from 'meteor/check';

import Lotteries from '../lotteries';
import LotteryTickets from '../lotteryTickets';
import { Meteor } from 'meteor/meteor';

Meteor.publish('lotteries', function(lotteryId) {
  check(lotteryId, Match.Maybe(String));

  const query = { active: true };
  if (lotteryId) {
    query._id = lotteryId;
  }
  return Lotteries.find(query, {
    fields: {
      updatedAt: 0,
      createdAt: 0,
      'prices.value': 0,
      'prices.redeemed': 0
    },
    sort: {
      drawingAt: -1
    }
  });
});

Meteor.publish('myLotteryTicket', function(lotteryId) {
  check(lotteryId, String);

  const userId = Meteor.userId();
  if (!userId) {
    return this.ready();
  }
  return LotteryTickets.find({ lotteryId, userId }, { limit: 1 });
});
