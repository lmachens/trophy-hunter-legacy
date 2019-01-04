import endpoints from '/imports/api/riot-api/endpoints';
import riotApi from '/imports/api/riot-api/server/riotApi';

export const getMatchWithTimeline = (gameId, platformId) => {
  const region = endpoints.find(e => e.platformId === platformId).region;
  const match = riotApi.getMatchWithTimeline(region, gameId);
  if (!match || !match.timeline) {
    return;
  }
  return match;
};
