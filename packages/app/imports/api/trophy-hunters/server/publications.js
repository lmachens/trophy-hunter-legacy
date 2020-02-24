import { JoinServer } from 'meteor-publish-join';
import { Meteor } from 'meteor/meteor';
import { fieldsBySeason } from '/imports/api/ranking/seasons';
import TrophyHunters from '../trophyHunters';
import { check } from 'meteor/check';
import ServerStats from '../../server-stats/server/collection';

Meteor.publish(null, function() {
  const userId = Meteor.userId();
  if (!userId) {
    return this.ready();
  }

  return TrophyHunters.find(
    { userId },
    {
      limit: 1,
      fields: {
        updatedAt: 0,
        createdAt: 0,
        score: 0,
        s9Score: 0,
        seasonScore: 0,
        tournamentRank: 0,
        tournamentScore: 0,
        followers: {
          $slice: 100
        },
        overwolfUser: 0,
        patreon: 0
      }
    }
  );
});

Meteor.publish('trophyHunters.online', function() {
  JoinServer.publish({
    context: this,
    name: 'numOnlineTrophyHunters',
    interval: 60000,
    doJoin() {
      const cachedConnections = ServerStats.find()
        .fetch()
        .reduce((connections, serverStats) => connections + serverStats.connections, 0);
      return cachedConnections;
    },
    isShared: true
  });
});

const detailsFields = {
  userId: 1,
  summonerName: 1,
  summonerLevel: 1,
  profileIconId: 1,
  region: 1,
  rank: 1,
  score: 1,
  s9Rank: 1,
  seasonRank: 1,
  s9Score: 1,
  seasonScore: 1,
  tournamentRank: 1,
  tournamentScore: 1,
  status: 1,
  channels: 1,
  leaguePositions: 1,
  customTree: 1,
  trees: 1,
  treeTrophyNamesObtained: 1,
  trophiesObtained: 1,
  'items.twitch': 1,
  'items.youTube': 1,
  'items.avatar': 1,
  'items.admin': 1,
  'items.patreon.badge': 1,
  features: 1,
  attributes: 1,
  playstyle: 1,
  followers: {
    $slice: 100
  },
  lastLogin: 1
};

Meteor.publish('trophyHunters.public.details', function(userId) {
  check(userId, String);

  const query = {
    userId
  };

  const options = {
    fields: detailsFields,
    disableOplog: true
  };

  return TrophyHunters.find(query, options);
});

Meteor.publish('trophyHunters.public', function(userIds) {
  check(userIds, [String]);

  const query = {};
  if (userIds) {
    query.userId = {
      $in: userIds
    };
  }

  const options = {
    fields: TrophyHunters.publicFields,
    limit: userIds.length
  };

  JoinServer.publish({
    context: this,
    name: `trophyHunters${JSON.stringify(userIds)}`,
    interval: 60000,
    doJoin() {
      return TrophyHunters.find(query, options).fetch();
    }
  });
});

Meteor.publish('trophyHunters.public.rank', function(userId) {
  check(userId, String);
  JoinServer.publish({
    context: this,
    name: `trophyHunterRank${userId}`,
    interval: 60000,
    doJoin() {
      return TrophyHunters.findOne(
        {
          userId
        },
        {
          fields: {
            rank: 1,
            score: 1,
            s9Rank: 1,
            seasonRank: 1,
            s9Score: 1,
            seasonScore: 1,
            tournamentRank: 1,
            tournamentScore: 1
          }
        }
      );
    }
  });
});

Meteor.publish('trophyHunters.private.ranking', function(season) {
  check(season, String);

  const field = fieldsBySeason[season];

  JoinServer.publish({
    context: this,
    name: `trophyHuntersRanking${season}`,
    interval: 60000,
    doJoin() {
      const userId = Meteor.userId();
      let ranks;
      if (!userId) {
        ranks = [1, 2, 3];
      } else {
        const th = TrophyHunters.findOne(
          { userId },
          {
            fields: {
              [field]: 1
            }
          }
        );
        if (!th[field] || th[field] === 1) {
          ranks = [1, 2, 3];
        } else {
          ranks = [th[field] - 1, th[field], th[field] + 1];
        }
      }
      const trophyHunters = TrophyHunters.find(
        { [field]: { $in: ranks } },
        {
          fields: TrophyHunters.publicFields,
          limit: 3,
          sort: {
            [field]: 1
          }
        }
      ).fetch();
      return trophyHunters;
    }
  });
});
