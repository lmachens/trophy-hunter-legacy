import TrophyHunterAutoComplete from './TrophyHunterAutoComplete';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Components', module).add('TrophyHunterAutoComplete', () => {
  return <TrophyHunterAutoComplete value={123} />;
});
