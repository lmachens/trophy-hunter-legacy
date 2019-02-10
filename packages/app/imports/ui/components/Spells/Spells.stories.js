import Spells from './Spells';
import React from 'react';
import { storiesOf } from '@storybook/react';

const participant = {
  spell1Id: 11,
  spell2Id: 7
};

storiesOf('Components', module).add('Spells', () => <Spells participant={participant} />);
