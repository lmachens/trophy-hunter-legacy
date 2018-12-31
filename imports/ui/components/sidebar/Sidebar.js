import Friends from './Friends';
import Profile from './Profile';
import PropTypes from 'prop-types';
import Ranking from './Ranking';
import React from 'react';
import RecentMatch from './RecentMatch';
import Store from './Store';
import Twitch from './Twitch';
import { withRouter } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    height: '100%',
    flexFlow: 'column'
  }
};

const Sidebar = props => (
  <div style={styles.container}>
    <Profile {...props} />
    <RecentMatch {...props} />
    <Twitch {...props} />
    <Ranking {...props} />
    <Store {...props} />
    <Friends containerStyle={{ flex: 1, overflowY: 'auto' }} {...props} />
  </div>
);

Sidebar.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(Sidebar);
