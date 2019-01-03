import { ServerResponse, IncomingMessage } from 'http';
import { get } from 'https';
import extendMatchResult from '../../shared/matches/extendMatchResult';
import { calculateTrophies } from '../../shared/trophies/calculateTrophies';
import { parse } from 'url';

export default (req: IncomingMessage, res: ServerResponse) => {
  const { region, matchId, summonerId }: any = parse(req.url, true).query;
  if (!region) {
    return res.end('No Region');
  }
  if (!matchId) {
    return res.end('No MatchID');
  }
  if (!summonerId) {
    return res.end('No SummonerID');
  }

  const matchPromise = new Promise((resolve, reject) => {
    get(
      `https://${region}.api.riotgames.com/lol/match/v3/matches/${matchId}?api_key=${
        process.env.LEAGUE_API_KEY
      }`,
      response => {
        let data = '';

        // A chunk of data has been recieved.
        response.on('data', chunk => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        response.on('end', () => {
          resolve(JSON.parse(data));
        });
      }
    ).on('error', err => {
      reject(err.message);
    });
  });

  const timelinePromise = new Promise((resolve, reject) => {
    get(
      `https://${region}.api.riotgames.com/lol/match/v3/timelines/by-match/${matchId}?api_key=${
        process.env.LEAGUE_API_KEY
      }`,
      response => {
        let data = '';

        // A chunk of data has been recieved.
        response.on('data', chunk => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        response.on('end', () => {
          resolve(JSON.parse(data));
        });
      }
    ).on('error', err => {
      reject(err.message);
    });
  });

  Promise.all([matchPromise, timelinePromise])
    .then(([match, timeline]: [any, any]) => {
      match.timeline = timeline;
      const extendedMatchResult = extendMatchResult(null, match, parseInt(summonerId), null);
      const trophiesObtained = calculateTrophies({ extendedMatchResult });
      res.end(JSON.stringify(trophiesObtained));
    })
    .catch(errorMessage => {
      res.end(errorMessage);
    });
};
