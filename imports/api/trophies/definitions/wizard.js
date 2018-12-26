import SCORES from '../scores';

const wizard = {
  name: 'wizard',
  title: 'Wizard',
  description: 'Deal more magic damage to champions than anyone else total damage to champions.',
  svgPath:
    'M416.125 42.406c-57.576.457-104.863 25.804-144.813 64.875-41.984 41.063-75 97.61-100 155.5.78 4.503 3.06 8.946 7.094 13.658 5.158 6.024 13.183 12.113 23.188 17.593 20.01 10.962 47.79 19.545 75.5 24.47 27.71 4.925 55.505 6.21 75.156 3.438 9.825-1.386 17.538-3.91 21.813-6.563 4.274-2.653 4.916-3.957 4.812-6.625l.72-.03c-3.408-42.828-6-88.797.092-131.94 2.82-19.972 7.668-39.434 15.22-57.624-31.573 31.44-62.918 65.425-86.844 94.72 35.418-70.2 86.2-121.398 141.125-168.97-11.376-1.71-22.42-2.584-33.063-2.5zM155.21 238.994c-2.033-.012-4.053-.012-6.054.006-2.453.022-4.87.065-7.28.125-23.138.575-44.227 2.91-61.876 7.188-23.532 5.703-40.466 14.888-48.78 26.03-8.317 11.144-10.08 24.667-.97 45.532 32.86 75.263 117.185 130.26 207.844 148.594 90.66 18.33 186.108.147 242.28-66.75 13.59-16.185 15.297-29.312 9.938-43.22-5.358-13.908-19.586-28.878-40.78-42.75-14.745-9.65-32.683-18.737-52.75-27.03 1.506 22.59 3.555 44.877 5.124 65.967v.219c.607 11.402-5.49 21.585-14.344 27.938-8.853 6.353-20.268 10.08-33.437 12.406-26.337 4.654-60.026 3.398-93.344-2.188-33.317-5.585-66.085-15.466-90.28-29.312-12.097-6.923-22.145-14.85-28.875-24.47-6.73-9.617-9.76-21.554-6.594-33.374l.095-.375.125-.374c7.637-21.206 16.308-42.79 26.094-64.094-2.053-.032-4.1-.056-6.133-.068zm6.634 46.662c-3.08 7.8-6.017 15.596-8.813 23.344-1.595 6.246-.4 11.407 3.907 17.563 4.374 6.25 12.28 12.923 22.844 18.968 21.128 12.09 52.4 21.78 84.095 27.095 31.694 5.314 64.016 6.28 87 2.22 11.492-2.032 20.53-5.42 25.78-9.19 5.25-3.766 6.864-6.726 6.595-11.78-.517-6.93-1.088-14.027-1.688-21.25-7.448 4.03-16.47 6.367-26.718 7.813-22.732 3.206-51.79 1.665-81.03-3.532-29.242-5.196-58.5-14.055-81.22-26.5-11.36-6.222-21.122-13.34-28.375-21.812-.825-.962-1.62-1.933-2.376-2.938z',
  score: SCORES.HARD,
  obtainedCheck: ({ match }) =>
    match.participant.stats.magicDamageDealtToChampions >=
    match.participant.stats.others.maxTotalDamageDealtToChampions,
  context: 'matches',
  attribute: 'power'
};

export default wizard;
