import axios from 'axios';
import { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';

if (!process.env.LEAGUE_API_KEY) {
  throw new Error('Missing env LEAGUE_API_KEY');
}

const getMatchList = ({ platformId, accountId, championId, beginTime, endIndex, queueIds }) => {
  let url = `https://${platformId}.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?api_key=${
    process.env.LEAGUE_API_KEY
  }`;
  if (championId) {
    url += `&champion=${championId}`;
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
  return axios.get(url).then(response => response.data);
};

export default (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  const { platformId, accountId, championId, beginTime, endIndex, queueId }: any = parse(
    req.url,
    true
  ).query;
  if (!platformId || !accountId) {
    res.writeHead(400);
    return res.end('Invalid query');
  }
  const queueIds = queueId && typeof queueId === 'string' ? [queueId] : queueId;
  getMatchList({ platformId, accountId, championId, beginTime, endIndex, queueIds })
    .then(result => {
      // Cache result for 20 minutes because data might change
      res.setHeader('Cache-Control', 's-maxage=1200, maxage=0');
      res.end(JSON.stringify(result));
    })
    .catch(error => {
      res.writeHead(error.response.status);
      res.end(error.response.statusText);
    });
};
