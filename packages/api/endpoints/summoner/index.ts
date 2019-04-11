import axios from 'axios';
import { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';

if (!process.env.LEAGUE_API_KEY) {
  throw new Error('Missing env LEAGUE_API_KEY');
}

const getSummoner = ({ platformId, summonerId, summonerName }) => {
  let url;
  if (summonerId) {
    url = `https://${platformId}.api.riotgames.com/lol/summoner/v4/summoners/${summonerId}?api_key=${
      process.env.LEAGUE_API_KEY
    }`;
  } else {
    url = `https://${platformId}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURI(
      summonerName
    )}?api_key=${process.env.LEAGUE_API_KEY}`;
  }
  return axios.get(url).then(response => response.data);
};

export default (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  const { platformId, summonerId, summonerName }: any = parse(req.url, true).query;
  if (!platformId || (!summonerId && !summonerName)) {
    res.setHeader('Cache-Control', 's-maxage=31536000, max-age=31536000');
    res.writeHead(400);
    return res.end('Invalid query');
  }
  getSummoner({ platformId, summonerId, summonerName })
    .then(result => {
      res.setHeader('Cache-Control', 's-maxage=86400, max-age=86400');
      res.end(JSON.stringify(result));
    })
    .catch(({ response, message }) => {
      res.setHeader('Cache-Control', 's-maxage=60, max-age=60');
      if (response && response.status === 400) {
        console.log(message, platformId, summonerId, summonerName);
      }
      res.writeHead(response ? response.status : 400);
      res.end(response ? response.statusText : message);
    });
};
