import { parse } from 'url';
import { IncomingMessage, ServerResponse } from 'http';
import { getActiveGame } from '../../shared/riot-api';

export default (req: IncomingMessage, res: ServerResponse) => {
  const { platformId, summonerId }: any = parse(req.url, true).query;
  if (!platformId || !summonerId) {
    res.writeHead(400);
    return res.end('Invalid query');
  }

  getActiveGame({ platformId, summonerId })
    .then(result => {
      // Cache result for one minute because data might change
      res.setHeader('Cache-Control', 's-maxage=60, maxage=0');
      res.end(JSON.stringify(result));
    })
    .catch(error => {
      res.writeHead(error.response.status);
      res.end(error.response.statusText);
    });
};
