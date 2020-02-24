import { FollowersChip } from './FollowersChip';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Components', module).add('FollowersChip', () => (
  <FollowersChip followers={['abc']} style={{}} />
));
