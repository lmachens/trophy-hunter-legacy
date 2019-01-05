import { parse } from 'url';
import { IncomingMessage, ServerResponse } from 'http';
import { getMatchList } from '../../shared/riot-api';

export default (req: IncomingMessage, res: ServerResponse) => {
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
