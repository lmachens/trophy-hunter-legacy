import { Dialog } from '../generic';
import React from 'react';

class MaintenanceDialog extends React.Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;

    return (
      <Dialog onClose={this.handleClose} open={open} title="Maintenance">
        Trophy Hunter is currently undergoing maintenance. We deactivated the match history stats in
        the overlay.
      </Dialog>
    );
  }
}

export default MaintenanceDialog;
