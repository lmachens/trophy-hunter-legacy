import { ChampionMatchups } from '../_collection';
import SimpleSchema from 'simpl-schema';

const schema = new SimpleSchema({
  champ1Id: { type: Number },
  champ2Id: { type: Number },
  role: { type: String },
  count: { type: Number },
  champ1: { type: Object, blackbox: true },
  champ2: { type: Object, blackbox: true },
  patch: { type: String }
});

ChampionMatchups.attachSchema(schema);
