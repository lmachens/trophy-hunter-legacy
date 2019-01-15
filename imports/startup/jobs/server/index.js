import './register-api';
import './jobs';
import '../../server/admin';
import '../../server/mongo';
import '../../server/process';
import '../../server/login';

import { InstanceStatus } from 'meteor/lmachens:multiple-instances-status';
import { Meteor } from 'meteor/meteor';
import os from 'os';
import { register } from '/imports/api/server-stats/server';

const hostname = os.hostname();
const name = `jobs-${hostname}`;

Meteor.startup(() => {
  InstanceStatus.registerInstance(name);
});

register({ name });
