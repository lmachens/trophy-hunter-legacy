import SCORES from '../scores';

const darkBinding = {
  name: 'darkBinding',
  title: 'Dark Binding',
  description:
    'CC other champions for at least 100 seconds (soft cc counts for 1/2, slows count for 1/6 of their duration).',
  svgPath:
    'M483.1 32.5c-18.8 26.84-35 48.42-53.5 65.9-24.3 23.1-52.8 38.7-94.5 49.3-9.3 2.4-13.3 6.8-15 11.6-1.8 4.9-1.3 10.9 1.7 16.1 3 5.2 7.8 9.4 14.5 10.8 6.8 1.4 15.5.2 26.7-7.1 35.3-23.3 66.8-48.4 88.8-77.3 15.8-20.75 26.8-43.41 31.3-69.3zm-454.15.1c4.51 25.85 15.43 48.49 31.22 69.2 21.96 28.9 53.33 54 88.83 77.3 11 7.3 19.9 8.5 26.5 7.1 6.8-1.4 11.6-5.6 14.6-10.8 2.9-5.2 3.5-11.2 1.8-16.1-1.9-4.8-5.8-9.2-15.1-11.6-41.7-10.6-70.2-26.2-94.45-49.3-18.48-17.48-34.65-39.03-53.4-65.84zm227.05 99c-24 0-43.4 2.1-59 6.2 5.5 4.1 9.5 9.4 11.8 15.2 3.8 10.4 2.3 21.9-2.9 31.2-5.4 9.4-14.6 17.1-26.6 19.6-11.4 2.4-24.9-.1-38.8-8.7-2.4 11.2-3.5 24.3-3.5 39.5 0 47.2 6.1 69.5 12.5 86.9 5.1 14.6 11.1 26.9 12.9 45.6l45.2 7.9c-2.1-2-4.1-4-6.1-6l-2.5-2.7v-3.7c0-5.5 1.5-10.8 4.5-14.8 3.3-4 7.5-6.4 11.6-7.7 5.3-1.8 10.5-2.2 15.9-2.4v-16.3c-1.7 1.8-3.6 3.6-5.6 5.2-4.8 3.8-10.4 7-17.4 7-19.5 0-31.5-12.9-36.4-24.3-3.2-7.9-4.2-15.4-4.6-19.4-3.7-1.7-7.5-3.4-11-5.2l8-16.2c15.5 7.8 34.9 15.4 51 17.2 8 .8 15.1.3 20.5-1.8 5.5-2 9.4-5.2 12.4-11.3l8.1-16.1 8.1 16.1c3 6.1 6.9 9.3 12.2 11.3 5.5 2.1 12.7 2.6 20.7 1.8 16.1-1.8 35.5-9.4 51-17.2l8 16.2c-3.5 1.8-7.4 3.5-11.2 5.2-.2 4-1.2 11.5-4.5 19.4-5 11.4-16.8 24.3-36.3 24.3-7 0-12.7-3.2-17.4-7-2-1.6-4-3.4-5.6-5.2v16.3c5.3.2 10.6.6 15.8 2.4 4.2 1.3 8.3 3.7 11.5 7.7 3.2 4 4.7 9.3 4.7 14.8v3.7l-2.7 2.7-6 6 45.3-7.9c1.7-18.7 7.7-31 12.9-45.6 6.3-17.4 12.5-39.7 12.5-86.9 0-15.2-1.2-28.3-3.7-39.5-13.7 8.6-27.2 11.1-38.7 8.7-12-2.5-21.3-10.2-26.5-19.6-5.3-9.3-6.8-20.8-3-31.2 2.2-5.8 6.2-11.1 11.7-15.2-15.5-4.1-35-6.2-58.8-6.2zm-25 21.7l17.9 2.6c-4.6 30.1-16.6 52.9-34.4 66.5-18 13.5-41 17.2-64.9 10.9l4.7-17.4c19.5 5.1 36.1 2.2 49.2-7.8 13.3-10.1 23.5-28 27.5-54.8zm49.8 0c4 26.8 14.3 44.7 27.5 54.8 13.3 10 29.8 12.9 49.3 7.8l4.7 17.4c-23.8 6.3-47 2.6-64.8-10.9-17.9-13.6-29.9-36.4-34.4-66.5zM88.86 212.7c-.14 12.3-.33 23.9.82 33.6 1.47 12.5 4.79 22.1 12.62 29.9 6.1 6.2 9 14.2 11.7 23 2.7 8.8 4.7 18.5 6.7 27.4 2 9 4 17.2 6.1 22.4.9 2.4 1.8 3.8 2.3 4.4 3.8-.3 7.8-1.8 11.3-4.5-2.1-6.6-4.9-13-7.9-21.2-6.6-18.1-13.2-43.1-13.6-89.6-3.2-3.8-6.3-7.6-9.4-11-6.6-7-12.59-12.2-20.64-14.4zm334.24 0c-8.1 2.2-14.1 7.4-20.8 14.4-3 3.4-6.2 7.2-9.3 11-.4 46.5-7 71.5-13.5 89.6-3 8.2-5.9 14.6-7.9 21.2 3.5 2.7 7.5 4.2 11.2 4.5.5-.6 1.3-2 2.3-4.4 2-5.2 4-13.4 6-22.4 2-8.9 4-18.5 6.7-27.4 2.8-8.8 5.7-16.8 11.8-23 7.9-7.8 11.2-17.4 12.7-29.9 1-9.7.8-21.3.8-33.6zM256 291.5c-2.2 2.2-4.5 4.1-7 5.7v58.4h-9c-8 0-15.5.3-19.2 1.5-1.8.7-2.7 1.3-2.9 1.8-.1.1-.3.3-.4.5 6.9 6.8 13.6 13.3 19.9 18 7.1 5.4 13.6 8.2 18.6 8.2 5 0 11.3-2.8 18.6-8.2 6.2-4.7 13-11.2 19.7-18 0-.2-.2-.4-.2-.5-.3-.5-1.1-1.1-3-1.8-3.8-1.2-11.1-1.5-19.1-1.5h-9v-58.4c-2.5-1.6-4.9-3.5-7-5.7zm-62 8.2c.3 8.3 3.8 14.9 8 14.9 3.5 0 6.6-4.9 7.6-11.5-5.1-.8-10.5-1.9-15.6-3.4zm124 0c-5.2 1.5-10.5 2.6-15.7 3.4 1 6.6 4 11.5 7.7 11.5 4.1 0 7.6-6.6 8-14.9zm-155 76.4v2.5c0 5.9 1.9 12.6 5 19.7 1.9-3.3 3.3-6.5 4.1-9.7l-3.3-4.6zm186 0l-9.2 12.5c.8 3.2 2.3 6.4 4.2 9.7 3.1-7.1 5-13.8 5-19.7zm-151.7 16.5c-2.7.1-5.3.6-7.9 1.4-4.5 15.3-15.4 28.5-27.9 40-.1.1-.4.3-.5.4 3.1-1.7 6.4-3.3 9.4-5.2 15.6-9.8 29.1-21.9 37.7-32.5-3.6-3.2-6.6-3.9-9.7-4.1zm116.3 0c-3.1.2-6.3.9-9.8 4.1 8.7 10.6 22 22.7 37.8 32.5 3 1.9 6.2 3.5 9.2 5.2 0-.1-.2-.3-.5-.4-12.5-11.5-23.2-24.7-27.7-40-2.8-.8-5.3-1.3-8-1.4zm-83.2 4.6l-3 4.3c-2.4 3.3-5 6.7-8 10.1h73.2c-3-3.4-5.8-6.8-8-10.1l-3-4.3-6.3 1.1c-6 3.2-12.3 5.3-19.3 5.3s-13.5-2.1-19.5-5.3zm-28.5 31.4c-2.9 2.4-6 4.9-9.3 7.2 8.4 10.4 16.8 20.3 22.8 29.1l.1.1v.1c5 7.7 22.4 14.4 40.5 14.4s35.5-6.6 40.5-14.1c6.1-9.1 14.5-19.1 22.8-29.6-3.2-2.3-6.3-4.8-9.2-7.2l-22.3 30-5.7-1.2s-17-3.3-26.1-3.3c-9.2 0-26.2 3.3-26.2 3.3l-5.7 1.2zm23.1 1l6.9 9.1c5.6-1 14.7-2.6 24.1-2.6 9.3 0 18.5 1.6 24.1 2.6l6.7-9.1z',
  score: SCORES.VERY_HARD,
  obtainedCheck: ({ match }) => match.participant.stats.timeCCingOthers >= 100,
  context: 'matches',
  attribute: 'power'
};

export default darkBinding;
