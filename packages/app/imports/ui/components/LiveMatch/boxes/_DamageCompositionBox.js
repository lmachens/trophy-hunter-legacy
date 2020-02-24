import { Box, BoxContent } from '../../generic';
import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { DamageComposition } from './partials/_DamageComposition';

class DamageCompositionBox extends PureComponent {
  render() {
    const { className, teamId } = this.props;
    return (
      <Box className={className}>
        <BoxContent>
          <DamageComposition teamId={teamId} />
        </BoxContent>
      </Box>
    );
  }
}

DamageCompositionBox.propTypes = {
  className: PropTypes.string,
  teamId: PropTypes.number.isRequired
};

export { DamageCompositionBox };
