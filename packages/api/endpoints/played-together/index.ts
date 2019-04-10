import { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import { getMatchList, getSummoner } from '../../shared/th-api';

export default (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  const { platformId, summonerName }: any = parse(req.url, true).query;

  if (!platformId || !Array.isArray(summonerName)) {
    res.writeHead(400);
    return res.end('Invalname query');
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

      // Cache result for 30 minutes because data might change
      res.setHeader('Cache-Control', 's-maxage=1800, maxage=0');
      res.end(JSON.stringify(playedTogeterBySummonerName));
    })
    .catch(error => {
      res.setHeader('Cache-Control', 's-maxage=60, maxage=0');
      res.writeHead(error.response.status);
      res.end(error.response.statusText);
    });
};
