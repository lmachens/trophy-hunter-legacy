import { parse } from 'url';
import { IncomingMessage, ServerResponse } from 'http';
import axios from 'axios';

if (!process.env.LEAGUE_API_KEY) {
  throw new Error('Missing env LEAGUE_API_KEY');
}

const getChampionMastery = ({ platformId, summonerId, championId, version = 'v4' }) => {
  return axios
    .get(
      `https://${platformId}.api.riotgames.com/lol/champion-mastery/${version}/champion-masteries/by-summoner/${summonerId}/by-champion/${championId}?api_key=${
        process.env.LEAGUE_API_KEY
      }`
    )
    .then(response => response.data);
};

export default (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  const { platformId, summonerId, championId, version }: any = parse(req.url, true).query;
  if (!platformId || !summonerId || !championId) {
    res.writeHead(400);
    return res.end('Invalid query');
  }

  getChampionMastery({ platformId, summonerId, championId, version })
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
