import http from 'http';
import activeGameApi from './endpoints/active-game';
import championMasteryApi from './endpoints/champion-mastery';
import leaguePositionsApi from './endpoints/league-positions';
import matchApi from './endpoints/match';
import matchlistApi from './endpoints/matchlist';
import matchupApi from './endpoints/matchup';
import playedTogetherApi from './endpoints/played-together';
import summonerApi from './endpoints/summoner';
import timelineApi from './endpoints/timeline';
import trophiesApi from './endpoints/trophies';
import trophyHunterApi from './endpoints/trophy-hunter';

if (!process.env.LEAGUE_API_KEY) {
  throw new Error(`No process.env.LEAGUE_API_KEY set. Set env LEAGUE_API_KEY="RGAPI-xxx" first`);
}

const hostname = '127.0.0.1';

http.createServer(trophiesApi).listen(5002, hostname, () => {
  console.log(`trophiesApi running at http://${hostname}:${5002}/`);
});

if (!process.env.MATCH_API_ENDPOINT) {
  process.env.MATCH_API_ENDPOINT = `http://${hostname}:${5000}`;
}

http.createServer(matchApi).listen(5000, hostname, () => {
  console.log(`matchApi running at http://${hostname}:${5000}/`);
});

if (!process.env.TIMELINE_API_ENDPOINT) {
  process.env.TIMELINE_API_ENDPOINT = `http://${hostname}:${5001}`;
}

http.createServer(timelineApi).listen(5001, hostname, () => {
  console.log(`timelineApi running at http://${hostname}:${5001}/`);
});

if (!process.env.SUMMONER_API_ENDPOINT) {
  process.env.SUMMONER_API_ENDPOINT = `http://${hostname}:${5003}`;
}

http.createServer(summonerApi).listen(5003, hostname, () => {
  console.log(`summonerApi running at http://${hostname}:${5003}/`);
});

if (!process.env.ACTIVE_GAME_API_ENDPOINT) {
  process.env.ACTIVE_GAME_API_ENDPOINT = `http://${hostname}:${5004}`;
}

http.createServer(activeGameApi).listen(5004, hostname, () => {
  console.log(`activeGameApi running at http://${hostname}:${5004}/`);
});

if (!process.env.LEAGUE_POSITIONS_API_ENDPOINT) {
  process.env.LEAGUE_POSITIONS_API_ENDPOINT = `http://${hostname}:${5005}`;
}

http.createServer(leaguePositionsApi).listen(5005, hostname, () => {
  console.log(`leaguePositionsApi running at http://${hostname}:${5005}/`);
});

if (!process.env.CHAMPION_MASTERY_API_ENDPOINT) {
  process.env.CHAMPION_MASTERY_API_ENDPOINT = `http://${hostname}:${5006}`;
}

http.createServer(championMasteryApi).listen(5006, hostname, () => {
  console.log(`championMasteryApi running at http://${hostname}:${5006}/`);
});

if (!process.env.MATCHLIST_API_ENDPOINT) {
  process.env.MATCHLIST_API_ENDPOINT = `http://${hostname}:${5007}`;
}

http.createServer(matchlistApi).listen(5007, hostname, () => {
  console.log(`matchlistApi running at http://${hostname}:${5007}/`);
});

if (!process.env.MATCHUP_API_ENDPOINT) {
  process.env.MATCHUP_API_ENDPOINT = `http://${hostname}:${5008}`;
}

http.createServer(matchupApi).listen(5008, hostname, () => {
  console.log(`matchupApi running at http://${hostname}:${5008}/`);
});

if (!process.env.TROPHY_HUNTER_API_ENDPOINT) {
  process.env.TROPHY_HUNTER_API_ENDPOINT = `http://${hostname}:${5009}`;
}

http.createServer(trophyHunterApi).listen(5009, hostname, () => {
  console.log(`trophyHunterApi running at http://${hostname}:${5009}/`);
});

if (!process.env.PLAYED_TOGETHER_API_ENDPOINT) {
  process.env.PLAYED_TOGETHER_API_ENDPOINT = `http://${hostname}:${5010}`;
}

http.createServer(playedTogetherApi).listen(5010, hostname, () => {
  console.log(`playedTogetherApi running at http://${hostname}:${5010}/`);
});