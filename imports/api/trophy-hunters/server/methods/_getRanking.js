import { Match, check } from 'meteor/check';

import { fieldsBySeason } from '../../../ranking/seasons';
import TrophyHunters from '../../trophyHunters';
import escapeStringRegexp from 'escape-string-regexp';

const getRanking = function(query, options, calledAt) {
  this.unblock();
  check(query, Object);
  check(
    options,
    Match.Maybe({
      skip: Match.Maybe(Number),
      limit: Match.Maybe(Number),
      sort: Match.Maybe(Object)
    })
  );
  check(calledAt, Number);

  query.rank = {
    $exists: true
  };

  if (query.summonerName) {
    query.summonerName = new RegExp(`^${escapeStringRegexp(query.summonerName)}`, 'i');
  }
  const field = fieldsBySeason[query.season];
  delete query.season;

  options.sort = { [field]: 1 };
  query[field] = {
    $exists: true
  };

  return {
    calledAt,
    count: TrophyHunters.find(query).count(),
    trophyHunters: TrophyHunters.find(query, options).fetch()
  };
};

export { getRanking };
