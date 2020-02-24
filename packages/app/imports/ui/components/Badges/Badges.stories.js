import Badges from './Badges';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Components', module).add('Badges', () => (
  <Badges
    items={{
      admin: true,
      patreon: {
        badge: true
      }
    }}
  />
));
