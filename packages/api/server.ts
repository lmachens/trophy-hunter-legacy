import compression from 'compression';
import express from 'express';
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
  matchlist,
  matchup,
  'played-together': playedTogether,
  summoner,
  timeline,
  trophies,
  'trophy-hunter': trophyHunter
};

const port = 5000;
const app = express();
app.use(compression());

app.get('/', (_req, res) => {
  res.writeHead(200);
  res.end('Trophy Hunter LoL API');
});

Object.entries(endpoints).forEach(([route, handle]) => {
  app.get(`/${route}`, handle);
  console.log(`http://127.0.0.1:${port}/${route}`);
});

app.get('/favicon.ico', (_req, res) => {
  res.writeHead(204);
  return res.end();
});

app.listen(port, () => {
  console.log('Trophy Hunter LoL API is running!');
  console.log('NODE_ENV:', process.env.NODE_ENV);
  console.log('Version:', process.version);
});
