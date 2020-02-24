import Tree from './Tree';
import React from 'react';
import { storiesOf } from '@storybook/react';
import kalista1 from '/imports/shared/trees/definitions/kalista1';

storiesOf('Components', module).add('Tree', () => <Tree tree={kalista1} />);
