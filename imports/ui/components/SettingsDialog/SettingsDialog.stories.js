import SettingsDialog from './SettingsDialog';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Components', module).add('SettingsDialog', () => <SettingsDialog forceOpen={true} />);
