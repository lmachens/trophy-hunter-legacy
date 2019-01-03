import SCORES from '../scores';

const sweetHoney = {
  name: 'sweetHoney',
  title: 'Sweet Honey',
  description: 'Farm at least 180 minions at 20 minutes.',
  svgPath:
    'M307.813 23.344l-3.782 3.78-34.5 34.47-44.78-11.782-5.188-1.374-3.812 3.812-36.594 36.53-45.53-12-5.19-1.343-3.78 3.782-38.78 38.718-3.814 3.812 1.376 5.188 13.187 49.874-35.438 35.407-3.812 3.78 1.375 5.22 13.906 52.593 1.375 5.28 1.407.376c19.81 10.976 38.706 97.624 28.094 137.31-2.606 9.753-16.655 35.4-16.655 47 0 15.728 12.652 28.515 28.375 28.126 15.723-.392 28.344-14.088 28.344-29.812 0-11.673-14.58-36.445-17.25-46.094-6.06-21.895.922-48.96 13.22-68.875l4.936 1.28 52.656 13.876 5.188 1.376 3.812-3.812 21.688-21.625c7.984 19.473 9.73 48.845 2.906 74.374-2.573 9.623-16.438 34.895-16.438 46.344 0 15.517 12.483 28.162 28 27.78 15.518-.373 27.967-13.92 27.97-29.437 0-11.518-14.397-35.946-17.032-45.467-11.366-41.077 12.977-75.36 39.438-75.5l.593.156.126-.126c.147.002.29-.005.438 0-.087-.057-.193-.1-.28-.156l3.53-3.5L332 297.844l4.125 1.125c1.173 12.203.642 23.632-2.188 31.936-2.463 7.227-11.812 26.517-11.812 35.375 0 12.01 9.4 21.408 21.406 21.595 12.01.095 21.438-9.243 21.44-21.25 0-8.914-10.39-28.197-12.564-35.594-2.596-8.834-4.21-18.916-4.72-28.967l33.97 9.125 5.188 1.375 3.812-3.782 5.47-5.436c4.175 31.496 3.13 68.988-4.563 91.562-4.09 11.998-20.688 44.982-20.688 59.688 0 19.933 16.258 35.563 36.188 35.75 19.93.157 35.468-15.253 35.468-35.188 0-14.794-18.052-47.69-21.436-60.03-5.96-21.737-6.115-69.13.406-116.938l9.625-9.532 3.875-3.844-1.438-5.25-5.312-19.5c5.808-26.393 13.877-50.716 24.344-68.25l2.875-2.875-1.376-5.218-13.906-52.595-1.375-5.28-5.282-1.376-48.967-12.907-12.22-46.313-1.406-5.28-5.25-1.376L313 24.72l-5.188-1.376zm5.625 20.812l42.218 11.125 11.125 42.157-31.186 31.126-38.875-10.25-12-45.47 28.717-28.687zm-88.25 25.094L264.03 79.5 276 124.75l-28.875 28.844-42-11.063L194 100.407l31.188-31.156zm-91.157 27l42.25 11.125 11.126 42.125-31.156 31.125L114 169.5l-11.125-42.094L134.03 96.25zm66.44 67.28l40.843 10.75 11.437 43.314-30.28 30.28-42.032-11.093-11.125-42.124 31.156-31.125zm65.25 67.814l40.967 10.78L318.375 285l-30.688 30.656-42.218-11.125-11.064-41.936 31.313-31.25zm104.905 16.28c9.275.22 16.596 13.983 21.406 33.5l-10.717 10.626-33.157-8.875c1.985-18.728 8.707-33.897 21.25-35.188.41-.042.815-.072 1.22-.062z',
  score: SCORES.EPIC,
  obtainedCheck: ({ match: { participant } }) => {
    if (participant.timeline.creepsPerMinDeltas) {
      return (
        participant.timeline.creepsPerMinDeltas['0-10'] +
          participant.timeline.creepsPerMinDeltas['10-20'] >=
        18
      );
    }
  },
  context: 'matches',
  attribute: 'capability'
};

export default sweetHoney;
