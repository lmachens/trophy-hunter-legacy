import { Box, BoxContent } from '../../generic';
import React, { PureComponent } from 'react';

import { Matchup } from './partials/_Matchup';
import PropTypes from 'prop-types';

class MatchupBox extends PureComponent {
  render() {
    const { className } = this.props;
    return (
      <Box className={className}>
        <BoxContent>
          <Matchup />
        </BoxContent>
      </Box>
    );
  }
}

MatchupBox.propTypes = {
  className: PropTypes.string
};

export { MatchupBox };
