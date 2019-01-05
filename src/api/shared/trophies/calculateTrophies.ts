import getTrophiesCategory from './getTrophiesCategory';
import trophies from './';

const calculateTrophies = ({
  extendedMatchResult,
  trophyHunter = {
    features: {}
  }
}) => {
  const trophiesCategory = getTrophiesCategory(extendedMatchResult.queueId);
  // we check for every trophy (obtained trophies included)
  const trophiesObtained = Object.values(trophies).filter(trophy => {
    return trophy.obtainedCheck({
      match: extendedMatchResult,
      trophyHunter,
      trophiesCategory
    });
  });

  if (trophiesObtained.length === 0) {
    const cake = trophies['cake'];
    trophiesObtained.push(cake);
  }

  return trophiesObtained;
};

export default calculateTrophies;
