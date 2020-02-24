import { setup } from 'axios-cache-adapter';
import https from 'https';

const apiEndpoint = `${process.env.TH_LOL_API || 'https://api-lol.th.gl'}/match`;
const instance = setup({
  httpsAgent: new https.Agent({ ecdhCurve: 'auto', rejectUnauthorized: false }),
  cache: {
    maxAge: 60 * 1000
  }
});

const getMatch = ({ platformId, matchId }) => {
  const url = `${apiEndpoint}?platformId=${platformId}&matchId=${matchId}`;
  return instance
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      error.message = `${error.message}: ${url}`;
      throw error;
    });
};
export default getMatch;
