import TimestampedCollection from '../../timestampedCollection';

const Matches = new TimestampedCollection('Matches');

// Do not declare SimpleSchema because we schema comes from RiotAPI

const rawCollection = Matches.rawCollection();
rawCollection.createIndex({ createdAt: 1 }, { background: true });
rawCollection.createIndex({ gameId: 1 }, { unique: true });
rawCollection.createIndex({ mapId: 1, gameType: 1, gameMode: 1 }, { background: true });
rawCollection.createIndex(
  { mapId: 1, 'participants.championId': 1, 'participants.teamId': 1 },
  { background: true }
);

export default Matches;
