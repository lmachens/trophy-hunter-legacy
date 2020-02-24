/* globals UserPresenceMonitor, UsersSessions */

UserPresenceMonitor = {
  start: function(collection) {
    UserPresenceMonitor.collection = collection;
    UsersSessions.find({}).observe({
      added: function(record) {
        UserPresenceMonitor.processUserSession(record, 'added');
      },
      changed: function(record) {
        UserPresenceMonitor.processUserSession(record, 'changed');
      },
      removed: function(record) {
        UserPresenceMonitor.processUserSession(record, 'removed');
      }
    });
  },

  processUserSession: function(record, action) {
    if (action === 'removed' && (record.connections == null || record.connections.length === 0)) {
      return;
    }

    if (record.connections == null || record.connections.length === 0 || action === 'removed') {
      if (!record.visitor) {
        UserPresenceMonitor.setUserStatus(record._id, 'offline');
      }

      if (action !== 'removed') {
        UsersSessions.remove({ _id: record._id, 'connections.0': { $exists: false } });
      }
      return;
    }

    const last = _.last(_.sortBy(record.connections, '_updatedAt'));
    const connectionStatus = last.status;

    if (!record.visitor) {
      UserPresenceMonitor.setUserStatus(record._id, connectionStatus);
    }
  },

  processUser: function(id, fields) {
    if (fields.statusDefault == null) {
      return;
    }

    var userSession = UsersSessions.findOne({ _id: id });

    if (userSession) {
      UserPresenceMonitor.processUserSession(userSession, 'changed');
    }
  },

  setUserStatus: function(userId, status) {
    var user = UserPresenceMonitor.collection.findOne({ userId }),
      statusConnection = status;

    if (!user) {
      return;
    }

    if (user.statusDefault != null && status !== 'offline' && user.statusDefault !== 'online') {
      status = user.statusDefault;
    }

    var query = {
      userId: userId,
      $or: [{ status: { $ne: status } }, { statusConnection: { $ne: statusConnection } }]
    };

    var update = {
      $set: {
        status: status,
        statusConnection: statusConnection
      }
    };

    UserPresenceMonitor.collection.update(query, update);
  }
};
