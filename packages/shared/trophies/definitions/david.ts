import SCORES from '../scores';

const david = {
  name: 'david',
  title: 'David',
  description: 'Kill an opponent who is at least two levels above you.',
  svgPath:
    'M157.54 15.78c-2.838.003-5.676.125-8.5.365-22.6 1.92-44.724 11.21-61.347 26.587-16.32 15.096-27.204 36.473-26.69 61.45 3.875-.13 9.014-.284 14.847-.397 1.073-.02 2.088-.027 3.146-.043-.402-19.627 7.798-35.656 20.92-47.795 13.38-12.377 32-20.283 50.647-21.867 18.517-1.573 36.767 2.965 50.646 14.524 5.373-3.043 11.074-4.81 16.602-5.51 1.072-.136 2.135-.228 3.192-.297-2.48-2.79-5.112-5.37-7.89-7.715-15.842-13.365-35.714-19.31-55.575-19.3zm68.077 44.282c-2.986.057-5.93.6-8.842 1.477-1.104.257-2.187.577-3.25.972.026.04.05.082.075.12-3.47 1.38-6.817 3.335-9.692 6.35-3.5 3.673-6.077 9.9-4.693 15.998l.094.413.045.144c11.863-10.083 27.67-14.763 42.444-14.64.3.002.596.024.895.03l-.068-.868-.592-1.374c-2.704-6.274-8.677-8.048-13.11-8.49-1.107-.11-2.21-.154-3.308-.133zM277.66 81.3c-6.248.09-12.4.574-18.474 1.378l-.582.54 4.716 17.102c4.68-.57 9.39-.928 14.133-1.015 1.6-.03 3.207-.03 4.817 0 36.413.658 76.09 16.07 122.072 59.433l15.937-9.623c-49.936-48.12-95.313-67.04-137.684-67.806-1.652-.03-3.297-.035-4.936-.01zm-52.29 10.595c-6.7 2.283-12.923 5.844-17.354 10.447l2.01 10.578c4.8-7.386 9.9-14.41 15.345-21.025zm18.597 5.953c-4.65 5.218-9.075 10.81-13.297 16.738 5.564-1.297 11.307-1.985 17.088-2.13-.102-.656-.203-1.312-.3-1.958l-3.49-12.65zM190.2 105c-10.62 5.178-21.06 10.89-31.368 16.828l14.736 8.645-.23-.047c.64.353 1.372.707 1.754 1.027.528.443.905.83 1.213 1.19 5.797-3.22 11.592-6.312 17.392-9.227L190.2 105zM80.692 121.756c-1.61.018-2.815-.007-4.496.025-8.207.16-14.15.39-16.605.478-2.228 1.913-6.242 5.488-11.158 11.178-6.63 7.67-12.168 17.598-12.092 23.324.095 7.15 3.73 19.28 9.736 30.228 6.007 10.948 14.408 20.872 21.87 25.426.002 0 2.58.932 6.513 1.07 3.934.138 9.176-.22 15.04-1.04 11.728-1.64 25.992-5.075 39.117-9.215 8.666-2.735 16.262-5.755 22.9-8.71-17.423-3.064-34.79-11.906-48.413-23.3-9.947-8.318-17.986-18.11-21.704-29.304-2.12-6.388-2.42-13.417-.707-20.16zm170.13 8.596c-13.804-.118-26.667 3.534-35.956 11.37.29 1.234.584 2.44.873 3.696 7.614 33.128 13.767 73.212 9.864 97.246-5.603 34.496-31.537 84.64-56.23 125.106-14.89 24.398-29.136 45.285-38.177 58.144 10.07-.018 20.817 2.73 31.086 7.26 11.084 4.89 21.573 11.887 29.23 20.914 1.466 1.73 2.83 3.565 4.06 5.488 1.36-3.347 2.576-6.353 4.36-10.703 5.542-13.528 13.064-31.452 21.98-50.63 17.835-38.352 41.727-81.852 64.653-103.98 25.013-24.14 74.933-49.443 118.108-67.835 6.416-2.733 12.653-5.304 18.676-7.735-4.533-14.565-13.66-26.322-24.893-37.757-.622.35-1.232.7-1.86 1.052-35.47 19.846-79.24 38.213-106.96 35.963-3.385-.274-8.838-3.985-12.028-8.44-11.913-16.64-21.224-49.812-26.786-79.158zM144.48 134.28c-.125.142-.195.26-.324.406-3.408 3.85-7.99 8.477-12.875 13.076-4.585 4.317-9.376 8.534-13.716 11.965 14.612 11.06 34.845 18.494 49.54 17.9.08-3.49-.12-7.653-.57-11.81-.688-6.327-1.887-12.74-3.016-17.247-.44-1.752-.807-2.837-1.13-3.79l-17.908-10.5zm322.356 5.2c-2.163.02-4.4.502-6.305 1.614l-.428.252-.4.297s-2.87 2.124-7.9 5.642c14.61 14.434 22.734 32.15 28.22 50.262l4.314-1.457-.045.012c3.98-1.237 7.185-4.906 8.28-7.91 1.197-3.282 1.194-6.115.98-8.954-.425-5.676-2.144-11.535-4.497-17.277-2.354-5.742-5.26-11.186-9.092-15.605-1.915-2.21-4.043-4.27-7.263-5.73-1.61-.73-3.7-1.168-5.86-1.146zm-37.348 25.102l-13.875 8.377c5.383 5.814 10.47 12.035 14.83 18.9 1.41-8.554 1.554-17.292-.955-27.278zm19.405 7.455c1.144 12.08-.52 22.994-2.93 33.05l15.717-5.33c-3.235-10.06-7.23-19.383-12.787-27.72zM130.95 443.914c-.444 0-.878.012-1.3.03-6.752.316-9.117 1.857-10.17 4.693l-2.212 5.965c.133 4.11 1.153 8.13 2.834 11.68 3.7 7.818 10.09 14.155 17.732 18.603 7.642 4.448 16.732 7.043 26.115 5.9 7.178-.874 14.383-4.265 20.183-10.12.164-4.882-1.947-9.743-6.35-14.935-5.278-6.223-13.748-12.11-22.765-16.087-8.454-3.73-17.418-5.75-24.07-5.73z',
  score: SCORES.EASY,
  obtainedCheck: ({ match }) => match.participant.stats.davidKills >= 1,
  context: 'matches',
  attribute: 'lethality'
};

export default david;
