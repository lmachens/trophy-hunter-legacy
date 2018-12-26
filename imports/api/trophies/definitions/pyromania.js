import SCORES from '../scores';

const pyromania = {
  name: 'pyromania',
  title: 'Pyromania',
  description: 'Kill three fire dragons.',
  svgPath:
    'M85.875 20.97c-2.23 31.596-95.21 45.233-4.813 99.03-23.242-46.488 64.566-57.552 4.813-99.03zM278.53 23c-32.003 14.21-22.885 55.257-8.186 73 28 33.796-31.348 52.158-49.063-5.25-5.377 17.623-24.532 21.47-35.624 7.563-7.015-8.797-19.48-31.605-12.25-53.72-20.884 14.735-31.686 45.047-19.28 63.063 29.282 42.526-11.72 75.307-58.97 40.906 36.456 47.748 21.176 119.87-16.344 144.25 14.684-32.04 8.24-88.19-22.218-99.28 14.39 42.618-16.59 75.378-36.75 66.155V494.72h52.562c6.15-23.78 16.033-46.735 30.5-61.44 16.928-17.203 41.296-29.383 77.78-36.25l15.595-2.936-10.124-12.22c-20.233-24.38-33.406-59.518-33.406-98.655 0-37.723 12-71.733 30.906-95.94 18.906-24.205 44.29-38.53 72.125-38.53 27.837 0 53.19 14.325 72.095 38.53 18.905 24.208 30.906 58.218 30.906 95.94 0 38.246-12.073 73.187-31.374 97.374l-10.03 12.562 15.874 2.5c39.988 6.292 65.567 18.497 82.5 35.844 14.297 14.647 23.413 38.986 28.625 63.22h50.75V238.78c-7.012-23.793-17.18-46.354-32.625-51.093 19.492 39.968 1.278 129.343-61.906 141.313 26.715-22.383 45.213-78.483 35.03-101.594-34.788 47.587-79.102 2.555-34.437-43.22 29.676-30.412 39.924-68.813 10.5-110.967 9.104 40.185-37.766 84.93-69.875 56.655-21.68-19.09-10.235-60.918 23.75-71.844-26.954-9.334-47.72 2.8-52.562 21.595C295.337 62.535 272.155 51.37 278.53 23zm-74.155 242.844c-9.215-.212-19.062 3.635-29.063 13.28 14.593 29.555 39.886 25.69 67.938 13.188-9.878-14.53-23.517-26.116-38.875-26.468zm99.094 0c-15.36.352-28.998 11.938-38.876 26.47 28.05 12.5 53.345 16.365 67.937-13.19-10-9.645-19.846-13.492-29.06-13.28zM197.03 350.75c19.292 61.366 100.937 60.7 121.69 0-42.215 8.574-80.72 9.61-121.69 0z',
  score: SCORES.VERY_HARD,
  obtainedCheck: ({ match }) => match.team.fireDragons >= 3,
  context: 'matches',
  attribute: 'cunning'
};

export default pyromania;
