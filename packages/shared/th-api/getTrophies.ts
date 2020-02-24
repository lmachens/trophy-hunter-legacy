import { setup } from 'axios-cache-adapter';
import https from 'https';

const apiEndpoint = `${process.env.TH_LOL_API || 'https://api-lol.th.gl'}/trophies`;
const instance = setup({
  httpsAgent: new https.Agent({ ecdhCurve: 'auto', rejectUnauthorized: false }),
  cache: {
    maxAge: 60 * 1000
  }
});

const getTrophies = ({ platformId, matchId, summonerName, championId }) => {
  return instance
    .get(
      `${apiEndpoint}?platformId=${platformId}&matchId=${matchId}&summonerName=${summonerName}&championId=${championId}`
    )
    .then(response => {
      return response.data;
    });
};

export default getTrophies;
