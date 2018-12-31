import CustomTreeSelector from './CustomTreeSelector';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Components', module).add('CustomTreeSelector', () => (
  <CustomTreeSelector onChange={() => {}} trophyHunter={null} />
));
