import axios from 'axios';
import NodeCache from 'node-cache';

const apiEndpoint =
  process.env.CHAMPION_MASTERY_API_ENDPOINT || 'https://api.th.gl/champion-mastery';

const cache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

const getChampionMastery = ({ platformId, summonerId, championId }) => {
  const key = `${platformId}&${summonerId}&${championId}`;
  const data = cache.get(key);
  if (data) {
    return new Promise(resolve => resolve(data));
  }
  const version = typeof summonerId === 'number' ? 'v3' : 'v4';
  const url = `${apiEndpoint}?platformId=${platformId}&summonerId=${summonerId}&championId=${championId}&version=${version}`;

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

export default getChampionMastery;
