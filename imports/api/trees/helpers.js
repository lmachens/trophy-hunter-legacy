export const getTrophyNames = tree => {
  return tree.leaves.map(trophy => {
    return trophy.trophyName;
  });
};
