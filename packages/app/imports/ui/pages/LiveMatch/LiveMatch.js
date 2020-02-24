import { setLiveMatch } from '../../../store/actions';

import GameSessions from '/imports/api/game-sessions/gameSessions';
import LiveMatch from '../../components/LiveMatch';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import get from 'lodash.get';
import { getRole } from '/imports/ui/components/pre-match/helpers';
import oldRegionsMap from '/imports/api/riot-api/regions';
import { store } from '../../../store/store';
import { withTracker } from 'meteor/react-meteor-data';

const LiveMatchContainer = withTracker(
  ({ championStatsByChampionId, userId, region, gameId, summonerName }) => {
    if (gameId) gameId = parseInt(gameId);
    if (region) {
      region = (oldRegionsMap[region.toLowerCase()] || region).toUpperCase();
    }
    const handle = Meteor.subscribe('gameSessions.private.recent', {
      region,
      gameId,
      summonerName
    });
    const loading = !handle.ready();

    const query = {};
    if (region && summonerName) {
      query.region = region;
      query.summonerName = summonerName;

      if (gameId) {
        query['game.gameId'] = gameId;
      }
    } else {
      query.userId = userId;
    }

    const gameSession = GameSessions.findOne(query, { sort: { createdAt: -1 } });
    if (gameSession) {
      const { liveMatch } = store.getState();
      const isLiveMatch = liveMatch.gameId !== gameSession.gameId;
      const ownTeamId = gameSession.game.participants.find(
        participant => participant.summonerId === gameSession.summonerId
      ).teamId;

      gameSession.game.participants = gameSession.game.participants.map((participant, index) => {
        const existingParticipant =
          (isLiveMatch.firstTeam &&
            isLiveMatch.firstTeam.find(
              firstTeamParticipant => firstTeamParticipant.championId === participant.championId
            )) ||
          (isLiveMatch.secondTeam &&
            isLiveMatch.secondTeam.find(
              secondTeamParticipant => secondTeamParticipant.championId === participant.championId
            )) ||
          participant;

        const championStats =
          get(championStatsByChampionId, `${participant.championId}.stats`) || {};

        const role = existingParticipant.role || getRole(championStats);
        return {
          ...participant,
          role,
          participantId: index + 1
        };
      });

      const firstTeam = gameSession.game.participants.filter(
        participant => participant.teamId === ownTeamId
      );
      const secondTeam = gameSession.game.participants.filter(
        participant => participant.teamId !== ownTeamId
      );
      const mapTarget =
        liveMatch.mapTarget || secondTeam.find(participant => participant.role === 'JUNGLE');
      const firstTeamTarget =
        liveMatch.firstTeamTarget ||
        firstTeam.find(participant => participant.championId === gameSession.championId) ||
        firstTeam[0];

      if (firstTeamTarget && !firstTeamTarget.role) {
        const championStats =
          get(championStatsByChampionId, `${firstTeamTarget.championId}.stats`) || {};
        firstTeamTarget.role = getRole(championStats);
      }
      const secondTeamTarget =
        liveMatch.secondTeamTarget ||
        (firstTeamTarget &&
          secondTeam.find(participant => participant.role === firstTeamTarget.role)) ||
        secondTeam[0];

      if (secondTeamTarget && !secondTeamTarget.role) {
        const championStats =
          get(championStatsByChampionId, `${secondTeamTarget.championId}.stats`) || {};
        secondTeamTarget.role = getRole(championStats);
      }

      const newLiveMatch = {
        gameId: gameSession.game.gameId,
        platformId: gameSession.game.platformId,
        gameQueueConfigId: gameSession.game.gameQueueConfigId,
        mapId: gameSession.game.mapId,
        mapTarget,
        firstTeam,
        secondTeam,
        firstTeamTarget,
        secondTeamTarget,
        bannedChampions: gameSession.game.bannedChampions,
        invertTeams: ownTeamId === 200
      };
      store.dispatch(setLiveMatch(newLiveMatch));
    }
    return {
      loading,
      gameSession
    };
  }
)(LiveMatch);

const mapStateToProps = ({ account: { trophyHunter, userId }, championStatsByChampionId }) => {
  return { trophyHunter, userId, championStatsByChampionId };
};

const enhanced = connect(mapStateToProps)(LiveMatchContainer);

export default enhanced;
