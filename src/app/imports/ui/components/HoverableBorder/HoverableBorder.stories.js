import HoverableBorder from './HoverableBorder';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Components', module).add('HoverableBorder', () => (
  <HoverableBorder>
    <div>Hover me</div>
  </HoverableBorder>
));
