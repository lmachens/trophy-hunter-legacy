const DUO_SUPPORT = 'DUO_SUPPORT';
const DUO_CARRY = 'DUO_CARRY';
const MIDDLE = 'MIDDLE';
const JUNGLE = 'JUNGLE';
const TOP = 'TOP';

const normalizeRole = ({ role, lane }) => {
  switch (role) {
    case 'NONE':
      if (lane === 'JUNGLE') {
        return JUNGLE;
      }
      break;
    case 'DUO':
    case 'DUO_CARRY':
      if (lane === 'BOTTOM') {
        return DUO_CARRY;
      }
      break;
    case 'DUO_SUPPORT':
      if (lane === 'BOTTOM') {
        return DUO_SUPPORT;
      }
      break;
    case 'SOLO':
      if (lane === 'TOP') {
        return TOP;
      }
      if (lane === 'MIDDLE') {
        return MIDDLE;
      }
      break;
  }
  return null;
};

export default normalizeRole;
