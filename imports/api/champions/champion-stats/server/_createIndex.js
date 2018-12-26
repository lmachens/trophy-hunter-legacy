import { ChampionStats } from '../_collection';

const rawCollection = ChampionStats.rawCollection();
rawCollection.createIndex(
  {
    championId: 1
  },
  { unique: true, background: true }
);
