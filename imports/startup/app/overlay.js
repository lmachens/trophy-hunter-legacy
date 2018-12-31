import LiveMatch from '../../ui/pages/LiveMatch';
import OverlayLayout from '/imports/ui/layouts/OverlayLayout';
import React from 'react';
import { Route } from 'react-router-dom';
import withRouteParams from '../withRouteParams';

export default (
  <Route path="/overlay">
    <OverlayLayout>
      <Route component={LiveMatch} exact path="/overlay" />
      <Route component={withRouteParams(LiveMatch)} exact path="/overlay/:region/:accountId" />
      <Route
        component={withRouteParams(LiveMatch)}
        exact
        path="/overlay/:region/:accountId/:gameId"
      />
    </OverlayLayout>
  </Route>
);
