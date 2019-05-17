import http from 'http';
import { parse } from 'url';
import activeGame from './endpoints/active-game';
import championMastery from './endpoints/champion-mastery';
import leaguePositions from './endpoints/league-positions';
import match from './endpoints/match';
import matchlist from './endpoints/matchlist';
import matchup from './endpoints/matchup';
import playedTogether from './endpoints/played-together';
import summoner from './endpoints/summoner';
import timeline from './endpoints/timeline';
import trophies from './endpoints/trophies';
import trophyHunter from './endpoints/trophy-hunter';

if (!process.env.LEAGUE_API_KEY) {
  throw new Error(`No process.env.LEAGUE_API_KEY set. Set env LEAGUE_API_KEY="RGAPI-xxx" first`);
}

interface Endpoints {
  [key: string]: any;
}

const endpoints: Endpoints = {
  'active-game': activeGame,
  'champion-mastery': championMastery,
  'league-positions': leaguePositions,
  match,
  'match-list': matchlist,
  matchup,
  'played-together': playedTogether,
  summoner,
  timeline,
  trophies,
  'trophy-hunter': trophyHunter
};

const hostname = '127.0.0.1';
const port = 5000;
http
  .createServer((req, res) => {
    if (req.url === '/favicon.ico') {
      res.writeHead(204);
      return res.end();
    }
    console.log(new Date(), req.url);
    const { pathname = '' } = parse(req.url!);
    const endpointName = pathname.substr(1);
    const endpoint = endpoints[endpointName];
    if (!endpoint) {
      res.writeHead(400);
      res.end(`Unknown endpoint ${req.url}`);
      return;
    }

    return endpoint(req, res);
  })
  .listen(port, hostname, () => {
    console.log('Trophy Hunter LoL API is running!');

    Object.keys(endpoints).forEach(endpoint => {
      console.log(`http://${hostname}:${port}/${endpoint}`);
    });
  });
