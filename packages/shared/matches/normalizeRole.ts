const DUO_SUPPORT = 'DUO_SUPPORT';
const DUO_CARRY = 'DUO_CARRY';
const MIDDLE = 'MIDDLE';
const JUNGLE = 'JUNGLE';
const TOP = 'TOP';

const normalizeRole = ({ role, lane }) => {
  if (lane === 'JUNGLE') {
    return JUNGLE;
  }

  switch (role) {
    case 'DUO':
    case 'DUO_CARRY':
      if (lane === 'MIDDLE') {
        return MIDDLE;
      }
      if (lane === 'TOP') {
        return TOP;
      }
      return DUO_CARRY;
    case 'DUO_SUPPORT':
      return DUO_SUPPORT;
    case 'SOLO':
      if (lane === 'TOP') {
        return TOP;
      }
      if (lane === 'MIDDLE') {
        return MIDDLE;
      }
  }
  return TOP;
};

export default normalizeRole;
