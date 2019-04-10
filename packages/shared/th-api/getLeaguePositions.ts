import axios from 'axios';
import NodeCache from 'node-cache';

const apiEndpoint =
  process.env.LEAGUE_POSITIONS_API_ENDPOINT || 'https://lol-api.th.gl/league-positions';

const cache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

const getLeaguePositions = ({ platformId, summonerId }) => {
  if (/^\d+$/.test(`${summonerId}`)) {
    throw new Error(`getLeaguePositions: deprecated summonerId ${summonerId} (${platformId})`);
  }

  const key = `${platformId}&${summonerId}`;
  const data = cache.get(key);
  if (data) {
    return new Promise(resolve => resolve(data));
  }
  const url = `${apiEndpoint}?platformId=${platformId}&summonerId=${summonerId}`;

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
