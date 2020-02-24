import { Meteor } from 'meteor/meteor';
import Notifications from '../notifications';

Meteor.publish('notifications.private', function() {
  const userId = Meteor.userId();
  if (!userId) {
    return this.ready();
  }

  return Notifications.find({ userId }, { limit: 15, sort: { important: -1, createdAt: -1 } });
});
