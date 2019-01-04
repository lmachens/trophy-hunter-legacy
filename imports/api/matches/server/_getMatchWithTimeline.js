import GameSessions from '/imports/api/game-sessions/gameSessions';
import endpoints from '/imports/api/riot-api/endpoints';
import getParticipantIdentities from '/imports/shared/matches/extendMatchResult/getParticipantIdentities.ts';
import riotApi from '/imports/api/riot-api/server/riotApi';

export const getMatchWithTimeline = (gameId, platformId, notResolveIdentity) => {
  const region = endpoints.find(e => e.platformId === platformId).region;
  const match = riotApi.getMatchWithTimeline(region, gameId);
  if (!match || !match.timeline) {
    return;
  }

  // for unranked matches the participantIdentities are not complete
  if (!notResolveIdentity && !match.participantIdentities[0].player) {
    const gameSession = GameSessions.findOne({ 'game.gameId': match.gameId });

    if (gameSession) {
      // get the identities from the gameSession
      match.participantIdentities = getParticipantIdentities(gameSession.game, match);
    }
  }

  return match;
};
