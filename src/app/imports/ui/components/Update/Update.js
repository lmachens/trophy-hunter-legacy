import { Button, Dialog } from '../generic';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Changelog from '../Changelog';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

const serverVersion = Meteor.settings && Meteor.settings.public.version;

class Update extends Component {
  handleClose = () => {
    Meteor.call('readChangelog');
  };

  render() {
    const { lastVersion, trophyHunter } = this.props;
    const open = serverVersion > trophyHunter.lastVersion;
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
  lastVersion: PropTypes.string,
  trophyHunter: PropTypes.object
};

const mapStateToProps = ({ account: { tropyHunter } }) => {
  return { tropyHunter };
};

export default connect(mapStateToProps)(Update);
