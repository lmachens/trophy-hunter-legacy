import axios from 'axios';
import https from 'https';
import NodeCache from 'node-cache';

const apiEndpoint = `${process.env.TH_LOL_API || 'https://api-lol.th.gl'}/league-positions`;
const instance = axios.create({
  httpsAgent: new https.Agent({ ecdhCurve: 'auto' })
});

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

  return instance
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
