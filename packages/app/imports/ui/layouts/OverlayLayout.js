import { RefreshIcon, NavigationCloseIcon, SettingsIcon } from '../components/icons';
import React, { Component } from 'react';

import ConnectionStatus from '../components/ConnectionStatus';
import Encyclopedia from '../components/encyclopedia/Encyclopedia';
import { IconButton } from '../components/generic';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import RiotVersion from '../components/RiotVersion';
import SettingsDialog from '../components/SettingsDialog';
import Status from '../components/Status';
import universeTheme from './universeTheme';
import { Tooltip } from '../components/generic/Tooltip';
import ErrorBoundary from '../components/ErrorBoundary';

const styles = {
  overlay: {
    color: universeTheme.palette.textColor,
    backgroundColor: '#0a0a0c',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    border: `1px solid ${universeTheme.palette.borderColor}`,
    userSelect: 'none',
    fontSize: universeTheme.fontSize,
    height: '100vh',
    overflow: 'hidden'
  },
  header: {
    height: 24,
    textAlign: 'center',
    paddingTop: 4,
    zIndex: 1600
  },
  content: {
    height: 'calc(100% - 28px)'
  },
  logo: {
    position: 'absolute',
    top: 0,
    left: '3px',
    height: 25
  },
  refresh: {
    padding: 0,
    height: '24px',
    width: '24px',
    position: 'fixed',
    top: 0,
    right: '56px'
  },
  options: {
    padding: 0,
    height: '24px',
    width: '24px',
    position: 'fixed',
    top: 0,
    right: '31px'
  },
  hide: {
    padding: 0,
    height: '24px',
    width: '24px',
    position: 'fixed',
    top: 0,
    right: '6px'
  },
  version: {
    position: 'absolute',
    top: 6,
    left: 114
  }
};

const serverVersion = Meteor.settings && Meteor.settings.public.version;

class OverlayLayout extends Component {
  state = {
    overlayHotkey: 'SHIFT+F2',
    appVersion: null
  };

  componentDidMount() {
    window.addEventListener('message', this.handleMessage);

    window.onfocus = () => {
      // simulate close settings to trigger hotkey read
      parent.window.postMessage(
        {
          overwolf: true,
          type: 'closeSettings'
        },
        '*'
      );
    };

    parent.window.postMessage(
      {
        overwolf: true,
        type: 'initialized'
      },
      '*'
    );
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleMessage);
  }

  handleMessage = event => {
    const data = event.data;
    if (data.overwolf) {
      const { type, message } = data;

      switch (type) {
        case 'version':
          this.setState({
            appVersion: message
          });
          break;

        case 'overlayHotkey':
          this.setState({
            overlayHotkey: message
          });
          break;
      }
    }
  };

  handleMouseDown = () => {
    parent.window.postMessage(
      {
        overwolf: true,
        type: 'mouseDown'
      },
      '*'
    );
  };

  handleCloseClick = () => {
    parent.window.postMessage(
      {
        overwolf: true,
        type: 'hideWindow'
      },
      '*'
    );
  };

  handleRefreshClick = () => {
    if (this.busyRefresh) {
      return;
    }
    this.busyRefresh = true;
    Meteor.call('startMatch', () => {
      this.busyRefresh = false;
      location.reload();
    });
  };

  handleSettingsClick = () => {
    this.settingsDialog.open();
  };

  render() {
    const { children } = this.props;

    return (
      <div id="overlay" style={styles.overlay}>
        <ConnectionStatus />
        <Encyclopedia />
        <SettingsDialog ref={value => (this.settingsDialog = value)} />
        <header onMouseDown={this.handleMouseDown} style={styles.header}>
          <img src="/images/logo.png" style={styles.logo} />
          <span style={styles.version}>v{serverVersion}</span>
          <Status style={{ position: 'absolute', left: 170, top: 2 }} />
          <RiotVersion style={{ position: 'absolute', left: 200, top: 6 }} />
          <span>Toggle Overlay: {this.state.overlayHotkey}</span>
          <Tooltip title="Refresh">
            <IconButton
              iconStyle={{ height: '16px' }}
              onClick={this.handleRefreshClick}
              style={styles.refresh}
            >
              <RefreshIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Settings">
            <IconButton
              iconStyle={{ height: '16px' }}
              onClick={this.handleSettingsClick}
              style={styles.options}
            >
              <SettingsIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Hide Overlay">
            <IconButton onClick={this.handleCloseClick} style={styles.hide}>
              <NavigationCloseIcon />
            </IconButton>
          </Tooltip>
        </header>
        <div style={styles.content}>
          <ErrorBoundary>{children}</ErrorBoundary>
        </div>
      </div>
    );
  }
}

OverlayLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default OverlayLayout;
