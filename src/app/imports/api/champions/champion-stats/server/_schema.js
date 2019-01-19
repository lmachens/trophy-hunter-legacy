import { ChampionStats } from '../_collection';
import SimpleSchema from 'simpl-schema';

const schema = new SimpleSchema({
  championId: { type: Number },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  stats: { type: Object, blackbox: true },
  byMap: { type: Object, blackbox: true, optional: true }
});

ChampionStats.attachSchema(schema);
