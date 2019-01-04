export default function getParticipantIdentityByChampionId(extendedMatchResult, championId) {
  const participant = extendedMatchResult.participants.find(p => p.championId === championId);
  if (!participant) {
    console.error(
      'getParticipantIdentityByChampionId',
      'Can not find participant by champion ID',
      extendedMatchResult.gameId,
      championId
    );
    return;
  }
  return extendedMatchResult.participantIdentities.find(identity => {
    if (!identity) {
      console.error(
        'getParticipantIdentityByChampionId',
        'Identity without participantId',
        extendedMatchResult.gameId,
        participant.participantId,
        identity
      );
      return false;
    }
    return identity.participantId === participant.participantId;
  });
}
