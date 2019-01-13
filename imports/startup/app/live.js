import LiveMatch from '../../ui/pages/LiveMatch';
import OverlayLayout from '/imports/ui/layouts/OverlayLayout';
import React from 'react';
import { Route } from 'react-router-dom';
import withRouteParams from '../withRouteParams';

export default (
  <Route path="/live">
    <OverlayLayout>
      <Route component={LiveMatch} exact path="/live" />
      <Route component={withRouteParams(LiveMatch)} exact path="/live/:region/:summonerName" />
    </OverlayLayout>
  </Route>
);
