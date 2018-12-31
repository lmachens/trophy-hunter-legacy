console.log('overwolf index');

import './register-api';
import '../../client/errors';

import { BrowserRouter, Switch } from 'react-router-dom';
import { persistor, store } from '/imports/store/store';
import { trackAccount, trackConnectionStatus } from '/imports/store/actions';
import universeTheme, { theme } from '/imports/ui/layouts/universeTheme';

import { Meteor } from 'meteor/meteor';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { Reload } from 'meteor/reload';
import app from '../app';
import getMuiTheme from '@material-ui/core/styles';
import overlay from '../overlay';

// Set url to origin to avoid CSP issues when the origin and ROOT_URL are different.
// For example when you visit app.th.gl and the ROOT_URL is app.loltrophyhunter.de.
// When dynamic import connects to app.loltrophyhunter.de and finds a different version, it will tries to load this version again and again.
Meteor.absoluteUrl.defaultOptions.rootUrl = location.origin;

ReactGA.initialize(Meteor.settings.public.trackingId);
store.dispatch(trackAccount());
store.dispatch(trackConnectionStatus());

// Defines the app hierachy with redux provider and browser router
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <MuiThemeProvider muiTheme={getMuiTheme(universeTheme)}>
            <Switch>
              {overlay}
              {app}
            </Switch>
          </MuiThemeProvider>
        </MuiThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

// Render a React element into the DOM in the app container
ReactDOM.render(<App />, document.getElementById('app'));

Reload._onMigrate('OverlayLayout', () => {
  console.log('Reload._onMigrate');
  return [true];
});
