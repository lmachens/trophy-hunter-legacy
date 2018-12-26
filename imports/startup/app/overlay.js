import { LiveMatchContainer } from '../../ui/pages/live-match';
import OverlayLayout from '/imports/ui/layouts/OverlayLayout';
import React from 'react';
import { Route } from 'react-router-dom';
import withRouteParams from '../withRouteParams';

export default (
  <Route path="/overlay">
    <OverlayLayout>
      <Route component={LiveMatchContainer} exact path="/overlay" />
      <Route
        component={withRouteParams(LiveMatchContainer)}
        exact
        path="/overlay/:region/:accountId"
      />
      <Route
        component={withRouteParams(LiveMatchContainer)}
        exact
        path="/overlay/:region/:accountId/:gameId"
      />
    </OverlayLayout>
  </Route>
);
