import React, { Component } from 'react';

import PropTypes from 'prop-types';
import RefreshIndicator from '@material-ui/core/CircularProgress';
import moment from 'moment';

const styles = {
  container: {
    position: 'relative',
    cursor: 'pointer'
  },
  refresh: {
    display: 'inline-block',
    position: 'relative'
  }
};

export class Refresh extends Component {
  render() {
    const { lastUpdated, isRefreshing, onClick, size = 18, error } = this.props;

    return (
      <span
        onClick={onClick}
        style={styles.container}
        title={
          lastUpdated &&
          `${error ? 'Error! ' : ''}Last updated at ${moment(lastUpdated).format('LTS')}`
        }
      >
        <RefreshIndicator
          left={0}
          loadingColor={error && '#a71e1e'}
          percentage={isRefreshing ? undefined : 100}
          size={size}
          status={isRefreshing ? 'loading' : 'ready'}
          style={styles.refresh}
          top={0}
        />
      </span>
    );
  }
}

Refresh.propTypes = {
  lastUpdated: PropTypes.number,
  isRefreshing: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.number,
  error: PropTypes.object
};
