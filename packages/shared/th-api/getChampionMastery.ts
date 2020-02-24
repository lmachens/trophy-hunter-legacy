import { setup } from 'axios-cache-adapter';
import https from 'https';

const apiEndpoint = `${process.env.TH_LOL_API || 'https://api-lol.th.gl'}/champion-mastery`;
const instance = setup({
  httpsAgent: new https.Agent({ ecdhCurve: 'auto', rejectUnauthorized: false }),
  cache: {
    maxAge: 60 * 1000
  }
});

const getChampionMastery = ({ platformId, summonerId, championId }) => {
  if (/^\d+$/.test(`${summonerId}`)) {
    throw new Error(`getChampionMastery: deprecated summonerId ${summonerId} (${platformId})`);
  }

  const url = `${apiEndpoint}?platformId=${platformId}&summonerId=${summonerId}&championId=${championId}`;
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

export default getChampionMastery;
