// https://hooks.slack.com/services/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

import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';

class Alerts {
  constructor() {
    this.baseUrl = 'https://hooks.slack.com/services';
  }

  _post(url, callOptions) {
    console.log(url);
    try {
      return HTTP.post(encodeURI(url), callOptions);
    } catch (error) {
      console.log(error.message);
    }
  }

  sendToSlack(data) {
    const { slack } = Meteor.settings;
    if (!slack || !slack.webhook) {
      throw new Meteor.Error('settings', 'slack is empty');
    }

    const callOptions = {
      data
    };
    return this._post(slack.webhook, callOptions);
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
