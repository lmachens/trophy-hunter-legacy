import { RadioButton, RadioButtonGroup } from '../generic';

import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  role: {
    display: 'inline-block',
    textAlign: 'left',
    width: '24px',
    margin: 4
  }
};

const RoleSelector = ({ valueSelected, onChange, selectableValues }) => (
  <RadioButtonGroup name="role" onChange={onChange} valueSelected={valueSelected}>
    {['TOP', 'JUNGLE', 'MIDDLE', 'DUO_CARRY', 'DUO_SUPPORT'].map(role => {
      return (
        <RadioButton
          checkedIcon={<img src={`/images/${role}_icon.png`} style={{ width: '24px' }} />}
          data-for="itemTooltip"
          data-tip={role}
          disabled={!selectableValues.includes(role)}
          key={role}
          style={styles.role}
          uncheckedIcon={
            <img
              src={`/images/${role}_icon.png`}
              style={{ width: '24px', filter: 'grayscale(100%)' }}
            />
          }
          value={role}
        />
      );
    })}
  </RadioButtonGroup>
);

RoleSelector.propTypes = {
  valueSelected: PropTypes.any,
  onChange: PropTypes.func,
  selectableValues: PropTypes.array.isRequired
};

export default RoleSelector;
