import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '../../../generic';
import { Tooltip } from '../../../generic/Tooltip';

const styles = {
  damage: {
    height: '100%',
    width: '100%',
    position: 'relative'
  },
  magical: {
    backgroundColor: '#2f6796',
    position: 'absolute',
    height: '100%'
  },
  physical: {
    backgroundColor: '#a71e1e',
    position: 'absolute',
    height: '100%'
  },
  true: {
    backgroundColor: '#9c9c9c',
    position: 'absolute',
    height: '100%'
  },
  unknown: {
    backgroundColor: 'rgb(55, 57, 60)',
    position: 'absolute',
    height: '100%'
  }
};

class Damage extends PureComponent {
  render() {
    const { classes, className, totalTrue = 0, totalMagical = 0, totalPhysical = 0 } = this.props;

    const totalDamage = totalTrue + totalMagical + totalPhysical;
    const percentTrue = (totalTrue / totalDamage) * 100;
    const percentMagical = (totalMagical / totalDamage) * 100;
    const percentPhysical = (totalPhysical / totalDamage) * 100;
    const percentUnknown =
      isNaN(percentTrue) && isNaN(percentMagical) && isNaN(percentPhysical) ? 100 : 0;

    return (
      <div className={classNames(classes.damage, className)}>
        <Tooltip title={`${percentPhysical.toFixed(2)}% Physical`}>
          <div
            className={classes.physical}
            style={{
              width: `${percentPhysical}%`
            }}
          />
        </Tooltip>
        <Tooltip title={`${percentMagical.toFixed(2)}% Magical`}>
          <div
            className={classes.magical}
            style={{
              width: `${percentMagical}%`,
              left: `${percentPhysical}%`
            }}
          />
        </Tooltip>
        <Tooltip title={`${percentTrue.toFixed(2)}% True`}>
          <div
            className={classes.true}
            style={{
              right: 0,
              width: `${percentTrue}%`
            }}
          />
        </Tooltip>
        <Tooltip title={`Unknown Damage Composition`}>
          <div
            className={classes.unknown}
            style={{
              right: 0,
              width: `${percentUnknown}%`
            }}
          />
        </Tooltip>
      </div>
    );
  }
}

Damage.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  totalTrue: PropTypes.number,
  totalMagical: PropTypes.number,
  totalPhysical: PropTypes.number
};

const enhanced = withStyles(styles)(Damage);

export { enhanced as Damage };
