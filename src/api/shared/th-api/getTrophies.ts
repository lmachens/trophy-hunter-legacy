import axios from 'axios';
import NodeCache from 'node-cache';

const apiEndpoint = process.env.TROPHIES_API_ENDPOINT || 'https://www.th.gl/api/trophies';

const cache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

const getTrophies = ({ platformId, matchId, summonerId }) => {
  const key = `${platformId}-${matchId}`;
  const data = cache.get(key);
  if (data) {
    return new Promise(resolve => resolve(data));
  }
  return axios
    .get(`${apiEndpoint}?platformId=${platformId}&matchId=${matchId}&summonerId=${summonerId}`)
    .then(response => {
      if (response.data) {
        cache.set(key, response.data);
      }
      return response.data;
    });
};

export default getTrophies;
