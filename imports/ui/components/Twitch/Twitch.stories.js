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
