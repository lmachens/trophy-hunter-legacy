import AppLayout from '/imports/ui/layouts/AppLayout';
import Home from '/imports/ui/pages/home/Home';
import ItemsPage from '/imports/ui/pages/items/ItemsPage';
import Level from '/imports/ui/components/_Level';
import LoginPage from '../../ui/pages/login/LoginPage';
import Match from '/imports/ui/pages/match/Match';
import Ranking from '/imports/ui/pages/ranking/Ranking';
import React from 'react';
import { Route } from 'react-router-dom';
import withRouteParams from '../withRouteParams';
import withTracker from '../withTracker';

const Trees = props => <Level {...props} tab="trees" />;
const Trophies = props => <Level {...props} tab="trophies" />;
const Matches = props => <Level {...props} tab="matches" />;
const Playstyle = props => <Level {...props} tab="playstyle" />;

const AppLayoutWithTracker = withTracker(AppLayout);

export default (
  <Route path="/">
    <AppLayoutWithTracker>
      <Route component={Home} exact key="/" path="/" />
      <Route component={Trees} exact key="/trees" path="/trees" />
      <Route component={Trophies} exact key="/trophies" path="/trophies" />
      <Route component={Matches} exact key="/matches" path="/matches" />
      <Route component={Playstyle} exact key="/playstyle" path="/playstyle" />
      <Route component={Ranking} exact key="/ranking" path="/ranking" />
      <Route
        component={withRouteParams(Trees)}
        exact
        key="/profile/:userId/trees"
        path="/profile/:userId/trees"
      />
      <Route
        component={withRouteParams(Trophies)}
        exact
        key="/profile/:userId/trophies"
        path="/profile/:userId/trophies"
      />
      <Route
        component={withRouteParams(Matches)}
        exact
        key="/profile/:userId/matches"
        path="/profile/:userId/matches"
      />
      <Route
        component={withRouteParams(Playstyle)}
        exact
        key="/profile/:userId/playstyle"
        path="/profile/:userId/playstyle"
      />
      <Route
        component={withRouteParams(Match)}
        exact
        key="/match/:platformId/:matchId/:summonerId"
        path="/match/:platformId/:matchId/:summonerId"
      />
      <Route component={withRouteParams(ItemsPage)} exact key="/items" path="/items" />
      <Route component={withRouteParams(LoginPage)} exact key="/login" path="/login" />
    </AppLayoutWithTracker>
  </Route>
);
