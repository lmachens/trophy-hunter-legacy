import React, { Component } from 'react';

import Content from '../Content';
import { HTTP } from 'meteor/http';
import PropTypes from 'prop-types';

const styles = {
  container: {
    minHeight: 460
  }
};
class Changelog extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    HTTP.get('/CHANGELOG.md', (error, result) => {
      this.setState({ loading: false, changelog: result.content });
    });
  }

  render() {
    const { lastVersion } = this.props;
    const { changelog, loading } = this.state;

    return (
      <div style={styles.container}>
        {lastVersion && (
          <p>
            Your last version was <b>v{lastVersion}</b>
          </p>
        )}
        <div>
          {loading && 'Loading...'}
          {!loading && <Content message={changelog} />}
        </div>
      </div>
    );
  }
}

Changelog.propTypes = {
  lastVersion: PropTypes.string
};

export default Changelog;
