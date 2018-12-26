import React, { PureComponent } from 'react';
import { getPerkImage, getUnknown } from '../../../../../api/riot-api/staticData';

import PropTypes from 'prop-types';
import { Tooltip } from '../../../generic/Tooltip';
import { TooltipTitle } from '../../../generic/TooltipTitle';
import classNames from 'classnames';
import perkStyles from '../../../../../api/riot-api/static/perk-styles';
import perks from '../../../../../api/riot-api/static/perks';
import { withStyles } from '../../../generic';

const styles = {
  perk: {
    height: 24,
    width: 24,
    borderRadius: '50%'
  }
};

class Perk extends PureComponent {
  render() {
    const { classes, className, perkId } = this.props;
    const perk = (perkId && (perks[perkId] || perkStyles[perkId])) || {
      name: 'Unknown Rune',
      shortDesc: ''
    };

    const src = perk && perk.icon ? getPerkImage(perk.icon) : getUnknown();

    return (
      <Tooltip title={<TooltipTitle content={perk.shortDesc} title={perk.name} />}>
        <img className={classNames(classes.perk, className)} src={src} />
      </Tooltip>
    );
  }
}

Perk.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  perkId: PropTypes.number
};

const enhanced = withStyles(styles)(Perk);
export { enhanced as Perk };
