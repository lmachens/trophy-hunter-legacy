import { parse } from 'url';
import { IncomingMessage, ServerResponse } from 'http';
import { getSummoner } from '../../shared/riot-api';

export default (req: IncomingMessage, res: ServerResponse) => {
  const { platformId, summonerId, accountId, summonerName }: any = parse(req.url, true).query;
  if (!platformId || (!summonerId && !accountId && !summonerName)) {
    res.writeHead(400);
    return res.end('Invalid query');
  }

  getSummoner({ platformId, summonerId, accountId, summonerName })
    .then(result => {
      if (!result) {
        res.writeHead(404);
        return res.end('Not found');
      }

      // Cache result for one day because data might change
      res.setHeader('Cache-Control', 's-maxage=86400, maxage=0');
      res.end(JSON.stringify(result));
    })
    .catch(error => {
      res.writeHead(400);
      res.end(error.message);
    });
};
