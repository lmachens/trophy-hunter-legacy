import SCORES from '../scores';
import { TWISTED_TREELINE } from '../types';

const greyEminence = {
  name: 'greyEminence',
  title: 'Grey Eminence',
  description:
    'Have most assists while having the least number of deaths. (Twisted Treeline: sinlge most assists and single least deaths.)',
  svgPath:
    'M227.02 45.682l-2.01 150.17c-10.8 2.273-21.273 5.438-31.334 9.423l-34.46-54.44 10.48 65.913c-11.186 6.322-21.69 13.712-31.362 22.043l-85.387-73.01 60.914 98.26c-10.724 13.255-19.744 27.943-26.725 43.73l-37.89-9.674 32.146 24.228c-5.19 14.893-8.618 30.607-10.036 46.89l-52.426 1.497 151.115 58.343c-5.937-13.1-9.244-27.634-9.244-42.922 0-57.535 46.842-104.378 104.378-104.378 57.535 0 104.377 46.843 104.377 104.38 0 14.662-3.05 28.628-8.535 41.304-.054.597-.1 1.188-.16 1.79l138.406-59.548-40.56-3.928c-2.213-21.043-7.78-41.097-16.17-59.607l29.804-34.71-41.317 13.08c-9.153-14.872-20.252-28.418-32.937-40.292l58.926-131.802-93.026 106.238c-13.207-7.81-27.41-14.104-42.377-18.64l2.535-65.838-24.547 60.54c-11.17-1.997-22.667-3.04-34.405-3.04-2.4 0-4.785.06-7.164.146L227.02 45.682zm38.173 164.685c9.258 0 18.345.717 27.213 2.09l-19.693 48.572-10.74-50.622c1.072-.02 2.143-.04 3.22-.04zm-40.44 4.664l-.515 38.53-20.392-32.218c6.78-2.518 13.76-4.633 20.908-6.31zm96.112 4.312c10.708 3.56 20.953 8.127 30.63 13.578l-32.585 37.213 1.955-50.79zm-148.03 17.15l5.85 36.803-26.048-22.274c6.366-5.3 13.115-10.156 20.197-14.528zm217.186 25.766c8.48 8.533 16.08 17.934 22.673 28.056l-41.02 12.987 18.348-41.042zm-265.73 18.605l26.808 43.24-45.643-11.654c5.185-11.22 11.508-21.8 18.836-31.587zM265.18 300.44c-47.435 0-85.69 38.256-85.69 85.69 0 47.436 38.255 85.688 85.69 85.688 47.435 0 85.687-38.252 85.687-85.687 0-47.434-38.252-85.69-85.687-85.69zm163.808 21.484c5.21 13.28 8.856 27.35 10.707 41.984l-43.17-4.18 32.463-37.804zM97.11 334.176l43.853 33.054-50.805 1.45c1.177-11.892 3.534-23.433 6.953-34.504z',
  score: SCORES.MEDIUM,
  obtainedCheck: ({ match, trophiesCategory }) => {
    if (trophiesCategory === TWISTED_TREELINE) {
      return (
        match.participant.stats.assists > match.participant.stats.others.maxAssists &&
        match.participant.stats.deaths < match.participant.stats.others.minDeaths
      );
    }

    return (
      match.participant.stats.assists >= match.maxAssists &&
      match.participant.stats.deaths <= match.minDeaths
    );
  },
  context: 'matches',
  attribute: 'robustness'
};

export default greyEminence;
