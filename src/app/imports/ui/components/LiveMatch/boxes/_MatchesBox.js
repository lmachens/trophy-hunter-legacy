import { Box, BoxBackground, BoxContent } from '../../generic';
import React, { PureComponent } from 'react';

import { Matches } from './partials/_Matches';
import PropTypes from 'prop-types';

class MatchesBox extends PureComponent {
  render() {
    const { className } = this.props;

    return (
      <Box className={className}>
        <BoxBackground imageUrl="https://universe-meeps.leagueoflegends.com/v1/assets/images/factions/mount-targon_splash.jpg" />
        <BoxContent>
          <Matches />
        </BoxContent>
      </Box>
    );
  }
}

MatchesBox.propTypes = {
  className: PropTypes.string,
  participant: PropTypes.object
};

export { MatchesBox };
