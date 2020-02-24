import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Tooltip } from '../generic/Tooltip';
import { getPerkImage, getUnknown } from '../../../api/riot-api/staticData';
import perkStyles from '/imports/shared/riot-api/perk-styles.ts';
import perks from '/imports/shared/riot-api/perks.ts';
import { TooltipTitle } from '../generic/TooltipTitle';

const styles = {
  perk: {
    width: 100
  }
};

class Perk extends Component {
  render() {
    const { perkId } = this.props;

    const perk = perks[perkId] || perkStyles[perkId];

    return (
      <span>
        <Tooltip
          title={
            <TooltipTitle
              content={<span dangerouslySetInnerHTML={{ __html: perk.longDesc || perk.tooltip }} />}
              title={perk.name}
            />
          }
        >
          <img
            src={perk && perk.icon ? getPerkImage(perk.icon) : getUnknown()}
            style={styles.perk}
          />
        </Tooltip>
      </span>
    );
  }
}

Perk.propTypes = {
  perkId: PropTypes.number.isRequired
};

export default Perk;
