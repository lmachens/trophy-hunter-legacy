import http from 'http';
import matchApi from './endpoints/match';
import timelineApi from './endpoints/timeline';
import trophiesApi from './endpoints/trophies';
import summonerApi from './endpoints/summoner';
import activeGameApi from './endpoints/active-game';
import leaguePositionsApi from './endpoints/league-positions';

if (!process.env.LEAGUE_API_KEY) {
  throw `No process.env.LEAGUE_API_KEY set. Set env LEAGUE_API_KEY="RGAPI-xxx" first`;
}

const hostname = '127.0.0.1';

http.createServer(trophiesApi).listen(5002, hostname, () => {
  console.log(`Trophies API running at http://${hostname}:${5002}/`);
});

if (!process.env.MATCH_API_ENDPOINT) {
  process.env.MATCH_API_ENDPOINT = `http://${hostname}:${5000}`;
}

http.createServer(matchApi).listen(5000, hostname, () => {
  console.log(`Match API running at http://${hostname}:${5000}/`);
});

if (!process.env.TIMELINE_API_ENDPOINT) {
  process.env.TIMELINE_API_ENDPOINT = `http://${hostname}:${5001}`;
}

http.createServer(timelineApi).listen(5001, hostname, () => {
  console.log(`Match API running at http://${hostname}:${5001}/`);
});

if (!process.env.SUMMONER_API_ENDPOINT) {
  process.env.SUMMONER_API_ENDPOINT = `http://${hostname}:${5003}`;
}

http.createServer(summonerApi).listen(5003, hostname, () => {
  console.log(`Summoner API running at http://${hostname}:${5003}/`);
});

if (!process.env.ACTIVE_GAME_API_ENDPOINT) {
  process.env.ACTIVE_GAME_API_ENDPOINT = `http://${hostname}:${5004}`;
}

http.createServer(activeGameApi).listen(5004, hostname, () => {
  console.log(`Active Game API running at http://${hostname}:${5004}/`);
});

if (!process.env.LEAGUE_POSITIONS_API_ENDPOINT) {
  process.env.LEAGUE_POSITIONS_API_ENDPOINT = `http://${hostname}:${5005}`;
}

http.createServer(leaguePositionsApi).listen(5005, hostname, () => {
  console.log(`Active Game API running at http://${hostname}:${5005}/`);
});
