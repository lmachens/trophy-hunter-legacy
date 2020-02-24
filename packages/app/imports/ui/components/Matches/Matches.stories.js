import { Matches } from './Matches';
import React from 'react';
import { storiesOf } from '@storybook/react';

const lastMatches = [
  {
    championId: 69,
    game: {
      gameQueueConfigId: 440
    },
    checkedStatus: 'inProgress',
    createdAt: new Date(),
    isMatched: () => true
  }
];
storiesOf('Components', module).add('Matches', () => (
  <Matches count={1} lastMatches={lastMatches} />
));
