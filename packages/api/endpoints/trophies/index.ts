import axios from 'axios';
import { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import extendMatchResult from '../../shared/matches/extendMatchResult';
import { getMatch, getTimeline } from '../../shared/th-api';
import calculateTrophies from '../../shared/trophies/calculateTrophies';

export default (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  const { platformId, matchId, summonerName, championId }: any = parse(req.url, true).query;
  if (!platformId || !matchId || (!summonerName && !championId)) {
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
        const extendedMatchResult = extendMatchResult({
          matchResult: match,
          summonerName,
          championId: parseInt(championId || '-1')
        });
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
      res.setHeader('Cache-Control', 's-maxage=60, maxage=0');
      res.writeHead(error.response.status);
      res.end(error.response.statusText);
    });
};
