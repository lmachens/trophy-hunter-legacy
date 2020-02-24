import { Meteor } from 'meteor/meteor';
import { RiotApiStatus } from '../../collections';

Meteor.publish('riotApiStatus', function() {
  return RiotApiStatus.find({ invalidate: false });
});
