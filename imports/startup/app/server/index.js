import '../../server/colors';
import './create-user-hook';
import './register-api';
import './user-presence';
import '../../server/mongo';
import '../../server/process';
import '../../server/admin';

import TrophyStats from '/imports/api/trophies/trophyStats';
import { trophies } from '/imports/shared/trophies/trophies.ts';

Object.values(trophies).forEach(trophy => {
  if (!TrophyStats.findOne({ trophyName: trophy.name })) {
    TrophyStats.insert({ trophyName: trophy.name, totalCount: 0, distinctTrophyHunters: 0 });
  }
});
