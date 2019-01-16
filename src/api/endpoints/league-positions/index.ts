import axios from 'axios';
import { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';

if (!process.env.LEAGUE_API_KEY) {
  throw new Error('Missing env LEAGUE_API_KEY');
}

const getLeaguePositions = ({ platformId, summonerId, version = 'v4' }) => {
  return axios
    .get(
      `https://${platformId}.api.riotgames.com/lol/league/${version}/positions/by-summoner/${summonerId}?api_key=${
        process.env.LEAGUE_API_KEY
      }`
    )
    .then(response => response.data);
};

export default (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  const { platformId, summonerId, version }: any = parse(req.url, true).query;
  if (!platformId || !summonerId) {
    res.writeHead(400);
    return res.end('Invalid query');
  }

  getLeaguePositions({ platformId, summonerId, version })
    .then(result => {
      // Cache result https://zeit.co/docs/v2/routing/caching/#caching-lambda-responses
      res.setHeader('Cache-Control', 's-maxage=31536000, maxage=0');
      res.end(JSON.stringify(result));
    })
    .catch(error => {
      res.writeHead(error.response.status);
      res.end(error.response.statusText);
    });
};
