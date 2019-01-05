import axios from 'axios';
import { parse } from 'url';
import { IncomingMessage, ServerResponse } from 'http';

const getMatch = ({ platformId, matchId }) => {
  return axios
    .get(
      `https://${platformId}.api.riotgames.com/lol/match/v3/matches/${matchId}?api_key=${
        process.env.LEAGUE_API_KEY
      }`
    )
    .then(response => response.data);
};

export default (req: IncomingMessage, res: ServerResponse) => {
  console.log(`Match ${req.url}`);
  const { platformId, matchId }: any = parse(req.url, true).query;
  if (!platformId || !matchId) {
    res.writeHead(400);
    return res.end('Invalid query');
  }

  getMatch({ platformId, matchId })
    .then(result => {
      if (!result) {
        res.writeHead(404);
        return res.end('Match not found');
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
