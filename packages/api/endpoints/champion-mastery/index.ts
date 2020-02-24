import { setup } from 'axios-cache-adapter';
import { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';

if (!process.env.LEAGUE_API_KEY) {
  throw new Error('Missing env LEAGUE_API_KEY');
}

interface GetChampionMasteryProps {
  platformId: string;
  summonerId: string;
  championId: string;
}

const api = setup({
  cache: {
    maxAge: 3600 * 1000
  }
});

export const getChampionMastery = ({
  platformId,
  summonerId,
  championId
}: GetChampionMasteryProps) => {
  return api
    .get(
      `https://${platformId}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}/by-champion/${championId}?api_key=${process.env.LEAGUE_API_KEY}`
    )
    .then(response => response.data);
};

export default (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  const { platformId, summonerId, championId }: any = parse(req.url, true).query;
  if (!platformId || !summonerId || !championId) {
    res.setHeader('Cache-Control', 's-maxage=31536000, max-age=31536000');
    res.writeHead(400);
    return res.end('Invalid query');
  }

  getChampionMastery({ platformId, summonerId, championId })
    .then(result => {
      res.setHeader('Cache-Control', 's-maxage=86400, max-age=86400');
      res.end(JSON.stringify(result));
    })
    .catch(error => {
      res.setHeader('Cache-Control', 's-maxage=3600, max-age=3600');
      if (error.response) {
        res.writeHead(error.response.status);
        res.end(error.response.statusText);
      } else {
        res.writeHead(400);
        res.end(error.message);
      }
    });
};
