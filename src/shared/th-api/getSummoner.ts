import axios from 'axios';
import NodeCache from 'node-cache';

const apiEndpoint = process.env.SUMMONER_API_ENDPOINT || 'https://api.th.gl/summoner';

const cache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

interface GetSummonerProps {
  platformId: string;
  summonerId?: string | number;
  accountId?: string | number;
  summonerName?: string;
}

const getSummoner = ({ platformId, summonerId, accountId, summonerName }: GetSummonerProps) => {
  let key;
  let url;
  if (summonerId) {
    if (/^\d+$/.test(`${summonerId}`)) {
      throw new Error(`getSummoner: deprecated summonerId ${summonerId} (${platformId})`);
    }
    key = `${platformId}&s&${summonerId}`;
    url = `${apiEndpoint}?platformId=${platformId}&summonerId=${summonerId}`;
  } else if (accountId) {
    if (/^\d+$/.test(`${accountId}`)) {
      throw new Error(`getSummoner: deprecated accountId ${accountId} (${platformId})`);
    }
    key = `${platformId}&a&${accountId}`;
    url = `${apiEndpoint}?platformId=${platformId}&accountId=${accountId}`;
  } else {
    key = `${platformId}&n&${summonerName}`;
    url = `${apiEndpoint}?platformId=${platformId}&summonerName=${encodeURI(summonerName)}`;
  }
  const data = cache.get(key);
  if (data) {
    return new Promise(resolve => resolve(data));
  }

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

export default getSummoner;
