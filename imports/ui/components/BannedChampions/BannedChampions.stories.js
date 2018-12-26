import BannedChampions from './BannedChampions';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('BannedChampions', module).add('Five', () => (
  <BannedChampions
    bannedChampions={[
      { championId: 69 },
      { championId: 2 },
      { championId: 9 },
      { championId: 29 },
      { championId: 39 }
    ]}
  />
));
