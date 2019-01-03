import {
  extendAllGroupMatchStats,
  extendEvents,
  extendGeneralGroups,
  extendMatchStats,
  extendOthersStats,
  extendParticipantGroups,
  extendParticipantStats,
  extendParticipantTimelineStats,
  extendTeamStats,
  extendTeamTimelineStats,
  getParticipantIdentities,
  getParticipantIdentity,
  getPartitionedParticipants
} from './partials';

import { MAP_NAMES } from '../riot-api/gameConstants';

function extendParticipantGroupsMatchStats(extendedMatchResult, participant) {
  // Extend others match stats
  participant.stats.others = {};
  const othersMatchStats = extendOthersStats(participant.others);
  Object.assign(participant.stats.others, othersMatchStats);

  // Extend participant
  const additionalParticipantStats = extendParticipantStats(extendedMatchResult, participant);
  Object.assign(participant.stats, additionalParticipantStats);
}

function extendTeamsMatchStats(extendedMatchResult) {
  // Extend both teams stats
  const extendedTeamStats = extendTeamStats(extendedMatchResult.teams[0]);
  Object.assign(extendedMatchResult.teams[0], extendedTeamStats);
  const extendedTeamStats2 = extendTeamStats(extendedMatchResult.teams[1]);
  Object.assign(extendedMatchResult.teams[1], extendedTeamStats2);
}

// matchExtensionParameters needs two parameters:
// (1) extendStatsParticipantIds: This contains the id's of the participants that need calculated stats.
// (2) withTimeline: if yes: compute timeline stats
function extendMatchResult(game, matchResult, summonerId, matchExtensionParameters) {
  matchExtensionParameters = Object.assign(
    {},
    {
      withTimeline: true,
      extendStatsParticipantIds: [],
      extendParticipants: []
    },
    matchExtensionParameters
  );
  const extendedMatchResult = Object.assign({}, matchResult);

  // for unranked matches the participantIdentities are not complete
  if (!matchResult.participantIdentities[0].player && game) {
    // get the identities from the gameSession
    extendedMatchResult.participantIdentities = getParticipantIdentities(game, matchResult);
  }

  // Extend identity
  if (!extendedMatchResult.participantIdentity) {
    extendedMatchResult.participantIdentity = getParticipantIdentity(
      extendedMatchResult,
      summonerId
    );
  }
  if (matchExtensionParameters.extendStatsParticipantIds.length == 0) {
    matchExtensionParameters.extendStatsParticipantIds.push(
      extendedMatchResult.participantIdentity.participantId
    );
  }

  //general match info
  extendedMatchResult.isSummonersRift = extendedMatchResult.mapId === MAP_NAMES.SUMMONERS_RIFT;
  extendedMatchResult.isModeClassic = extendedMatchResult.gameMode === 'CLASSIC';
  extendedMatchResult.isMatchedGame = extendedMatchResult.gameType === 'MATCHED_GAME';
  extendedMatchResult.teamThreshold = extendedMatchResult.participants.length / 2; // 3 for 3v3, 5 for 5v5

  extendGeneralGroups(matchResult);
  // extend participant groups for single participants
  matchExtensionParameters.extendStatsParticipantIds.forEach(id => {
    const participant = extendParticipantGroups(id, matchResult);
    matchExtensionParameters.extendParticipants.push(participant);
  });
  //TODO: change obtainedCheck
  extendedMatchResult.participant = matchExtensionParameters.extendParticipants[0];
  extendedMatchResult.team = extendedMatchResult.participant.team;

  if (matchExtensionParameters.withTimeline) {
    extendedMatchResult.teams[0].idCheck = id => id <= extendedMatchResult.teamThreshold;
    extendedMatchResult.teams[1].idCheck = id => id > extendedMatchResult.teamThreshold;
    extendEvents(extendedMatchResult, matchExtensionParameters);
  }

  extendAllGroupMatchStats(extendedMatchResult);

  extendTeamsMatchStats(extendedMatchResult);

  // Extend partitioned participants (participant, others, opponents, ...)
  const partitionedParticipants = getPartitionedParticipants(
    extendedMatchResult.participant.participantId,
    extendedMatchResult
  );
  Object.assign(extendedMatchResult, partitionedParticipants);

  extendMatchStats(extendedMatchResult);
  if (matchExtensionParameters.withTimeline) {
    extendTeamTimelineStats(extendedMatchResult.teams[0]);
    extendTeamTimelineStats(extendedMatchResult.teams[1]);
  }

  matchExtensionParameters.extendParticipants.forEach(participant => {
    // Extend match stats
    extendParticipantGroupsMatchStats(extendedMatchResult, participant);

    if (matchExtensionParameters.withTimeline) {
      extendParticipantTimelineStats(extendedMatchResult, participant);
    }
  });

  return extendedMatchResult;
}

export default extendMatchResult;
