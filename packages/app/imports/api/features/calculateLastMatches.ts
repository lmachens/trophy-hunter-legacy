import normalizeRole from '../../shared/matches/normalizeRole';

const calculateRoleMasterStreak = lastMatches => {
  const wonAsTop = lastMatches.find(
    lastMatch => lastMatch.role === 'TOP' && lastMatch.win && !lastMatch.roleMasterStreak
  );
  const wonAsMiddle = lastMatches.find(
    lastMatch => lastMatch.role === 'MIDDLE' && lastMatch.win && !lastMatch.roleMasterStreak
  );
  const wonAsJungle = lastMatches.find(
    lastMatch => lastMatch.role === 'JUNGLE' && lastMatch.win && !lastMatch.roleMasterStreak
  );
  const wonAsDuoCarry = lastMatches.find(
    lastMatch => lastMatch.role === 'DUO_CARRY' && lastMatch.win
  );
  const wonAsDuoSupport = lastMatches.find(
    lastMatch => lastMatch.role === 'DUO_SUPPORT' && lastMatch.win
  );

  return !!(wonAsTop && wonAsMiddle && wonAsJungle && wonAsDuoCarry && wonAsDuoSupport);
};

const calculateLastMatches = ({ participant, lastMatches = [] }) => {
  const {
    timeline: { lane, role },
    stats: { win }
  } = participant;
  const lastMatch = lastMatches[0];
  const lastFourMatches = lastMatches.slice(0, 4);
  const winningStreak = win
    ? lastMatch && lastMatch.winningStreak
      ? lastMatch.winningStreak + 1
      : 1
    : 0;
  const match = {
    championId: participant.championId,
    role: normalizeRole({ role, lane }),
    win,
    winningStreak,
    roleMasterStreak: false
  };

  match.roleMasterStreak = calculateRoleMasterStreak([match, ...lastFourMatches]);

  return [match, ...lastFourMatches];
};

export default calculateLastMatches;
