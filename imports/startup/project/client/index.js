console.log('project index');

import { BrowserRouter, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Reload } from 'meteor/reload';
import project from '../project';
import { store } from '/imports/store/store';
import { trackAccount } from '/imports/store/actions';

store.dispatch(trackAccount());

// Defines the app hierachy with redux provider and browser router
const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>{project}</Switch>
    </Provider>
  </BrowserRouter>
);

// Render a React element into the DOM in the app container
ReactDOM.render(<App />, document.getElementById('app'));

Reload._onMigrate('OverlayLayout', () => {
  console.log('Reload._onMigrate');
  return [true];
});
