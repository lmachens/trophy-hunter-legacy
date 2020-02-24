import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';

class Alerts {
  _post(url, callOptions) {
    console.log(url);
    try {
      return HTTP.post(encodeURI(url), callOptions);
    } catch (error) {
      console.log(error.message);
    }
  }

  sendToDiscord(data) {
    const { discord } = Meteor.settings;
    if (!discord || !discord.webhook) {
      throw new Meteor.Error('settings', 'discord is empty');
    }

    const callOptions = {
      data
    };
    return this._post(discord.webhook, callOptions);
  }
}

const alerts = new Alerts();
export default alerts;
