import React from 'react';
import TreeTrophies from './TreeTrophies';
import { storiesOf } from '@storybook/react';

const trophyHunter = {
  treeTrophyNamesObtained: ['braum1', 'choGath1']
};

storiesOf('Components', module).add('TreeTrophies', () => (
  <TreeTrophies trophyHunter={trophyHunter} />
));
