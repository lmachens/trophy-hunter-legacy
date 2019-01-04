import React from 'react';
import TreeComplete from './TreeComplete';
import { storiesOf } from '@storybook/react';

storiesOf('Components', module).add('TreeComplete', () => (
  <TreeComplete count={2} name="blitzcrank1" />
));
