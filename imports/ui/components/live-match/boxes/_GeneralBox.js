import { Box, BoxContent } from '../../generic';
import React, { PureComponent } from 'react';

import { General } from './partials/_General';
import PropTypes from 'prop-types';

class GeneralBox extends PureComponent {
  render() {
    const { className } = this.props;
    return (
      <Box className={className}>
        <BoxContent>
          <General />
        </BoxContent>
      </Box>
    );
  }
}

GeneralBox.propTypes = {
  className: PropTypes.string,
  renderBackground: PropTypes.bool
};

export { GeneralBox };
