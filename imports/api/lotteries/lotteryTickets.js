import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import TimestampedCollection from '../timestampedCollection';

const LotteryTickets = new TimestampedCollection('LotteryTickets');

LotteryTickets.deny({
  insert() {
    return true;
  },
  update() {
    return true;
  },
  remove() {
    return true;
  }
});

LotteryTickets.schema = new SimpleSchema({
  userId: { type: String, regEx: SimpleSchema.RegEx.Id },
  lotteryId: { type: String, regEx: SimpleSchema.RegEx.Id },
  amount: { type: Number, defaultValue: 0 },
  createdAt: { type: Date },
  updatedAt: { type: Date }
});

LotteryTickets.attachSchema(LotteryTickets.schema);

if (Meteor.isServer) {
  const rawCollection = LotteryTickets.rawCollection();
  rawCollection.createIndex(
    {
      userId: 1,
      lotteryId: 1
    },
    { background: true }
  );
}

export default LotteryTickets;
