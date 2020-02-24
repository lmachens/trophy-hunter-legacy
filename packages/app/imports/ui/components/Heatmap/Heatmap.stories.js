import Heatmap from './Heatmap';
import React from 'react';
import { storiesOf } from '@storybook/react';

const data = {
  data: []
};

storiesOf('Components', module).add('Heatmap', () => <Heatmap data={data} />);
