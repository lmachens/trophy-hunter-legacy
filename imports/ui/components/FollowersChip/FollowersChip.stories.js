import { FollowersChip } from './FollowersChip';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('FollowersChip', module).add('FollowersChip', () => (
  <FollowersChip followers={['abc']} style={{}} />
));
