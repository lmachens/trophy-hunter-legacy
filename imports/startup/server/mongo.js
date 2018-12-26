import { MongoInternals } from 'meteor/mongo';

MongoInternals.defaultRemoteCollectionDriver().mongo.db.s.topology.on('reconnectFailed', err => {
  console.error('reconnectFailed', err.stack);
  process.exit(1);
});
