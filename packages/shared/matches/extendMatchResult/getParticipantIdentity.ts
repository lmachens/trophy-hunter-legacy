interface GetParticipantIdentityProps {
  participantIdentities: any[];
  summonerId: number | string;
  summonerName?: string;
}

export default function getParticipantIdentity({
  participantIdentities,
  summonerId,
  summonerName
}: GetParticipantIdentityProps) {
  return participantIdentities.find(
    identity =>
      identity.player &&
      (identity.player.summonerId === summonerId || identity.player.summonerName === summonerName)
  );
}
