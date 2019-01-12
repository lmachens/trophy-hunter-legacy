import axios from 'axios';

const apiEndpoint = process.env.ACTIVE_GAME_API_ENDPOINT || 'https://www.th.gl/api/active-game';

const getActiveGame = ({ platformId, summonerId }) => {
  const version = typeof summonerId === 'number' ? 'v3' : 'v4';
  const url = `${apiEndpoint}?platformId=${platformId}&summonerId=${summonerId}&version=${version}`;

  return axios
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
