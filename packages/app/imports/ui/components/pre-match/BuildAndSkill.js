import BuildOrder from '../BuildOrder';
import PropTypes from 'prop-types';
import React from 'react';
import SkillOrder from '../SkillOrder';

const styles = {
  root: {
    margin: '0 10px'
  },
  buildOrder: {
    width: 340,
    height: 120
  },
  skillOrder: {
    width: 340
  }
};

const BuildAndSkill = ({ champion, role, setValue }) => (
  <div style={styles.root}>
    <BuildOrder champion={champion} role={role} setValue={setValue} style={styles.buildOrder} />
    <SkillOrder
      champion={champion}
      hideBackground={true}
      role={role}
      setValue={setValue}
      style={styles.skillOrder}
    />
  </div>
);

BuildAndSkill.propTypes = {
  champion: PropTypes.object.isRequired,
  role: PropTypes.string.isRequired,
  setValue: PropTypes.string.isRequired
};

export default BuildAndSkill;
