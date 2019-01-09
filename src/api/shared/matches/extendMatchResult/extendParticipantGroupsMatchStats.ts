import extendOthersStats from './extendOthersStats';
import extendParticipantStats from './extendParticipantStats';

function extendParticipantGroupsMatchStats(extendedMatchResult, participant) {
  // Extend others match stats
  participant.stats.others = {};
  const othersMatchStats = extendOthersStats(participant.others);
  Object.assign(participant.stats.others, othersMatchStats);

  // Extend participant
  const additionalParticipantStats = extendParticipantStats(extendedMatchResult, participant);
  Object.assign(participant.stats, additionalParticipantStats);
}

export default extendParticipantGroupsMatchStats;
