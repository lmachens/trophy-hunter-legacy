import { setup } from 'axios-cache-adapter';
import https from 'https';
import { IMatchList } from '../riot-api/typings';

const apiEndpoint = `${process.env.TH_LOL_API || 'https://api-lol.th.gl'}/matchlist`;
const instance = setup({
  httpsAgent: new https.Agent({ ecdhCurve: 'auto', rejectUnauthorized: false }),
  cache: {
    maxAge: 60 * 1000
  }
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
  let url = `${apiEndpoint}?platformId=${platformId}&accountId=${accountId}`;
  if (championId) {
    url += `&championId=${championId}`;
  }
  if (beginTime) {
    url += `&beginTime=${beginTime}`;
  }
  if (endIndex) {
    url += `&endIndex=${endIndex}`;
  }
  if (queueIds) {
    queueIds.forEach(queueId => {
      url += `&queue=${queueId}`;
    });
  }
  return instance
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      error.message = `${error.message}: ${url}`;
      throw error;
    });
};
export default getMatchList;
