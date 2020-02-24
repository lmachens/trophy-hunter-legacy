import SCORES from '../scores';

const deadlyVenom = {
  name: 'deadlyVenom',
  title: 'Deadly Venom',
  description:
    'Deal at least 25% more damage to champions than the next player. (from 50%: Tuors Axe)',
  svgPath:
    'M301.563 20.22c-8.64-.033-17.075.304-25.22.968-200.737 0-184.708 197.468 0 226 184.71 28.53 137.485 190.906 9.907 190.906-84.162 0-140.85-19.887-181.03-64.156-42.064-46.34-12.496-99.594 44.28-51.938 57.026 47.867 100.32 83.576 171.813 28-89.54 29.698-124.626-42.73-188.313-81.875-60.388-37.117-138.036 38.746-86 121.25 43.402 68.815 152.713 107.78 243.344 107.78 220.645 0 259.324-271.296 63.094-301.936-69.28-10.818-119.376-23.398-143.688-61.907-17.817-28.226 32.672-85.843 97.656-59.688 9.406 15.75 13.877 35.578 15.375 65.47l83.5 39.53 3.22-5.438.063.125c8.535-4.49 14.952-14.657 20.906-26.03-10.923 4.674-23.103 4.475-34.69 1.468-2.788-1.817-5.497-3.827-8.092-6-23.392-19.585-28.737-45.978-11.938-58.97 12.435-9.615 33.52-9.19 53.125-.374 8.603 18.074 9.702 35.265 11.188 52.5 10.24-14.024 15.704-29.453 18.562-45.656l10.72-18.063C421.43 35.528 357.307 20.423 301.56 20.22zm42.812 22.06c13.64.758 28.504 1.625 41.72 9.407l-9.47 16.126c-8.187-4.822-19.96-6.137-33.28-6.876l1.03-18.656z',
  score: SCORES.MEDIUM,
  obtainedCheck: ({ match }) => {
    return (
      match.participant.stats.totalDamageDealtToChampions >=
        1.25 * match.participant.stats.others.maxTotalDamageDealtToChampions &&
      match.participant.stats.totalDamageDealtToChampions <
        1.5 * match.participant.stats.others.maxTotalDamageDealtToChampions
    );
  },
  context: 'matches',
  attribute: 'power'
};

export default deadlyVenom;
