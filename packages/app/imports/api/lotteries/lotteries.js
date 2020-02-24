import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import TimestampedCollection from '../timestampedCollection';

const Lotteries = new TimestampedCollection('Lotteries');

Lotteries.deny({
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

export const LOTTERY_TYPES = {
  RP_CODE_10: 'RP_CODE_10'
};

export const prices = {
  [LOTTERY_TYPES.RP_CODE_10]: '$10 RP Codes'
};

Lotteries.schema = new SimpleSchema({
  active: { type: Boolean },
  drawingAt: { type: Date },
  drawn: { type: Boolean, defaultValue: false },
  prices: { type: Array },
  'prices.$': { type: Object },
  'prices.$.type': { type: String, allowedValues: [LOTTERY_TYPES.RP_CODE_10] },
  'prices.$.value': { type: String },
  'prices.$.winner': { type: Object, optional: true },
  'prices.$.winner.userId': { type: String, regEx: SimpleSchema.RegEx.Id, optional: true },
  'prices.$.winner.summonerName': { type: String },
  'prices.$.winner.region': { type: String },
  'prices.$.redeemed': { type: Boolean, defaultValue: false },
  pricePerTicket: { type: Number },
  soldTickets: { type: Number, defaultValue: 0 },
  createdAt: { type: Date },
  updatedAt: { type: Date }
});

Lotteries.attachSchema(Lotteries.schema);

if (Meteor.isServer) {
  const rawCollection = Lotteries.rawCollection();
  rawCollection.createIndex(
    {
      drawingAt: 1
    },
    { background: true }
  );
}

export default Lotteries;
