import axios from 'axios';
import https from 'https';
import NodeCache from 'node-cache';

const apiEndpoint = `${process.env.TH_LOL_API || 'https://api-lol.th.gl'}/trophies`;
const instance = axios.create({
  httpsAgent: new https.Agent({ ecdhCurve: 'auto' })
});

const cache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

const getTrophies = ({ platformId, matchId, summonerName, championId }) => {
  const key = `${platformId}&${matchId}&${summonerName}&${championId}`;
  const data = cache.get(key);
  if (data) {
    return new Promise(resolve => resolve(data));
  }
  return instance
    .get(
      `${apiEndpoint}?platformId=${platformId}&matchId=${matchId}&summonerName=${summonerName}&championId=${championId}`
    )
    .then(response => {
      if (response.data) {
        cache.set(key, response.data);
      }
      return response.data;
    });
};

export default getTrophies;
