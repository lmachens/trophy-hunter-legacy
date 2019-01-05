import axios from 'axios';
import extendMatchResult from '../../shared/matches/extendMatchResult';
import calculateTrophies from '../../shared/trophies/calculateTrophies';
import { parse } from 'url';
import { IncomingMessage, ServerResponse } from 'http';
import { getMatch, getTimeline } from '../../shared/th-api';

export default (req: IncomingMessage, res: ServerResponse) => {
  console.log(`Trophies ${req.url}`);
  const { platformId, matchId, summonerId }: any = parse(req.url, true).query;
  if (!platformId || !matchId || !summonerId) {
    res.writeHead(400);
    return res.end('Invalid query');
  }

  const matchPromise = getMatch({ platformId, matchId });
  const timelinePromise = getTimeline({ platformId, matchId });

  axios
    .all([matchPromise, timelinePromise])
    .then(
      axios.spread((match, timeline) => {
        match.timeline = timeline;
        const extendedMatchResult = extendMatchResult(match, parseInt(summonerId), null);
        const trophiesObtained = calculateTrophies({ extendedMatchResult });
        const result = {
          data: trophiesObtained,
          count: trophiesObtained.length
        };
        // Cache result https://zeit.co/docs/v2/routing/caching/#caching-lambda-responses
        res.setHeader('Cache-Control', 's-maxage=31536000, maxage=0');
        res.end(JSON.stringify(result));
      })
    )
    .catch(error => {
      console.log(error.message);
      res.writeHead(400);
      res.end(error.message);
    });
};
