import { Meteor } from 'meteor/meteor';
import Notifications from '../notifications';
import { check } from 'meteor/check';

Meteor.methods({
  readNotifications() {
    this.unblock();

    // Make sure the user is logged in
    const userId = Meteor.userId();
    if (!userId) {
      return false;
    }
    return Notifications.update(
      {
        userId,
        read: false
      },
      {
        $set: {
          read: true
        }
      },
      { multi: true }
    );
  },
  removeAllNotifications() {
    this.unblock();

    // Make sure the user is logged in
    const userId = Meteor.userId();
    if (!userId) {
      return false;
    }
    return Notifications.remove({
      userId
    });
  },
  removeNotification(notificationId) {
    this.unblock();
    check(notificationId, String);

    // Make sure the user is logged in
    const userId = Meteor.userId();
    if (!userId) {
      return false;
    }
    return Notifications.remove({
      _id: notificationId,
      userId
    });
  },
  createNotification(type, data) {
    this.unblock();
    check(type, String);
    check(data, Object);

    const userId = Meteor.userId();
    if (!userId) {
      return false;
    }

    return Notifications.insert({
      userId,
      type,
      data,
      read: false
    });
  }
});
