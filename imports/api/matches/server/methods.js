import Future from 'fibers/future';
import GameSessions from '/imports/api/game-sessions/gameSessions';
import { Meteor } from 'meteor/meteor';
import TrophyHunters from '/imports/api/trophy-hunters/trophyHunters';
import { check } from 'meteor/check';
import { getMatchWithTimeline } from '/imports/api/matches/server/_getMatchWithTimeline';

Meteor.methods({
  getMatchesWithTrophyHunter(championId) {
    this.unblock();

    check(championId, Number);
    const gameSessions = GameSessions.find(
      { championId, checkedStatus: 'checked' },
      { sort: { createdAt: -1 }, limit: 10 }
    ).fetch();

    const futures = gameSessions.map(({ userId, game: { gameId, platformId } }) => {
      const future = new Future();
      Meteor.defer(() => {
        const trophyHunter = TrophyHunters.findOne(
          { userId },
          { fields: TrophyHunters.publicFields }
        );
        if (!trophyHunter) return future.return(null);

        const match = getMatchWithTimeline(gameId, platformId);
        if (!match) return future.return(null);

        future.return({
          trophyHunter,
          match
        });
      });
      return future;
    });

    const matchesWithTrophyHunter = [];
    futures.forEach(future => {
      const result = future.wait();
      if (result) {
        matchesWithTrophyHunter.push(result);
      }
    });
    return matchesWithTrophyHunter;
  }
});
