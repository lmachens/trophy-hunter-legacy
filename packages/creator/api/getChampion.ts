import axios from 'axios';

const getChampion = ({ version, lang, id }) => {
  const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${lang}/champion/${id}.json`;
  return axios.get(url).then(response => response.data);
};

export default getChampion;
