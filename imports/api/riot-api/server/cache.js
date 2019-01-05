import { Meteor } from 'meteor/meteor';
import NodeCache from 'node-cache';

export const timelineCache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

Meteor.methods({
  cacheStats() {
    return {
      timeline: timelineCache.getStats()
    };
  }
});
