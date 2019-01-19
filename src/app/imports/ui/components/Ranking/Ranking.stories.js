import Ranking from './Ranking';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { SEASONS } from '../../../api/ranking/seasons';

const trophyHunter = {
  summonerName: 'Summoner',
  region: 'EUW',
  features: {
    games: 123,
    wins: 57
  },
  items: {},
  trees: {},
  rank: 104,
  score: 1002,
  trophiesObtained: []
};

storiesOf('Components', module).add('Ranking', () => (
  <Ranking season={SEASONS.ALLTIME} trophyHunter={trophyHunter} />
));
