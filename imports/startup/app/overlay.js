import LiveMatch from '../../ui/pages/LiveMatch';
import LegacyLiveMatch from '../../ui/pages/LiveMatch/LegacyLiveMatch';
import OverlayLayout from '/imports/ui/layouts/OverlayLayout';
import React from 'react';
import { Route } from 'react-router-dom';
import withRouteParams from '../withRouteParams';

export default (
  <Route path="/overlay">
    <OverlayLayout>
      <Route component={LiveMatch} exact path="/overlay" />
      <Route
        component={withRouteParams(LegacyLiveMatch)}
        exact
        path="/overlay/:region/:accountId"
      />
    </OverlayLayout>
  </Route>
);
