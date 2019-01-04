import { ARAM, SUMMONERS_RIFT, TWISTED_TREELINE } from '/imports/shared/trophies/types.ts';

import Matches from '/imports/api/statistics/server/matches';
import extendMatchResult from '/imports/shared/matches/extendMatchResult/index.ts';
import getTrophiesCategory from '/imports/shared/trophies/getTrophiesCategory.ts';
import trophies from '/imports/shared/trophies/index.ts';

export const checkTrophiesByMaps = () => {
  console.log('checkTrophiesByMaps');
  let counter = {};
  let count = 0;
  const tempTrophyHunter = {
    features: {}
  };
  let sr = 0;
  let aram = 0;
  let tt = 0;
  Object.values(trophies).forEach(trophy => {
    counter[trophy.name + '_SR'] = { name: trophy.name + '_SR', games: 0, percent: 0 };
    counter[trophy.name + '_ARAM'] = { name: trophy.name + '_ARAM', games: 0, percent: 0 };
    counter[trophy.name + '_TT'] = { name: trophy.name + '_TT', games: 0, percent: 0 };
  });
  console.log(Matches.find().count());
  Matches.find(
    { mapId: { $in: [10, 12] }, timeline: { $exists: true } },
    {
      limit: 100000
    }
  ).forEach(match => {
    Object.values(match.participants).forEach(part => {
      //if (part.stats.perk0 === 8229)
      {
        {
          match = extendMatchResult(match, null, {
            withTimeline: true,
            extendStatsParticipantIds: [part.participantId],
            extendParticipants: []
          });
        }
        const trophiesCategory = getTrophiesCategory(match.queueId);
        if (trophiesCategory === SUMMONERS_RIFT) {
          sr++;
        }
        if (trophiesCategory === ARAM) {
          aram++;
        }
        if (trophiesCategory === TWISTED_TREELINE) {
          tt++;
        }
        // we check for every trophy (obtained trophies included)
        Object.values(trophies).forEach(trophy => {
          const obtained = trophy.obtainedCheck({
            match: match,
            trophyHunter: tempTrophyHunter,
            trophiesCategory
          });
          // is trophy obtained?
          if (obtained) {
            // remember obtained trophies
            if (trophiesCategory === SUMMONERS_RIFT) {
              counter[trophy.name + '_SR'].games = counter[trophy.name + '_SR'].games + 1;
              counter[trophy.name + '_SR'].percent =
                (100 * counter[trophy.name + '_SR'].games) / sr;
            }
            if (trophiesCategory === ARAM) {
              counter[trophy.name + '_ARAM'].games = counter[trophy.name + '_ARAM'].games + 1;
              counter[trophy.name + '_ARAM'].percent =
                (100 * counter[trophy.name + '_ARAM'].games) / aram;
            }
            if (trophiesCategory === TWISTED_TREELINE) {
              counter[trophy.name + '_TT'].games = counter[trophy.name + '_TT'].games + 1;
              counter[trophy.name + '_TT'].percent =
                (100 * counter[trophy.name + '_TT'].games) / tt;
            }
          }
        });
        count++;

        if (count % 50 === 0) {
          console.log('count:' + count);
        }
      }
    });
  });
  counter = Object.values(counter);

  console.log('SR: ' + sr);
  console.log('ARAM: ' + aram);
  console.log('TT: ' + tt);
  let rank = 1;
  counter.forEach(c => {
    console.log(`${rank}: ${c.name} : ${c.percent} : ${c.games}`);
    rank++;
  });
};
