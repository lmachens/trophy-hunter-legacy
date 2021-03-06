import { setup } from 'axios-cache-adapter';
import { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';

if (!process.env.LEAGUE_API_KEY) {
  throw new Error('Missing env LEAGUE_API_KEY');
}

interface GetTimelineProps {
  platformId: string;
  matchId: string;
}

const api = setup({
  cache: {
    maxAge: 3600 * 1000
  }
});

export const getTimeline = ({ platformId, matchId }: GetTimelineProps) => {
  return api
    .get(
      `https://${platformId}.api.riotgames.com/lol/match/v4/timelines/by-match/${matchId}?api_key=${process.env.LEAGUE_API_KEY}`
    )
    .then(response => response.data);
};

export default (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  const { platformId, matchId }: any = parse(req.url, true).query;
  if (!platformId || !matchId) {
    res.setHeader('Cache-Control', 's-maxage=31536000, max-age=31536000');
    res.writeHead(400);
    return res.end('Invalid query');
  }

  getTimeline({ platformId, matchId })
    .then(result => {
      res.setHeader('Cache-Control', 's-maxage=31536000, max-age=31536000');
      res.end(JSON.stringify(result));
    })
    .catch(error => {
      res.setHeader('Cache-Control', 's-maxage=60, max-age=60');
      if (error.response) {
        res.writeHead(error.response.status);
        res.end(error.response.statusText);
      } else {
        res.writeHead(400);
        res.end(error.message);
      }
    });
};
