import { setup } from 'axios-cache-adapter';
import { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';

if (!process.env.LEAGUE_API_KEY) {
  throw new Error('Missing env LEAGUE_API_KEY');
}

interface GetActiveGameProps {
  platformId: string;
  summonerId: string;
}

const api = setup({
  cache: {
    maxAge: 10 * 1000
  }
});

export const getActiveGame = ({ platformId, summonerId }: GetActiveGameProps) => {
  return api
    .get(
      `https://${platformId}.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${summonerId}?api_key=${process.env.LEAGUE_API_KEY}`
    )
    .then(response => response.data);
};

export default (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  const { platformId, summonerId }: any = parse(req.url, true).query;
  if (!platformId || !summonerId) {
    res.setHeader('Cache-Control', 's-maxage=31536000, max-age=31536000');
    res.writeHead(400);
    return res.end('Invalid query');
  }
  res.setHeader('Cache-Control', 's-maxage=10, max-age=10');

  getActiveGame({ platformId, summonerId })
    .then(result => {
      res.end(JSON.stringify(result));
    })
    .catch(error => {
      if (error.response) {
        res.writeHead(error.response.status);
        res.end(error.response.statusText);
      } else {
        res.writeHead(400);
        res.end(error.message);
      }
    });
};
