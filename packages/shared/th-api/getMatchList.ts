import axios from 'axios';
import https from 'https';
import NodeCache from 'node-cache';
import { IMatchList } from '../riot-api/typings';

const apiEndpoint = `${process.env.TH_LOL_API || 'https://api-lol.th.gl'}/matchlist`;
const instance = axios.create({
  httpsAgent: new https.Agent({ ecdhCurve: 'auto' })
});

const cache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

interface GetMatchListProps {
  platformId: string;
  accountId: string;
  championId?: string;
  beginTime?: string;
  endIndex?: string;
  queueIds?: string[];
}

const getMatchList = ({
  platformId,
  accountId,
  championId,
  beginTime,
  endIndex,
  queueIds
}: GetMatchListProps): Promise<IMatchList> => {
  if (/^\d+$/.test(`${accountId}`)) {
    throw new Error(`getMatchList: deprecated accountId ${accountId} (${platformId})`);
  }

  let key = `${platformId}&${accountId}`;
  let url = `${apiEndpoint}?platformId=${platformId}&accountId=${accountId}`;
  if (championId) {
    key += `&c&${championId}`;
    url += `&championId=${championId}`;
  }
  if (beginTime) {
    key += `&b&${beginTime}`;
    url += `&beginTime=${beginTime}`;
  }
  if (endIndex) {
    key += `&e&${endIndex}`;
    url += `&endIndex=${endIndex}`;
  }
  if (queueIds) {
    queueIds.forEach(queueId => {
      key += `&q&${queueId}`;
      url += `&queue=${queueId}`;
    });
  }
  const data = cache.get<IMatchList>(key);
  if (data) {
    return new Promise<IMatchList>(resolve => resolve(data));
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
export default getMatchList;
