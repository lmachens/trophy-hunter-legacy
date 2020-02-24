import { fetchIfNeeded } from './_helpers';
import {
  RECEIVE_CHAMPION_STATS,
  RECEIVE_CHAMPION_STATS_ERROR,
  REQUEST_CHAMPION_STATS,
  CLEAR_CHAMPION_STATS
} from '../types';

import axios from 'axios';

export const clearChampionStats = () => {
  return {
    type: CLEAR_CHAMPION_STATS
  };
};

const requestChampionStats = championId => {
  return {
    type: REQUEST_CHAMPION_STATS,
    championId
  };
};

export const receiveChampionStats = (championId, stats) => {
  return {
    type: RECEIVE_CHAMPION_STATS,
    championId,
    stats,
    receivedAt: Date.now()
  };
};

const receiveChampionStatsError = (championId, error) => {
  return {
    type: RECEIVE_CHAMPION_STATS_ERROR,
    championId,
    error,
    receivedAt: Date.now()
  };
};

function sortHighestCount(a, b) {
  return b.count - a.count;
}

function sortHighestWinrate(a, b) {
  return b.winRate - a.winRate;
}

const roles = {
  JUNGLE: 'JUNGLE',
  BOTTOM: 'DUO_CARRY',
  UTILITY: 'DUO_SUPPORT',
  TOP: 'TOP',
  MIDDLE: 'MIDDLE'
};

const skills = {
  1: 'Q',
  2: 'W',
  3: 'E',
  4: 'R'
};

export const fetchChampionStats = championId => {
  return dispatch => {
    dispatch(requestChampionStats(championId));
    return new Promise(resolve => {
      axios
        .get(`https://champs.th.gl/champs?champId=${championId}&mapId=11`)
        .then(result => result.data)
        .then(champion => {
          const stats = Object.entries(champion.positions).reduce((acc, [key, stats]) => {
            const role = roles[key];
            const firstItems = stats.firstItems.map(obj => {
              return {
                count: obj.matches,
                wins: Math.round(obj.matches * obj.winRate),
                winRate: obj.winRate,
                items: obj.items
              };
            });

            const items = Object.entries(stats.items).reduce((acc, [key, items]) => {
              return {
                ...acc,
                [key]: items.map(obj => ({
                  count: obj.matches,
                  wins: Math.round(obj.matches * obj.winRate),
                  winRate: obj.winRate,
                  itemId: obj.itemId
                }))
              };
            }, {});

            const skillOrder = stats.skillOrder.map(obj => {
              return {
                count: obj.matches,
                wins: Math.round(obj.matches * obj.winRate),
                winRate: obj.winRate,
                order: obj.order.map(skill => skills[skill])
              };
            });

            const runes = stats.perks.map(obj => {
              return {
                count: obj.matches,
                wins: Math.round(obj.matches * obj.winRate),
                winRate: obj.winRate,
                order: [
                  obj.perk0,
                  obj.perk1,
                  obj.perk2,
                  obj.perk3,
                  obj.perkSubStyle,
                  obj.perk4,
                  obj.perk5,
                  obj.statPerk0,
                  obj.statPerk1,
                  obj.statPerk2
                ]
              };
            });

            return {
              ...acc,
              [role]: {
                gamesPlayed: stats.matches,
                winRate: stats.winRate,
                playRate: champion.pickRate,
                banRate: champion.banRate,
                firstBloodKill: stats.averageStats.firstBloodKills,
                snowballKills: stats.averageStats.snowballKills,
                damageComposition: {
                  percentTrue:
                    stats.averageStats.trueDamageDealt / stats.averageStats.totalDamageDealt,
                  percentMagical:
                    stats.averageStats.magicDamageDealt / stats.averageStats.totalDamageDealt,
                  percentPhysical:
                    stats.averageStats.physicalDamageDealt / stats.averageStats.totalDamageDealt,
                  totalTrue: stats.averageStats.trueDamageDealt,
                  totalMagical: stats.averageStats.magicDamageDealt,
                  totalPhysical: stats.averageStats.physicalDamageDealt,
                  total: stats.averageStats.totalDamageDealt
                },
                firstItems: {
                  highestCount: firstItems.sort(sortHighestCount)[0],
                  highestWinrate: firstItems.sort(sortHighestWinrate)[0]
                },
                items: {
                  highestCount: {
                    '2-12': items['2-12'].sort(sortHighestCount).slice(0, 3),
                    '12-22': items['12-22'].sort(sortHighestCount).slice(0, 3),
                    '22-32': items['22-32'].sort(sortHighestCount).slice(0, 3),
                    '32-42': items['32-42'].sort(sortHighestCount).slice(0, 3),
                    '42-52': items['42-52'].sort(sortHighestCount).slice(0, 3)
                  },
                  highestWinrate: {
                    '2-12': items['2-12'].sort(sortHighestWinrate).slice(0, 3),
                    '12-22': items['12-22'].sort(sortHighestWinrate).slice(0, 3),
                    '22-32': items['22-32'].sort(sortHighestWinrate).slice(0, 3),
                    '32-42': items['32-42'].sort(sortHighestWinrate).slice(0, 3),
                    '42-52': items['42-52'].sort(sortHighestWinrate).slice(0, 3)
                  }
                },
                skillOrder: {
                  highestCount: skillOrder.sort(sortHighestCount)[0],
                  highestWinrate: skillOrder.sort(sortHighestWinrate)[0]
                },
                runes: {
                  highestCount: runes.sort(sortHighestCount)[0],
                  highestWinrate: runes.sort(sortHighestWinrate)[0]
                }
              }
            };
          }, {});

          return resolve(dispatch(receiveChampionStats(championId, stats)));
        })
        .catch(error => {
          console.error(error);
          return resolve(dispatch(receiveChampionStatsError(championId, 'Can not fetch')));
        });
    });
  };
};

const ttl = 1000 * 60 * 3;
export const fetchChampionStatsIfNeeded = fetchIfNeeded(
  fetchChampionStats,
  'championStatsByChampionId',
  ttl
);
