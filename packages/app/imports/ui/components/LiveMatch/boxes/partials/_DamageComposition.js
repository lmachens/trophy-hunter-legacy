import get from 'lodash.get';
import React, { PureComponent } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '../../../generic';
import { Damage } from './_Damage';

const styles = {
  damage: {
    width: '100%',
    height: 20
  }
};

class DamageComposition extends PureComponent {
  render() {
    const { classes, totalTrue, totalMagical, totalPhysical } = this.props;

    return (
      <Damage
        className={classes.damage}
        totalMagical={totalMagical}
        totalPhysical={totalPhysical}
        totalTrue={totalTrue}
      />
    );
  }
}

DamageComposition.propTypes = {
  classes: PropTypes.object.isRequired,
  teamId: PropTypes.number.isRequired,
  totalTrue: PropTypes.number,
  totalMagical: PropTypes.number,
  totalPhysical: PropTypes.number
};

const mapStateToProps = (
  { championStatsByChampionId, liveMatch: { firstTeam, secondTeam } },
  { teamId }
) => {
  const team = teamId === 100 ? firstTeam : secondTeam;
  const damageComposition = team.reduce(
    (tmpDamageComposition, participant) => {
      const participantDamageComposition = get(
        championStatsByChampionId,
        `${participant.championId}.stats.${participant.role}.damageComposition`
      );
      if (!participantDamageComposition) {
        return tmpDamageComposition;
      }
      const { totalTrue, totalMagical, totalPhysical } = participantDamageComposition;
      return {
        totalTrue: tmpDamageComposition.totalTrue + totalTrue,
        totalMagical: tmpDamageComposition.totalMagical + totalMagical,
        totalPhysical: tmpDamageComposition.totalPhysical + totalPhysical
      };
    },
    {
      totalTrue: 0,
      totalMagical: 0,
      totalPhysical: 0
    }
  );
  return {
    ...damageComposition
  };
};

const enhanced = compose(
  withStyles(styles),
  connect(mapStateToProps)
)(DamageComposition);

export { enhanced as DamageComposition };
