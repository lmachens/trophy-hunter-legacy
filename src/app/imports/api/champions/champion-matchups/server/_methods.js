import { ChampionMatchups } from '../_collection';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  getMatchupStats(props) {
    this.unblock();
    check(props, {
      champ1Id: Number,
      champ2Id: Number,
      role: String
    });
    const { champ1Id, champ2Id, role } = props;

    const championMatchup = ChampionMatchups.findOne({
      $or: [
        {
          champ1Id,
          champ2Id,
          role
        },
        {
          champ1Id: champ2Id,
          champ2Id: champ1Id,
          role
        }
      ]
    });
    return championMatchup;
  },
  getChampionSynergy(props) {
    this.unblock();
    check(props, {
      champ1Id: Number,
      champ2Id: Number
    });
    const { champ1Id, champ2Id } = props;

    const championMatchup = ChampionMatchups.findOne({
      $or: [
        {
          champ1Id,
          champ2Id,
          role: 'SYNERGY'
        },
        {
          champ1Id: champ2Id,
          champ2Id: champ1Id,
          role: 'SYNERGY'
        }
      ]
    });
    return championMatchup;
  }
});
