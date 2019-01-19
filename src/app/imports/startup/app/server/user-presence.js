import { UserPresence, UserPresenceMonitor } from 'meteor/lmachens:user-presence';

import { InstanceStatus } from 'meteor/lmachens:multiple-instances-status';
import { Meteor } from 'meteor/meteor';
import TrophyHunters from '/imports/api/trophy-hunters/trophyHunters';
import os from 'os';
import { register } from '/imports/api/server-stats/server';

const hostname = os.hostname();
const name = `app-${hostname}`;
Meteor.startup(function() {
  InstanceStatus.registerInstance(name);
  // Listen for new connections, login, logoff and application exit to manage user status and register methods to be used by client to set user status and default status
  UserPresence.start(TrophyHunters);
  // Active logs for every changes
  // Listen for changes in UserSessions and Meteor.users to set user status based on active connections
  UserPresenceMonitor.start(TrophyHunters);

  //UserPresence.activeLogs();
});

register({ name });
