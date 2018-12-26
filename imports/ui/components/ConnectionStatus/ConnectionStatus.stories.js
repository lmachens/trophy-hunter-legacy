import { ConnectionStatus } from './ConnectionStatus';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('ConnectionStatus', module).add('Not connected', () => (
  <ConnectionStatus connected={false} retryTime={Date.now() + 10000} />
));
