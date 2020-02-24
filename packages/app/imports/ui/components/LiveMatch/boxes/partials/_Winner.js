import React, { PureComponent } from 'react';
import { Typography, withStyles } from '../../../generic';

import PropTypes from 'prop-types';
import { Tooltip } from '../../../generic/Tooltip';

const styles = {
  win: {
    color: '#319fd9'
  },
  loss: {
    color: '#e44342'
  }
};

class Winner extends PureComponent {
  render() {
    const { classes, winner } = this.props;
    const label = winner ? 'Win' : 'Loss';
    return (
      <Tooltip title={label}>
        <Typography className={winner ? classes.win : classes.loss}>{label}</Typography>
      </Tooltip>
    );
  }
}

Winner.propTypes = {
  classes: PropTypes.object.isRequired,
  winner: PropTypes.bool
};

const enhanced = withStyles(styles)(Winner);

export { enhanced as Winner };
