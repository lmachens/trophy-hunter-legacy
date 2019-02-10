import axios from 'axios';

const getChampions = ({ version, lang }) => {
  const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${lang}/champion.json`;
  return axios.get(url).then(response => response.data);
};

export default getChampions;
