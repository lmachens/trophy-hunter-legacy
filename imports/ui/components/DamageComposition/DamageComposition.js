import React from 'react';

import PropTypes from 'prop-types';
import { Tooltip } from '@material-ui/core';

const styles = {
  container: {
    height: '100%',
    position: 'relative',
    width: '100%'
  },
  damageComposition: {
    height: 20,
    position: 'relative',
    margin: 4,
    width: 'calc(100% - 70px)'
  },
  magical: {
    backgroundColor: '#2f6796',
    position: 'absolute',
    height: '100%'
  },
  physical: {
    backgroundColor: '#a71e1e',
    position: 'absolute',
    height: '100%'
  },
  true: {
    backgroundColor: '#9c9c9c',
    position: 'absolute',
    height: '100%'
  },
  unknown: {
    backgroundColor: 'rgb(55, 57, 60)',
    position: 'absolute',
    height: '100%'
  },
  legend: {
    position: 'absolute',
    top: 4,
    right: 4,
    fontSize: '0.9em',
    textAlign: 'left'
  },
  physicalLegend: {
    display: 'inline-block',
    backgroundColor: '#a71e1e',
    height: 9,
    width: 9
  },
  magicalLegend: {
    display: 'inline-block',
    backgroundColor: '#2f6796',
    height: 9,
    width: 9
  },
  trueLegend: {
    display: 'inline-block',
    backgroundColor: '#9c9c9c',
    height: 9,
    width: 9
  }
};

const DamageComposition = ({
  barStyle,
  participants,
  style,
  hideLegend = false,
  title = 'Damage Composition'
}) => {
  const damageComposition = participants.reduce(
    (tmpDamageComposition, participant) => {
      if (!participant.roleStats || !participant.roleStats.damageComposition) {
        return tmpDamageComposition;
      }
      const { totalTrue, totalMagical, totalPhysical } = participant.roleStats.damageComposition;
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
  const { totalTrue, totalMagical, totalPhysical } = damageComposition;
  const totalDamage = totalTrue + totalMagical + totalPhysical;
  const percentTrue = (totalTrue / totalDamage) * 100;
  const percentMagical = (totalMagical / totalDamage) * 100;
  const percentPhysical = (totalPhysical / totalDamage) * 100;
  const percentUnknown =
    isNaN(percentTrue) && isNaN(percentMagical) && isNaN(percentPhysical) ? 100 : 0;
  const physicalStyle = Object.assign(
    {
      width: `${percentPhysical}%`
    },
    styles.physical
  );
  const magicalStyle = Object.assign(
    {
      width: `${percentMagical}%`,
      left: `${percentPhysical}%`
    },
    styles.magical
  );
  const trueStyle = Object.assign(
    {
      right: 0,
      width: `${percentTrue}%`
    },
    styles.true
  );
  const unknownStyle = Object.assign(
    {
      right: 0,
      width: `${percentUnknown}%`
    },
    styles.unknown
  );

  const containerStyle = Object.assign({}, styles.container, style);
  const bar = (
    <div style={Object.assign({}, styles.damageComposition, barStyle)}>
      <Tooltip title={`${percentPhysical.toFixed(2)}% Physical`}>
        <div style={physicalStyle} />
      </Tooltip>
      <Tooltip title={`${percentMagical.toFixed(2)}% Magical`}>
        <div style={magicalStyle} />
      </Tooltip>
      <Tooltip title={`${percentTrue.toFixed(2)}% True`}>
        <div style={trueStyle} />
      </Tooltip>
      <Tooltip title={`${percentUnknown.toFixed(2)}% Unknown`}>
        <div style={unknownStyle} />
      </Tooltip>
    </div>
  );
  if (hideLegend) {
    return <div style={containerStyle}>{bar}</div>;
  }
  return (
    <div style={containerStyle}>
      {title}
      {bar}
      <div style={styles.legend}>
        <div>
          <div style={styles.physicalLegend} /> Physical
        </div>
        <div>
          <div style={styles.magicalLegend} /> Magical
        </div>
        <div>
          <div style={styles.trueLegend} /> True
        </div>
      </div>
    </div>
  );
};

DamageComposition.propTypes = {
  barStyle: PropTypes.object,
  participants: PropTypes.array.isRequired,
  style: PropTypes.object,
  hideLegend: PropTypes.bool,
  title: PropTypes.string
};

export default DamageComposition;
