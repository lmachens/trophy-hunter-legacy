import SCORES from '../scores';
import { TWISTED_TREELINE } from '../types';

const noxianShield = {
  name: 'noxianShield',
  title: 'Noxian Shield',
  description:
    'Tank most damage of your team while having the least number of deaths of your team.(Twisted Treeline: one less death than the next person).',
  svgPath:
    'M256 21.938l-4.025 2.01c-96 48-93.455 47.175-189.455 63.175l-8.592 1.432 1.15 8.634c16.125 120.934 48.338 217.868 85.022 285.12 18.34 33.627 37.776 59.85 57.263 78.022C216.85 478.502 236.625 489 256 489s39.15-10.497 58.637-28.668c19.487-18.17 38.922-44.395 57.263-78.02 36.684-67.254 68.897-164.188 85.022-285.123l1.15-8.635-8.592-1.432c-96-16-93.455-15.174-189.455-63.174L256 21.937zM224 64c16 0 16 0 32 16 16-16 16-16 32-16-16 16-16 16-16 32l2.666 48h109.158S400 144 416 128c0 16 0 16-16 32 16 16 16 16 16 32-16-16-32.176-16-32.176-16h-107.38L288 384s0 32 16 64c-16 0-48 0-48-16 0 16-32 16-48 16 16-32 16-64 16-64l11.555-208H128.13S112 176 96 192c0-16 0-16 16-32-16-16-16-16-16-32 16 16 32.13 16 32.13 16h109.204L240 96c0-16 0-16-16-32z',
  score: SCORES.MEDIUM,
  obtainedCheck: ({ match, trophiesCategory }) => {
    if (trophiesCategory === TWISTED_TREELINE) {
      const hasLeastDeaths =
        match.participant.stats.deaths + 1 <= match.participant.stats.others.minDeaths;
      const hasMostTankedDamage =
        match.participant.stats.totalDamageTaken + match.participant.stats.damageSelfMitigated >=
        match.team.maxDamageTanked;
      return hasLeastDeaths && hasMostTankedDamage;
    }

    {
      const hasLeastDeaths = match.participant.stats.deaths <= match.team.minDeaths;
      const hasMostTankedDamage =
        match.participant.stats.totalDamageTaken + match.participant.stats.damageSelfMitigated >=
        match.team.maxDamageTanked;
      return hasLeastDeaths && hasMostTankedDamage;
    }
  },
  context: 'matches',
  attribute: 'robustness'
};

export default noxianShield;
