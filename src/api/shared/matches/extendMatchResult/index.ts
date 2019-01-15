import extendEvents from './extendEvents';
import extendGeneralGroups from './extendGeneralGroups';
import extendMatchStats from './extendMatchStats';
import extendParticipantGroups from './extendParticipantGroups';
import extendParticipantTimelineStats from './extendParticipantTimelineStats';
import extendTeamTimelineStats from './extendTeamTimelineStats';
import getParticipantIdentity from './getParticipantIdentity';
import getPartitionedParticipants from './getPartitionedParticipants';
import extendAllGroupMatchStats from './extendAllGroupMatchStats';

import { MAP_NAMES } from '../../riot-api/gameConstants';
import extendTeamsMatchStats from './extendTeamsMatchStats';
import extendParticipantGroupsMatchStats from './extendParticipantGroupsMatchStats';

// matchExtensionParameters needs two parameters:
// (1) extendStatsParticipantIds: This contains the id's of the participants that need calculated stats.
// (2) withTimeline: if yes: compute timeline stats
interface ExtendMatchResultProps {
  matchResult: any;
  summonerId?: string | number;
  summonerName?: string;
  matchExtensionParameters?: any;
}
function extendMatchResult({
  matchResult,
  summonerId,
  summonerName,
  matchExtensionParameters
}: ExtendMatchResultProps) {
  matchExtensionParameters = Object.assign(
    {},
    {
      withTimeline: true,
      extendAllParticipants: false,
      extendStatsParticipantIds: [],
      extendParticipants: []
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

  if(matchExtensionParameters.extendAllParticipants)
  {
    matchExtensionParameters.extendParticipants = matchResult.participants;

   // extend participant groups for single participants
  extendedMatchResult.participants.forEach(participant => {
    extendParticipantGroups(participant.participantId, matchResult);
  });
  }
  else{
  // Extend identity
  if (!extendedMatchResult.participantIdentity) {
    extendedMatchResult.participantIdentity = getParticipantIdentity({
      participantIdentities: extendedMatchResult.participantIdentities,
      summonerId,
      summonerName
    });
  }
  if (matchExtensionParameters.extendStatsParticipantIds.length == 0) {
    matchExtensionParameters.extendStatsParticipantIds.push(
      extendedMatchResult.participantIdentity.participantId
    );
  }
  // extend participant groups for single participants
  matchExtensionParameters.extendStatsParticipantIds.forEach(id => {
    const participant = extendParticipantGroups(id, matchResult);
    matchExtensionParameters.extendParticipants.push(participant);
  });
  }
  
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

  if(!matchExtensionParameters.extendAllParticipants)
  {
  // Extend partitioned participants (participant, others, opponents, ...)
  const partitionedParticipants = getPartitionedParticipants(
    extendedMatchResult.participant.participantId,
    extendedMatchResult
  );
  Object.assign(extendedMatchResult, partitionedParticipants);
  }
 matchExtensionParameters.extendParticipants.forEach(p =>
  extendMatchStats(extendedMatchResult, p));
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
