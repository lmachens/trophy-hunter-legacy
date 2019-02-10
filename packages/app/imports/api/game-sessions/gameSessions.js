import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import TimestampedCollection from '../timestampedCollection';
import { matchedMatchModes } from '/imports/shared/riot-api/gameConstants.ts';
import trophies from '/imports/shared/trophies/index.ts';

const GameSessions = new TimestampedCollection('GameSessions');

GameSessions.allow({
  update(userId, doc) {
    return userId && doc.userId === userId;
  }
});

GameSessions.deny({
  insert() {
    return true;
  },
  remove() {
    return true;
  }
});

GameSessions.schema = new SimpleSchema({
  _id: { type: String, regEx: SimpleSchema.RegEx.Id },
  userId: { type: String, regEx: SimpleSchema.RegEx.Id },
  summonerName: { type: String },
  accountId: { type: SimpleSchema.oneOf(String, SimpleSchema.Integer) },
  region: { type: String },
  summonerId: { type: SimpleSchema.oneOf(String, Number) },
  checkedStatus: { type: String }, // matchInProgress, pending, failed, checked
  game: { type: Object, blackbox: true, optional: true },
  championId: { type: Number },
  trophiesObtained: { type: Array },
  'trophiesObtained.$': { type: Object },
  'trophiesObtained.$.name': { type: String },
  'trophiesObtained.$.isNew': { type: Boolean },
  'trophiesObtained.$.newInTree': { type: Number },
  trophyPoints: { type: Number, optional: true },
  gameDuration: { type: Number, optional: true },
  features: { type: Object, blackbox: true, optional: true },
  startedAt: { type: Date, optional: true },
  endedAt: { type: Date, optional: true },
  createdAt: { type: Date },
  updatedAt: { type: Date }
});

GameSessions.attachSchema(GameSessions.schema);

GameSessions.publicFields = {
  userId: 1,
  accountId: 1,
  region: 1,
  summonerId: 1,
  checkedStatus: 1,
  game: 1,
  championId: 1,
  gameDuration: 1,
  trophiesObtained: 1,
  trophyPoints: 1,
  features: 1,
  startedAt: 1,
  endedAt: 1,
  createdAt: 1
};

GameSessions.helpers({
  isMatched() {
    return this.game && matchedMatchModes.includes(this.game.gameQueueConfigId);
  },
  isMinimumDurationReached() {
    return this.gameDuration && this.gameDuration > 600;
  },
  getSortedTrophyObtained() {
    return this.trophiesObtained.sort((a, b) => {
      const aDefinition = trophies[a.name];
      const bDefinition = trophies[b.name];
      return (
        bDefinition.score - aDefinition.score || aDefinition.title.localeCompare(bDefinition.title)
      );
    });
  }
});

if (Meteor.isServer) {
  const rawCollection = GameSessions.rawCollection();
  rawCollection.createIndex({ accountId: 1, region: 1 }, { background: true });
  rawCollection.createIndex({ accountId: 1, region: 1, createdAt: -1 }, { background: true });
  rawCollection.createIndex({ accountId: 1, region: 1, 'game.gameId': 1 }, { background: true });
  rawCollection.createIndex({ userId: 1, createdAt: -1 }, { background: true });
  rawCollection.createIndex({ userId: 1, checkedStatus: 1 }, { background: true });
  rawCollection.createIndex({ 'game.gameId': 1, summonerId: 1 }, { background: true });
  rawCollection.createIndex({ 'game.gameId': 1, userId: 1 }, { background: true });
  rawCollection.createIndex({ createdAt: 1 }, { background: true });
  rawCollection.createIndex(
    { championId: 1, checkedStatus: 1, createdAt: 1 },
    { background: true }
  );
  rawCollection.createIndex({ checkedStatus: 1 }, { background: true });
  rawCollection.createIndex(
    { 'game.mapId': 1, 'game.participants.championId': 1, 'game.participants.teamId': 1 },
    { background: true }
  );
}

export default GameSessions;
