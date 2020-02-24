import { Meteor } from 'meteor/meteor';
import TwitchStreams from '../twitchStreams';

Meteor.publish('twitch.streams.online', function() {
  return TwitchStreams.find();
});
