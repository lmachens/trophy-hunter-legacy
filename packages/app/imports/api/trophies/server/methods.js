import GameSessions from '/imports/api/game-sessions/gameSessions';
import { Meteor } from 'meteor/meteor';
import TrophyStats from '/imports/api/trophies/trophyStats';
import { check, Match } from 'meteor/check';

const trophyStatsFields = {
  trophyName: 1,
  distinctTrophyHunters: 1,
  totalCount: 1,
  frequencyByMapId: 1
};

Meteor.methods({
  getTrophyStats(trophyName) {
    this.unblock();
    check(trophyName, String);
    return TrophyStats.findOne(
      {
        trophyName
      },
      {
        fields: trophyStatsFields
      }
    );
  },
  calculateTrophies(platformId, matchId, summonerId) {
    this.unblock();
    check(platformId, String);
    check(matchId, Number);
    check(summonerId, Match.OneOf(Number, String));

    const gameSession = GameSessions.findOne({ 'game.gameId': matchId, summonerId });
    if (gameSession) {
      return gameSession.trophiesObtained;
    }
    return false;
  }
});
