import { getFirstTimeBonus, getTreeBonus } from '/imports/api/trophies';

export const calculateSeasonPoints = trophies =>
  trophies.reduce((points, { trophy, isNew, newInTrees }) => {
    let newPoints = points + trophy.score;
    if (isNew) newPoints += getFirstTimeBonus(trophy);
    // it is possible that a trophy is in multiple trees. give bonus for every tree.
    newPoints += newInTrees.length * getTreeBonus(trophy);
    return newPoints;
  }, 0);
