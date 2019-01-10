import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import TimestampedCollection from '../timestampedCollection';
import { activeMatchModes } from '/imports/shared/riot-api/gameConstants.ts';

const TrophyHunters = new TimestampedCollection('TrophyHunters');

// Deny all client-side updates since we will be using methods to manage this collection
TrophyHunters.deny({
  insert() {
    return true;
  },
  update() {
    return true;
  },
  remove() {
    return true;
  }
});

const settingsSchema = new SimpleSchema(
  Object.assign(
    {
      matchResults: { type: Object, optional: true },
      'matchResults.avoidOpenWhenAnalysed': { type: Boolean, optional: true },
      overlay: { type: Object, optional: true },
      'overlay.noAutorun': { type: Object, optional: true }
    },
    ...activeMatchModes.map(matchMode => ({
      [`overlay.noAutorun.${matchMode}`]: { type: Boolean, optional: true }
    }))
  )
);

TrophyHunters.schema = new SimpleSchema({
  _id: { type: String, regEx: SimpleSchema.RegEx.Id },
  userId: { type: String, regEx: SimpleSchema.RegEx.Id, unique: true },
  summonerName: { type: String },
  summonerLevel: { type: Number },
  profileIconId: { type: Number },
  puuid: { type: String },
  revisionDate: { type: SimpleSchema.Integer },
  accountId: { type: SimpleSchema.oneOf(String, SimpleSchema.Integer) },
  summonerId: { type: SimpleSchema.oneOf(String, SimpleSchema.Integer) },
  region: { type: String },
  rank: { type: Number, optional: true },
  score: { type: Number },
  seasonRank: { type: Number, optional: true },
  seasonScore: { type: Number },
  tournamentRank: { type: Number, optional: true },
  tournamentScore: { type: Number, optional: true },
  trophyPoints: { type: Number },
  trophiesObtained: { type: Array },
  'trophiesObtained.$': { type: Object },
  'trophiesObtained.$.name': { type: String },
  'trophiesObtained.$.count': { type: Number },
  'trophiesObtained.$.date': { type: Date },
  trees: { type: Object, blackbox: true, optional: true },
  treeTrophyNamesObtained: { type: Array, optional: true },
  'treeTrophyNamesObtained.$': { type: String },
  customTree: { type: String, optional: true },
  features: { type: Object, blackbox: true, optional: true },
  attributes: { type: Object, blackbox: true, optional: true },
  playstyle: { type: String },
  items: { type: Object, blackbox: true },
  friends: { type: Array, optional: true },
  'friends.$': { type: String, regEx: SimpleSchema.RegEx.Id },
  followers: { type: Array, optional: true },
  'followers.$': { type: String, regEx: SimpleSchema.RegEx.Id },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  status: { type: String },
  statusConnection: { type: String },
  statusDefault: { type: String },
  channels: { type: Array },
  'channels.$': { type: Object },
  'channels.$.name': { type: String },
  'channels.$.lastSeen': { type: Date },
  leaguePositions: { type: Array, optional: true, blackbox: true },
  'leaguePositions.$': { type: Object, blackbox: true },
  settings: { type: settingsSchema, optional: true },
  lastLogin: { type: Date, optional: true },
  lastVersion: { type: String, optional: true },
  overwolfUser: { type: Object, blackbox: true, optional: true },
  patreon: { type: Object, blackbox: true, optional: true },
  referrerUserId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true },
  referredUserIds: { type: Array, optional: true },
  'referredUserIds.$': { type: String, regEx: SimpleSchema.RegEx.Id }
});

TrophyHunters.attachSchema(TrophyHunters.schema);

TrophyHunters.publicFields = {
  userId: 1,
  summonerName: 1,
  summonerId: 1,
  summonerLevel: 1,
  profileIconId: 1,
  region: 1,
  rank: 1,
  score: 1,
  seasonRank: 1,
  seasonScore: 1,
  tournamentRank: 1,
  tournamentScore: 1,
  'items.twitch': 1,
  'items.admin': 1,
  'items.patreon.badge': 1,
  status: 1,
  channels: 1,
  leaguePositions: 1,
  'items.avatar': 1,
  lastLogin: 1
};

TrophyHunters.paginationFields = {
  userId: 1,
  summonerName: 1,
  profileIconId: 1,
  region: 1,
  'features.games': 1,
  'features.wins': 1,
  trophiesObtained: 1,
  virtualTrophiesObtainedCount: 1,
  'items.twitch': 1,
  'items.youTube': 1,
  'items.avatar': 1,
  'items.admin': 1,
  'items.patreon.badge': 1,
  rank: 1,
  score: 1,
  seasonRank: 1,
  seasonScore: 1,
  tournamentRank: 1,
  tournamentScore: 1,
  status: 1,
  summonerLevel: 1,
  leaguePositions: 1,
  playstyle: 1,
  lastLogin: 1,
  customTree: 1,
  trees: 1
};

if (Meteor.isServer) {
  const rawCollection = TrophyHunters.rawCollection();
  rawCollection.createIndex(
    {
      summonerName: 1,
      region: 1,
      'items.twitch.visible': 1,
      'items.youTube.visible': 1,
      seasonRank: 1
    },
    { background: true }
  );

  rawCollection.createIndex(
    {
      summonerName: 1,
      region: 1,
      'items.twitch.visible': 1,
      'items.youTube.visible': 1,
      rank: 1
    },
    { background: true }
  );
  rawCollection.createIndex(
    {
      seasonRank: 1,
      'items.twitch.visible': 1,
      'items.youTube.visible': 1
    },
    { background: true }
  );
  rawCollection.createIndex({ status: 1, 'channels.name': 1 }, { background: true });
  rawCollection.createIndex({ rank: 1 }, { background: true });
  rawCollection.createIndex({ seasonRank: 1 }, { background: true });
  rawCollection.createIndex({ region: 1, seasonRank: 1 }, { background: true });
  rawCollection.createIndex({ accountId: 1, region: 1 }, { background: true });
  rawCollection.createIndex({ friends: 1 }, { background: true });
  rawCollection.createIndex({ summonerName: 1, seasonRank: 1 }, { background: true });
  rawCollection.createIndex({ region: 1, summonerName: 1, seasonRank: 1 }, { background: true });
  rawCollection.createIndex({ region: 1, summonerName: 1, rank: 1 }, { background: true });
  rawCollection.createIndex({ lastLogin: 1 }, { background: true });
  rawCollection.createIndex({ treeTrophyNamesObtained: 1 }, { background: true });
  rawCollection.createIndex({ score: -1, rank: -1 }, { background: true });
  rawCollection.createIndex({ seasonScore: -1, seasonRank: -1 }, { background: true });
  rawCollection.createIndex({ tournamentScore: -1, tournamentRank: -1 }, { background: true });
}

export default TrophyHunters;
