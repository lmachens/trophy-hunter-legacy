import axios from 'axios';
import NodeCache from 'node-cache';

const apiEndpoint =
  process.env.LEAGUE_POSITIONS_API_ENDPOINT || 'https://www.th.gl/api/league-positions';

const cache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

const getLeaguePositions = ({ platformId, summonerId }) => {
  const key = `${platformId}&${summonerId}`;
  const data = cache.get(key);
  if (data) {
    return new Promise(resolve => resolve(data));
  }
  const version = typeof summonerId === 'number' ? 'v3' : 'v4';
  const url = `${apiEndpoint}?platformId=${platformId}&summonerId=${summonerId}&version=${version}`;
  console.log(url);
  return axios
    .get(url)
    .then(response => {
      if (response.data) {
        cache.set(key, response.data);
      }
      return response.data;
    })
    .catch(error => {
      error.message = `${error.message}: ${url}`;
      throw error;
    });
};

export default getLeaguePositions;
