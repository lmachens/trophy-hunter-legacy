import React, { PureComponent } from 'react';
import { Typography, withStyles } from '../../../generic';

import PropTypes from 'prop-types';
import { Tooltip } from '../../../generic/Tooltip';

const styles = {
  championGames: {
    marginRight: 5,
    display: 'inline-block'
  },
  positive: {
    color: '#89f5a2',
    display: 'inline-block'
  },
  negative: {
    color: '#F17D59',
    display: 'inline-block'
  }
};

class WinRate extends PureComponent {
  render() {
    const { classes, className, stats } = this.props;

    const { championGames = 0, losses = 0, wins = 0 } = stats;
    const winrate = (wins / (wins + losses)) * 100 || 0;
    return (
      <Tooltip title={`${championGames} games and ${winrate.toFixed(0)}% winrate`}>
        <div className={className}>
          <Typography className={classes.championGames}>{championGames}</Typography>
          <Typography className={winrate < 50 ? classes.negative : classes.positive}>
            {winrate.toFixed(0)}%
          </Typography>
        </div>
      </Tooltip>
    );
  }
}

WinRate.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  stats: PropTypes.object.isRequired
};

const enhanced = withStyles(styles)(WinRate);
export { enhanced as WinRate };
