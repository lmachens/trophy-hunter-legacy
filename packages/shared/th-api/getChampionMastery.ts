import axios from 'axios';
import NodeCache from 'node-cache';

const apiEndpoint =
  process.env.CHAMPION_MASTERY_API_ENDPOINT || 'https://lol-api.th.gl/champion-mastery';

const cache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

const getChampionMastery = ({ platformId, summonerId, championId }) => {
  if (/^\d+$/.test(`${summonerId}`)) {
    throw new Error(`getChampionMastery: deprecated summonerId ${summonerId} (${platformId})`);
  }

  const key = `${platformId}&${summonerId}&${championId}`;
  const data = cache.get(key);
  if (data) {
    return new Promise(resolve => resolve(data));
  }
  const url = `${apiEndpoint}?platformId=${platformId}&summonerId=${summonerId}&championId=${championId}`;

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
