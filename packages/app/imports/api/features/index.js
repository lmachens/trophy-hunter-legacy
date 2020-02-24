import assists from './definitions/assists';
import deaths from './definitions/deaths';
import firstBloodStreak from './definitions/firstBloodStreak';
import firstTurretPartStreak from './definitions/firstTurretPartStreak';
import games from './definitions/games';
import kills from './definitions/kills';
import largestKillingSpree from './definitions/largestKillingSpree';
import leastDeathsStreak from './definitions/leastDeathsStreak';
import leastVisionScoreStreak from './definitions/leastVisionScoreStreak';
import maxCrit from './definitions/maxCrit';
import maxGold from './definitions/maxGold';
import maxKills from './definitions/maxKills';
import maxMinions from './definitions/maxMinions';
import mostCSStreak from './definitions/mostCSStreak';
import mostDamageStreak from './definitions/mostDamageStreak';
import mostDeathsStreak from './definitions/mostDeathsStreak';
import mostDestructsStreak from './definitions/mostDestructsStreak';
import mostJnglCSStreak from './definitions/mostJnglCSStreak';
import mostKPStreak from './definitions/mostKPStreak';
import mostKillsStreak from './definitions/mostKillsStreak';
import mostVisionScoreStreak from './definitions/mostVisionScoreStreak';
import trophyHuntStreak from './definitions/trophyHuntStreak';
import winStreak from './definitions/winStreak';
import wins from './definitions/wins';

export const features = {
  kills,
  deaths,
  assists,
  firstBloodStreak,
  firstTurretPartStreak,
  games,
  largestKillingSpree,
  leastDeathsStreak,
  leastVisionScoreStreak,
  maxCrit,
  maxGold,
  maxKills,
  maxMinions,
  mostCSStreak,
  mostDamageStreak,
  mostDestructsStreak,
  mostJnglCSStreak,
  mostDeathsStreak,
  mostKillsStreak,
  mostKPStreak,
  mostVisionScoreStreak,
  trophyHuntStreak,
  wins,
  winStreak
};

export const featuresWithBadge = Object.values(features).filter(feature => feature.badge);
