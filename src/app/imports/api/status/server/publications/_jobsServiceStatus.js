import { JobsServiceStatus } from '../../collections';
import { Meteor } from 'meteor/meteor';

Meteor.publish('jobsServiceStatus', function() {
  const threeMinutesAgo = new Date(Date.now() - 180000);
  return JobsServiceStatus.find({ updatedAt: { $gt: threeMinutesAgo } });
});
