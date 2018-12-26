import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../../../generic';
import { Tooltip } from '../../../generic/Tooltip';
import { TooltipTitle } from '../../../generic/TooltipTitle';
import { getChampionAbility, getPassiveAbility } from '../../../../../api/riot-api/staticData';

const styles = {
  skill: {
    width: 16,
    height: 16,
    verticalAlign: 'sub'
  }
};

class Skill extends PureComponent {
  render() {
    const { classes, skill, isPassive } = this.props;

    return (
      <Tooltip title={<TooltipTitle content={skill.sanitizedDescription} title={skill.name} />}>
        <img
          className={classes.skill}
          src={
            isPassive ? getPassiveAbility(skill.image.full) : getChampionAbility(skill.image.full)
          }
        />
      </Tooltip>
    );
  }
}

Skill.propTypes = {
  classes: PropTypes.object.isRequired,
  skill: PropTypes.object.isRequired,
  isPassive: PropTypes.bool
};

const enhanced = withStyles(styles)(Skill);

export { enhanced as Skill };
