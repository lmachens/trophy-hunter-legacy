<<<<<<< HEAD
import {
  BackIcon,
  ForwardIcon,
  MinimizeIcon,
  NavigationCloseIcon,
  QuestionIcon,
  SettingsIcon,
  TwitterIcon
} from '../components/icons';
import { Dialog, IconButton, RaisedButton } from '../components/generic';
import React, { Component } from 'react';
import SettingsDialog, { TABS } from '../components/settings/SettingsDialog';

import { Accounts } from 'meteor/accounts-base';
import Ads from '../../api/ads/ads';
import ConnectionStatus from '../components/ConnectionStatus';
import Encyclopedia from '../components/encyclopedia/Encyclopedia';
import LoadingComponent from '../components/loading/LoadingComponent';
import { Meteor } from 'meteor/meteor';
import OnlineTrophyHunters from '../components/OnlineTrophyHunters';
import Overwolf from '../../api/overwolf/overwolf';
import PreMatchOverlay from '../components/pre-match/PreMatchOverlay';
import PropTypes from 'prop-types';
import RiotVersion from '../components/RiotVersion';
import Sidebar from '../components/sidebar/Sidebar';
import Status from '../components/Status';
import TrophyHunters from '/imports/api/trophy-hunters/trophyHunters';
import Update from '../components/_Update';
import { UserPresence } from 'meteor/lmachens:user-presence';
import { connect } from 'react-redux';
import universeTheme from './universeTheme';
import { Tooltip } from '../components/generic/Tooltip';
import ErrorBoundary from '../components/ErrorBoundary';

const styles = {
  app: {
    color: universeTheme.palette.textColor,
    backgroundColor: '#0a0a0c',
    userSelect: 'none',
    fontSize: universeTheme.fontSize,
    overflow: 'hidden'
  },
  header: {
    height: '28px',
    paddingTop: '8px',
    textAlign: 'center',
    zIndex: 1600
  },
  logo: {
    position: 'absolute',
    top: 0,
    left: '3px',
    height: '30px'
  },
  close: {
    padding: 0,
    height: '24px',
    width: '24px',
    position: 'fixed',
    top: '4px',
    right: '6px'
  },
  version: {
    position: 'absolute',
    top: 10,
    left: 132
  },
  main: {
    height: 'calc(100% - 28px)',
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    margin: '2px',
    padding: '2px',
    backgroundColor: universeTheme.palette.canvasColor,
    border: `1px solid ${universeTheme.palette.borderColor}`
  },
  content: {
    flex: 1,
    overflow: 'hidden'
  },
  sidebar: {
    margin: '2px',
    width: '220px',
    backgroundColor: universeTheme.palette.canvasColor
  },
  hide: {
    padding: 0,
    height: '24px',
    width: '24px',
    position: 'fixed',
    top: 2,
    right: 4
  },
  options: {
    padding: 0,
    height: '24px',
    width: '24px',
    position: 'fixed',
    top: 2,
    right: 29
  },
  help: {
    padding: 0,
    height: '24px',
    width: '24px',
    position: 'fixed',
    top: 2,
    right: 54
  },
  minimize: {
    padding: 0,
    height: '24px',
    width: '24px',
    position: 'fixed',
    top: 2,
    right: 79
  },
  back: {
    padding: 0,
    height: '24px',
    width: '24px',
    position: 'fixed',
    top: 2,
    right: 129
  },
  forward: {
    padding: 0,
    height: '24px',
    width: '24px',
    position: 'fixed',
    top: 2,
    right: 104
  }
};

const serverVersion = Meteor.settings && Meteor.settings.public.version;

class AppLayout extends Component {
  state = {
    error: false,
    initialized: false
  };

  constructor(props) {
    super(props);

    console.log('App started. App version:', serverVersion);

    this.overwolf = new Overwolf({
      onError: ({ error, reason, message }) => {
        this.setState({
          error: {
            title: error || 'Unknown Error',
            content: reason || message
          }
        });
      }
    });

    Accounts.onLogin(() => {
      this.handleLogin();
    });
    const userId = Meteor.userId();
    const loggingIn = Meteor.loggingIn();
    if (userId && !loggingIn) {
      this.handleLogin();
    } else if (!userId && !loggingIn) {
      this.initialize();
    } else {
      setTimeout(() => {
        this.initialize();
      }, 6000);
    }
  }

  handleLogin() {
    console.log('handleLogin');
    Meteor.call('handleLogin', serverVersion, (error, data) => {
      if (error) {
        console.error('handleLogin', error);
      }
      if (data) {
        if (data.isIngame) {
          Meteor.call('UserPresence:setDefaultStatus', 'ingame');
        } else {
          Meteor.call('UserPresence:setDefaultStatus', 'online');
        }
      }
      const lastVersion = data && data.lastVersion;
      this.setState({
        lastVersion
      });
    });
    this.initialize();
  }

  initialize = () => {
    if (!this.state.initialized) {
      this.setState({
        initialized: true
      });
      parent.window.postMessage(
        {
          overwolf: true,
          type: 'initialized'
        },
        '*'
      );
    }
  };

  UNSAFE_componentWillMount() {
    if (!UserPresence.initialized) {
      // Time of inactivity to set user as away automaticly
      UserPresence.awayTime = 3 * 60 * 1000;
      // Start monitor for user activity
      UserPresence.start(TrophyHunters);
      UserPresence.initialized = true;
    }
    this.ads = new Ads();
  }

  componentDidMount() {
    document.addEventListener('mousemove', UserPresence.setOnline);
    document.addEventListener('mousedown', UserPresence.setOnline);
    document.addEventListener('touchend', UserPresence.setOnline);
    document.addEventListener('keydown', UserPresence.setOnline);
    window.addEventListener('focus', UserPresence.setOnline);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', UserPresence.setOnline);
    document.removeEventListener('mousedown', UserPresence.setOnline);
    document.removeEventListener('touchend', UserPresence.setOnline);
    document.removeEventListener('keydown', UserPresence.setOnline);
    window.removeEventListener('focus', UserPresence.setOnline);

    this.ads.destroy();
  }

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
        type: 'close'
      },
      '*'
    );
  };

  handleMinimizeClick = () => {
    parent.window.postMessage(
      {
        overwolf: true,
        type: 'hideWindow'
      },
      '*'
    );
  };

  handleHelpClick = () => {
    this.settingsDialog.open(TABS.HELP);
  };

  handleSettingsClick = () => {
    this.settingsDialog.open(TABS.SETTINGS);
  };

  render() {
    console.log('render app');
    const { loggingIn, userId } = this.props;
    const { initialized, lastVersion } = this.state;
    const loading = loggingIn && !userId;
    return (
      <div className="app" style={styles.app}>
        {initialized && lastVersion && userId && <Update lastVersion={lastVersion} />}
        <ConnectionStatus />
        <Encyclopedia />
        <PreMatchOverlay />
        <SettingsDialog ref={value => (this.settingsDialog = value)} />
        {loading && <LoadingComponent />}
        {!loading && (
          <header onMouseDown={this.handleMouseDown} style={styles.header}>
            <img src="/images/logo.png" style={styles.logo} />
            <span style={styles.version}>v{serverVersion}</span>
            <Status style={{ position: 'absolute', left: 200, top: 6 }} />
            <RiotVersion style={{ position: 'absolute', left: '226px', top: '11px' }} />
            <OnlineTrophyHunters style={{ position: 'absolute', left: '326px', top: '11px' }} />
            <div style={{ position: 'absolute', top: 4, right: 228, zIndex: 1 }}>
              <RaisedButton
                buttonStyle={{ width: 63 }}
                label="Dev Blog"
                labelStyle={{
                  color: 'white',
                  textTransform: 'none',
                  fontSize: 'inherit',
                  padding: 0
                }}
                onClick={() => window.open('https://medium.com/@trophyhunter')}
                secondary={true}
                style={{ height: 20, width: '100%', minWidth: 63 }}
              />
            </div>
            <div style={{ position: 'absolute', top: 4, right: 155, zIndex: 1 }}>
              <RaisedButton
                buttonStyle={{ backgroundColor: '#1b95e0', width: 63 }}
                icon={<TwitterIcon style={{ margin: 0, width: 20, height: 20 }} />}
                label="Follow"
                labelStyle={{
                  color: 'white',
                  textTransform: 'none',
                  fontSize: 'inherit',
                  paddingLeft: 0,
                  paddingRight: 4
                }}
                onClick={() => window.open('https://twitter.com/LolTrophyHunter?ref_src=app')}
                secondary={true}
                style={{ height: 20, width: '100%', minWidth: 63 }}
              />
            </div>
            <Tooltip title="Back">
              <IconButton onClick={() => window.history.back()} style={styles.back}>
                <BackIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Forward">
              <IconButton onClick={() => window.history.forward()} style={styles.forward}>
                <ForwardIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Minimize">
              <IconButton onClick={this.handleMinimizeClick} style={styles.minimize}>
                <MinimizeIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Help">
              <IconButton
                iconStyle={{ height: '16px' }}
                onClick={this.handleHelpClick}
                style={styles.help}
              >
                <QuestionIcon />
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
            <Tooltip title="Close">
              <IconButton onClick={this.handleCloseClick} style={styles.hide}>
                <NavigationCloseIcon />
              </IconButton>
            </Tooltip>
          </header>
        )}
        {!loading && (
          <main style={styles.main}>
            <div style={styles.sidebar}>
              <Sidebar />
            </div>

            <div style={styles.container}>
              <div style={styles.content}>
                <ErrorBoundary>{this.props.children}</ErrorBoundary>
              </div>
            </div>

            {this.state.error && (
              <Dialog
                onClose={() => this.setState({ error: false })}
                open={true}
                title={this.state.error.title}
              >
                {this.state.error.content}
              </Dialog>
            )}
          </main>
        )}
      </div>
    );
  }

  handleHeaderMouseDown() {
    parent.window.postMessage(
      {
        overwolf: true,
        type: 'dragMove'
      },
      '*'
    );
  }

  handleMinimizeClick() {
    parent.window.postMessage(
      {
        overwolf: true,
        type: 'minimize'
      },
      '*'
    );
  }

  handleCloseClick() {
    parent.window.postMessage(
      {
        overwolf: true,
        type: 'close'
      },
      '*'
    );
  }
}

AppLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  loggingIn: PropTypes.bool,
  userId: PropTypes.string
};

const mapStateToProps = ({ account: { userId, loggingIn } }) => {
  return { userId, loggingIn };
};

export default connect(mapStateToProps)(AppLayout);
=======
import {
  BackIcon,
  ForwardIcon,
  MinimizeIcon,
  NavigationCloseIcon,
  QuestionIcon,
  SettingsIcon,
  TwitterIcon
} from '../components/icons';
import { Dialog, IconButton, RaisedButton } from '../components/generic';
import React, { Component } from 'react';
import SettingsDialog from '../components/SettingsDialog';

import { Accounts } from 'meteor/accounts-base';
import Ads from '../../api/ads/ads';
import ConnectionStatus from '../components/ConnectionStatus';
import Encyclopedia from '../components/encyclopedia/Encyclopedia';
import LoadingComponent from '../components/loading/LoadingComponent';
import { Meteor } from 'meteor/meteor';
import OnlineTrophyHunters from '../components/OnlineTrophyHunters';
import Overwolf from '../../api/overwolf/overwolf';
import PreMatchOverlay from '../components/pre-match/PreMatchOverlay';
import PropTypes from 'prop-types';
import RiotVersion from '../components/RiotVersion';
import Sidebar from '../components/sidebar/Sidebar';
import Status from '../components/Status';
import TrophyHunters from '/imports/api/trophy-hunters/trophyHunters';
import Update from '../components/Update';
import { UserPresence } from 'meteor/lmachens:user-presence';
import { connect } from 'react-redux';
import universeTheme from './universeTheme';
import { Tooltip } from '../components/generic/Tooltip';
import ErrorBoundary from '../components/ErrorBoundary';
import TABS from '../../api/settings/tabs';

const styles = {
  app: {
    color: universeTheme.palette.textColor,
    backgroundColor: '#0a0a0c',
    userSelect: 'none',
    fontSize: universeTheme.fontSize,
    overflow: 'hidden'
  },
  header: {
    height: '28px',
    paddingTop: '8px',
    textAlign: 'center',
    zIndex: 1600
  },
  logo: {
    position: 'absolute',
    top: 0,
    left: '3px',
    height: '30px'
  },
  close: {
    padding: 0,
    height: '24px',
    width: '24px',
    position: 'fixed',
    top: '4px',
    right: '6px'
  },
  version: {
    position: 'absolute',
    top: 10,
    left: 132
  },
  main: {
    height: 'calc(100% - 28px)',
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    margin: '2px',
    padding: '2px',
    backgroundColor: universeTheme.palette.canvasColor,
    border: `1px solid ${universeTheme.palette.borderColor}`
  },
  content: {
    flex: 1,
    overflow: 'hidden'
  },
  sidebar: {
    margin: '2px',
    width: '220px',
    backgroundColor: universeTheme.palette.canvasColor
  },
  hide: {
    padding: 0,
    height: '24px',
    width: '24px',
    position: 'fixed',
    top: 2,
    right: 4
  },
  options: {
    padding: 0,
    height: '24px',
    width: '24px',
    position: 'fixed',
    top: 2,
    right: 29
  },
  help: {
    padding: 0,
    height: '24px',
    width: '24px',
    position: 'fixed',
    top: 2,
    right: 54
  },
  minimize: {
    padding: 0,
    height: '24px',
    width: '24px',
    position: 'fixed',
    top: 2,
    right: 79
  },
  back: {
    padding: 0,
    height: '24px',
    width: '24px',
    position: 'fixed',
    top: 2,
    right: 129
  },
  forward: {
    padding: 0,
    height: '24px',
    width: '24px',
    position: 'fixed',
    top: 2,
    right: 104
  }
};

const serverVersion = Meteor.settings && Meteor.settings.public.version;

class AppLayout extends Component {
  state = {
    error: false,
    initialized: false
  };

  constructor(props) {
    super(props);

    console.log('App started. App version:', serverVersion);

    this.overwolf = new Overwolf({
      onError: ({ error, reason, message }) => {
        this.setState({
          error: {
            title: error || 'Unknown Error',
            content: reason || message
          }
        });
      }
    });

    Accounts.onLogin(() => {
      this.handleLogin();
    });
    const userId = Meteor.userId();
    const loggingIn = Meteor.loggingIn();
    if (userId && !loggingIn) {
      this.handleLogin();
    } else if (!userId && !loggingIn) {
      this.initialize();
    } else {
      setTimeout(() => {
        this.initialize();
      }, 6000);
    }
  }

  handleLogin() {
    console.log('handleLogin');
    Meteor.call('handleLogin', serverVersion, (error, data) => {
      if (error) {
        console.error('handleLogin', error);
      }
      if (data) {
        if (data.isIngame) {
          Meteor.call('UserPresence:setDefaultStatus', 'ingame');
        } else {
          Meteor.call('UserPresence:setDefaultStatus', 'online');
        }
      }
      const lastVersion = data && data.lastVersion;
      this.setState({
        lastVersion
      });
    });
    this.initialize();
  }

  initialize = () => {
    if (!this.state.initialized) {
      this.setState({
        initialized: true
      });
      parent.window.postMessage(
        {
          overwolf: true,
          type: 'initialized'
        },
        '*'
      );
    }
  };

  UNSAFE_componentWillMount() {
    if (!UserPresence.initialized) {
      // Time of inactivity to set user as away automaticly
      UserPresence.awayTime = 3 * 60 * 1000;
      // Start monitor for user activity
      UserPresence.start(TrophyHunters);
      UserPresence.initialized = true;
    }
    this.ads = new Ads();
  }

  componentDidMount() {
    document.addEventListener('mousemove', UserPresence.setOnline);
    document.addEventListener('mousedown', UserPresence.setOnline);
    document.addEventListener('touchend', UserPresence.setOnline);
    document.addEventListener('keydown', UserPresence.setOnline);
    window.addEventListener('focus', UserPresence.setOnline);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', UserPresence.setOnline);
    document.removeEventListener('mousedown', UserPresence.setOnline);
    document.removeEventListener('touchend', UserPresence.setOnline);
    document.removeEventListener('keydown', UserPresence.setOnline);
    window.removeEventListener('focus', UserPresence.setOnline);

    this.ads.destroy();
  }

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
        type: 'close'
      },
      '*'
    );
  };

  handleMinimizeClick = () => {
    parent.window.postMessage(
      {
        overwolf: true,
        type: 'hideWindow'
      },
      '*'
    );
  };

  handleHelpClick = () => {
    this.settingsDialog.open(TABS.HELP);
  };

  handleSettingsClick = () => {
    this.settingsDialog.open(TABS.SETTINGS);
  };

  render() {
    console.log('render app');
    const { loggingIn, userId } = this.props;
    const { initialized, lastVersion } = this.state;
    const loading = loggingIn && !userId;
    return (
      <div className="app" style={styles.app}>
        {initialized && lastVersion && userId && <Update lastVersion={lastVersion} />}
        <ConnectionStatus />
        <Encyclopedia />
        <PreMatchOverlay />
        <SettingsDialog ref={value => (this.settingsDialog = value)} />
        {loading && <LoadingComponent />}
        {!loading && (
          <header onMouseDown={this.handleMouseDown} style={styles.header}>
            <img src="/images/logo.png" style={styles.logo} />
            <span style={styles.version}>v{serverVersion}</span>
            <Status style={{ position: 'absolute', left: 200, top: 6 }} />
            <RiotVersion style={{ position: 'absolute', left: '226px', top: '11px' }} />
            <OnlineTrophyHunters style={{ position: 'absolute', left: '326px', top: '11px' }} />
            <div style={{ position: 'absolute', top: 4, right: 228, zIndex: 1 }}>
              <RaisedButton
                buttonStyle={{ width: 63 }}
                label="Dev Blog"
                labelStyle={{
                  color: 'white',
                  textTransform: 'none',
                  fontSize: 'inherit',
                  padding: 0
                }}
                onClick={() => window.open('https://medium.com/@trophyhunter')}
                secondary={true}
                style={{ height: 20, width: '100%', minWidth: 63 }}
              />
            </div>
            <div style={{ position: 'absolute', top: 4, right: 155, zIndex: 1 }}>
              <RaisedButton
                buttonStyle={{ backgroundColor: '#1b95e0', width: 63 }}
                icon={<TwitterIcon style={{ margin: 0, width: 20, height: 20 }} />}
                label="Follow"
                labelStyle={{
                  color: 'white',
                  textTransform: 'none',
                  fontSize: 'inherit',
                  paddingLeft: 0,
                  paddingRight: 4
                }}
                onClick={() => window.open('https://twitter.com/LolTrophyHunter?ref_src=app')}
                secondary={true}
                style={{ height: 20, width: '100%', minWidth: 63 }}
              />
            </div>
            <Tooltip title="Back">
              <IconButton onClick={() => window.history.back()} style={styles.back}>
                <BackIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Forward">
              <IconButton onClick={() => window.history.forward()} style={styles.forward}>
                <ForwardIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Minimize">
              <IconButton onClick={this.handleMinimizeClick} style={styles.minimize}>
                <MinimizeIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Help">
              <IconButton
                iconStyle={{ height: '16px' }}
                onClick={this.handleHelpClick}
                style={styles.help}
              >
                <QuestionIcon />
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
            <Tooltip title="Close">
              <IconButton onClick={this.handleCloseClick} style={styles.hide}>
                <NavigationCloseIcon />
              </IconButton>
            </Tooltip>
          </header>
        )}
        {!loading && (
          <main style={styles.main}>
            <div style={styles.sidebar}>
              <Sidebar />
            </div>

            <div style={styles.container}>
              <div style={styles.content}>
                <ErrorBoundary>{this.props.children}</ErrorBoundary>
              </div>
            </div>

            {this.state.error && (
              <Dialog
                onClose={() => this.setState({ error: false })}
                open={true}
                title={this.state.error.title}
              >
                {this.state.error.content}
              </Dialog>
            )}
          </main>
        )}
      </div>
    );
  }

  handleHeaderMouseDown() {
    parent.window.postMessage(
      {
        overwolf: true,
        type: 'dragMove'
      },
      '*'
    );
  }

  handleMinimizeClick() {
    parent.window.postMessage(
      {
        overwolf: true,
        type: 'minimize'
      },
      '*'
    );
  }

  handleCloseClick() {
    parent.window.postMessage(
      {
        overwolf: true,
        type: 'close'
      },
      '*'
    );
  }
}

AppLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  loggingIn: PropTypes.bool,
  userId: PropTypes.string
};

const mapStateToProps = ({ account: { userId, loggingIn } }) => {
  return { userId, loggingIn };
};

export default connect(mapStateToProps)(AppLayout);
>>>>>>> 29ec3419c319c073306284bec7fb078920d58708
