import Trophy from './Trophy';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { trophies } from '../../../api/trophies';

const trophy = trophies.appetizer;

storiesOf('Components', module).add('Trophy', () => <Trophy forceColors trophy={trophy} />);
