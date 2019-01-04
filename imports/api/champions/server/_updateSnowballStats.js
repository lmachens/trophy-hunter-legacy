import { ChampionStats } from '../champion-stats';
import extendMatchResult from '/imports/shared/matches/extendMatchResult/index.ts';
import get from 'lodash/get';
import { mapIdNames } from '/imports/shared/riot-api/gameConstants.ts';
import normalizeRole from '/imports/shared/matches/normalizeRole.ts';

export const updateSnowballStats = match => {
  Object.values(match.participantIdentities).forEach(participantIdentity => {
    const matchForParticipant = Object.assign({}, match);
    matchForParticipant.participantIdentity = participantIdentity;
    const extendedMatch = extendMatchResult(null, matchForParticipant);
    const {
      championId,
      stats: { snowballKills, win },
      timeline: { role, lane }
    } = extendedMatch.participant;

    const championStats = ChampionStats.findOne(
      {
        championId
      },
      {
        fields: {
          byMap: 1
        }
      }
    );
    if (!championStats) return;

    const currentSnowballing = snowballKills >= 5 ? 1 : 0;
    const currentWinRate = win ? 1 : 0;
    const normalizedRole = normalizeRole({
      role,
      lane
    });
    if (!normalizedRole) return;
    const key = `byMap.${mapIdNames[matchForParticipant.mapId]}.${normalizedRole}.snowball`;
    const {
      analysedMatches,
      avgSnowballKills,
      snowballingCount,
      snowballingChance,
      winCountOnSnowballing,
      winChanceOnSnowballing
    } = get(championStats, key) || {
      analysedMatches: 0,
      avgSnowballKills: 0,
      snowballingCount: 0,
      snowballingChance: 0,
      winCountOnSnowballing: 0,
      winChanceOnSnowballing: 0
    };

    const newAvgSnowballKills =
      (avgSnowballKills * analysedMatches + snowballKills) / (analysedMatches + 1) || 0;
    const newSnowballingCount = snowballingCount + currentSnowballing;
    const newSnowballingChance =
      (snowballingChance * analysedMatches + currentSnowballing) / (analysedMatches + 1) || 0;
    const newWinCountOnSnowballing = winCountOnSnowballing + currentSnowballing * currentWinRate;
    const newWinChanceOnSnowballing = currentSnowballing
      ? (winChanceOnSnowballing * winCountOnSnowballing + currentWinRate) /
        (winCountOnSnowballing + 1)
      : winChanceOnSnowballing;

    ChampionStats.update(championStats._id, {
      $set: {
        [key]: {
          analysedMatches: analysedMatches + 1,
          avgSnowballKills: newAvgSnowballKills,
          snowballingCount: newSnowballingCount,
          snowballingChance: newSnowballingChance,
          winCountOnSnowballing: newWinCountOnSnowballing,
          winChanceOnSnowballing: newWinChanceOnSnowballing
        }
      }
    });
  });
};
