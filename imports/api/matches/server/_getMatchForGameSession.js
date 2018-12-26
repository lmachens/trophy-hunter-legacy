import Matches from '/imports/api/statistics/server/matches';
import endpoints from '../../riot-api/endpoints';
import riotApi from '../../riot-api/server/riotApi';

export const getMatchForGameSession = ({ game: { gameId, platformId } }) => {
  const match = Matches.findOne({ gameId });
  if (match) return match;
  const region = endpoints.find(endpoint => endpoint.platformId === platformId).region;
  return riotApi.getMatchWithTimeline(region, gameId);
};
