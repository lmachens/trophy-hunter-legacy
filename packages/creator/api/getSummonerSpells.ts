import axios from 'axios';

const getSummonerSpells = ({ version, lang }) => {
  const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${lang}/summoner.json`;
  return axios.get(url).then(response => response.data);
};

export default getSummonerSpells;
