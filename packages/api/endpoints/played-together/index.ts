import { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import { getMatchList } from '../matchlist';
import { getSummoner } from '../summoner';

export default (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  const { platformId, summonerName } = parse(req.url, true).query;

  if (typeof platformId !== 'string' || typeof summonerName === 'string') {
    res.setHeader('Cache-Control', 's-maxage=31536000, max-age=31536000');
    res.writeHead(400);
    return res.end('Invalid query');
  }
  const summonerNames: string[] = summonerName;

  const promises = summonerNames.map(summonerName => {
    return new Promise(async (resolve, reject) => {
      try {
        const { accountId } = await getSummoner({ platformId, summonerName });
        const matchList = await getMatchList({ platformId, accountId });
        resolve({ summonerName, matchList });
      } catch (error) {
        reject(error);
      }
    });
  });

  Promise.all(promises)
    .then(summonerMatchLists => {
      const games = {};
      const playedTogether = {};
      const playedTogeterBySummonerName = {};
      summonerMatchLists.forEach(({ summonerName, matchList }) => {
        playedTogeterBySummonerName[summonerName] = {
          matchesAnalysed: matchList.endIndex,
          matchesSince: matchList.matches[matchList.matches.length - 1].timestamp,
          with: {}
        };
        matchList.matches.forEach(match => {
          if (!games[match.gameId]) {
            games[match.gameId] = [summonerName];
          } else {
            games[match.gameId].push(summonerName);
            playedTogether[match.gameId] = games[match.gameId];
          }
        });
      });
      Object.values(playedTogether).forEach((summonerNames: string[]) => {
        summonerNames.forEach(summonerName => {
          const otherSummonerNames = summonerNames.filter(name => name !== summonerName);
          otherSummonerNames.forEach(otherSummonerName => {
            if (!playedTogeterBySummonerName[summonerName].with[otherSummonerName]) {
              playedTogeterBySummonerName[summonerName].with[otherSummonerName] = 0;
            }
            playedTogeterBySummonerName[summonerName].with[otherSummonerName]++;
          });
        });
      });
      res.setHeader('Cache-Control', 's-maxage=86400, max-age=86400');
      res.end(JSON.stringify(playedTogeterBySummonerName));
    })
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
