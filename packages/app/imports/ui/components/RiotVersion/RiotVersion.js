import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import universeTheme from '../../layouts/universeTheme';
import version from '../../../api/riot-api/version';

class RiotVersion extends PureComponent {
  render() {
    const { style } = this.props;

    return (
      <span style={style}>
        <span style={{ color: universeTheme.palette.secondaryTextColor, marginRight: '4px' }}>
          Riot API:
        </span>
        {version.substr(0, 7)}
      </span>
    );
  }
}

RiotVersion.propTypes = {
  style: PropTypes.object
};

export default RiotVersion;
