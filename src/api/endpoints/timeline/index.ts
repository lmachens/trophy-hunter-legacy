import { parse } from 'url';
import { IncomingMessage, ServerResponse } from 'http';
import { getTimeline } from '../../shared/riot-api';

export default (req: IncomingMessage, res: ServerResponse) => {
  console.log(`Timeline ${req.url}`);
  const { platformId, matchId }: any = parse(req.url, true).query;
  if (!platformId || !matchId) {
    res.writeHead(400);
    return res.end('Invalid query');
  }

  getTimeline({ platformId, matchId })
    .then(result => {
      if (!result) {
        res.writeHead(404);
        return res.end('Not found');
      }

      // Cache result https://zeit.co/docs/v2/routing/caching/#caching-lambda-responses
      res.setHeader('Cache-Control', 's-maxage=31536000, maxage=0');
      res.end(JSON.stringify(result));
    })
    .catch(error => {
      res.writeHead(400);
      res.end(error.message);
    });
};
