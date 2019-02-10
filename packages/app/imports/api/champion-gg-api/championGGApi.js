import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';

class ChampionGGApi {
  constructor() {
    if (!Meteor.settings.championGGApiKey) {
      throw new Meteor.Error('settings', 'championGGApiKey is empty');
    }

    this.apiKey = Meteor.settings.championGGApiKey;
    this.baseUrl = 'http://api.champion.gg';
  }

  _get(url) {
    try {
      const result = HTTP.get(encodeURI(url));
      const content = JSON.parse(result.content);
      return content;
    } catch (error) {
      console.log(error.message);
    }
  }

  getChampionData(championId) {
    const url = `${this.baseUrl}/v2/champions/${championId}?api_key=${
      this.apiKey
    }&champData=damageComposition,hashes`;
    return this._get(url);
  }

  getChampionRoleMatchups({ championId, role, skip = 0, limit = 10 }) {
    const url = `${this.baseUrl}/v2/champions/${championId}/${role}/matchups?api_key=${
      this.apiKey
    }&skip=${skip}&limit=${limit}`;
    return this._get(url);
  }
}

const championGGApi = new ChampionGGApi();
export default championGGApi;
