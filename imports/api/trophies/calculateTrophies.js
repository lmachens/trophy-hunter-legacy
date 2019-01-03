import { getTrophiesCategory } from './helpers/index';
import { trophies } from './trophies';

export const calculateTrophies = ({
  extendedMatchResult,
  trophyHunter = {
    features: {},
    trophiesObtained: []
  },
  obtainableTrophiesByTree = {}
}) => {
  const trophiesCategory = getTrophiesCategory(extendedMatchResult.queueId);
  // we check for every trophy (obtained trophies included)
  const trophiesObtained = [];
  Object.values(trophies).forEach(trophy => {
    const obtained = trophy.obtainedCheck({
      match: extendedMatchResult,
      trophyHunter,
      trophiesCategory
    });

    // is trophy obtained?
    if (obtained) {
      const isNew = !trophyHunter.trophiesObtained.find(
        trophyObtained => trophyObtained.name === trophy.name
      );

      const newInTrees = Object.entries(obtainableTrophiesByTree).reduce(
        (trees, [treeName, obtainableTrophies]) => {
          if (obtainableTrophies.includes(trophy.name)) return [...trees, treeName];
          return trees;
        },
        []
      );

      // remember obtained trophies
      trophiesObtained.push({
        trophy,
        isNew,
        newInTrees
      });
    }
  });

  if (trophiesObtained.length === 0) {
    const cake = trophies['cake'];
    const isNew = !trophyHunter.trophiesObtained.find(
      trophyObtained => trophyObtained.name === cake.name
    );
    trophiesObtained.push({
      trophy: cake,
      isNew,
      newInTrees: []
    });
  }

  return trophiesObtained;
};
