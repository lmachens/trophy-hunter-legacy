import { ChampionStats } from '../champion-stats';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  getChampionStats(championId) {
    this.unblock();
    check(championId, Number);

    const championStats = ChampionStats.findOne(
      {
        championId
      },
      {
        fields: {
          stats: 1,
          byMap: 1
        }
      }
    );
    return (
      championStats && {
        stats: championStats.stats,
        byMap: championStats.byMap
      }
    );
  }
});
