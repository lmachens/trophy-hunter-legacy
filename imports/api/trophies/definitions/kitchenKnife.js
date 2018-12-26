import { ARAM } from '../types';
import SCORES from '../scores';

const kitchenKnife = {
  name: 'kitchenKnife',
  title: 'Kitchen Knife',
  description:
    'Deal more than 30000 total damage to champions. (from 50000: Machete) (ARAM: 35000 total damage, from 55000 Machete).',
  svgPath:
    'M81.875 17.375c-6.078.165-12.153 2.38-17.094 6.688-9.804 8.546-11.978 22.59-5.936 33.53-10.02-7.47-24.227-7.263-34.032 1.282-11.293 9.843-12.472 26.992-2.625 38.28 6.045 6.93 14.84 10.06 23.344 9.157l63.19-54.406c2.403-8.518.597-18.05-5.657-25.218-5.54-6.35-13.373-9.525-21.188-9.313zM110.22 75.25L71.624 108.5c5.35 3.492 10.94 7.496 16.656 11.97l33.626-20.94c-4.268-7.612-8.187-15.678-11.687-24.28zm21.53 40.156l-28.344 17.688c6.735 5.947 13.518 12.4 20.22 19.187l21.624-19.25c-.196-.126-.398-.246-.594-.374-4.53-5.505-8.826-11.246-12.906-17.25zm30.344 27.625l-29.22 26.032c5.28 11.427 9.843 22.932 12.69 33.938l43.874-46.97c-9.375-3.84-18.516-8.185-27.344-13zm46.344 20l-59.75 64c-.29 31.004 20.253 46.52 34.156 46.75 7.01.117 12.22-2.365 15.812-10.25 3.592-7.883 4.758-22.46-2.03-44.592l-6.095-19.875 18.907 8.625c30.374 13.842 47.987 4.07 52.532-5.75 2.27-4.91 2.154-10.26-2.064-16.25-4.218-5.992-13.203-12.525-29.094-16.313-7.53-1.796-14.994-3.922-22.375-6.344zm45.375 67.47c-9.954 3.04-21.965 3.365-35.125.125 2.97 16.655 1.766 30.126-3.032 40.656-.087.193-.19.374-.28.564 29.997 31.006 42.134 75.278 21.186 116.875 38.333 69.668 145.578 127.334 256.844 96.217-180.024-73.33-116.315-159.68-239.594-254.437z',
  score: SCORES.EASY,
  obtainedCheck: ({ match, trophiesCategory }) => {
    if (trophiesCategory === ARAM)
      return (
        match.participant.stats.totalDamageDealtToChampions >= 35000 &&
        match.participant.stats.totalDamageDealtToChampions < 55000
      );

    return (
      match.participant.stats.totalDamageDealtToChampions >= 30000 &&
      match.participant.stats.totalDamageDealtToChampions < 50000
    );
  },
  context: 'matches',
  attribute: 'power'
};

export default kitchenKnife;
