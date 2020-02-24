import { check, Match } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';
import playstyles from '/imports/api/playstyles/playstyles';
import TrophyHunters from '/imports/api/trophy-hunters/trophyHunters';
import GameSessions from '/imports/api/game-sessions/gameSessions';

import {
  getPlatformIdByRegion,
  getSummoner,
  getLeaguePositions,
  getActiveGame
} from '/imports/shared/th-api/index.ts';

const isIngame = async ({ userId, platformId, summonerId }) => {
  // Check if still ingame
  let isIngame;
  const activeGameSession = GameSessions.findOne({ userId, checkedStatus: 'matchInProgress' });
  if (!activeGameSession) {
    isIngame = false;
  } else {
    let currentGame;
    try {
      currentGame = await getActiveGame({
        platformId,
        summonerId
      });
    } catch (error) {
      currentGame = null;
    }
    // Check if there is a current game and it is the same as in activeGameSession
    if (
      !currentGame ||
      !activeGameSession.game ||
      activeGameSession.game.gameId != currentGame.gameId
    ) {
      activeGameSession.setMatchEnd(false);
      isIngame = false;
    } else {
      isIngame = true;
    }
  }
  return isIngame;
};

const createUser = ({
  puuid,
  accountId,
  summonerId,
  summonerName,
  summonerLevel,
  leaguePositions,
  profileIconId,
  region,
  overwolfUser,
  revisionDate
}) => {
  const userId = Accounts.createUser({
    username: puuid
  });

  const now = new Date();
  TrophyHunters.insert({
    userId,
    puuid,
    accountId,
    summonerId,
    summonerName,
    summonerLevel,
    leaguePositions,
    profileIconId,
    score: 0,
    s9Score: 0,
    seasonScore: 0,
    tournamentScore: 0,
    trophyPoints: 0,
    region,
    trophiesObtained: [],
    features: {},
    playstyle: playstyles.unknown.name,
    items: {},
    trees: {},
    friends: [],
    status: 'offline',
    statusConnection: 'offline',
    statusDefault: 'online',
    channels: [
      {
        name: 'announcements',
        lastSeen: now
      },
      {
        name: 'general',
        lastSeen: now
      },
      {
        name: 'lookingforgroup',
        lastSeen: now
      }
    ],
    lastLogin: now,
    overwolfUser,
    revisionDate
  });
  return userId;
};
const loginTrophyHunter = async function({
  region,
  summonerName: targetSummonerName,
  overwolfUser,
  serverVersion
}) {
  check(region, String);
  check(targetSummonerName, String);
  check(overwolfUser, Object);
  check(serverVersion, Match.Maybe(String));

  const platformId = getPlatformIdByRegion(region);

  let summoner;
  try {
    summoner = await getSummoner({ platformId, summonerName: targetSummonerName });
    if (summoner.name !== targetSummonerName) {
      console.log('Different Summoner Name', summoner.name, targetSummonerName);
      delete summoner;
    }
  } catch (error) {}
  if (!summoner) {
    console.log('Login issue', platformId, targetSummonerName);
    throw new Error(
      `loginTrophyHunter: can not find summoner for ${platformId} ${targetSummonerName}`
    );
  }

  const {
    id: summonerId,
    name: summonerName,
    profileIconId,
    summonerLevel,
    puuid,
    accountId,
    revisionDate
  } = summoner;

  const $set = {
    puuid,
    accountId,
    summonerId,
    summonerName,
    summonerLevel,
    profileIconId,
    region,
    overwolfUser,
    revisionDate,
    lastLogin: new Date(),
    lastVersion: serverVersion
  };

  let leaguePositions;
  try {
    leaguePositions = await getLeaguePositions({ platformId, summonerId: summoner.id });
    $set.leaguePositions = leaguePositions;
  } catch (error) {}
  TrophyHunters.update(
    { $or: [{ puuid }, { region, summonerName: targetSummonerName, puuid: { $exists: false } }] },
    {
      $set
    }
  );

  let userId;
  const trophyHunter = TrophyHunters.findOne({ puuid }, { fields: { userId: 1 } });
  if (trophyHunter) {
    userId = trophyHunter.userId;
  } else {
    userId = createUser({
      puuid,
      accountId,
      summonerId,
      summonerName,
      summonerLevel,
      leaguePositions,
      profileIconId,
      region,
      overwolfUser,
      revisionDate
    });
  }

  let ingame = false;
  try {
    ingame = await isIngame({ userId, platformId, summonerId });
  } catch (error) {}
  return {
    userId,
    ingame
  };
};

export default loginTrophyHunter;
