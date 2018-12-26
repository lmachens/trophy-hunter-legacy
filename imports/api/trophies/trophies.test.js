import createTestMatchResult from '../matches/createTestMatchResult';
import extendMatchResult from '../matches/extendMatchResult';
import { getTrophiesCategory } from '/imports/api/trophies/helpers/index';
import { trophies } from './trophies';

describe('trophies', () => {
  test('battery', () => {
    const matchResult = createTestMatchResult({
      participants: [
        {
          stats: {
            totalHeal: 50000,
            totalDamageTaken: 50000
          }
        }
      ],
      participantIdentities: [
        {
          player: {
            summonerId: 1
          }
        }
      ]
    });
    const extendedMatchResult = extendMatchResult(null, matchResult, 1);
    const battery = trophies['battery'];
    const trophiesCategory = getTrophiesCategory(extendedMatchResult.queueId);
    const obtained = battery.obtainedCheck({ match: extendedMatchResult, trophiesCategory });
    expect(obtained).toBe(true);
  });
});
