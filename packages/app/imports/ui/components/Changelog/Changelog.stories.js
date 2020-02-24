import Changelog from './Changelog';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Components', module).add('Changelog', () => <Changelog lastVersion="1.0.0" />);
