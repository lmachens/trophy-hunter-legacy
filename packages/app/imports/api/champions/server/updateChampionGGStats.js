import { ChampionMatchups } from '../champion-matchups';
import { ChampionStats } from '../champion-stats';
import ChampionGGApi from '/imports/api/champion-gg-api/championGGApi';
import champions from '/imports/shared/riot-api/champions.ts';

const roles = ['TOP', 'JUNGLE', 'MIDDLE', 'DUO_CARRY', 'DUO_SUPPORT'];
const matchupApiLimit = 10;
const updateChampionGGStats = () => {
  const championValues = Object.values(champions);
  const matchupApiSteps = Math.ceil(championValues.length / matchupApiLimit);
  championValues.forEach(champion => {
    const championData = ChampionGGApi.getChampionData(champion.id);

    const stats = {};
    championData.forEach(data => {
      console.log('get champion stats for', champion.name, data.role);
      stats[data.role] = {
        gamesPlayed: data.gamesPlayed,
        winRate: data.winRate,
        playRate: data.playRate,
        banRate: data.banRate,
        damageComposition: data.damageComposition
      };

      if (data.hashes.firstitemshash) {
        const { highestCount, highestWinrate } = data.hashes.firstitemshash;
        stats[data.role].firstItems = {
          highestCount: {
            count: highestCount.count,
            wins: highestCount.wins,
            winRate: highestCount.winrate,
            items: highestCount.hash.split('-').slice(1)
          },
          highestWinrate: {
            count: highestWinrate.count,
            wins: highestWinrate.wins,
            winRate: highestWinrate.winrate,
            items: highestWinrate.hash.split('-').slice(1)
          }
        };
      }

      if (data.hashes.finalitemshashfixed) {
        const { highestCount, highestWinrate } = data.hashes.finalitemshashfixed;
        stats[data.role].finalItems = {
          highestCount: {
            count: highestCount.count,
            wins: highestCount.wins,
            winRate: highestCount.winrate,
            items: highestCount.hash.split('-').slice(1)
          },
          highestWinrate: {
            count: highestWinrate ? highestWinrate.count : highestCount.count,
            wins: highestWinrate ? highestWinrate.wins : highestCount.wins,
            winRate: highestWinrate ? highestWinrate.winrate : highestCount.winrate,
            items: highestWinrate
              ? highestWinrate.hash.split('-').slice(1)
              : highestCount.hash.split('-').slice(1)
          }
        };
      }

      if (data.hashes.skillorderhash) {
        const { highestCount, highestWinrate } = data.hashes.skillorderhash;
        stats[data.role].skillOrder = {
          highestCount: {
            count: highestCount.count,
            wins: highestCount.wins,
            winRate: highestCount.winrate,
            order: highestCount.hash.split('-').slice(1)
          },
          highestWinrate: {
            count: highestWinrate ? highestWinrate.count : highestCount.count,
            wins: highestWinrate ? highestWinrate.wins : highestCount.wins,
            winRate: highestWinrate ? highestWinrate.winrate : highestCount.winrate,
            order: highestWinrate
              ? highestWinrate.hash.split('-').slice(1)
              : highestCount.hash.split('-').slice(1)
          }
        };
      }

      if (data.hashes.runehash) {
        const { highestCount, highestWinrate } = data.hashes.runehash;
        stats[data.role].runes = {
          highestCount: {
            count: highestCount.count,
            wins: highestCount.wins,
            winRate: highestCount.winrate,
            order: highestCount.hash.split('-').slice(1)
          },
          highestWinrate: {
            count: highestWinrate.count,
            wins: highestWinrate.wins,
            winRate: highestWinrate.winrate,
            order: highestWinrate.hash.split('-').slice(1)
          }
        };
      }

      roles.forEach(role => {
        for (let i = 0; i < matchupApiSteps; i++) {
          const championRoleMatchups = ChampionGGApi.getChampionRoleMatchups({
            championId: champion.id,
            role,
            skip: i * matchupApiLimit,
            limit: matchupApiLimit
          });
          if (!championRoleMatchups) {
            console.log(`Can not find matchup for ${champion.name} ${role}`);
            return;
          }
          championRoleMatchups.forEach(
            ({ champ1_id: champ1Id, champ2_id: champ2Id, champ1, champ2, count, patch, _id }) => {
              ChampionMatchups.upsert(
                {
                  champ1Id,
                  champ2Id,
                  role: _id.role
                },
                {
                  $setOnInsert: {
                    champ1Id,
                    champ2Id,
                    role: _id.role
                  },
                  $set: {
                    count,
                    champ1,
                    champ2,
                    patch
                  }
                }
              );
            }
          );
        }
      });

      ChampionStats.upsert(
        {
          championId: champion.id
        },
        {
          $setOnInsert: {
            championId: champion.id
          },
          $set: {
            stats
          }
        }
      );
    });
  });
};

export default updateChampionGGStats;
