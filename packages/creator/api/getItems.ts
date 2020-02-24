import axios from 'axios';

const getItems = ({ version, lang }) => {
  const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${lang}/item.json`;
  return axios.get(url).then(response => response.data);
};

export default getItems;
