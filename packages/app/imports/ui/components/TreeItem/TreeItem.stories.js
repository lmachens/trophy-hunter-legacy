import React from 'react';
import TreeItem from './TreeItem';
import { storiesOf } from '@storybook/react';
import zoe1 from '/imports/shared/trees/definitions/zoe1';
import assassinsCreed from '/imports/shared/trophies/definitions/assassinsCreed.ts';

storiesOf('Components', module).add('TreeItem', () => (
  <TreeItem parents={[]} tree={zoe1} trophy={assassinsCreed} />
));
