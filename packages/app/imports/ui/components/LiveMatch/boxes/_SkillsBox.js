import { Box, BoxBackground, BoxContent, withStyles } from '../../generic';
import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { Skills } from './partials/_Skills';

const styles = {
  background: {
    width: 1222,
    backgroundPositionX: -750,
    backgroundPositionY: '50%'
  }
};
class SkillsBox extends PureComponent {
  render() {
    const { classes, className } = this.props;
    return (
      <Box className={className}>
        <BoxBackground
          className={classes.background}
          imageUrl="https://universe-meeps.leagueoflegends.com/v1/assets/images/factions/mount-targon_splash.jpg"
        />
        <BoxContent>
          <Skills />
        </BoxContent>
      </Box>
    );
  }
}

SkillsBox.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

const enhanced = withStyles(styles)(SkillsBox);
export { enhanced as SkillsBox };
