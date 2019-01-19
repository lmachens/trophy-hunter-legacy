import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { Tooltip } from '../../../generic/Tooltip';
import { TooltipTitle } from '../../../generic/TooltipTitle';
import { badges } from '../../../../../api/badges';
import { withStyles } from '../../../generic';

const styles = {
  badge: {
    marginRight: 2
  }
};

class Badges extends PureComponent {
  render() {
    const { classes, className, participantBadges } = this.props;

    return (
      <div className={className}>
        {Object.entries(participantBadges).map(([key, value]) => {
          const badge = badges[key];
          const Component = badge.component;
          return (
            <Tooltip
              key={key}
              title={<TooltipTitle content={badge.description(value)} title={badge.title} />}
            >
              <span className={classes.badge}>
                <Component />
              </span>
            </Tooltip>
          );
        })}
      </div>
    );
  }
}

Badges.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  participantBadges: PropTypes.object.isRequired
};

const enhanced = withStyles(styles)(Badges);
export { enhanced as Badges };
