import React, { PureComponent } from 'react';
import { Typography, withStyles } from '../../../generic';

import PropTypes from 'prop-types';
import { Tooltip } from '../../../generic/Tooltip';

const styles = {};

class KDA extends PureComponent {
  render() {
    const { kills, deaths, assists } = this.props;

    return (
      <Tooltip title={`${kills} Kills ${deaths} Deaths ${assists} Assists`}>
        <Typography>
          {kills}/{deaths}/{assists}
        </Typography>
      </Tooltip>
    );
  }
}

KDA.propTypes = {
  classes: PropTypes.object.isRequired,
  kills: PropTypes.number,
  deaths: PropTypes.number,
  assists: PropTypes.number
};

const enhanced = withStyles(styles)(KDA);

export { enhanced as KDA };
