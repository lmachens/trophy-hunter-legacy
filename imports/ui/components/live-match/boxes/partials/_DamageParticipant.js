import React, { PureComponent } from 'react';

import { Damage } from './_Damage';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';

class DamageParticipant extends PureComponent {
  render() {
    const { className, totalTrue, totalMagical, totalPhysical } = this.props;

    return (
      <Damage
        className={className}
        totalMagical={totalMagical}
        totalPhysical={totalPhysical}
        totalTrue={totalTrue}
      />
    );
  }
}

DamageParticipant.propTypes = {
  className: PropTypes.string,
  totalTrue: PropTypes.number,
  totalMagical: PropTypes.number,
  totalPhysical: PropTypes.number,
  championId: PropTypes.number,
  role: PropTypes.string
};

const mapStateToProps = ({ championStatsByChampionId }, { championId, role }) => {
  const damageComposition = get(
    championStatsByChampionId,
    `${championId}.stats.${role}.damageComposition`
  ) || {
    totalTrue: 0,
    totalMagical: 0,
    totalPhysical: 0
  };
  return {
    ...damageComposition
  };
};

const enhanced = connect(mapStateToProps)(DamageParticipant);

export { enhanced as DamageParticipant };
