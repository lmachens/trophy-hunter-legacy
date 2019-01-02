<<<<<<< HEAD
import Twitch from './Twitch';
import React from 'react';
import { storiesOf } from '@storybook/react';

const twitchStreams = [
  {
    stream: {
      channel: {
        display_name: 'Some Stream',
        status: 'online'
      },
      viewers: 99,
      preview: {
        medium: 'no-preview.jpg'
      }
    },

    trophyHunter: {
      summonerName: 'Summoner',
      region: 'NA',
      items: {}
    }
  },
  {
    stream: {
      channel: {
        display_name: 'Other Stream',
        status: 'away'
      },
      viewers: 12,
      preview: {
        medium: 'no-preview.jpg'
      }
    },

    trophyHunter: {
      summonerName: 'Bot',
      region: 'EUW',
      items: {}
    }
  }
];

storiesOf('Components', module).add('Twitch', () => <Twitch twitchStreams={twitchStreams} />);
=======
import Twitch from './Twitch';
import React from 'react';
import { storiesOf } from '@storybook/react';

const twitchStreams = [
  {
    stream: {
      channel: {
        display_name: 'Some Stream',
        status: 'online'
      },
      viewers: 99,
      preview: {
        medium: 'no-preview.jpg'
      }
    },

    trophyHunter: {
      summonerName: 'Summoner',
      region: 'NA',
      items: {}
    }
  },
  {
    stream: {
      channel: {
        display_name: 'Other Stream',
        status: 'away'
      },
      viewers: 12,
      preview: {
        medium: 'no-preview.jpg'
      }
    },

    trophyHunter: {
      summonerName: 'Bot',
      region: 'EUW',
      items: {}
    }
  }
];

storiesOf('Components', module).add('Twitch', () => <Twitch twitchStreams={twitchStreams} />);
>>>>>>> 29ec3419c319c073306284bec7fb078920d58708
