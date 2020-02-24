import { scoreFieldsBySeason } from '../ranking/seasons';

export const getName = trophyHunter => {
  return `${trophyHunter.summonerName} (${trophyHunter.region})`;
};

export const getWinRate = trophyHunter => {
  if (!trophyHunter.features.games) {
    return 1;
  }
  return trophyHunter.features.wins / trophyHunter.features.games;
};

export const getWinsLosses = trophyHunter => {
  let { wins, games } = trophyHunter.features;
  wins = wins === true ? 1 : wins || 0;
  games = games === true ? 1 : games || 0;
  return `${wins}W ${games - wins}L`;
};

export const getTrophiesCount = trophyHunter => {
  return (
    trophyHunter.virtualTrophiesObtainedCount ||
    (trophyHunter.trophiesObtained && trophyHunter.trophiesObtained.length)
  );
};

export const getBasicStats = trophyHunter => {
  return `${getWinsLosses(trophyHunter)} | ${getTrophiesCount(trophyHunter)} Trophies`;
};

export const getStats = (trophyHunter, season) => {
  const field = scoreFieldsBySeason[season];
  return `${trophyHunter[field]} LP | ${getWinsLosses(trophyHunter)} | ${getTrophiesCount(
    trophyHunter
  )} Trophies`;
};

export const getRecentKDA = trophyHunter => {
  const { kills, deaths, assists, games } = trophyHunter.features;
  return `${(kills / games).toFixed(1)}/${(deaths / games).toFixed(1)}/${(assists / games).toFixed(
    1
  )}`;
};

export const getSetting = function(trophyHunter /* level1, level2, ... levelN */) {
  let setting = trophyHunter.settings;
  for (var i = 1; i < arguments.length; i++) {
    if (!setting || !setting.hasOwnProperty(arguments[i])) {
      return undefined;
    }
    setting = setting[arguments[i]];
  }
  return setting;
};
