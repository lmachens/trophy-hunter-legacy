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
    const currentGame = await getActiveGame({
      platformId,
      summonerId
    });
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

  try {
    const platformId = getPlatformIdByRegion(region);

    const summoner = await getSummoner({ platformId, summonerName: targetSummonerName });
    if (!summoner) {
      console.log(`loginTrophyHunter: can not find summoner for ${platformId} ${summonerName}`);
      this.setUserId(null);
      return null;
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
    const leaguePositions = await getLeaguePositions({ platformId, summonerId: summoner.id });
    TrophyHunters.update(
      { $or: [{ puuid }, { region, summonerName: targetSummonerName }] },
      {
        $set: {
          puuid,
          accountId,
          summonerId,
          summonerName,
          summonerLevel,
          leaguePositions,
          profileIconId,
          region,
          overwolfUser,
          revisionDate,
          lastLogin: new Date(),
          lastVersion: serverVersion
        }
      }
    );

    let userId;
    const trophyHunter = TrophyHunters.findOne(
      { $or: [{ puuid }, { region, summonerName: targetSummonerName }] },
      { fields: { userId: 1 } }
    );
    if (trophyHunter) {
      this.setUserId(trophyHunter.userId);
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

    const ingame = await isIngame({ userId, platformId, summonerId });
    this.setUserId(userId);
    return {
      userId,
      ingame
    };
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export default loginTrophyHunter;
