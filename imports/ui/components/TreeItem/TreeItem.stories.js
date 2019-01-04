import React from 'react';
import TreeItem from './TreeItem';
import { storiesOf } from '@storybook/react';
import zoe1 from '../../../api/trees/definitions/zoe1';
import assassinsCreed from '../../../api/trophies/definitions/assassinsCreed';

storiesOf('Components', module).add('TreeItem', () => (
  <TreeItem parents={[]} tree={zoe1} trophy={assassinsCreed} />
));
