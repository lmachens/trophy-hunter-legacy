import axios from 'axios';
import { parse } from 'url';
import { IncomingMessage, ServerResponse } from 'http';

const getMatch = ({ region, matchId }) => {
  return axios.get(
    `https://${region}.api.riotgames.com/lol/match/v3/matches/${matchId}?api_key=${
      process.env.LEAGUE_API_KEY
    }`
  );
};

export default (req: IncomingMessage, res: ServerResponse) => {
  console.log(`Request ${req.url}`);
  const { region, matchId }: any = parse(req.url, true).query;
  if (!region || !matchId) {
    res.writeHead(400);
    return res.end('Invalid query');
  }

  const matchPromise = getMatch({ region, matchId });

  matchPromise
    .then(matchResponse => {
      const match = matchResponse.data;

      // Cache result https://zeit.co/docs/v2/routing/caching/#caching-lambda-responses
      res.setHeader('Cache-Control', 's-maxage=31536000, maxage=0');
      res.end(JSON.stringify(match));
    })
    .catch(error => {
      console.log(error.message);
      res.end(error.message);
    });
};
