export const calculateTournamentPoints = trophies =>
  trophies.reduce((points, { trophy }) => points + trophy.score, 0);
