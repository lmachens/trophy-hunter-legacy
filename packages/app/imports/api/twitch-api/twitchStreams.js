import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import TimestampedCollection from '../timestampedCollection';

const TwitchStreams = new TimestampedCollection('TwitchStreams');

// Deny all client-side updates since we will be using methods to manage this collection
TwitchStreams.deny({
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

TwitchStreams.schema = new SimpleSchema({
  _id: { type: String, regEx: SimpleSchema.RegEx.Id },
  stream: { type: Object, blackbox: true },
  trophyHunter: { type: Object, blackbox: true },
  createdAt: { type: Date },
  updatedAt: { type: Date }
});

TwitchStreams.attachSchema(TwitchStreams.schema);

if (Meteor.isServer) {
  const rawCollection = TwitchStreams.rawCollection();
  rawCollection.createIndex(
    {
      'stream._id': 1
    },
    { background: true }
  );
}
export default TwitchStreams;
