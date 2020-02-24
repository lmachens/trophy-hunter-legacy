import React, { FunctionComponent } from 'react';
import normalizeRole from '../../../shared/matches/normalizeRole';
import { Tooltip } from '../generic/Tooltip';

interface RoleProps {
  lane: string;
  role: string;
}

const labels = {
  TOP: 'Top',
  JUNGLE: 'Jungle',
  MIDDLE: 'Middle',
  DUO_CARRY: 'Duo Carry',
  DUO_SUPPORT: 'Duo Support'
};

const Role: FunctionComponent<RoleProps> = ({ lane, role }) => {
  const normalizedRole = normalizeRole({ lane, role });
  return (
    <Tooltip title={labels[normalizedRole]}>
      <img
        style={{
          width: 26,
          height: 26,
          verticalAlign: 'middle',
          margin: '0px 4px'
        }}
        src={`/images/${normalizedRole}_icon.png`}
      />
    </Tooltip>
  );
};

export default Role;
