export default function extendGeneralGroups(extendedMatchResult) {
  extendedMatchResult.teams[0].participants = extendedMatchResult.participants.filter(
    participant => {
      return participant.teamId === 100;
    }
  );
  extendedMatchResult.teams[0].opponentTeam = extendedMatchResult.teams[1];
  extendedMatchResult.teams[1].participants = extendedMatchResult.participants.filter(
    participant => {
      return participant.teamId === 200;
    }
  );
  extendedMatchResult.teams[1].opponentTeam = extendedMatchResult.teams[0];
}
