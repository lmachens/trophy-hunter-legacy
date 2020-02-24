import '../client/index.css';

import { addDecorator, configure } from '@storybook/react';

import { Provider } from 'react-redux';
import React from 'react';
import StorybookLayout from '../imports/ui/layouts/StorybookLayout';
import { store } from '../imports/store/store';

const Decorator = fn => (
  <Provider store={store}>
    <StorybookLayout>{fn()}</StorybookLayout>
  </Provider>
);
addDecorator(Decorator);

const req = require.context('../imports', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
