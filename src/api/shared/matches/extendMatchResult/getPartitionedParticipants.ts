export default function getPartitionedParticipants(participantId, { participants, teams }) {
  const result: any = {};

  // Process participants
  result.participant = participants.find(participant => {
    return participant.participantId === participantId;
  });
  result.others = participants.filter(participant => {
    return participant.participantId !== participantId;
  });
  result.teammates = participants.filter(participant => {
    return participant.teamId === result.participant.teamId;
  });
  result.opponents = participants.filter(participant => {
    return participant.teamId !== result.participant.teamId;
  });

  // Process teams
  result.team = teams.find(team => {
    return team.teamId === result.participant.teamId;
  });
  result.opponentTeam = teams.find(team => {
    return team.teamId != result.participant.teamId;
  });

  return result;
}
