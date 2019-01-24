import RANGE from '../shared/champions/range';

const shapeshifters = ['Elise', 'Gnar', 'Kayle'];
const getRange = ({ id, stats }) => {
  if (shapeshifters.includes(id)) {
    return RANGE.SHAPE_SHIFTER;
  }
  if (stats.attackrange < 300) {
    return RANGE.MELEE;
  }
  return RANGE.RANGED;
};

export default getRange;
