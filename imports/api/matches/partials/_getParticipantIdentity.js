export function getParticipantIdentity(extendedMatchResult, summonerId) {
  return extendedMatchResult.participantIdentities.find(
    identity => identity.player && identity.player.summonerId === summonerId
  );
}
