import { Button, Dialog } from '../generic';
import React, { Component } from 'react';

import Changelog from '../Changelog';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

const serverVersion = Meteor.settings && Meteor.settings.public.version;

class Update extends Component {
  state = {
    open: false
  };

  componentDidMount() {
    const { lastVersion } = this.props;
    if (serverVersion > lastVersion) {
      this.setState({ open: true });
    }
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { lastVersion } = this.props;
    const { open } = this.state;

    return (
      <Dialog
        actions={<Button label="Close" onClick={this.handleClose} />}
        onClose={this.handleClose}
        open={open}
        title="Trophy Hunter has been updated"
      >
        <div>{open && <Changelog lastVersion={lastVersion} />}</div>
      </Dialog>
    );
  }
}

Update.propTypes = {
  lastVersion: PropTypes.string
};

export default Update;
