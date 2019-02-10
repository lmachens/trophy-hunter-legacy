import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';

class TwitchApi {
  constructor() {
    if (!Meteor.settings.twitchApiKey) {
      throw new Meteor.Error('settings', 'twitchApiKey is empty');
    }

    this.endpoint = 'https://api.twitch.tv/kraken/';
    this.apiKey = Meteor.settings.twitchApiKey;
  }

  _get(url) {
    try {
      const result = HTTP.get(encodeURI(`${this.endpoint}${url}client_id=${this.apiKey}`));
      const content = JSON.parse(result.content);
      return content;
    } catch (error) {
      //console.log('TwitchApi', error.statusCode, error.message);
    }
  }

  // https://dev.twitch.tv/docs/v5/reference/streams
  getStreamByUser(channelId) {
    return this._get(`streams/${channelId}?`);
  }
}

const twitchApi = new TwitchApi();
export default twitchApi;
