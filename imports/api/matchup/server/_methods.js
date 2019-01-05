import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { getMatchup } from '/imports/shared/th-api/index.ts';

Meteor.methods({
  async getMatchupMatches(props) {
    this.unblock();

    check(props, {
      champ1Id: Number,
      champ2Id: Number,
      mapId: Number
    });
    const { champ1Id, champ2Id, mapId } = props;

    return await getMatchup({ champ1Id, champ2Id, mapId });
  }
});
