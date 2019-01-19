import React from 'react';

import { Chip, Tooltip } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
  chip: {
    display: 'inline-flex',
    verticalAlign: 'top',
    marginRight: 8,
    color: '#fff'
  },
  admin: {
    backgroundColor: '#963333'
  },
  patreon: {
    backgroundColor: '#F96854'
  }
};

const Badges = ({ items }) => {
  if (!items) return null;

  return (
    <>
      {items.admin && (
        <Tooltip title="This user is an admin">
          <Chip label="Admin" style={{ ...styles.chip, ...styles.admin }} />
        </Tooltip>
      )}
      {items.patreon && items.patreon.badge && (
        <Tooltip title="This user supports us via Patreon">
          <Chip label="Patron" style={{ ...styles.chip, ...styles.patreon }} />
        </Tooltip>
      )}
    </>
  );
};

Badges.propTypes = {
  items: PropTypes.object
};

export default Badges;
