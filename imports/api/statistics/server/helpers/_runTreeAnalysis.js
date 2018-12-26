import TrophyHunters from '/imports/api/trophy-hunters/trophyHunters';
import { expiredTrees } from '/imports/api/trees/trees';

export const runTreeAnalysis = ({ trees, date, minimumTreesForAllTimeMention }) => {
  console.log('runTreeAnalysis');

  const obtainedTreesLastMonth = {};
  const completedTreesAlltime = {};
  const numberTreesCompletedLastMonth = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    honor: [],
    honor4: []
  };
  TrophyHunters.find({
    lastLogin: {
      $gte: date
    },
    'treeTrophyNamesObtained.0': { $exists: true }
  }).forEach(th => {
    //analyze trees from last month
    let count = 0;
    trees.forEach(tree => {
      if (th.treeTrophyNamesObtained.includes(tree)) {
        if (!obtainedTreesLastMonth[tree]) {
          obtainedTreesLastMonth[tree] = 0;
        }
        obtainedTreesLastMonth[tree] += 1;
        count++;
      }
    });
    if (count === 5) {
      numberTreesCompletedLastMonth.honor.push(th.summonerName);
    } else if (count === 4) {
      numberTreesCompletedLastMonth.honor4.push(th.summonerName);
    }
    numberTreesCompletedLastMonth[count] += 1;
  });
  TrophyHunters.find({ 'treeTrophyNamesObtained.0': { $exists: true } }).forEach(th => {
    const expiredTreesCompleted = Object.values(expiredTrees).filter(tree =>
      th.treeTrophyNamesObtained.includes(tree.name)
    ).length;
    //analyze all time trees
    if (expiredTreesCompleted >= minimumTreesForAllTimeMention) {
      if (!completedTreesAlltime[expiredTreesCompleted]) {
        completedTreesAlltime[expiredTreesCompleted] = [];
      }
      completedTreesAlltime[expiredTreesCompleted].push(th.summonerName);
    }
  });
  return {
    obtainedTreesLastMonth,
    numberTreesCompletedLastMonth,
    completedTreesAlltime
  };
};
