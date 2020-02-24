import { Button, Dialog } from '../generic';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Changelog from '../Changelog';
import Help from '../Help';
import Patreon from '../patreon/Patreon';
import Settings from '../Settings';
import TABS from '../../../api/settings/tabs';

const styles = {
  content: {
    margin: '0 auto',
    height: 430
  }
};

class SettingsDialog extends Component {
  state = {
    open: this.props.forceOpen || false,
    tab: TABS.SETTINGS
  };

  UNSAFE_componentWillMount() {
    window.addEventListener('message', this.handleMessage);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleMessage);
  }

  open = (tab = TABS.SETTINGS) => {
    this.setState({ open: true, tab });
  };

  handleMessage = event => {
    const data = event.data;
    if (data.overwolf) {
      const { type } = data;

      switch (type) {
        case 'openHelp':
          this.open(TABS.HELP);
          break;
        case 'openSettings':
          this.open(TABS.SETTINGS);
          break;
        case 'openPatreon':
          this.open(TABS.PATREON);
          break;
      }
    }
  };

  handleClose = () => {
    this.setState({ open: false });
    parent.window.postMessage(
      {
        overwolf: true,
        type: 'closeSettings'
      },
      '*'
    );
  };

  handleClick = tab => () => {
    this.setState({ tab });
  };

  render() {
    const { open, tab } = this.state;

    return (
      <Dialog
        onClose={this.handleClose}
        open={open}
        title={
          <div style={{ clear: 'both' }}>
            <Button
              label="Help"
              onClick={this.handleClick(TABS.HELP)}
              primary={tab === TABS.HELP}
            />
            <Button
              label="Settings"
              onClick={this.handleClick(TABS.SETTINGS)}
              primary={tab === TABS.SETTINGS}
            />
            <Button
              label="Patreon"
              onClick={this.handleClick(TABS.PATREON)}
              primary={tab === TABS.PATREON}
            />
            <Button
              label="Changelog"
              onClick={this.handleClick(TABS.CHANGELOG)}
              primary={tab === TABS.CHANGELOG}
            />
          </div>
        }
      >
        <div style={styles.content}>
          {open && tab === TABS.HELP && <Help onClose={this.handleClose} />}
          {open && tab === TABS.SETTINGS && <Settings />}
          {open && tab === TABS.PATREON && <Patreon />}
          {open && tab === TABS.CHANGELOG && <Changelog />}
        </div>
      </Dialog>
    );
  }
}

SettingsDialog.propTypes = {
  forceOpen: PropTypes.bool
};

export default SettingsDialog;
