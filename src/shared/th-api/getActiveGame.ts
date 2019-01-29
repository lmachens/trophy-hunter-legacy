import axios from 'axios';

const apiEndpoint = process.env.ACTIVE_GAME_API_ENDPOINT || 'https://api.th.gl/active-game';

const getActiveGame = ({ platformId, summonerId }) => {
  if (/^\d+$/.test(`${summonerId}`)) {
    throw new Error(`getActiveGame: deprecated summonerId ${summonerId} (${platformId})`);
  }
  const url = `${apiEndpoint}?platformId=${platformId}&summonerId=${summonerId}`;

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
