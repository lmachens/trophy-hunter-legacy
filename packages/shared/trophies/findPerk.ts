const findPerk = ({ stats, perkId }: { stats: any; perkId: number }) => {
  for (let i = 0; i < 6; i++) {
    if (stats[`perk${i}`] === perkId) {
      return {
        var1: stats[`perk${i}Var1`],
        var2: stats[`perk${i}Var2`],
        var3: stats[`perk${i}Var3`]
      };
    }
  }
  return null;
};

export default findPerk;
