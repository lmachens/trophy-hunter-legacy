import GameSessions from '/imports/api/game-sessions/gameSessions';
import Matches from '/imports/api/statistics/server/matches';
import extendMatchResult from '/imports/api/matches/extendMatchResult';
import { getTrophiesCategory } from '/imports/shared/trophies/helpers/index.ts';
import { trophies } from '/imports/shared/trophies/trophies.ts';

export const checkAttributes = () => {
  console.log('checkAttributes');
  const tempTrophyHunter = {
    features: {}
  };
  //'wisdom': 0, 'power': 0, 'lethality': 0, 'fighting': 0, 'capability': 0, 'cunning': 0, 'cooperation': 0, 'defense': 0
  const attributes = {};
  const counter = {};
  let count = 0;
  Object.values(trophies).forEach(trophy => {
    counter[trophy.name] = 0;
    attributes[trophy.attribute] = 0;
  });
  Matches.find(
    {
      mapId: 11,
      gameType: 'MATCHED_GAME',
      gameMode: 'CLASSIC'
    },
    {
      limit: 4000
    }
  ).forEach(match => {
    const gameSession = GameSessions.findOne({ 'game.gameId': match.gameId });
    //let match = Meteor.call('getMatchWithTimeline', gameSession.game.gameId, gameSession.game.platformId);
    if (!gameSession) {
      // console.log('found unusuable match.');
      return;
    }
    if (!match.timeline) {
      //console.log('found unusuable match (timeline).');
      return;
    }
    const extendedMatchResult = extendMatchResult(gameSession.game, match, gameSession.summonerId, {
      withTimeline: true,
      extendStatsParticipantIds: [],
      extendParticipants: []
    });

    const trophiesCategory = getTrophiesCategory(extendedMatchResult.queueId);
    // we check for every trophy (obtained trophies included)
    Object.values(trophies).forEach(trophy => {
      const obtained = trophy.obtainedCheck({
        match: extendedMatchResult,
        trophyHunter: tempTrophyHunter,
        trophiesCategory
      });

      // is trophy obtained?
      if (obtained) {
        // remember obtained trophies
        counter[trophy.name] = counter[trophy.name] + 1;
      }
    });

    count++;
    //  console.log(count);
    // setTimeout(() => console.log(count), 1000);
    //console.log(count);
    if (count % 25 === 0) console.log(count);
    // if (count > 100)
    //  return;
  });
  console.log(count);
  console.log(counter);
  Object.values(trophies).forEach(trophy => {
    if (trophy.attribute != null) {
      attributes[trophy.attribute] += counter[trophy.name] * trophy.score * trophy.score;
    }
  });
  console.log(attributes);
};
