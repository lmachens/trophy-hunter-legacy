import React, { PureComponent } from 'react';

import Countdown from 'react-countdown-now';
import PropTypes from 'prop-types';
import { Snackbar } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reconnect } from '../../../store/actions';

export class ConnectionStatus extends PureComponent {
  handleReconnectClick = () => {
    const { reconnect } = this.props;
    reconnect();
  };

  handleRequestClose = () => {
    return false;
  };

  render() {
    const { connected, retryTime } = this.props;
    if (connected) return null;

    let message;
    if (retryTime) {
      message = (
        <>
          Reconnect in <Countdown date={retryTime} />.{' '}
          <a href="#" onClick={this.handleReconnectClick}>
            Retry now!
          </a>
        </>
      );
    } else {
      message = 'Reconnecting...';
    }
    return <Snackbar message={message} onClose={this.handleRequestClose} open={true} />;
  }
}

ConnectionStatus.propTypes = {
  connected: PropTypes.bool.isRequired,
  retryTime: PropTypes.number,
  reconnect: PropTypes.func.isRequired
};

const mapStateToProps = ({ connectionStatus }) => {
  return {
    ...connectionStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reconnect: bindActionCreators(reconnect, dispatch)
  };
};

const ConnectionStatusExtended = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectionStatus);

export default ConnectionStatusExtended;
