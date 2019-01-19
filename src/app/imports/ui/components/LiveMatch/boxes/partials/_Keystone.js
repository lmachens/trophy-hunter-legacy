import React, { PureComponent } from 'react';

import { Perk } from './_Perk';
import PropTypes from 'prop-types';
import { withStyles } from '../../../generic';

const styles = {};

class Keystone extends PureComponent {
  render() {
    const { classes, keystoneId, perkSubStyleId } = this.props;
    return (
      <div>
        <Perk className={classes.perk} perkId={keystoneId} />
        <Perk className={classes.perk} perkId={perkSubStyleId} />
      </div>
    );
  }
}

Keystone.propTypes = {
  classes: PropTypes.object.isRequired,
  keystoneId: PropTypes.number,
  perkSubStyleId: PropTypes.number
};

const enhanced = withStyles(styles)(Keystone);

export { enhanced as Keystone };
