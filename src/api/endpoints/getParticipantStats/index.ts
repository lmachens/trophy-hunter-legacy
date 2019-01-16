import axios from 'axios';
import extendMatchResult from '../../shared/matches/extendMatchResult';
import calculateTrophies from '../../shared/trophies/calculateTrophies';
import { parse } from 'url';
import { IncomingMessage, ServerResponse } from 'http';
import exampleMatches from '../../shared/matches/exampleMatches';
import { getMatch, getTimeline } from '../../shared/th-api';

export default (req: IncomingMessage, res: ServerResponse) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');


  const { platformId, matchId, summonerName }: any = parse(req.url, true).query;
  
  //summonerName shall later be used to find the last match of that summoner and return the stats for it.

  if (!platformId || !matchId ) {
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

        // this following code shall later be replaced by the extendMatchResults function that is callable without need for a summoner name (WIP in another branch).
        match.participantIdentities.forEach(participantIdentity =>
          {
        const extendedMatchResult = extendMatchResult({ matchResult: match, summonerName: participantIdentity.player.summonerName });
        const participant = extendedMatchResult.participants.find(p => p.participantId === participantIdentity.participantId);
        data.push(participant.stats);
          }
        );
        const result = {
          data: data,
        };
        // Cache result https://zeit.co/docs/v2/routing/caching/#caching-lambda-responses
        res.setHeader('Cache-Control', 's-maxage=31536000, maxage=0');
        res.end(JSON.stringify(result));
      })
    )
    .catch(error => {
      console.log('insidecatch');
      console.log(error);
      res.writeHead(error.response.status);
      res.end(error.response.statusText);
    });
};
