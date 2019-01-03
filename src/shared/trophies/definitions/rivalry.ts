import SCORES from '../scores';

const rivalry = {
  name: 'rivalry',
  title: 'Rivalry',
  description:
    'Win a game where the gold difference in the first 15 minutes was always less than 2000.',
  svgPath:
    'M66.54 18.002c-.327-.007-.655-.005-.98.006-4.064.136-8.105 1.634-11.39 4.535-7.508 6.632-8.218 18.094-1.586 25.602 4.394 4.974 10.906 6.945 16.986 5.792l57.838 65.475-50.373 44.498 24.188 27.38c9.69-21.368 22.255-39.484 37.427-54.65l6.91 36.188c25.092-6.29 49.834-10.563 74.366-12.873l-23.912-27.07-38.66-12.483c17.117-12.9 36.734-22.97 58.62-30.474l-24.19-27.385-50.37 44.496-57.92-65.57c1.79-5.835.617-12.43-3.72-17.34-3.498-3.96-8.34-6.03-13.235-6.128zm384.397 0c-4.895.1-9.735 2.168-13.232 6.127-4.338 4.91-5.514 11.506-3.723 17.343l-57.92 65.568-50.37-44.497-24.188 27.385c21.884 7.504 41.5 17.573 58.62 30.472l-38.66 12.485-23.255 26.324c24.71 1.863 49.367 5.706 74.118 11.46l6.498-34.03c15.173 15.166 27.74 33.282 37.43 54.65l24.185-27.38-50.372-44.498 57.838-65.475c6.08 1.153 12.593-.818 16.987-5.792 6.63-7.508 5.92-18.97-1.586-25.602-3.285-2.9-7.326-4.4-11.39-4.535-.326-.01-.653-.013-.98-.006zm-186.425 158.51c-39.56-.098-79.467 5.226-120.633 16.095-2.046 90.448 34.484 209.35 118.47 259.905 81.295-49.13 122.402-169.902 120.552-259.914-39.75-10.496-78.91-15.988-118.39-16.086zm-117.176 153.5L60.47 428.35l-12.2 63.894 61.9-19.994 68.49-77.535c-12.86-20.108-23.246-42.03-31.324-64.703zm228.203 6.11c-8.69 22.238-19.577 43.634-32.706 63.142l64.473 72.986 61.898 19.994-12.2-63.894-81.466-92.23z',
  score: SCORES.EASY,
  obtainedCheck: ({ match }) => match.isRivalry && match.participant.stats.win,
  context: 'matches',
  attribute: ''
};

export default rivalry;
