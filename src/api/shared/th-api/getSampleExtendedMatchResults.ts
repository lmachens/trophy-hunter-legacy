import axios from 'axios';
import NodeCache from 'node-cache';

const apiEndpoint =
  process.env.SAMPLEEXTENDEDMATCHRESULTS_API_ENDPOINT ||
  'https://www.th.gl/api/sampleExtendedMatchResults';

const cache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

const getSampleExtendedMatchResults = ({}) => {
  const key = 'sampleExtendedMatchResults';
  const data = cache.get(key);
  if (data) {
    return new Promise(resolve => resolve(data));
  }
  return axios.get(`${apiEndpoint}`).then(response => {
    if (response.data) {
      cache.set(key, response.data);
    }
    return response.data;
  });
};

export default getSampleExtendedMatchResults;
