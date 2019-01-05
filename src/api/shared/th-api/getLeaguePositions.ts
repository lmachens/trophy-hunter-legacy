import axios from 'axios';
import NodeCache from 'node-cache';

const apiEndpoint =
  process.env.LEAGUE_POSITIONS_API_ENDPOINT || 'https://www.th.gl/api/league-positions';

const cache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

const getLeaguePositions = ({ platformId, summonerId }) => {
  const key = `${platformId}-${summonerId}`;
  const data = cache.get(key);
  if (data) {
    return new Promise(resolve => resolve(data));
  }
  return axios
    .get(`${apiEndpoint}?platformId=${platformId}&summonerId=${summonerId}`)
    .then(response => {
      if (response.data) {
        cache.set(key, response.data);
      }
      return response.data;
    });
};

export default getLeaguePositions;
