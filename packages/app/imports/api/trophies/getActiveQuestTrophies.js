import trees, { activeTrees } from '/imports/shared/trees/index.ts';

import trophies from '/imports/shared/trophies/index.ts';

const uniq = arrArg => arrArg.filter((elem, pos, arr) => arr.indexOf(elem) === pos);

export default function(trophyHunter) {
  const questTrophyNames = [];
  const trophyHunterTreeProgress = trophyHunter ? trophyHunter.trees : {};
  const trophyHunterTrees = Object.keys(activeTrees);
  if (trophyHunter && trophyHunter.customTree) trophyHunterTrees.push(trophyHunter.customTree);

  trophyHunterTrees.forEach(name => {
    const tree = trees[name];
    const treeProgress = trophyHunterTreeProgress[name];
    // Does the Trophy Hunter has progress in this tree?
    if (!treeProgress) {
      // return trophies for first leaves
      const firstLeaves = tree.leaves.filter(leaf => leaf.parents.length === 0);
      const firstLeavesTrophyNames = firstLeaves.map(leaf => leaf.trophyName);
      questTrophyNames.push(...firstLeavesTrophyNames);
      return;
    }
    // Trophy Hunter has progress
    // Only check same level trees
    if (tree.level !== treeProgress.level) {
      return;
    }
    // Find obtainable trophies
    tree.leaves.forEach(leaf => {
      let obtainable;
      const trophyObtained =
        treeProgress.trophiesObtained && treeProgress.trophiesObtained.includes(leaf.trophyName);
      if (trophyObtained) {
        // already obtained
        obtainable = false;
      } else if (leaf.parents.length === 0) {
        // has no parents
        obtainable = true;
      } else {
        obtainable = leaf.parents.every(parent => {
          const trophyObtained =
            treeProgress.trophiesObtained && treeProgress.trophiesObtained.includes(parent);
          return trophyObtained;
        });
      }

      if (obtainable) {
        questTrophyNames.push(leaf.trophyName);
      }
    });
  });
  return uniq(questTrophyNames).map(
    questTrophyName => trophies[questTrophyName] || console.log(questTrophyName)
  );
}
