import axios from 'axios';
import NodeCache from 'node-cache';

const apiEndpoint = process.env.TROPHY_HUNTER_API_ENDPOINT || 'https://lol-api.th.gl/trophy-hunter';

const cache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

const getTrophyHunter = ({ region, summonerName }) => {
  const key = `${region}&${summonerName}`;
  const data = cache.get(key);
  if (data) {
    return new Promise(resolve => resolve(data));
  }
  const url = `${apiEndpoint}?region=${region}&summonerName=${summonerName}`;

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

export default getTrophyHunter;
