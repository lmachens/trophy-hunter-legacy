import React, { PureComponent } from 'react';

import { Champion } from './_Champion';
import PropTypes from 'prop-types';
import { withStyles } from '../../../generic';

const styles = {
  banned: {
    filter: 'brightness(.5) grayscale(100%)',
    margin: '0 2'
  }
};

class BannedChampions extends PureComponent {
  render() {
    const { classes, bannedChampions } = this.props;

    return bannedChampions.map(({ championId }) => (
      <Champion championId={championId} className={classes.banned} key={championId} />
    ));
  }
}

BannedChampions.propTypes = {
  classes: PropTypes.object.isRequired,
  bannedChampions: PropTypes.array
};

const enhanced = withStyles(styles)(BannedChampions);

export { enhanced as BannedChampions };
