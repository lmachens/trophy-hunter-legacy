import { HTTP } from 'meteor/http';
import version from '../version';

class RiotApi {
  _getStatic(url) {
    try {
      const result = HTTP.get(encodeURI(url), {
        timeout: 10000
      });
      return JSON.parse(result.content);
    } catch (error) {
      console.error(error);
    }
  }

  getChampionsStaticData(lang) {
    const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${lang}/champion.json`;
    return this._getStatic(url);
  }

  getChampionStaticData(lang, championId) {
    const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${lang}/champion/${championId}.json`;
    return this._getStatic(url);
  }

  getReforgedRunePathsStaticData(lang) {
    const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${lang}/runesReforged.json`;
    return this._getStatic(url);
  }

  getItemsStaticData(lang) {
    const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${lang}/item.json`;
    return this._getStatic(url);
  }

  getSummonerSpellsStaticData(lang) {
    const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${lang}/summoner.json`;
    return this._getStatic(url);
  }
}

const riotApi = new RiotApi();
export default riotApi;
