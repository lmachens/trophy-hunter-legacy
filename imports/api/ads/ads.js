import { Meteor } from 'meteor/meteor';
import ReactGA from 'react-ga';
import { Tracker } from 'meteor/tracker';
import TrophyHunters from '/imports/api/trophy-hunters/trophyHunters';

class Ads {
  constructor() {
    window.addEventListener('message', this.handleMessage);

    Tracker.autorun(computation => {
      this.trophyHunterComputation = computation;

      const userId = Meteor.userId();
      let trophyHunter;
      if (userId) {
        trophyHunter = TrophyHunters.findOne(
          {
            userId
          },
          {
            fields: {
              'items.hideAds': 1,
              status: 1,
              'items.patreon': 1
            }
          }
        );
      }
      this.handleTrophyHunterChange(trophyHunter);
    });
  }

  destroy() {
    window.removeEventListener('message', this.handleMessage);

    if (this.trophyHunterComputation) {
      this.trophyHunterComputation.stop();
    }
  }

  handleMessage = event => {
    const status = this.trophyHunter ? this.trophyHunter.status : 'online';

    const data = event.data;
    if (data.overwolf) {
      const { type } = data;

      switch (type) {
        case 'adsPlayerLoaded':
          ReactGA.event({
            category: 'Ads',
            action: 'adsPlayerLoaded',
            nonInteraction: true
          });
          break;

        case 'adsPlay':
          break;

        case 'adsImpression':
          ReactGA.event({
            category: 'Ads',
            action: 'adsImpression',
            nonInteraction: true
          });
          break;

        case 'closeAds':
          ReactGA.event({
            category: 'Ads',
            action: 'closeAds',
            nonInteraction: false
          });
          this.showVideoAds(status);
          break;

        case 'adsComplete':
          this.showVideoAds(status);
          break;

        case 'adsError':
          ReactGA.event({
            category: 'Ads',
            action: 'adsError',
            nonInteraction: false
          });
          this.showVideoAds(status);
          break;
      }
    }
  };

  handleTrophyHunterChange(trophyHunter) {
    const status = this.trophyHunter ? this.trophyHunter.status : 'online';
    let nextStatus;
    if (trophyHunter) {
      this.trophyHunter = trophyHunter;
      nextStatus = trophyHunter.status;
    } else {
      delete this.trophyHunter;
      nextStatus = 'online';
    }

    if (status !== nextStatus) {
      this.showVideoAds(nextStatus);
    }
  }

  showVideoAds(status) {
    const items = this.trophyHunter && this.trophyHunter.items;
    const hideAds = items && items.hideAds;
    const isPatreon = items && items.patreon && items.patreon.hideAds;
    if (hideAds || isPatreon) {
      parent.window.postMessage(
        {
          overwolf: true,
          type: 'avoidMoreAds'
        },
        '*'
      );
      return;
    }

    if (status === 'away' || status === 'online') {
      parent.window.postMessage(
        {
          overwolf: true,
          type: 'showAds'
        },
        '*'
      );
    } else if (status === 'ingame') {
      parent.window.postMessage(
        {
          overwolf: true,
          type: 'avoidMoreAds'
        },
        '*'
      );
    }
  }
}

export default Ads;
