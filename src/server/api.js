const http = require('http');
const trophiesApi = require('../build/api/trophies').default;

if (!process.env.LEAGUE_API_KEY) {
  console.error(`No process.env.LEAGUE_API_KEY set. Set env LEAGUE_API_KEY="RGAPI-xxx" first`);
  return;
}
const hostname = '127.0.0.1';

const trophiesApiServer = http.createServer(trophiesApi);
trophiesApiServer.listen(5000, hostname, () => {
  console.log(`Trophies API running at http://${hostname}:${5000}/`);
});
