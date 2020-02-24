import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import TimestampedCollection from '../timestampedCollection';

const Notifications = new TimestampedCollection('Notifications');

// Deny all client-side updates since we will be using methods to manage this collection
Notifications.deny({
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

export const notificationTypes = {
  MATCH_ANALYSED: 'matchAnalysed',
  NEW_FOLLOWER: 'newFollower',
  STREAM_ONLINE: 'streamOnline',
  TREE_COMPLETE: 'treeComplete',
  MATCH_NOT_SUPPORTED: 'matchNotSupported',
  MATCH_MINIMUM_DURATION_NOT_REACHED: 'matchMinimumDurationNotReached',
  NEW_PLAYSTYLE: 'newPlaystyle',
  LOTTERY_WIN: 'lotteryWin',
  LOTTERY_LOSS: 'lotteryLoss'
};

Notifications.schema = new SimpleSchema({
  _id: { type: String, regEx: SimpleSchema.RegEx.Id },
  userId: { type: String, regEx: SimpleSchema.RegEx.Id },
  important: { type: Boolean, defaultValue: false },
  read: { type: Boolean, defaultValue: false },
  type: {
    type: String,
    allowedValues: notificationTypes
  },
  data: { type: { Object }, blackbox: true },
  createdAt: { type: Date },
  updatedAt: { type: Date }
});

Notifications.attachSchema(Notifications.schema);

Notifications.publicFields = {
  userId: 1,
  read: 1,
  type: 1,
  data: 1,
  createdAt: 1
};

if (Meteor.isServer) {
  const rawCollection = Notifications.rawCollection();
  rawCollection.createIndex({ userId: 1, createdAt: 1 }, { background: true });
}

export default Notifications;
