import { IconButtonV2, withStyles } from '../../../generic';
import { Tooltip } from '../../../generic/Tooltip';
import classNames from 'classnames';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const styles = {
  button: {
    width: 30,
    height: 30,
    padding: 0
  },
  role: {
    height: 24,
    width: 24
  },
  disabled: {
    filter: 'grayscale()'
  }
};

const labels = {
  TOP: 'Top',
  JUNGLE: 'Jungle',
  MIDDLE: 'Middle',
  DUO_CARRY: 'Duo Carry',
  DUO_SUPPORT: 'Duo Support'
};

class RoleImage extends PureComponent {
  render() {
    const { classes, role, onClick, disabled } = this.props;
    return (
      <Tooltip title={disabled ? `No stats for ${labels[role]} available` : labels[role]}>
        <span>
          <IconButtonV2 className={classes.button} disabled={disabled} onClick={onClick}>
            <img
              className={classNames(classes.role, { [classes.disabled]: disabled })}
              ref={element => (this.img = element)}
              src={`/images/${role}_icon.png`}
            />
          </IconButtonV2>
        </span>
      </Tooltip>
    );
  }
}

RoleImage.propTypes = {
  classes: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  role: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
};

const enhanced = withStyles(styles)(RoleImage);

export { enhanced as RoleImage };
