import { features } from '/imports/api/features';
import calculateLastMatches from './calculateLastMatches.ts';

const calculateFeatures = (extendedMatch, trophyHunter) => {
  const obtainedFeatures = {};

  Object.values(features).forEach(feature => {
    if (feature.type === 'straightMax') {
      const join = trophyHunter.features[feature.join] || 0;
      if (!trophyHunter.features[feature.name]) {
        trophyHunter.features[feature.name] = join;
      } else if (join > trophyHunter.features[feature.name]) {
        trophyHunter.features[feature.name] = join;
      }
      return;
    }

    const obtained = extendedMatch.participant.stats[feature.property];
    obtainedFeatures[feature.name] = obtained;

    switch (feature.type) {
      case 'increase':
        if (!trophyHunter.features[feature.name]) {
          trophyHunter.features[feature.name] = obtained;
        } else {
          trophyHunter.features[feature.name] += obtained;
        }
        break;
      case 'straight':
        if (!obtained) {
          trophyHunter.features[feature.name] = 0;
        } else if (!trophyHunter.features[feature.name]) {
          trophyHunter.features[feature.name] = obtained;
        } else {
          trophyHunter.features[feature.name] += obtained;
        }
        break;
      case 'max':
        if (!trophyHunter.features[feature.name]) {
          trophyHunter.features[feature.name] = obtained;
        } else if (obtained > trophyHunter.features[feature.name]) {
          trophyHunter.features[feature.name] = obtained;
        }
        break;
      case 'min':
        if (!trophyHunter.features[feature.name]) {
          trophyHunter.features[feature.name] = obtained;
        } else if (obtained < trophyHunter.features[feature.name]) {
          trophyHunter.features[feature.name] = obtained;
        }
        break;
    }
  });

  const lastMatches = calculateLastMatches({
    participant: extendedMatch.participant,
    lastMatches: trophyHunter.features.lastMatches
  });
  obtainedFeatures.lastMatches = lastMatches;
  trophyHunter.features.lastMatches = lastMatches;

  return obtainedFeatures;
};

export default calculateFeatures;
