import axios from 'axios';
import NodeCache from 'node-cache';

const apiEndpoint = process.env.MATCH_API_ENDPOINT || 'https://lol-api.th.gl/match';

const cache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

const getMatch = ({ platformId, matchId }) => {
  const key = `${platformId}&${matchId}`;
  const data = cache.get(key);
  if (data) {
    return new Promise(resolve => resolve(data));
  }
  const url = `${apiEndpoint}?platformId=${platformId}&matchId=${matchId}`;

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
export default getMatch;
