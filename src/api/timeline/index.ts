import axios from 'axios';
import { parse } from 'url';
import { IncomingMessage, ServerResponse } from 'http';

const getTimeline = ({ region, matchId }) => {
  return axios.get(
    `https://${region}.api.riotgames.com/lol/match/v3/timelines/by-match/${matchId}?api_key=${
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

  const timelinePromise = getTimeline({ region, matchId });

  timelinePromise
    .then(timelineResponse => {
      const timeline = timelineResponse.data;

      // Cache result https://zeit.co/docs/v2/routing/caching/#caching-lambda-responses
      res.setHeader('Cache-Control', 's-maxage=31536000, maxage=0');
      res.end(JSON.stringify(timeline));
    })
    .catch(error => {
      console.log(error.message);
      res.end(error.message);
    });
};
