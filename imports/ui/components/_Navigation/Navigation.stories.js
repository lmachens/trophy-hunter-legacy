import Navigation from './Navigation';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Components', module).add('Navigation', () => (
  <Navigation
    items={[
      {
        label: 'Home',
        path: '/'
      },
      {
        label: 'Ranking',
        path: '/ranking'
      }
    ]}
  />
));
