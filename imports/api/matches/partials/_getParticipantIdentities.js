export function getParticipantIdentities(game, matchResult) {
  // get the identities from the gameSession
  return matchResult.participantIdentities.map((identity, index) => {
    const participant = game.participants[index];
    return {
      participantId: identity.participantId,
      player: {
        summonerId: participant ? participant.summonerId : 0,
        summonerName: participant ? participant.summonerName : '',
        matchHistoryUri: participant
          ? `/v1/stats/player_history/${game.platformId}/${participant.summonerId}`
          : '',
        profileIconId: participant ? participant.profileIconId : 0
      }
    };
  });
}
