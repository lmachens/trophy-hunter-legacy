import http from 'http';
import matchApi from './endpoints/match';
import timelineApi from './endpoints/timeline';
import trophiesApi from './endpoints/trophies';

if (!process.env.LEAGUE_API_KEY) {
  throw `No process.env.LEAGUE_API_KEY set. Set env LEAGUE_API_KEY="RGAPI-xxx" first`;
}

const hostname = '127.0.0.1';

if (!process.env.MATCH_API_ENDPOINT) {
  process.env.MATCH_API_ENDPOINT = `http://${hostname}:${5000}`;
}
if (!process.env.TIMELINE_API_ENDPOINT) {
  process.env.TIMELINE_API_ENDPOINT = `http://${hostname}:${5001}`;
}

const matchApiServer = http.createServer(matchApi);
matchApiServer.listen(5000, hostname, () => {
  console.log(`Match API running at http://${hostname}:${5000}/`);
});

const timelineServer = http.createServer(timelineApi);
timelineServer.listen(5001, hostname, () => {
  console.log(`Match API running at http://${hostname}:${5001}/`);
});

const trophiesApiServer = http.createServer(trophiesApi);
trophiesApiServer.listen(5002, hostname, () => {
  console.log(`Trophies API running at http://${hostname}:${5002}/`);
});
