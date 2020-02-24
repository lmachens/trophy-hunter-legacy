import { Box, BoxBackground, BoxContent, withStyles } from '../../generic';
import React, { PureComponent } from 'react';

import { Heatmap } from './partials/_Heatmap';
import PropTypes from 'prop-types';

const styles = {
  background: {
    width: 1222,
    backgroundPositionX: -1000,
    backgroundPositionY: '50%'
  }
};
class HeatmapBox extends PureComponent {
  render() {
    const { classes, className } = this.props;
    return (
      <Box className={className}>
        <BoxBackground
          className={classes.background}
          imageUrl="https://universe-meeps.leagueoflegends.com/v1/assets/images/factions/mount-targon_splash.jpg"
        />
        <BoxContent>
          <Heatmap />
        </BoxContent>
      </Box>
    );
  }
}

HeatmapBox.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

const enhanced = withStyles(styles)(HeatmapBox);
export { enhanced as HeatmapBox };
