import axios from 'axios';
import https from 'https';

const apiEndpoint = `${process.env.TH_LOL_API || 'https://api-lol.th.gl'}/active-game`;
const instance = axios.create({
  httpsAgent: new https.Agent({ ecdhCurve: 'auto' })
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
