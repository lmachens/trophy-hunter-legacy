import { ConnectionStatus } from './ConnectionStatus';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Components', module).add('ConnectionStatus', () => (
  <ConnectionStatus connected={false} retryTime={Date.now() + 10000} />
));
