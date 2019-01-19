import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { getPlatformIdByRegion } from '/imports/shared/th-api/index.ts';
import normalizeRegion from './normalizeRegion';

export default class Overwolf {
  constructor(props) {
    this.messageListeners = [];
    this.onError = props.onError;

    this.onMessage = this.onMessage.bind(this);
    this.setMessageListener = this.setMessageListener.bind(this);

    window.removeEventListener('message', this.onMessage);
    window.addEventListener('message', this.onMessage);
  }

  onMessage(event) {
    try {
      const data = event.data;
      if (data.overwolf) {
        console.log('onMessage', data.type, data.message);
        const { message, type } = data;

        switch (type) {
          case 'login': {
            this.login(message);
            break;
          }
          case 'overwolfUser':
            Meteor.call('updateOverwolfUser', message.overwolfUser);
            break;
          case 'startMatch':
            if (this.lastType !== type) this.startMatch();
            break;
          case 'matchOutcome':
            if (this.lastType !== type) this.endMatch();
            break;
          case 'notInGame':
            if (this.lastType !== type) this.checkMatchEnd();
            break;
        }
        this.lastType = type;
        if (this.messageListeners[type]) {
          this.messageListeners[type].forEach(listener => {
            listener(message);
          });
        }
      }
    } catch (error) {
      this.onError(error);
    }
  }

  setMessageListener(event, callback) {
    if (!this.messageListeners[event]) {
      this.messageListeners[event] = [];
    }
    this.messageListeners[event].push(callback);
  }

  login({ region, summonerName, overwolfUser }) {
    region = normalizeRegion(region);
    try {
      const endpoint = getPlatformIdByRegion(region);
      console.log(`Use ${endpoint} platform`);
    } catch (error) {
      if (region === 'PBE') {
        throw new Meteor.Error('Error', 'Public Beta Environment is not supported');
      }
      Meteor.call('sendToSlack', {
        username: 'Region Alert',
        icon_emoji: ':information_source:',
        text: `Region ${region} not found`
      });
      throw new Meteor.Error(
        'Error',
        `Region ${region} is not supported. We will try to support it as soon as possible.`
      );
    }

    const serverVersion = Meteor.settings && Meteor.settings.public.version;

    Meteor.call(
      'loginTrophyHunter',
      { region, summonerName, overwolfUser, serverVersion },
      (error, result) => {
        if (error) {
          throw new Meteor.Error('Error', `Can not find ${summonerName} in ${region}`);
        }
        if (Meteor.userId() !== result.userId) {
          Accounts.callLoginMethod({
            methodArguments: [{ userId: result.userId }],
            userCallback: () => this.setStatus(result.isIngame)
          });
        }
      }
    );
  }

  setStatus = isIngame => {
    if (isIngame) {
      Meteor.call('UserPresence:setDefaultStatus', 'ingame');
    } else {
      Meteor.call('UserPresence:setDefaultStatus', 'online');
    }
  };

  startMatch() {
    console.log('startMatch');

    Meteor.call('startMatch', (error, result) => {
      if (error) {
        return console.log(error);
      }
      Meteor.call('UserPresence:setDefaultStatus', 'ingame');
      const showOverlay = result && result.showOverlay;
      console.log('show overlay?', showOverlay);
      if (showOverlay) {
        parent.window.postMessage(
          {
            overwolf: true,
            type: 'showOverlay'
          },
          '*'
        );
      }
    });
  }

  endMatch() {
    console.log('endMatch');

    Meteor.call('setMatchEnd', error => {
      if (error) {
        return console.log(error);
      }
    });
    Meteor.call('UserPresence:setDefaultStatus', 'online');
  }

  checkMatchEnd() {
    console.log('checkMatchEnd');
    if (!Meteor.userId()) {
      return;
    }
    Meteor.call('checkMatchEnd', (error, matchEnded) => {
      if (error) {
        return console.log(error);
      }
      if (matchEnded) {
        Meteor.call('UserPresence:setDefaultStatus', 'online');
      }
    });
  }
}
