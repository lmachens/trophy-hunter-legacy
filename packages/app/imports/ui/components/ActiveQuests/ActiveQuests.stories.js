import ActiveQuests from './ActiveQuests';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Components', module).add('ActiveQuests', () => (
  <ActiveQuests style={{ maxWidth: 800 }} trophyHunter={null} />
));
