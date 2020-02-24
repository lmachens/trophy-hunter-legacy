import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

class PatreonAccount extends PureComponent {
  render() {
    const { patreon } = this.props;
    if (!patreon) return null;

    return (
      <div>
        Connected to <b>{patreon.fullName}</b>
      </div>
    );
  }
}

PatreonAccount.propTypes = {
  patreon: PropTypes.object
};

export default PatreonAccount;
