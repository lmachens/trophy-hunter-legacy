import ErrorBoundary from './ErrorBoundary';
import React from 'react';
import { storiesOf } from '@storybook/react';

const Error = () => {
  return a.b; // eslint-disable-line
};
storiesOf('Components', module).add('ErrorBoundary', () => (
  <ErrorBoundary>
    <Error />
  </ErrorBoundary>
));
