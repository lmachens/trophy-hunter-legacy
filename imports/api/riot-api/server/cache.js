import { Meteor } from 'meteor/meteor';
import NodeCache from 'node-cache';

export const timelineCache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

export const recentMatchListCache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

export const matchListCache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

Meteor.methods({
  cacheStats() {
    return {
      timeline: timelineCache.getStats(),
      recentMatchList: recentMatchListCache.getStats(),
      matchList: matchListCache.getStats()
    };
  }
});
