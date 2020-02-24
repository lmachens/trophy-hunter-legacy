import React, { PureComponent } from 'react';

import { Perk } from './_Perk';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { withStyles } from '../../../generic';

const styles = {
  perk: {
    marginRight: 2
  }
};

class Perks extends PureComponent {
  render() {
    const { classes, className, perks } = this.props;
    const perkIds = get(perks, 'perkIds') || [];
    return (
      <div className={className}>
        {[...Array(6)].map((item, index) => (
          <Perk className={classes.perk} key={index} perkId={perkIds[index]} />
        ))}
      </div>
    );
  }
}

Perks.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  perks: PropTypes.object
};

const enhanced = withStyles(styles)(Perks);
export { enhanced as Perks };
