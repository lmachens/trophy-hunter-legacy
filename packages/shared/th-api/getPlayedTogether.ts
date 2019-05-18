import axios from 'axios';
import https from 'https';
import NodeCache from 'node-cache';

const apiEndpoint = `${process.env.TH_LOL_API || 'https://api-lol.th.gl'}/played-together`;
const instance = axios.create({
  httpsAgent: new https.Agent({ ecdhCurve: 'auto' })
});

const cache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

const getPlayedTogether = ({ platformId, summonerNames }) => {
  const key = `${platformId}&${JSON.stringify(summonerNames)}`;
  const data = cache.get(key);
  if (data) {
    return new Promise(resolve => resolve(data));
  }
  const encodedSummonerNames = summonerNames.map(
    summonerName => `&summonerName=${encodeURI(summonerName)}`
  );
  return instance
    .get(`${apiEndpoint}?platformId=${platformId}${encodedSummonerNames.join('')}`)
    .then(response => {
      if (response.data) {
        cache.set(key, response.data);
      }
      return response.data;
    });
};

export default getPlayedTogether;
