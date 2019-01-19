import { ChampionMatchups } from '../_collection';

const rawCollection = ChampionMatchups.rawCollection();
rawCollection.createIndex(
  {
    champ1Id: 1,
    champ2Id: 2,
    role: 1
  },
  { unique: true }
);
