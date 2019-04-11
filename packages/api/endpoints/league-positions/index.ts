import axios from 'axios';
import { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';

if (!process.env.LEAGUE_API_KEY) {
  throw new Error('Missing env LEAGUE_API_KEY');
}

const getLeaguePositions = ({ platformId, summonerId }) => {
  return axios
    .get(
      `https://${platformId}.api.riotgames.com/lol/league/v4/positions/by-summoner/${summonerId}?api_key=${
        process.env.LEAGUE_API_KEY
      }`
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

  getLeaguePositions({ platformId, summonerId })
    .then(result => {
      res.setHeader('Cache-Control', 's-maxage=86400, max-age=86400');
      res.end(JSON.stringify(result));
    })
    .catch(error => {
      res.setHeader('Cache-Control', 's-maxage=3600, max-age=3600');
      res.writeHead(error.response.status);
      res.end(error.response.statusText);
    });
};
