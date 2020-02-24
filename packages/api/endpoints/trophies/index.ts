import axios from 'axios';
import { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import extendMatchResult from '../../shared/matches/extendMatchResult';
import calculateTrophies from '../../shared/trophies/calculateTrophies';
import { getMatch } from '../match';
import { getTimeline } from '../timeline';

export default (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  const { platformId, matchId, summonerName, championId }: any = parse(req.url, true).query;
  if (!platformId || !matchId || (!summonerName && !championId)) {
    res.setHeader('Cache-Control', 's-maxage=31536000, max-age=31536000');
    res.writeHead(400);
    return res.end('Invalid query');
  }

  const matchPromise = getMatch({ platformId, matchId });
  const timelinePromise = getTimeline({ platformId, matchId });

  Promise.all([matchPromise, timelinePromise])
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
        res.setHeader('Cache-Control', 's-maxage=31536000, max-age=31536000');
        res.end(JSON.stringify(result));
      })
    )
    .catch(error => {
      res.setHeader('Cache-Control', 's-maxage=60, max-age=60');
      if (error.response) {
        res.writeHead(error.response.status);
        res.end(error.response.statusText);
      } else {
        res.writeHead(400);
        res.end(error.message);
      }
    });
};
