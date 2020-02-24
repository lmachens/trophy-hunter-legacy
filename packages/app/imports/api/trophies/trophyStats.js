import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import TimestampedCollection from '../timestampedCollection';

const TrophyStats = new TimestampedCollection('TrophyStats');

TrophyStats.deny({
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

TrophyStats.schema = new SimpleSchema({
  trophyName: { type: String, unique: true },
  distinctTrophyHunters: { type: Number },
  totalCount: { type: Number },
  frequencyByMapId: { type: Object, blackbox: true, optional: true },
  lastMatch: {
    type: Object,
    blackbox: true,
    optional: true
  },
  createdAt: { type: Date },
  updatedAt: { type: Date }
});

// https://github.com/aldeed/node-simple-schema/issues/157
//TrophyStats.attachSchema(TrophyStats.schema);
if (Meteor.isServer) {
  const rawCollection = TrophyStats.rawCollection();
  rawCollection.createIndex(
    {
      trophyName: 1
    },
    { unique: true, background: true }
  );
}
export default TrophyStats;
