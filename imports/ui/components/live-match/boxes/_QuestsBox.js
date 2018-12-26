import { Box, BoxBackground, BoxContent, BoxTitle, withStyles } from '../../generic';
import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { Quests } from './partials/_Quests';

const styles = {
  background: {
    width: 1222,
    backgroundPositionX: 0,
    backgroundPositionY: '50%'
  }
};
class QuestsBox extends PureComponent {
  render() {
    const { classes, className } = this.props;

    return (
      <Box className={className}>
        <BoxBackground
          className={classes.background}
          imageUrl="https://universe-meeps.leagueoflegends.com/v1/assets/images/factions/mount-targon_splash.jpg"
        />
        <BoxTitle>Active Quests</BoxTitle>
        <BoxContent>
          <Quests />
        </BoxContent>
      </Box>
    );
  }
}

QuestsBox.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

const enhanced = withStyles(styles)(QuestsBox);
export { enhanced as QuestsBox };
