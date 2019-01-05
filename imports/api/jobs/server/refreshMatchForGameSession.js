import Notifications, { notificationTypes } from '/imports/api/notifications/notifications';
import trees, { activeTrees, treeBonus } from '/imports/api/trees/trees';
import { updateFirstBloodStats, updateSnowballStats } from '../../champions/server';

import GameSessions from '/imports/api/game-sessions/gameSessions';
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import TrophyHunters from '/imports/api/trophy-hunters/trophyHunters';
import TrophyStats from '/imports/api/trophies/trophyStats';
import calculateAttributes from '/imports/api/attributes/calculateAttributes';
import calculateFeatures from '/imports/api/features/calculateFeatures';
import calculatePlaystyle from '/imports/api/playstyles/calculatePlaystyle';
import calculateTrophies from '/imports/shared/trophies/calculateTrophies.ts';
import extendMatchResult from '/imports/shared/matches/extendMatchResult/index.ts';
import updateAttributes from '/imports/api/attributes/updateAttributes';
import { calculateSeasonPoints } from '../../ranking/server';
import { getMatchWithTimeline } from '/imports/shared/th-api/index.ts';

export default async function refreshMatchForGameSessionWorker(job, cb) {
  // This will only be called if a
  // 'refreshMatchForGameSession' job is obtained
  const data = job.data;

  job.log('Server connected', { data: { type: 'app' } });
  try {
    await refreshMatchForGameSession(data.gameSessionId, job);
    job.done();
    job.remove();
  } catch (error) {
    job.log(`Sending failed with error ${error.message}`, { data: { type: 'app' }, echo: true });

    GameSessions.update(data.gameSessionId, {
      $set: {
        checkedStatus: 'failed'
      }
    });
    job.fail(error.message);
    if (error.reason !== 'match not found') {
      console.log(error);
    }
  }

  // Be sure to invoke the callback
  // when work on this job has finished
  cb();
}

async function refreshMatchForGameSession(gameSessionId, job) {
  //console.log('refreshMatchForGameSession', gameSessionId);

  const gameSession = GameSessions.findOne(gameSessionId);
  if (!gameSession) {
    console.log('refreshMatchForGameSession', 'gameSession not found');
    return;
  }
  if (gameSession.checkedStatus === 'checked') {
    console.log('refreshMatchForGameSession', 'gameSession already checked');
    return;
  }

  job.log('Set to pending');
  GameSessions.update(
    {
      _id: gameSessionId
    },
    {
      $set: {
        checkedStatus: 'pending'
      }
    }
  );

  const trophyHunter = TrophyHunters.findOne({
    userId: gameSession.userId
  });
  if (!trophyHunter) {
    throw new Meteor.Error('refreshMatchForGameSession', 'trophyHunter not found');
  }

  const matchResult = await getMatchWithTimeline({
    platformId: gameSession.game.platformId,
    matchId: gameSession.game.gameId
  });
  // Only count normal and ranked matches which are at least 10 minutes long
  const isMatched = gameSession.isMatched();

  if (!matchResult && isMatched) {
    throw new Meteor.Error(
      'refreshMatchForGameSession',
      'match not found',
      trophyHunter.summonerName
    );
  }

  if (!isMatched) {
    job.log('Send MATCH_NOT_SUPPORTED');
    Notifications.insert({
      userId: trophyHunter.userId,
      type: notificationTypes.MATCH_NOT_SUPPORTED,
      data: {
        userId: trophyHunter.userId,
        matchId: gameSession.game.gameId,
        championId: gameSession.championId
      },
      read: true
    });

    console.log(
      'refreshMatchForGameSession',
      'unsupported game id',
      gameSession.game.mapId,
      gameSession.game.gameQueueConfigId,
      gameSession.game.gameMode
    );
    // Remove game session
    GameSessions.remove(gameSession._id);
    return;
  }

  const isMinimumDurationReached = matchResult && matchResult.gameDuration > 600;
  if (!isMinimumDurationReached) {
    job.log('Send MATCH_MINIMUM_DURATION_NOT_REACHED');
    Notifications.insert({
      userId: trophyHunter.userId,
      type: notificationTypes.MATCH_MINIMUM_DURATION_NOT_REACHED,
      data: {
        userId: trophyHunter.userId,
        matchId: gameSession.game.gameId,
        championId: gameSession.championId
      },
      read: true
    });

    // Remove game session
    GameSessions.remove(gameSession._id);
    return;
  }

  // calculate features
  job.log('Calculate features', { data: { type: 'app' } });
  let obtainedFeatures = {};
  const extendedMatchResult = extendMatchResult(matchResult, trophyHunter.summonerId);
  //console.time('calculateFeatures');
  obtainedFeatures = calculateFeatures(extendedMatchResult, trophyHunter);
  //console.timeEnd('calculateFeatures');
  //console.log('obtainedFeatures');
  // add features to trophyHunter
  TrophyHunters.update(trophyHunter._id, {
    $set: {
      features: trophyHunter.features
    }
  });

  job.log('Calculate trophies', { data: { type: 'app' } });
  // calculate trophies
  const obtainableTrophiesByTree = {};

  const trophyHunterTrees = Object.keys(activeTrees);
  if (trophyHunter && trophyHunter.customTree) trophyHunterTrees.push(trophyHunter.customTree);

  trophyHunterTrees.forEach(name => {
    const tree = trees[name];
    const trophyHunterTree = trophyHunter.trees[name];
    const treeTrophiesObtained = (trophyHunterTree && trophyHunterTree.trophiesObtained) || [];
    const obtainabledTreeTrophies = tree.leaves
      .filter(leaf => {
        if (treeTrophiesObtained.includes(leaf.trophyName)) {
          // already obtained
          return false;
        }
        if (leaf.parents.length === 0) {
          // has no parents
          return true;
        }

        return leaf.parents.every(parent => {
          return treeTrophiesObtained.includes(parent);
        });
      })
      .map(leaf => {
        return leaf.trophyName;
      });

    obtainableTrophiesByTree[name] = obtainabledTreeTrophies;
    //console.log(`obtainabledTreeTrophies in tree ${name}`, obtainabledTreeTrophies);
  });

  const trophiesObtained = calculateTrophies({
    extendedMatchResult,
    trophyHunter
  }).map(trophy => {
    const newInTrees = Object.entries(obtainableTrophiesByTree).reduce(
      (trees, [treeName, obtainableTrophies]) => {
        if (obtainableTrophies.includes(trophy.name)) return [...trees, treeName];
        return trees;
      },
      []
    );
    const isNew = !trophyHunter.trophiesObtained.find(
      trophyObtained => trophyObtained.name === trophy.name
    );
    return { trophy, isNew, newInTrees };
  });

  // compute and update attributes
  const obtainedAttributes = calculateAttributes(trophiesObtained);
  updateAttributes(obtainedAttributes, trophyHunter);

  // add new obtained trophies to trophy hunter
  const trophiesForGameSession = [];
  const obtainedDate = new Date();
  const treeTrophyNamesObtained = [];
  let additionalTrophyPoints = 0;
  const now = new Date();

  trophiesObtained.forEach(({ trophy, isNew, newInTrees }) => {
    const trophyForGameSession = {
      name: trophy.name,
      isNew: false,
      newInTree: 0
    };

    newInTrees.forEach(treeName => {
      //console.log('found a trophy which is obtainable by a tree', treeName, trophy.name);
      if (!trophyHunter.trees[treeName]) {
        trophyHunter.trees[treeName] = {
          trophiesObtained: []
        };
      }
      const trophyHunterTree = trophyHunter.trees[treeName];
      trophyHunterTree.trophiesObtained.push(trophy.name);
      trophyHunterTree.progress =
        trophyHunterTree.trophiesObtained.length / trees[treeName].leaves.length;
      // check if a tree is complete
      if (trophyHunterTree.progress === 1) {
        const isActiveTree = !!activeTrees[treeName];

        let countTreesComplete;
        if (isActiveTree) {
          countTreesComplete = Object.keys(activeTrees).filter(
            activeTree =>
              trophyHunter.trees[activeTree] && trophyHunter.trees[activeTree].progress === 1
          ).length;
          Notifications.insert({
            userId: trophyHunter.userId,
            type: notificationTypes.TREE_COMPLETE,
            data: {
              userId: trophyHunter.userId,
              count: countTreesComplete,
              name: treeName
            }
          });

          additionalTrophyPoints += treeBonus[countTreesComplete] || 0;
          console.log(
            `${treeName} completed by ${
              trophyHunter.userId
            }. Count: ${countTreesComplete} Points: ${treeBonus[countTreesComplete]}`
          );
        } else {
          Notifications.insert({
            userId: trophyHunter.userId,
            type: notificationTypes.TREE_COMPLETE,
            data: {
              userId: trophyHunter.userId,
              name: treeName
            }
          });
          console.log(`${treeName} (custom) completed by ${trophyHunter.userId}`);
        }

        const rawNotifications = Notifications.rawCollection();

        const followers = TrophyHunters.find(
          {
            friends: trophyHunter.userId
          },
          {
            fields: {
              userId: 1
            }
          }
        ).fetch();
        if (followers.length) {
          const bulk = rawNotifications.initializeUnorderedBulkOp();
          followers.forEach(follower => {
            bulk.insert({
              _id: Random.id(),
              userId: follower.userId,
              type: notificationTypes.TREE_COMPLETE,
              data: {
                userId: trophyHunter.userId,
                count: countTreesComplete,
                name: treeName
              },
              createdAt: now,
              updatedAt: now
            });
          });
          bulk.execute().catch(console.error);
        }
        treeTrophyNamesObtained.push(treeName);
      }
      trophyForGameSession.newInTree++;
    });

    const incTrophyStats = {
      totalCount: 1,
      [`frequencyByMapId.${matchResult.mapId}.count`]: 1
    };
    if (!isNew) {
      // no -> only add it to gameSession
      trophyForGameSession.isNew = false;
      trophiesForGameSession.push(trophyForGameSession);
    } else {
      // yes -> add it to trophy hunter and mark it at new for the gameSession
      trophyHunter.trophiesObtained.push({
        name: trophy.name,
        date: obtainedDate,
        count: 1
      });
      trophyForGameSession.isNew = true;
      trophiesForGameSession.push(trophyForGameSession);

      incTrophyStats.distinctTrophyHunters = 1;
    }
    TrophyStats.update(
      {
        trophyName: trophy.name
      },
      {
        $inc: incTrophyStats
      }
    );
  });

  // Increase checked count for all trophies
  TrophyStats.update(
    {},
    { $inc: { [`frequencyByMapId.${matchResult.mapId}.checks`]: 1 } },
    { multi: true }
  );

  const earnedSeasonPoints = calculateSeasonPoints(trophiesObtained);

  const newRank = updateTrophyHunters({
    trophyHunter,
    earnedTrophyPoints: earnedSeasonPoints + additionalTrophyPoints,
    treeTrophyNamesObtained
  });

  //console.time('GameSession checked');
  // GameSession checked
  GameSessions.update(
    {
      _id: gameSession._id
    },
    {
      $set: {
        checkedStatus: 'checked',
        gameDuration: matchResult && matchResult.gameDuration,
        trophiesObtained: trophiesForGameSession,
        trophyPoints: earnedSeasonPoints,
        features: {
          kills: obtainedFeatures.kills,
          deaths: obtainedFeatures.deaths,
          assists: obtainedFeatures.assists,
          wins: obtainedFeatures.wins
        }
      }
    }
  );
  //console.timeEnd('GameSession checked');

  // Add notifications
  //console.time('Add notifications');
  Notifications.insert({
    userId: trophyHunter.userId,
    type: notificationTypes.MATCH_ANALYSED,
    data: {
      userId: trophyHunter.userId,
      platformId: gameSession.game.platformId,
      matchId: gameSession.game.gameId,
      summonerId: gameSession.summonerId,
      championId: gameSession.championId
    },
    read: false
  });

  const rawNotifications = Notifications.rawCollection();
  const followers = TrophyHunters.find(
    {
      friends: trophyHunter.userId
    },
    {
      limit: 100,
      fields: {
        userId: 1
      }
    }
  ).fetch();
  if (followers.length) {
    const bulk = rawNotifications.initializeUnorderedBulkOp();
    followers.forEach(follower => {
      // Add notifications
      bulk.insert({
        _id: Random.id(),
        userId: follower.userId,
        type: notificationTypes.MATCH_ANALYSED,
        data: {
          userId: trophyHunter.userId,
          platformId: gameSession.game.platformId,
          matchId: gameSession.game.gameId,
          summonerId: gameSession.summonerId,
          championId: gameSession.championId
        },
        read: false,
        createdAt: now,
        updatedAt: now
      });
    });

    bulk.execute().catch(console.error);
  }
  // Update ChampionStats
  updateFirstBloodStats(matchResult);
  updateSnowballStats(matchResult);

  //console.timeEnd('Add notifications');
  console.log(
    `Added ${trophiesForGameSession.length} trophies, ${
      treeTrophyNamesObtained.length
    } trees and ${earnedSeasonPoints} points to ${
      trophyHunter.summonerName
    }. Rank: ${trophyHunter.rank || 'unranked'} -> ${newRank || 'unranked'}`.green
  );
}

const updateTrophyHunters = function({
  trophyHunter,
  earnedTrophyPoints,
  treeTrophyNamesObtained
}) {
  if (earnedTrophyPoints === 0) {
    return trophyHunter.rank;
  }
  if (!trophyHunter.rank) {
    trophyHunter.rank = TrophyHunters.find({ score: { $gt: 0 } }).count() + 1;
  }
  if (!trophyHunter.seasonRank) {
    trophyHunter.seasonRank = TrophyHunters.find({ seasonScore: { $gt: 0 } }).count() + 1;
  }
  if (!trophyHunter.tournamentRank) {
    trophyHunter.tournamentRank = TrophyHunters.find({ tournamentScore: { $gt: 0 } }).count() + 1;
  }
  const newScore = (trophyHunter.score || 0) + earnedTrophyPoints;
  const newSeasonScore = (trophyHunter.seasonScore || 0) + earnedTrophyPoints;

  // Update ranking
  const soared = TrophyHunters.update(
    {
      score: { $lte: newScore },
      rank: { $lt: trophyHunter.rank }
    },
    {
      $inc: {
        rank: 1
      }
    },
    { multi: true, bypassCollection2: true }
  );
  const newRank = trophyHunter.rank - soared;
  const seasonSoared = TrophyHunters.update(
    {
      seasonScore: { $lte: newSeasonScore },
      seasonRank: { $lt: trophyHunter.seasonRank }
    },
    {
      $inc: {
        seasonRank: 1
      }
    },
    { multi: true, bypassCollection2: true }
  );
  const newSeasonRank = trophyHunter.seasonRank - seasonSoared;

  const playstyle = calculatePlaystyle(trophyHunter.attributes);
  const update = {
    $set: {
      trophiesObtained: trophyHunter.trophiesObtained,
      trees: trophyHunter.trees,
      trophyPoints: trophyHunter.trophyPoints + earnedTrophyPoints,
      score: newScore,
      rank: newRank,
      seasonScore: newSeasonScore,
      seasonRank: newSeasonRank,
      attributes: trophyHunter.attributes
    }
  };

  if (treeTrophyNamesObtained.length) {
    update.$addToSet = { treeTrophyNamesObtained: { $each: treeTrophyNamesObtained } };
  }

  if (playstyle.name !== 'unknown' && playstyle.name !== trophyHunter.playstyle) {
    Notifications.insert({
      userId: trophyHunter.userId,
      type: notificationTypes.NEW_PLAYSTYLE,
      data: {
        userId: trophyHunter.userId,
        playstyle: playstyle.name
      },
      read: false
    });

    update.$set.playstyle = playstyle.name;
  }

  // Update Trophy Hunter
  TrophyHunters.update(
    {
      _id: trophyHunter._id
    },
    update
  );
  return newRank;
};
