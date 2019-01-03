export const DUO_SUPPORT = 'DUO_SUPPORT';
export const DUO_CARRY = 'DUO_CARRY';
export const MIDDLE = 'MIDDLE';
export const JUNGLE = 'JUNGLE';
export const TOP = 'TOP';

export const normalizeRole = ({ role, lane }) => {
  switch (role) {
    case 'NONE':
      if (lane === 'JUNGLE') return JUNGLE;
      break;
    case 'DUO_CARRY':
      if (lane === 'BOTTOM') return DUO_CARRY;
      break;
    case 'DUO_SUPPORT':
      if (lane === 'BOTTOM') return DUO_SUPPORT;
      break;
    case 'SOLO':
      if (lane === 'TOP') return TOP;
      if (lane === 'MIDDLE') return MIDDLE;
      break;
    case 'DUO':
      break;
  }
  return null;
};
