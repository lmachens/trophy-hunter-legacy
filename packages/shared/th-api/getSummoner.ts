import { setup } from 'axios-cache-adapter';
import https from 'https';

const apiEndpoint = `${process.env.TH_LOL_API || 'https://api-lol.th.gl'}/summoner`;
const instance = setup({
  httpsAgent: new https.Agent({ ecdhCurve: 'auto', rejectUnauthorized: false }),
  cache: {
    maxAge: 60 * 1000
  }
});

interface GetSummonerProps {
  platformId: string;
  summonerId?: string | number;
  summonerName?: string;
}

const getSummoner = ({ platformId, summonerId, summonerName }: GetSummonerProps) => {
  let url;
  if (summonerId) {
    if (/^\d+$/.test(`${summonerId}`)) {
      throw new Error(`getSummoner: deprecated summonerId ${summonerId} (${platformId})`);
    }
    url = `${apiEndpoint}?platformId=${platformId}&summonerId=${summonerId}`;
  } else {
    url = `${apiEndpoint}?platformId=${platformId}&summonerName=${encodeURI(summonerName)}`;
  }

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

export default getSummoner;
