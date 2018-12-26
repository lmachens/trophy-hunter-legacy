import { Match, check } from 'meteor/check';
import {
  analyzeStatByChampion,
  analyzeStatByPosition,
  analyzeTrophyNoTimeline,
  checkAttributes,
  checkTrophiesByMaps,
  initMatches,
  runTreeAnalysis
} from './helpers';

import { Meteor } from 'meteor/meteor';

const checkUser = () => {
  const user = Meteor.user();
  if (
    !user ||
    (user._id !== '68yz7FfLwgQJoY3c2' &&
      user._id !== 'ZLqcYvH4oyL2sC7jx' &&
      user.username !== 'EUW.24688273')
  ) {
    throw new Meteor.Error('not-authorized');
  }
};

Meteor.methods({
  initMatches(startDate, endDate) {
    check(startDate, Date);
    check(endDate, Date);
    this.unblock();
    checkUser();
    return initMatches(startDate, endDate);
  },
  analyzeTrophyNoTimeline() {
    this.unblock();
    checkUser();
    return analyzeTrophyNoTimeline();
  },
  analyzeStatByChampion() {
    this.unblock();
    checkUser();
    return analyzeStatByChampion();
  },
  analyzeStatByPosition() {
    this.unblock();
    checkUser();
    return analyzeStatByPosition();
  },
  checkAttributes() {
    this.unblock();
    checkUser();
    return checkAttributes();
  },
  checkTrophiesByMaps() {
    this.unblock();
    checkUser();
    return checkTrophiesByMaps();
  },
  runTreeAnalysis(props) {
    check(props, Match.Maybe(Object));
    const {
      trees = ['drMundo1', 'nocturne1', 'kassadin1', 'ezreal1', 'taric1'],
      date = new Date('2018-02-01 00:00:00.000Z'),
      minimumTreesForAllTimeMention = 15
    } = props;

    this.unblock();
    checkUser();

    return runTreeAnalysis({ trees, date, minimumTreesForAllTimeMention });
  }
});
