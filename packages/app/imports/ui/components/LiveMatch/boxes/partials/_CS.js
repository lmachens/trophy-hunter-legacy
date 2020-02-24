import React, { PureComponent } from 'react';
import { Typography, withStyles } from '../../../generic';

import PropTypes from 'prop-types';
import { Tooltip } from '../../../generic/Tooltip';

const styles = {};

class CS extends PureComponent {
  render() {
    const { totalMinionsKilled = 0, neutralMinionsKilled = 0 } = this.props;
    const totalCs = totalMinionsKilled + neutralMinionsKilled;
    return (
      <Tooltip title={`${totalMinionsKilled} Minions + ${neutralMinionsKilled} Jungle CS`}>
        <Typography>{totalCs} CS</Typography>
      </Tooltip>
    );
  }
}

CS.propTypes = {
  classes: PropTypes.object.isRequired,
  totalMinionsKilled: PropTypes.number,
  neutralMinionsKilled: PropTypes.number
};

const enhanced = withStyles(styles)(CS);

export { enhanced as CS };
