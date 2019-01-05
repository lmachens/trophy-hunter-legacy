import axios from 'axios';
import NodeCache from 'node-cache';

const apiEndpoint = process.env.MATCHLIST_API_ENDPOINT || 'https://www.th.gl/api/matchlist';

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
}: GetMatchListProps) => {
  let key = `${platformId}-${accountId}`;
  let url = `${apiEndpoint}?platformId=${platformId}&accountId=${accountId}`;
  if (championId) {
    key += `-c-${championId}`;
    url += `&championId=${championId}`;
  }
  if (beginTime) {
    key += `-b-${beginTime}`;
    url += `&beginTime=${beginTime}`;
  }
  if (endIndex) {
    key += `-e-${endIndex}`;
    url += `&endIndex=${endIndex}`;
  }
  if (queueIds) {
    queueIds.forEach(queueId => {
      key += `-q-${queueId}`;
      url += `&queue=${queueId}`;
    });
  }
  const data = cache.get(key);
  if (data) {
    return new Promise(resolve => resolve(data));
  }
  return axios.get(url).then(response => {
    if (response.data) {
      cache.set(key, response.data);
    }
    return response.data;
  });
};
export default getMatchList;
