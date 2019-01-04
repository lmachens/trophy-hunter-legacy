import Items from './Items';
import React from 'react';
import { storiesOf } from '@storybook/react';

const stats = {
  item0: 1001,
  item1: 1004,
  item2: 1006,
  item3: 1011,
  item4: 1026,
  item5: 1027,
  item6: 1028
};

storiesOf('Components', module).add('Items', () => <Items stats={stats} />);
