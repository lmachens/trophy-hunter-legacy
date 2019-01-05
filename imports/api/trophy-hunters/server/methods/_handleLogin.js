import { Match, check } from 'meteor/check';

import GameSessions from '../../../game-sessions/gameSessions';
import { Meteor } from 'meteor/meteor';
import TrophyHunters from '../../trophyHunters';
import isEqual from 'lodash.isequal';
import riotApi from '../../../riot-api/server/riotApi';
import { getPlatformIdByRegion, getSummoner, getActiveGame } from '/imports/shared/th-api/index.ts';

const handleLogin = async function(serverVersion) {
  check(serverVersion, Match.Maybe(String));
  this.unblock();

  // Make sure the user is logged in
  const userId = Meteor.userId();
  if (!userId) {
    return false;
  }
  const trophyHunter = TrophyHunters.findOne({ userId });
  const platformId = getPlatformIdByRegion(trophyHunter.region);
  const summoner = await getSummoner({ platformId, summonerId: trophyHunter.summonerId });
  const leaguePositions = riotApi.getLeaguePositions(trophyHunter.region, trophyHunter.summonerId);
  const $set = {
    lastLogin: new Date(),
    lastVersion: serverVersion
  };
  if (summoner) {
    if (
      trophyHunter.summonerName !== summoner.name ||
      trophyHunter.summonerLevel !== summoner.summonerLevel ||
      trophyHunter.profileIconId !== summoner.profileIconId ||
      !isEqual(trophyHunter.leaguePositions, leaguePositions)
    ) {
      $set.summonerName = summoner.name;
      $set.accountId = summoner.accountId;
      $set.summonerId = summoner.summonerId;
      $set.profileIconId = summoner.profileIconId;
      $set.summonerLevel = summoner.summonerLevel;
      $set.leaguePositions = leaguePositions;
    }
  }
  TrophyHunters.update(trophyHunter._id, {
    $set
  });

  // Check if still ingame
  let isIngame;
  const activeGameSession = GameSessions.findOne({ userId, checkedStatus: 'matchInProgress' });
  if (!activeGameSession) {
    isIngame = false;
  } else {
    const currentGame = await getActiveGame({
      platformId,
      summonerId: trophyHunter.summonerId
    });
    // Check if there is a current game and it is the same as in activeGameSession
    if (
      !currentGame ||
      !activeGameSession.game ||
      activeGameSession.game.gameId != currentGame.gameId
    ) {
      activeGameSession.setMatchEnd(false, userId);
      isIngame = false;
    } else {
      isIngame = true;
    }
  }

  return { isIngame, lastVersion: trophyHunter.lastVersion };
};

export { handleLogin };
