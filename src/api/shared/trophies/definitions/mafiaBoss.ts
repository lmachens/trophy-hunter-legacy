import SCORES from '../scores';
import { ARAM } from '../types';

const mafiaBoss = {
  name: 'mafiaBoss',
  title: 'Mafia Boss',
  description: "Don't get your hands dirty, but achieve at least 30 assists. (ARAM: 40 assists).",
  svgPath:
    'M62.522 17.166c-.412-.005-.826 0-1.243.012l-.003-.002c-9.747.288-20.823 5.23-29.843 14.25C16.242 46.62 12.596 67.62 23.31 78.334c7.99 7.988 21.715 8.026 34.47 1.22 16.166 30.05 42.153 57.687 71.437 76.374-18.77 24.156-29.97 54.48-29.97 87.375h18.69c0-28.9 9.826-55.474 26.342-76.53l2.156 39.405c2.91 2.622 5.82 5.224 8.732 7.832 4.356-12.66 10.49-24.082 18.785-33.344l13.057-14.578 2.568 19.4c3.6 27.192 6.476 50.554 9.908 67.99 15.483 13.69 30.924 27.27 46.223 40.555 5.405-2.125 11.38-3.683 17.63-5.1 18.31-4.148 40.412-6.538 60.058-9.835-37.685-43.742-77.43-88.55-117.246-132.668l-38.968-2.125c20.764-15.68 46.636-24.966 74.718-24.97v-18.69c-32.2.003-61.944 10.726-85.843 28.78-18.697-29.382-46.39-55.48-76.53-71.685 6.794-12.748 6.796-26.422-1.188-34.406-4.08-4.08-9.646-6.094-15.82-6.168zm319.773 2.682l-51.34 54.99 27.06 85.992L419.642 176l16.407-49.58-45.104-23.934-8.447 23.213 15.62 9.597 2.673-11.535 14.618 7.54-5.765 27.046-49.16-27.498L384 78l43.107 24.766 17.795-57.682-62.607-25.236zM203.79 32.305c-23.41 22.86-38.652 47.65-46.438 71.302.95 1.23 1.894 2.47 2.818 3.72 19.074-11.54 40.616-18.787 62.72-21.53-8.528-18.76-16.008-37.234-19.1-53.492zm139.29 3.027c-2.256.45-43.49 8.084-53.945 9.863l-13.783 97.078 75.595 85.483 116.612-14.272 24.63-100.953-44.635-18.63-4.655 15.092 12.768 8.856-26.49 79.732-85.477-21.86-31.407-99.814 30.787-40.574zm-99.756 99.93c-8.035.007-15.983.746-23.94 2.43a9462.44 9462.44 0 0 1 40.825 45.27c-.502-13.06-6.45-29.622-14.358-47.657-.843-.015-1.687-.044-2.528-.043zm49.067 53.3a233.982 233.982 0 0 0-15.814 12.737 6065.473 6065.473 0 0 1 40.684 46.173c13-2.56 26.228-6.366 38.982-11.928-21.436-4.717-51.77-8.685-60.724-26.168a234.736 234.736 0 0 1 9.285-6.922c-2.27-2.522-2.445-2.703-4.967-5.52-2.645-2.954-4.985-5.603-7.445-8.374zm-117.267 24.686c-7.373 17.72-11.074 40.45-10.783 63.322.422 33.24 5.29 63.63 16.855 79.524-18.443 39.608-40.69 81.563-69.343 102.687h-.004c-26.502 18.904-51.61 14.405-63.866.624-6.127-6.89-9.442-16.274-7.98-28.258 1.45-11.88 7.926-26.43 22.246-42.21 11.966-10.248 21.69-14.276 28.156-14.954 6.552-.687 9.854 1.214 12.336 4.327 4.963 6.226 5.048 20.812-7.48 31.327l12.013 14.316c19.1-16.03 22.676-41.487 10.082-57.29-6.297-7.9-17.036-12.51-28.9-11.268-11.865 1.245-24.787 7.553-38.885 19.76l-.41.357-.365.4c-16.57 18.11-25.296 36.22-27.34 52.973-2.045 16.753 2.874 32.043 12.564 42.94 19.38 21.79 56.224 25.322 88.68 2.175l.003-.002a160.698 160.698 0 0 0 16.992-13.967c29.887-7.726 58.962-10.74 92.3-37.436-21.193.977-40.373-1.7-53.542-15.13 13.405-25.285 23.347-52.815 34.78-79.87 4.153-9.833 8.482-19.624 13.212-29.285a8956.346 8956.346 0 0 1-13.22-11.605 47.82 47.82 0 0 1-1.582-.322l-5.325 15.978c-7.244-2.413-12.01-8.344-15.4-15.106-3.39-6.763-5.785-14.94-7.92-24.63-2.96-13.43-5.385-30.65-7.875-49.376zm192.2 78.113c-.95 3.686-2.002 7.268-3.15 10.75a3912.925 3912.925 0 0 1 38.073 45.722c15.284-8.49 29.937-19.356 42.938-32.674-23-3.926-50.907-14.148-77.862-23.797zm-19.044 1.066c-26.425 7.104-58.293 8.925-80.964 14.062-13.756 3.117-23.042 7.92-25.418 11.51-1.187 1.795-1.65 3.264-.867 6.848.784 3.583 3.327 9.055 8.585 16.04l.004.005.003.007c15.597 20.782 35.098 23.19 55.207 12.3 17.34-9.387 34.29-30.29 43.45-60.77zm9.195 26.633c-8.447 18.075-19.744 32.47-32.63 42.465 62.56 52.325 120.89 98.433 169.995 133.31-34.996-50.882-83.143-111.51-137.365-175.776z',
  score: SCORES.EPIC,
  obtainedCheck: ({ match, trophiesCategory }) => {
    if (trophiesCategory === ARAM) {
      return match.participant.stats.assists >= 40;
    }

    return match.participant.stats.assists >= 30;
  },
  context: 'matches',
  attribute: 'cooperation'
};

export default mafiaBoss;
