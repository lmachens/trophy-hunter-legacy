import Level from '/imports/ui/components/Level';
import Match from '/imports/ui/pages/match/Match';
import ProjectLayout from '/imports/ui/layouts/ProjectLayout';
import Ranking from '/imports/ui/pages/ranking/Ranking';
import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from '/imports/ui/pages/welcome/WelcomePage';
import withRouteParams from '../withRouteParams';
import LegacyMatch from '/imports/ui/pages/match/LegacyMatch';

const Trees = props => <Level {...props} tab="trees" />;
const Trophies = props => <Level {...props} tab="trophies" />;
const Matches = props => <Level {...props} tab="matches" />;
const Playstyle = props => <Level {...props} tab="playstyle" />;

export default (
  <ProjectLayout>
    <Route component={Welcome} exact path="/" />
    <Route component={Ranking} exact path="/ranking" />
    <Route component={withRouteParams(Trees)} exact path="/profile/:userId/trees" />
    <Route component={withRouteParams(Trophies)} exact path="/profile/:userId/trophies" />
    <Route component={withRouteParams(Matches)} exact path="/profile/:userId/matches" />
    <Route component={withRouteParams(Playstyle)} exact path="/profile/:userId/playstyle" />
    <Route
      component={withRouteParams(LegacyMatch)}
      exact
      key="/match/:platformId/:matchId/:summonerId"
      path="/match/:platformId/:matchId/:summonerId"
    />
    <Route
      component={withRouteParams(Match)}
      exact
      key="/game/:platformId/:matchId/:summonerName"
      path="/game/:platformId/:matchId/:summonerName"
    />
  </ProjectLayout>
);
