import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { SvgIconV2 } from '../../../ui/components/icons';
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
      <SvgIconV2 className={classNames(classes.badge, className)} viewBox="0 0 512 512">
        {children}
      </SvgIconV2>
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
