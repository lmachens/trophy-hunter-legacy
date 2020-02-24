import { Box, BoxBackground, BoxContent, withStyles } from '../../generic';
import React, { PureComponent } from 'react';

import { Builds } from './partials/_Builds';
import PropTypes from 'prop-types';

const styles = {
  background: {
    width: 1222,
    backgroundPositionX: -250,
    backgroundPositionY: '50%'
  }
};
class BuildsBox extends PureComponent {
  render() {
    const { classes, className } = this.props;
    return (
      <Box className={className}>
        <BoxBackground
          className={classes.background}
          imageUrl="https://universe-meeps.leagueoflegends.com/v1/assets/images/factions/mount-targon_splash.jpg"
        />
        <BoxContent>
          <Builds />
        </BoxContent>
      </Box>
    );
  }
}

BuildsBox.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

const enhanced = withStyles(styles)(BuildsBox);
export { enhanced as BuildsBox };
