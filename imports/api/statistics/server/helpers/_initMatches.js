import GameSessions from '../../../game-sessions/gameSessions';
import Matches from '../matches';
import { getMatchForGameSession } from '../../../matches/server/_getMatchForGameSession';
import { updateSnowballStats } from '../../../champions/server';

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
    ).forEach(gameSession => {
      skip++;
      console.log(`process ${gameSession.createdAt}`);
      let match = Matches.findOne({ gameId: gameSession.game.gameId });
      if (!match) {
        match = getMatchForGameSession(gameSession);
        if (!match) return;
        Matches.insert(match);
      }
      updateSnowballStats(match);
    });
  }
  return true;
};
