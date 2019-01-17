import axios from 'axios';
import { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import extendMatchResult from '../../shared/matches/extendMatchResult';
import { getMatch, getTimeline } from '../../shared/th-api';

export default (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  const { platformId, matchId }: any = parse(req.url, true).query;

  if (!platformId || !matchId) {
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
        const data = [];

        match.participantIdentities.forEach(participantIdentity => {
          const extendedMatchResult = extendMatchResult({
            matchResult: match,
            summonerName: participantIdentity.player.summonerName
          });
          const participant = extendedMatchResult.participants.find(
            p => p.participantId === participantIdentity.participantId
          );
          data.push(participant.stats);
        });
        // Cache result https://zeit.co/docs/v2/routing/caching/#caching-lambda-responses
        res.setHeader('Cache-Control', 's-maxage=31536000, maxage=0');
        res.end(JSON.stringify(data));
      })
    )
    .catch(error => {
      console.log(error);
      res.writeHead(error.response.status);
      res.end(error.response.statusText);
    });
};
