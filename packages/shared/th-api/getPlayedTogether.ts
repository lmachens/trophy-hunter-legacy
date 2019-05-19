import { setup } from 'axios-cache-adapter';
import https from 'https';

const apiEndpoint = `${process.env.TH_LOL_API || 'https://api-lol.th.gl'}/played-together`;
const instance = setup({
  httpsAgent: new https.Agent({ ecdhCurve: 'auto', rejectUnauthorized: false }),
  cache: {
    maxAge: 60 * 1000
  }
});

const getPlayedTogether = ({ platformId, summonerNames }) => {
  const encodedSummonerNames = summonerNames.map(
    summonerName => `&summonerName=${encodeURI(summonerName)}`
  );
  return instance
    .get(`${apiEndpoint}?platformId=${platformId}${encodedSummonerNames.join('')}`)
    .then(response => {
      return response.data;
    });
};

export default getPlayedTogether;
