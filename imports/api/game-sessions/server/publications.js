import { Match, check } from 'meteor/check';

import GameSessions from '../gameSessions';
import { JoinServer } from 'meteor-publish-join';
import { Meteor } from 'meteor/meteor';

const simpleFields = {
  userId: 1,
  checkedStatus: 1,
  'game.gameId': 1,
  'game.platformId': 1,
  'game.gameQueueConfigId': 1,
  summonerName: 1,
  summonerId: 1,
  championId: 1,
  trophiesObtained: 1,
  'features.wins': 1,
  'features.kills': 1,
  'features.deaths': 1,
  'features.assists': 1,
  trophyPoints: 1,
  createdAt: 1
};

Meteor.publish('gameSessions.recentMatch', function() {
  const userId = Meteor.userId();
  if (!userId) {
    return this.ready();
  }

  return GameSessions.find(
    { userId },
    {
      sort: { createdAt: -1 },
      limit: 1,
      fields: simpleFields
    }
  );
});

const publicFieldsMatchInProgress = {
  startedAt: 1,
  championId: 1,
  userId: 1,
  checkedStatus: 1,
  region: 1,
  accountId: 1,
  summonerName: 1,
  summonerId: 1,
  'game.gameId': 1,
  'game.participants.teamId': 1,
  'game.participants.championId': 1,
  'game.participants.summonerId': 1,
  'game.participants.summonerName': 1,
  'game.participants.spell1Id': 1,
  'game.participants.spell2Id': 1,
  'game.participants.perks': 1,
  'game.bannedChampions.championId': 1,
  'game.bannedChampions.teamId': 1,
  'game.gameQueueConfigId': 1,
  'game.mapId': 1,
  'game.platformId': 1
};

Meteor.publish('gameSessions.private.recent', function(props = {}) {
  check(props, Object);
  const { region, gameId, summonerName } = props;
  const query = {};
  if (region && summonerName) {
    query.region = region;
    query.summonerName = summonerName;

    if (gameId) {
      query['game.gameId'] = gameId;
    }
  } else {
    query.userId = Meteor.userId();
    if (!query.userId) {
      return this.ready();
    }
  }

  return GameSessions.find(query, {
    sort: { createdAt: -1 },
    limit: 1,
    fields: publicFieldsMatchInProgress
  });
});

Meteor.publish('gameSessions.count.public', function(userId) {
  check(userId, String);

  const query = {
    userId: userId
  };

  JoinServer.publish({
    context: this,
    name: `numGameSessions${userId}`,
    interval: 90000,
    doJoin() {
      return GameSessions.find(query, { disableOplog: true }).count();
    },
    isShared: true
  });
});

Meteor.publish('gameSessions.public', function(userId, page) {
  check(userId, String);
  check(page, Match.Maybe(Number));

  return GameSessions.find(
    {
      userId: userId
    },
    {
      sort: { createdAt: -1 },
      limit: ((page || 0) + 1) * 10,
      fields: simpleFields,
      disableOplog: true
    }
  );
});
