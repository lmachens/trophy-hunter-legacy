import axios from 'axios';
import https from 'https';
import NodeCache from 'node-cache';

const apiEndpoint = `${process.env.TH_LOL_API || 'https://api-lol.th.gl'}/summoner`;
const instance = axios.create({
  httpsAgent: new https.Agent({ ecdhCurve: 'auto' })
});

const cache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

interface GetSummonerProps {
  platformId: string;
  summonerId?: string | number;
  summonerName?: string;
}

const getSummoner = ({ platformId, summonerId, summonerName }: GetSummonerProps) => {
  let key;
  let url;
  if (summonerId) {
    if (/^\d+$/.test(`${summonerId}`)) {
      throw new Error(`getSummoner: deprecated summonerId ${summonerId} (${platformId})`);
    }
    key = `${platformId}&s&${summonerId}`;
    url = `${apiEndpoint}?platformId=${platformId}&summonerId=${summonerId}`;
  } else {
    key = `${platformId}&n&${summonerName}`;
    url = `${apiEndpoint}?platformId=${platformId}&summonerName=${encodeURI(summonerName)}`;
  }
  const data = cache.get(key);
  if (data) {
    return new Promise(resolve => resolve(data));
  }

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

export default getSummoner;
