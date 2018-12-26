import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import TimestampedCollection from '../timestampedCollection';

const SummonerStats = new TimestampedCollection('SummonerStats');

// Deny all client-side updates since we will be using methods to manage this collection
SummonerStats.deny({
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

SummonerStats.schema = new SimpleSchema({
  accountId: { type: Number, unique: true },
  champions: { type: Object, blackbox: true },
  createdAt: { type: Date },
  updatedAt: { type: Date }
});

SummonerStats.attachSchema(SummonerStats.schema);

if (Meteor.isServer) {
  const rawCollection = SummonerStats.rawCollection();
  rawCollection.createIndex({ updatedAt: 1 }, { background: true });
}

export default SummonerStats;
