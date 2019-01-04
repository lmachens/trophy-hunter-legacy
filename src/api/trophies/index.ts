import axios from 'axios';
import extendMatchResult from '../../shared/matches/extendMatchResult';
import { calculateTrophies } from '../../shared/trophies/calculateTrophies';
import { parse } from 'url';
import { IncomingMessage, ServerResponse } from 'http';

const getMatch = ({ region, matchId }) => {
  return axios.get(
    `https://${region}.api.riotgames.com/lol/match/v3/matches/${matchId}?api_key=${
      process.env.LEAGUE_API_KEY
    }`
  );
};

const getTimeline = ({ region, matchId }) => {
  return axios.get(
    `https://${region}.api.riotgames.com/lol/match/v3/timelines/by-match/${matchId}?api_key=${
      process.env.LEAGUE_API_KEY
    }`
  );
};

export default (req: IncomingMessage, res: ServerResponse) => {
  console.log(`Request ${req.url}`);
  const { region, matchId, summonerId }: any = parse(req.url, true).query;
  if (!region || !matchId || !summonerId || !parseInt(summonerId)) {
    res.writeHead(400);
    return res.end('Invalid query');
  }

  const matchPromise = getMatch({ region, matchId });
  const timelinePromise = getTimeline({ region, matchId });

  axios
    .all([matchPromise, timelinePromise])
    .then(
      axios.spread((matchResponse, timelineResponse) => {
        const match = matchResponse.data;
        match.timeline = timelineResponse.data;
        const extendedMatchResult = extendMatchResult(null, match, parseInt(summonerId), null);
        const trophiesObtained = calculateTrophies({ extendedMatchResult });
        const result = {
          data: trophiesObtained.map(trophyObtained => trophyObtained.trophy),
          count: trophiesObtained.length
        };
        // Cache result https://zeit.co/docs/v2/routing/caching/#caching-lambda-responses
        res.setHeader('Cache-Control', 's-maxage=31536000, maxage=0');
        res.end(JSON.stringify(result));
      })
    )
    .catch(error => {
      console.log(error.message);
      res.end(error.message);
    });
};
