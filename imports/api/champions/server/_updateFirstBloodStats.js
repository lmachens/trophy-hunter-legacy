import { ChampionStats } from '../champion-stats';
import get from 'lodash/get';
import { mapIdNames } from '/imports/shared/riot-api/gameConstants.ts';
import normalizeRole from '/imports/shared/matches/normalizeRole.ts';

export const updateFirstBloodStats = ({ mapId, participants }) => {
  Object.values(participants).forEach(participant => {
    const {
      championId,
      stats: { firstBloodKill, win },
      timeline: { role, lane }
    } = participant;

    const championStats = ChampionStats.findOne({ championId }, { fields: { byMap: 1 } });
    if (!championStats) return;

    const currentFirstBloodKill = firstBloodKill ? 1 : 0;
    const currentWinRate = win ? 1 : 0;
    const normalizedRole = normalizeRole({ role, lane });
    if (!normalizedRole) return;
    const key = `byMap.${mapIdNames[mapId]}.${normalizedRole}.firstBlood`;
    const { analysedMatches, count, chance, winCountOnFirstBlood, winChanceOnFirstBlood } = get(
      championStats,
      key
    ) || {
      analysedMatches: 0,
      count: 0,
      chance: 0,
      winCountOnFirstBlood: 0,
      winChanceOnFirstBlood: 0
    };

    const newChance = (chance * analysedMatches + currentFirstBloodKill) / (analysedMatches + 1);
    const newWinChanceOnFirstBlood = currentFirstBloodKill
      ? (winChanceOnFirstBlood * count + currentWinRate) / (count + 1)
      : winChanceOnFirstBlood;
    ChampionStats.update(championStats._id, {
      $set: {
        [key]: {
          analysedMatches: analysedMatches + 1,
          count: count + currentFirstBloodKill,
          chance: newChance,
          winCountOnFirstBlood: winCountOnFirstBlood + currentFirstBloodKill * currentWinRate,
          winChanceOnFirstBlood: newWinChanceOnFirstBlood
        }
      }
    });
  });
};
