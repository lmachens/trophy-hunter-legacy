import SummonerLevel from './SummonerLevel';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Components', module).add('SummonerLevel', () => {
  return <SummonerLevel level={34} />;
});
