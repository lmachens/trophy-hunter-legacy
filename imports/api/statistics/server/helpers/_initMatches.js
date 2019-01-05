import GameSessions from '../../../game-sessions/gameSessions';
import Matches from '../matches';
import { updateSnowballStats } from '../../../champions/server';
import { getMatchWithTimeline } from '/imports/shared/th-api/index.ts';

export const initMatches = (startDate, endDate) => {
  const limit = 100;

  for (
    let skip = 0;
    skip < GameSessions.find({ createdAt: { $gt: startDate, $lt: endDate } }).count();
    skip
  ) {
    GameSessions.find(
      { createdAt: { $gt: startDate, $lt: endDate } },
      { limit, skip, sort: { createdAt: -1 } }
    ).forEach(async gameSession => {
      skip++;
      console.log(`process ${gameSession.createdAt}`);
      let match = Matches.findOne({ gameId: gameSession.game.gameId });
      if (!match) {
        match = await getMatchWithTimeline({
          platformId: gameSession.game.platformId,
          matchId: gameSession.game.gameId
        });
        if (!match) return;
        Matches.insert(match);
      }
      updateSnowballStats(match);
    });
  }
  return true;
};
