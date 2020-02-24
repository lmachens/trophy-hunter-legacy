import SCORES from '../scores';

const uncleScrooge = {
  name: 'uncleScrooge',
  title: 'Uncle Scrooge',
  description: 'Gain more than 28000 gold.',
  svgPath:
    'M251.813 20.5c-.78-.008-1.558.003-2.344.03-11.005.39-22.285 5.142-32.376 17.814l-5.156 6.468-7.063-4.343c-13.67-8.436-30.948-11.566-45.5-8.75-14.552 2.814-26.03 10.716-31.344 25.374l-3.624 9.968L115 62.22c-16.243-8.34-24.717-8.468-31.75-5.314-5.606 2.515-11.456 8.555-18.094 17.375L147.594 138c12.92 4.168 31.79 4.086 50.75-.813 18.95-4.895 37.863-14.44 51.625-27.406l31.124-76.905c-6.596-6.452-16.42-11.52-26.938-12.28-.778-.058-1.563-.087-2.344-.095zM265 121.28l-.594.595c-16.8 16.497-39.04 27.636-61.375 33.406-6.883 1.78-13.784 3.075-20.56 3.814-3.682 6.112-6.727 12.262-9.19 18.47l.532-.033c1.4 24.178 11.835 42.98 26.75 60.876l-14.343 11.97c-8.29-9.947-15.738-20.762-21.282-32.814-.92 23.227 4.222 47.218 12.78 72.22l-17.687 6.062c-15.615-45.618-20.942-92.383 1-136.375-7.386-.588-14.426-1.96-20.905-4.25l-.344-.126c-4.26 4.08-8.35 8.368-12.25 12.875-31.64 36.583-49.03 85.3-39.936 123.25 4.87 20.324 13.632 39.513 26.156 55.874 3.653-.298 7.256-.49 10.78-.53 11.585-.138 22.4 1.094 32.032 3.623 3.04.798 5.98 1.776 8.813 2.875 7.484-.797 15.245-1.218 23.22-1.218 28.474 0 54.303 5.297 73.843 14.47 7.586 3.56 14.44 7.848 20 12.81-.047-.742-.063-1.493-.063-2.25 0-4.568.85-8.905 2.438-13-8.938-8.382-14.532-18.546-14.532-30.187 0-16.12 10.75-29.346 26.22-39 .012-4.624.893-9.02 2.53-13.156-10.165-8.73-16.655-19.555-16.655-32.092 0-7.917 2.594-15.142 7.063-21.594-4.47-6.452-7.063-13.677-7.063-21.594 0-3.813.598-7.456 1.72-10.938-9.688-8.603-15.814-19.182-15.814-31.375 0-12.108 6.054-22.594 15.626-31.156-5.94-4.6-12.232-8.505-18.906-11.5zm111.438 2.345c-26.022 0-49.507 5.433-65.688 13.563-16.18 8.13-23.78 18.062-23.78 26.75 0 8.687 7.6 18.65 23.78 26.78 16.18 8.13 39.666 13.532 65.688 13.532 11.222 0 21.978-1.018 31.875-2.813v-17.03c13.862-2.068 25.41-5.9 32.812-10.782v17.563c.328-.16.678-.307 1-.47 16.18-8.13 23.813-18.093 23.813-26.78 0-8.687-7.632-18.62-23.813-26.75-16.18-8.13-39.666-13.563-65.688-13.563zm96.5 67.625c-3.334 3.582-7.283 6.86-11.657 9.844l.25 29.03c12.545-7.523 18.5-16.197 18.5-23.874 0-4.788-2.31-9.965-7.092-15zm-171.844 15.47c.265 8.576 7.887 18.325 23.78 26.31 16.182 8.13 39.667 13.532 65.688 13.532 16.316 0 31.636-2.13 44.782-5.718l.625-27.28c-17.166 6.025-37.58 9.374-59.533 9.374-28.558 0-54.474-5.69-74.062-15.532-.435-.218-.852-.464-1.28-.687zm1.97 34.81c-1.345 2.694-2.002 5.352-2.002 7.907 0 8.688 7.632 18.652 23.813 26.782 16.18 8.13 39.666 13.53 65.688 13.53 13.194 0 25.73-1.384 37-3.813v-24.062c-11.556 2.212-24.002 3.375-37 3.375-28.56 0-54.506-5.69-74.094-15.53-4.828-2.426-9.34-5.17-13.408-8.19zm174.967 0c-4.067 3.02-8.58 5.764-13.405 8.19-1.382.693-2.806 1.346-4.25 2V274c13.335-7.677 19.656-16.654 19.656-24.563 0-2.548-.662-5.218-2-7.906zm7.5 36.75c-2.03 2.028-4.236 3.956-6.624 5.783v32.468c10.314-7.004 15.25-14.77 15.25-21.75 0-5.266-2.816-10.994-8.625-16.5zm-170.124 14.064c-.13.817-.22 1.64-.22 2.437.002 8.69 7.633 18.62 23.814 26.75 16.18 8.13 39.666 13.564 65.688 13.564 14.953 0 29.064-1.775 41.437-4.844v-29.875c-16.304 5.196-35.265 8.063-55.563 8.063-28.558 0-54.505-5.69-74.093-15.532-.36-.18-.708-.378-1.064-.562zm-13.594 21.312c-8.665 6.538-12.843 13.626-12.843 20.03 0 8.69 7.63 18.653 23.81 26.783 16.182 8.13 39.667 13.53 65.69 13.53 9.54 0 18.72-.71 27.342-2.03v-18.19c-.377.003-.747 0-1.125 0-28.558 0-54.505-5.688-74.093-15.53-12.46-6.26-22.86-14.558-28.78-24.594zm162.532 30.688c-7.93 2.796-16.566 5.006-25.72 6.594V363c1.92-.813 3.78-1.65 5.532-2.53 9.82-4.935 16.47-10.537 20.188-16.126zM473.5 362.5c-3.77 3.77-8.21 7.184-13.125 10.25v28.688c13.335-7.678 19.656-16.655 19.656-24.563 0-4.59-2.138-9.537-6.53-14.375zm-348.72 2.813c-10.14.115-21.222 1.413-32.624 4.062-22.803 5.3-42.462 15.006-55.25 25.688-12.788 10.68-17.74 21.388-16.28 29.125 1.46 7.736 9.393 14.833 24.78 18.875 15.388 4.04 36.854 4.204 59.657-1.094 9.19-2.136 17.857-4.97 25.78-8.314V413.03c14.53-6.486 25.467-14.375 30.376-21.905V415.5c12.102-10.422 16.83-20.828 15.405-28.375-1.46-7.735-9.425-14.802-24.813-18.844-7.693-2.02-16.89-3.083-27.03-2.967zm64.657 5.218c2.71 3.895 4.61 8.28 5.532 13.158 1.128 5.983.634 11.85-1.126 17.53 9.822 2.56 18.812 6.073 26.656 10.47 4.39 2.46 8.47 5.268 12.125 8.343 9.022-2.163 16.573-5.152 21.938-8.686v20.53c16.183-7.61 23.5-16.89 23.5-24.312 0-7.43-7.334-16.726-23.563-24.343-16.054-7.537-39.295-12.58-65.063-12.69zm111.72 4.94c-.044.467-.094.944-.094 1.405 0 8.688 7.63 18.65 23.812 26.78 16.18 8.13 39.666 13.533 65.688 13.533 13.194 0 25.73-1.384 37-3.813V386.53c-14.77 4-31.43 6.19-49.094 6.19-28.56 0-54.507-5.72-74.095-15.564-1.086-.546-2.165-1.11-3.22-1.687zM304 412.81c-1.958 3.257-2.938 6.484-2.938 9.563 0 8.688 7.632 18.65 23.813 26.78 16.18 8.13 39.666 13.533 65.688 13.533 13.194 0 25.73-1.384 37-3.813V432.5c-11.556 2.212-24.002 3.375-37 3.375-28.56 0-54.506-5.69-74.094-15.53-4.47-2.246-8.643-4.777-12.47-7.533zm173.125 0c-3.832 2.762-8.025 5.283-12.5 7.532-1.382.694-2.806 1.347-4.25 2v24.594c13.335-7.678 19.656-16.655 19.656-24.563 0-3.077-.953-6.308-2.905-9.563zM184.5 418.22c-3.47 4.383-7.572 8.55-12.188 12.405-15.66 13.082-37.66 23.643-63 29.53-9.14 2.125-18.11 3.472-26.75 4.126 3.2 5.317 8.83 10.542 17.063 15.158 13.698 7.677 33.69 12.843 55.875 12.843 10.077 0 19.68-1.084 28.47-2.967v-20.844c13.858-2.068 25.41-5.903 32.81-10.783v18.407c10.023-6.95 14.845-14.89 14.845-22.375 0-8.723-6.552-18.043-20.25-25.72-7.35-4.12-16.532-7.518-26.875-9.78z',
  score: SCORES.EPIC,
  obtainedCheck: ({ match }) => match.participant.stats.goldEarned >= 30000,
  context: 'matches',
  attribute: 'capability'
};

export default uncleScrooge;
