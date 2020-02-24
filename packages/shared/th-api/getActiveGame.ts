import { setup } from 'axios-cache-adapter';
import https from 'https';

const apiEndpoint = `${process.env.TH_LOL_API || 'https://api-lol.th.gl'}/active-game`;
const instance = setup({
  httpsAgent: new https.Agent({ ecdhCurve: 'auto', rejectUnauthorized: false }),
  cache: {
    maxAge: 10 * 1000
  }
});

const getActiveGame = ({ platformId, summonerId }) => {
  if (/^\d+$/.test(`${summonerId}`)) {
    throw new Error(`getActiveGame: deprecated summonerId ${summonerId} (${platformId})`);
  }
  const url = `${apiEndpoint}?platformId=${platformId}&summonerId=${summonerId}`;

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
export default getActiveGame;
