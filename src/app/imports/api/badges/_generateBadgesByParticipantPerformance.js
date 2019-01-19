import { badges } from './';
import { featuresWithBadge } from '../features';
import safeParseInt from '../utilities/safeParseInt';

export const generateBadgesByParticipantPerformance = ({
  participantPerformance,
  participant,
  participants,
  playedTogether
}) => {
  const result = {};
  if (!participantPerformance) return result;

  const { trophyHunter, stats } = participantPerformance;
  if (trophyHunter) {
    result[badges.trophyHunter.name] = trophyHunter;
  }
  if (playedTogether && playedTogether[participant.summonerId]) {
    const premades = Object.entries(playedTogether[participant.summonerId].with).reduce(
      (acc, [summonerId, times]) => {
        const playedWithParticipant = participants.find(
          p => p.summonerId === safeParseInt(summonerId)
        );
        if (times > 1 && playedWithParticipant) {
          let matchesSince;
          if (
            playedTogether[participant.summonerId].matchesSince >
            playedTogether[summonerId].matchesSince
          ) {
            matchesSince = playedTogether[participant.summonerId].matchesSince;
          } else {
            matchesSince = playedTogether[summonerId].matchesSince;
          }
          acc.push({
            summonerName: playedWithParticipant.summonerName,
            times,
            matchesSince
          });
        }
        return acc;
      },
      []
    );
    if (premades.length) result[badges.premade.name] = premades;
  }

  const games = stats ? stats.wins + stats.losses : 0;
  if (games < 5) {
    result[badges.notEnoughGames.name] = {};
  } else {
    featuresWithBadge.forEach(feature => {
      const ratio = stats[feature.property] / games;
      if (feature.badge.obtainedCheck(ratio)) {
        result[feature.badge.name] = Math.round(ratio * 100);
      }
    });
  }

  return result;
};
