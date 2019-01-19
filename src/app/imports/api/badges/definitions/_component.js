import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { SvgIcon } from '@material-ui/core';
import classNames from 'classnames';
import { withStyles } from '../../../ui/components/generic';

const styles = {
  badge: {
    width: 24,
    height: 24
  }
};
class Badge extends PureComponent {
  render() {
    const { classes, className, children } = this.props;

    return (
      <SvgIcon className={classNames(classes.badge, className)} viewBox="0 0 512 512">
        {children}
      </SvgIcon>
    );
  }
}

Badge.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

const enhanced = withStyles(styles)(Badge);

export { enhanced as Badge };
