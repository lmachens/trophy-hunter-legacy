import axios from 'axios';

const getReforgedRunePaths = ({ version, lang }) => {
  const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${lang}/runesReforged.json`;
  return axios.get(url).then(response => response.data);
};

export default getReforgedRunePaths;
