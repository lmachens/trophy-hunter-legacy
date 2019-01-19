/* globals InstanceStatus, UsersSessions, UserPresenceMonitor, UserPresence */

import 'colors';

const rawCollection = UsersSessions.rawCollection();
rawCollection.createIndex(
  { 'connections.instanceId': 1 },
  { sparse: 1, name: 'connections.instanceId' }
);
rawCollection.createIndex({ 'connections.id': 1 }, { sparse: 1, name: 'connections.id' });

var allowedStatus = ['online', 'away', 'ingame'];

var logEnable = false;

var log = function(msg, color) {
  if (logEnable) {
    if (color) {
      console.log(msg[color]);
    } else {
      console.log(msg);
    }
  }
};

var logRed = function() {
  log(Array.prototype.slice.call(arguments).join(' '), 'red');
};
var logGrey = function() {
  log(Array.prototype.slice.call(arguments).join(' '), 'grey');
};
var logGreen = function() {
  log(Array.prototype.slice.call(arguments).join(' '), 'green');
};
var logYellow = function() {
  log(Array.prototype.slice.call(arguments).join(' '), 'yellow');
};

UserPresence = {
  activeLogs: function() {
    logEnable = true;
  },

  removeLostConnections: function() {
    if (Package['lmachens:multiple-instances-status']) {
      var ids = InstanceStatus.getCollection()
        .find({}, { fields: { _id: 1 } })
        .fetch();

      ids = ids.map(function(id) {
        return id._id;
      });

      var update = {
        $pull: {
          connections: {
            instanceId: {
              $nin: ids
            }
          }
        }
      };

      UsersSessions.update({}, update, { multi: true });
    } else {
      UsersSessions.remove({});
    }
  },

  removeConnectionsByInstanceId: function(instanceId) {
    logRed('[user-presence] removeConnectionsByInstanceId', instanceId);
    var update = {
      $pull: {
        connections: {
          instanceId: instanceId
        }
      }
    };

    UsersSessions.update({}, update, { multi: true });
  },

  removeAllConnections: function() {
    logRed('[user-presence] removeAllConnections');
    UsersSessions.remove({});
  },

  startObserveForDeletedServers: function() {
    InstanceStatus.getCollection()
      .find({}, { fields: { _id: 1 } })
      .observeChanges({
        removed: function(id) {
          UserPresence.removeConnectionsByInstanceId(id);
        }
      });
  },

  createConnection: function(userId, connection, status, visitor) {
    // if connections is invalid, does not have an userId or is already closed, don't save it on db
    if (!userId || !connection.id || connection.closed) {
      return;
    }

    connection.UserPresenceUserId = userId;

    status = status || 'online';

    logGreen(
      '[user-presence] createConnection',
      userId,
      connection.id,
      visitor === true ? 'visitor' : 'user'
    );

    var query = {
      _id: userId
    };

    var now = new Date();

    var instanceId = undefined;
    if (Package['lmachens:multiple-instances-status']) {
      instanceId = InstanceStatus.id();
    }

    var update = {
      $set: {
        visitor: visitor === true
      },
      $push: {
        connections: {
          id: connection.id,
          instanceId: instanceId,
          status: status,
          _createdAt: now,
          _updatedAt: now
        }
      }
    };
    try {
      UsersSessions.upsert(query, update);
    } catch (error) {
      UsersSessions.update(query, update);
    }
  },

  setConnection: function(userId, connection, status, visitor) {
    if (!userId) {
      return;
    }

    logGrey(
      '[user-presence] setConnection',
      userId,
      connection.id,
      status,
      visitor === true ? 'visitor' : 'user'
    );

    var query = {
      _id: userId,
      'connections.id': connection.id
    };

    var now = new Date();

    var update = {
      $set: {
        'connections.$.status': status,
        'connections.$._updatedAt': now
      }
    };

    var count = UsersSessions.update(query, update);

    if (count === 0) {
      UserPresence.createConnection(userId, connection, status, visitor);
    }

    if (visitor !== true) {
      if (status === 'online') {
        UserPresence.collection.update(
          { userId: userId, statusDefault: 'online', status: { $ne: 'online' } },
          { $set: { status: 'online' } }
        );
      } else if (status === 'away') {
        UserPresence.collection.update(
          { userId: userId, statusDefault: 'online', status: { $ne: 'away' } },
          { $set: { status: 'away' } }
        );
      }
    }
  },

  setDefaultStatus: function(userId, status) {
    if (!userId) {
      return;
    }

    if (allowedStatus.indexOf(status) === -1) {
      return;
    }

    logYellow('[user-presence] setDefaultStatus', userId, status);

    var update = UserPresence.collection.update(
      { userId: userId, statusDefault: { $ne: status } },
      { $set: { statusDefault: status } }
    );

    if (update > 0) {
      UserPresenceMonitor.processUser(userId, { statusDefault: status });
    }
  },

  removeConnection: function(connectionId) {
    logRed('[user-presence] removeConnection', connectionId);

    var query = {
      'connections.id': connectionId
    };

    var update = {
      $pull: {
        connections: {
          id: connectionId
        }
      }
    };

    UsersSessions.update(query, update);
  },

  start: function(collection) {
    UserPresence.collection = collection;

    Meteor.onConnection(function(connection) {
      connection.onClose(function() {
        // mark connection as closed so if it drops in the middle of the process it doesn't even is created
        connection.closed = true;

        if (connection.UserPresenceUserId !== undefined && connection.UserPresenceUserId !== null) {
          UserPresence.removeConnection(connection.id);
        }
      });
    });

    process.on(
      'exit',
      Meteor.bindEnvironment(function() {
        if (Package['lmachens:multiple-instances-status']) {
          UserPresence.removeConnectionsByInstanceId(InstanceStatus.id());
        } else {
          UserPresence.removeAllConnections();
        }
      })
    );

    if (Package['accounts-base']) {
      Accounts.onLogin(function(login) {
        // Remove old connection (if logged in without logout)
        if (login.connection.UserPresenceUserId) {
          UserPresence.removeConnection(login.connection.id);
        }
        UserPresence.createConnection(login.user._id, login.connection);
      });
    }

    Meteor.publish(null, function() {
      if (
        this.userId == null &&
        this.connection.UserPresenceUserId !== undefined &&
        this.connection.UserPresenceUserId !== null
      ) {
        UserPresence.removeConnection(this.connection.id);
        delete this.connection.UserPresenceUserId;
      }

      this.ready();
    });

    if (Package['lmachens:multiple-instances-status']) {
      UserPresence.startObserveForDeletedServers();
    }

    UserPresence.removeLostConnections();

    Meteor.methods({
      'UserPresence:connect': function() {
        this.unblock();
        UserPresence.createConnection(this.userId, this.connection);
      },

      'UserPresence:away': function() {
        this.unblock();
        UserPresence.setConnection(this.userId, this.connection, 'away');
      },

      'UserPresence:online': function() {
        this.unblock();
        UserPresence.setConnection(this.userId, this.connection, 'online');
      },

      'UserPresence:setDefaultStatus': function(status) {
        this.unblock();
        UserPresence.setDefaultStatus(this.userId, status);
      },

      'UserPresence:visitor:connect': function(id) {
        this.unblock();
        UserPresence.createConnection(id, this.connection, 'online', true);
      }
    });
  }
};
