import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { Typography } from './_Typography';
import { withStyles } from './_Styles';

const styles = theme => ({
  container: {
    textAlign: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(10)
  },
  content: {
    fontSize: theme.typography.pxToRem(10)
  }
});

class TooltipTitle extends PureComponent {
  render() {
    const { classes, title, content } = this.props;

    return (
      <div className={classes.container}>
        {typeof title === 'string' ? (
          <Typography className={classes.title}>{title}</Typography>
        ) : (
          title
        )}
        {typeof content === 'string' ? (
          <Typography className={classes.content}>{content}</Typography>
        ) : (
          content
        )}
      </div>
    );
  }
}

TooltipTitle.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

const enhanced = withStyles(styles)(TooltipTitle);
export { enhanced as TooltipTitle };
