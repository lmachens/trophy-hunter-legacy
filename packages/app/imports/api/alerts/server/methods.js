import { Meteor } from 'meteor/meteor';
import alerts from '../alerts';
import { check } from 'meteor/check';

Meteor.methods({
  sendToDiscord(message) {
    check(message, Object);
    alerts.sendToDiscord(message);
  }
});
