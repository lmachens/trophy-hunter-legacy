import Matches from '../../statistics/server/matches';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  getMatchupMatches(props) {
    this.unblock();

    check(props, {
      champ1Id: Number,
      champ2Id: Number,
      mapId: Number
    });
    const { champ1Id, champ2Id, mapId } = props;

    return Matches.find(
      {
        mapId,
        $or: [
          {
            $and: [
              { participants: { $elemMatch: { championId: champ1Id, teamId: 100 } } },
              { participants: { $elemMatch: { championId: champ2Id, teamId: 200 } } }
            ]
          },
          {
            $and: [
              { participants: { $elemMatch: { championId: champ1Id, teamId: 200 } } },
              { participants: { $elemMatch: { championId: champ2Id, teamId: 100 } } }
            ]
          }
        ]
      },
      {
        limit: 5,
        fields: {
          gameId: 1,
          participants: 1
        }
      }
    ).map(({ gameId, participants }) => {
      let participant1 = participants.find(participant => participant.championId === champ1Id);
      let otherTeam = participant1.teamId === 100 ? 200 : 100;
      let participant2 = participants.find(
        participant => participant.championId === champ2Id && participant.teamId === otherTeam
      );
      if (!participant2) {
        participant1 = participants.find(
          participant => participant.championId === champ1Id && participant.teamId === otherTeam
        );
        otherTeam = participant1.teamId === 100 ? 200 : 100;
        participant2 = participants.find(
          participant => participant.championId === champ2Id && participant.teamId === otherTeam
        );
      }

      return {
        gameId,
        participant1,
        participant2
      };
    });
  }
});
