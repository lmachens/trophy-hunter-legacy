import axios from 'axios';
import NodeCache from 'node-cache';

const apiEndpoint =
  process.env.CHAMPION_MASTERY_API_ENDPOINT || 'https://www.th.gl/api/champion-mastery';

const cache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

const getChampionMastery = ({ platformId, summonerId, championId, version = 'v4' }) => {
  const key = `${platformId}-${summonerId}-${championId}-${version}`;
  const data = cache.get(key);
  if (data) {
    return new Promise(resolve => resolve(data));
  }
  return axios
    .get(
      `${apiEndpoint}?platformId=${platformId}&summonerId=${summonerId}&championId=${championId}&version=${version}`
    )
    .then(response => {
      if (response.data) {
        cache.set(key, response.data);
      }
      return response.data;
    });
};

export default getChampionMastery;
