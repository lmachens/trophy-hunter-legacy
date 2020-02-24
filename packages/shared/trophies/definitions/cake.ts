import SCORES from '../scores';

const cake = {
  name: 'cake',
  title: 'Cake',
  description: "Hey there. Everyone has a bad game sometimes. Don't feel bad, here's some cake :).",
  svgPath:
    'M224.375 19.5c-.627.005-1.25.035-1.875.063-22.916 1.004-39.905 16.736-45.063 35.093-4.796 17.07-.468 35.99 21.688 49.907-24.784 5.082-44.582 24.197-50.625 48.624L28.22 266.125l344.75-48.688c-4.686-11.665-7.433-24.554-7.72-37.875-12.373 3.495-25.437 1.82-35.688-4.843-12.483-8.115-19.316-24.395-15.156-42.97-11-3.865-20.314-11.138-28.937-20.156-2.67 1.933-5.597 3.722-8.876 5.47-4.904 2.61-10.448 4.996-16.406 7.03-5.415-5.783-11.86-10.583-19.032-14.125 2.016-.402 4.02-.877 6-1.407 7.72-2.07 14.993-4.985 20.656-8 5.664-3.016 9.72-6.49 10.657-7.75l7.03-9.438 7.625 9c11.86 14.042 21.687 21.77 34.406 23.53l12.22 1.69-4.938 11.31c-7.348 16.822-2.72 25.15 4.938 30.126 7.657 4.978 20.167 5.28 29.938-2.03l17.718-13.28-2.844 21.968c-4.23 32.48 11.383 64.938 31.844 77.875 10.23 6.468 21.06 8.458 32.78 4.53 11.724-3.927 24.924-14.41 37.533-35.405 21.685-36.113-15.126-77.975-47.376-66.625l-12.75 4.5.312-13.532c.912-37.316-34.334-67.822-74.344-59.03l-8.437 1.844-2.53-8.25c-3.99-13.03-12.2-21.695-21.19-25.25-8.988-3.556-18.85-2.703-29.155 5.625l-7.97 6.436-5.686-8.53C264.252 29.87 243.812 19.34 224.374 19.5zM212.28 121.906c1.566 0 3.102.072 4.626.22-8.18 3.796-13.844 12.073-13.844 21.686 0 13.204 10.703 23.907 23.907 23.907 13.203 0 23.905-10.704 23.905-23.907 0-.646-.044-1.274-.094-1.907 5.35 7.632 8.5 16.92 8.5 27 0 6.146-1.19 12.007-3.31 17.375-26.588 19.077-53.165 20.028-79.75 12.845-6.835-8.157-10.94-18.68-10.94-30.22 0-26.063 20.937-47 47-47zm169.845 113.156L19.97 286.156v16.594l374.436-52.844c-4.555-4.38-8.67-9.372-12.28-14.844zm97.156 16.375c-6.23 5.497-12.678 9.638-19.28 12.5l-.75 169.125 11.625-1.187 8.406-.844V251.44zm-60.56 13.907L19.97 321.656v52.75l30.843-17.156 4.593-2.563 4.563 2.625c16.475 9.383 28.455 10.95 40.155 7.813 11.7-3.138 23.93-11.893 37.875-25.875l3.875-3.875 5.28 1.5c24.013 6.806 38.055 9.512 49.064 7.625 11.008-1.887 21.244-8.403 38.218-23.78l6.28-5.69 6.25 5.69c7.754 7.03 11.293 7.7 12.47 7.655 1.176-.045 3.25-1.242 7.937-4.344 4.688-3.1 11.853-7.25 21.53-7.655 8.286-.346 18.054 2.04 29.97 7.688 8.374-7.562 15.014-12.59 23.75-13.594 8.592-.99 15.815 2.258 24.906 7.092 6.724-5.367 13.502-8.383 20.033-9.156 8.26-.978 15.21 1.12 21 2.75 5.79 1.63 10.514 2.88 15.312 2.563 4.656-.31 9.9-1.895 17.25-7.5l.156-37.658c-7.78.51-15.41-.668-22.56-3.218zm-27.533 61.53c-.486.013-.968.04-1.437.095-3.75.443-7.92 2.043-14.313 8.467l-4.906 4.938-6.155-3.313c-11.897-6.416-17.156-8.315-19.625-8.03-2.47.283-7.388 3.3-17.906 13.03l-4.906 4.532-5.875-3.156c-13.036-7.02-21.216-8.59-26.375-8.375-5.16.215-8 1.883-12 4.53-4.002 2.648-9.25 7.153-17.532 7.47-6.335.24-12.545-2.27-19.312-7.25-14.828 12.75-27.21 20.65-41.47 23.093-14.998 2.57-30.607-.71-52.186-6.687-13.58 13.024-26.973 22.878-42.22 26.967-15.368 4.123-31.947 1.747-49.5-7.156l-35.5 19.75v17.69c31.86-14.53 63.46-14.035 95.844-5.5 10.952-15 24.617-25.098 41.813-27.783 17.11-2.67 36.716 1.77 60.53 11.688 4.384-9.426 9.76-15.932 16.532-19.656 8.8-4.84 18.007-4.127 25.844-3.033 15.676 2.19 27.35 6.595 43.19-6.437l4.25-3.5 5.124 2.03c23.357 9.21 50.61 11.247 73.625-7.5l5.81-4.717 5.876 4.625c15.268 11.986 29.62 11.267 42.5 1.906l.125-27.5c-5.555 2.605-10.908 3.948-15.936 4.28-8.64.573-15.835-1.597-21.594-3.218-5.04-1.418-8.91-2.363-12.313-2.28zm1.72 45.626c-26.39 18.067-56.995 16.428-81.844 7.813-20.187 13.676-40.456 9.14-53.094 7.375-6.793-.95-11.016-.873-14.25.906-3.237 1.78-7.39 6.21-11.532 18.47l-3.313 9.81-9.438-4.28c-26.59-12.11-45.507-16.066-58.937-13.97-13.43 2.098-22.934 9.533-32.813 25.032l-3.78 5.938-6.75-2c-35.05-10.37-64.65-11.103-97.188 6.75v43.375l10.28-1.033 410.313-41.718.25-58.44c-15.042 6.07-32.325 5.435-47.907-4.03z',
  score: SCORES.SPECIAL,
  obtainedCheck: () => false,
  context: 'matches'
};

export default cake;
