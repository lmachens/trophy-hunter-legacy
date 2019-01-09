import { MAP_NAMES } from '../../riot-api/gameConstants';
import extendGeneralGroups from './extendGeneralGroups';
import extendParticipantGroups from './extendParticipantGroups';
import extendEvents from './extendEvents';
import extendAllGroupMatchStats from './extendAllGroupMatchStats';
import getPartitionedParticipants from './getPartitionedParticipants';
import extendMatchStats from './extendMatchStats';
import extendTeamTimelineStats from './extendTeamTimelineStats';
import extendParticipantTimelineStats from './extendParticipantTimelineStats';
import extendTeamsMatchStats from './extendTeamsMatchStats';
import extendParticipantGroupsMatchStats from './extendParticipantGroupsMatchStats';

// matchExtensionParameters needs two parameters:
// (1) extendStatsParticipantIds: This contains the id's of the participants that need calculated stats.
// (2) withTimeline: if yes: compute timeline stats
function extendMatchResultAll(matchResult, matchExtensionParameters) {
  matchExtensionParameters = Object.assign(
    {},
    {
      withTimeline: true,
      extendedParticipants: matchResult.participants
    },
    matchExtensionParameters
  );
  const extendedMatchResult = Object.assign({}, matchResult);

  //general match info
  extendedMatchResult.isSummonersRift = extendedMatchResult.mapId === MAP_NAMES.SUMMONERS_RIFT;
  extendedMatchResult.isModeClassic = extendedMatchResult.gameMode === 'CLASSIC';
  extendedMatchResult.isMatchedGame = extendedMatchResult.gameType === 'MATCHED_GAME';
  extendedMatchResult.teamThreshold = extendedMatchResult.participants.length / 2; // 3 for 3v3, 5 for 5v5

  extendGeneralGroups(matchResult);
  // extend participant groups for single participants
  extendedMatchResult.participants.forEach(participant => {
    extendParticipantGroups(participant.id, matchResult);
  });

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

export default extendMatchResultAll;
