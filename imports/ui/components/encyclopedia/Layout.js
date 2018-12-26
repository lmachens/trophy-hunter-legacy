import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  container: {
    display: 'flex',
    maxHeight: 'inherit',
    padding: 2,
    height: ' calc(100vh - 160px)'
  },
  navigation: {
    width: 300,
    overflow: 'auto'
  },
  content: {
    flex: 1,
    overflow: 'auto',
    margin: '0 20px',
    textAlign: 'center'
  }
};
const Layout = ({ navigation, content }) => (
  <div style={styles.container}>
    <div style={styles.navigation}>{navigation}</div>
    <div style={styles.content}>{content}</div>
  </div>
);

Layout.propTypes = {
  navigation: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired
};

export default Layout;
