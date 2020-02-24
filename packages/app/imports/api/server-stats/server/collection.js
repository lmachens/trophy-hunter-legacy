import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const ServerStats = new Mongo.Collection('ServerStats');

ServerStats.schema = new SimpleSchema({
  name: { type: String },
  connections: { type: Number },
  primary: { type: Boolean, optional: true },
  createdAt: { type: Date },
  updatedAt: { type: Date }
});

ServerStats.attachSchema(ServerStats.schema);

export default ServerStats;
