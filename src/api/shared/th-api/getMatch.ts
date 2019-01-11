import axios from 'axios';
import NodeCache from 'node-cache';

const apiEndpoint = process.env.MATCH_API_ENDPOINT || 'https://www.th.gl/api/match';

const cache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

const getMatch = ({ platformId, matchId, version = 'v4' }) => {
  const key = `${platformId}-${matchId}-${version}`;
  const data = cache.get(key);
  if (data) {
    return new Promise(resolve => resolve(data));
  }
  return axios
    .get(`${apiEndpoint}?platformId=${platformId}&matchId=${matchId}&version=${version}`)
    .then(response => {
      if (response.data) {
        cache.set(key, response.data);
      }
      return response.data;
    });
};
export default getMatch;
