import axios from 'axios';
import NodeCache from 'node-cache';

const apiEndpoint = process.env.MATCHUP_API_ENDPOINT || 'https://www.th.gl/api/matchup';

const cache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

const getMatchup = ({ champ1Id, champ2Id, mapId }) => {
  const key = `${champ1Id}&${champ2Id}&${mapId}`;
  const data = cache.get(key);
  if (data) {
    return new Promise(resolve => resolve(data));
  }
  const url = `${apiEndpoint}?champ1Id=${champ1Id}&champ2Id=${champ2Id}&mapId=${mapId}`;

  return axios
    .get(url)
    .then(response => {
      if (response.data) {
        cache.set(key, response.data);
      }
      return response.data;
    })
    .catch(error => {
      error.message = `${error.message}: ${url}`;
      throw error;
    });
};

export default getMatchup;
