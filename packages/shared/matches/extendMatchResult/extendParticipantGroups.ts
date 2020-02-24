export default function extendParticipantGroups(participantId, extendedMatchResult) {
  const participant = extendedMatchResult.participants.find(participant => {
    return participant.participantId === participantId;
  });

  // Process teams
  participant.team = extendedMatchResult.teams.find(team => {
    return team.teamId === participant.teamId;
  });
  participant.opponentTeam = extendedMatchResult.teams.find(team => {
    return team.teamId !== participant.teamId;
  });

  // Process participants
  participant.others = extendedMatchResult.participants.filter(participant => {
    return participant.participantId !== participantId;
  });
  return participant;
}
