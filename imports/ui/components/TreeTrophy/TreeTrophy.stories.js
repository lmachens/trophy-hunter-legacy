import React from 'react';
import TreeTrophy from './TreeTrophy';
import { storiesOf } from '@storybook/react';

storiesOf('Components', module).add('TreeTrophy', () => (
  <TreeTrophy progress={0.7} treeTrophyName="cassiopeia1" />
));
