import { parse } from 'url';
import { IncomingMessage, ServerResponse } from 'http';
import { getChampionMastery } from '../../shared/riot-api';

export default (req: IncomingMessage, res: ServerResponse) => {
  const { platformId, summonerId, championId }: any = parse(req.url, true).query;
  if (!platformId || !summonerId || !championId) {
    res.writeHead(400);
    return res.end('Invalid query');
  }

  getChampionMastery({ platformId, summonerId, championId })
    .then(result => {
      // Cache result for one day because data might change
      res.setHeader('Cache-Control', 's-maxage=31536000, maxage=0');
      res.end(JSON.stringify(result));
    })
    .catch(error => {
      res.writeHead(error.response.status);
      res.end(error.response.statusText);
    });
};
