import { parse } from 'url';
import { IncomingMessage, ServerResponse } from 'http';
import axios from 'axios';

if (!process.env.LEAGUE_API_KEY) {
  throw new Error('Missing env LEAGUE_API_KEY');
}

const getSummoner = ({ platformId, summonerId, accountId, summonerName }) => {
  let url;
  if (summonerId) {
    url = `https://${platformId}.api.riotgames.com/lol/summoner/v4/summoners/${summonerId}?api_key=${
      process.env.LEAGUE_API_KEY
    }`;
  } else if (accountId) {
    url = `https://${platformId}.api.riotgames.com/lol/summoner/v4/summoners/by-account/${accountId}?api_key=${
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
  const { platformId, summonerId, accountId, summonerName }: any = parse(req.url, true).query;
  if (!platformId || (!summonerId && !accountId && !summonerName)) {
    res.writeHead(400);
    return res.end('Invalid query');
  }

  getSummoner({ platformId, summonerId, accountId, summonerName })
    .then(result => {
      // Cache result for one day because data might change
      res.setHeader('Cache-Control', 's-maxage=86400, maxage=0');
      res.end(JSON.stringify(result));
    })
    .catch(error => {
      res.writeHead(error.response.status);
      res.end(error.response.statusText);
    });
};
