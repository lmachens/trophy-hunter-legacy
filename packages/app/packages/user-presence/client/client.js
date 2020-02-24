import throttle from 'lodash.throttle';

/* globals Tracker, UserPresence */

UserPresence = {
  awayTime: 60000, //1 minute
  status: null,
  timer: null,

  startTimer: function() {
    UserPresence.stopTimer();
    this.timer = setTimeout(UserPresence.setAway, UserPresence.awayTime);
  },
  stopTimer: function() {
    clearTimeout(this.timer);
  },
  setAway: function() {
    if (this.status !== 'away') {
      this.status = 'away';
      Meteor.call('UserPresence:away');
    }
    UserPresence.stopTimer();
  },
  setOnline: throttle(() => {
    if (this.status !== 'online') {
      this.status = 'online';
      Meteor.call('UserPresence:online');
    }
    UserPresence.startTimer();
  }, 2000),
  start: function(collection) {
    console.log('UserPresence started');

    UserPresence.collection = collection;
    Tracker.autorun(() => {
      var user;
      const userId = Meteor.userId();
      if (userId) {
        user = UserPresence.collection.findOne({ userId }, { fields: { statusConnection: 1 } });
      }
      this.status = user && user.statusConnection;
      UserPresence.startTimer();
    });

    Meteor.methods({
      'UserPresence:setDefaultStatus': function(defaultStatus) {
        if (this.userId) {
          UserPresence.collection.update(
            { userId: this.userId },
            { $set: { status: defaultStatus, statusDefault: defaultStatus } }
          );
        }
      },
      'UserPresence:online': function() {
        var user;
        if (this.userId) {
          user = UserPresence.collection.findOne({ userId: this.userId });
          if (user && user.statusDefault === 'online') {
            UserPresence.collection.update({ userId: this.userId }, { $set: { status: 'online' } });
          }
        }
      },
      'UserPresence:away': function() {
        var user;
        if (this.userId) {
          user = UserPresence.collection.findOne({ userId: this.userId });
          if (user && user.statusDefault === 'online') {
            UserPresence.collection.update({ userId: this.userId }, { $set: { status: 'away' } });
          }
        }
      }
    });
  }
};
