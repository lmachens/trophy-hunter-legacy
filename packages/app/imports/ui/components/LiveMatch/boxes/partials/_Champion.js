import { AvatarV2, withStyles } from '../../../generic';
import React, { PureComponent } from 'react';
import champions, { unknownChamp } from '/imports/shared/riot-api/champions.ts';

import PropTypes from 'prop-types';
import { Tooltip } from '../../../generic/Tooltip';
import { TooltipTitle } from '../../../generic/TooltipTitle';
import { getChampionSquare } from '../../../../../api/riot-api/staticData';

const styles = {
  avatar: {}
};

class Champion extends PureComponent {
  render() {
    const { className, championId } = this.props;
    const champion = champions[championId] || unknownChamp;
    return (
      <Tooltip
        title={<TooltipTitle content={null} title={`${champion.name} - ${champion.title}`} />}
      >
        <AvatarV2 className={className} src={getChampionSquare({ championId })} />
      </Tooltip>
    );
  }
}

Champion.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  championId: PropTypes.number
};

const enhanced = withStyles(styles)(Champion);

export { enhanced as Champion };
