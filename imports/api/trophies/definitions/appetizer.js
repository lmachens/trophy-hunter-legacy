import SCORES from '../scores';

const appetizer = {
  name: 'appetizer',
  title: 'Appetizer',
  description: 'Farm at least 80 minions at 10 minutes.',
  svgPath:
    'M150.902 268.233h-42.1a23.347 23.347 0 0 1 42.1 0zm67.359-13.292a114.847 114.847 0 0 1 1.203-16.31 23.335 23.335 0 0 0-18.68 29.602h18.295a113.38 113.38 0 0 1-.77-13.292zm-94.532-86.027c-15.637-15.637-36.638-32.164-55.162-32.164h-1.54l.975 19.246c8.913-.433 23.287 8.3 39.489 24.056q1.528 1.48 2.995 2.972a42.58 42.58 0 0 1 8.083-.95 42.34 42.34 0 0 1 5.208-13.172zm24.37-18.933a68.706 68.706 0 0 0 6.928-9.743 71.172 71.172 0 0 0 7.11-16.55 70.174 70.174 0 0 0 2.706-17.695 67.72 67.72 0 0 0-1.672-16.575 69.043 69.043 0 0 0-2.01-7 63.499 63.499 0 0 0-2.236-5.594 53.963 53.963 0 0 0-1.889-3.728c-.228-.433-.469-.782-.601-1.01l-.217-.35-.36.18c-.241.121-.614.302-1.035.542a52.092 52.092 0 0 0-3.609 2.177 52.07 52.07 0 0 0-4.811 3.609 69.031 69.031 0 0 0-5.377 4.907 67.72 67.72 0 0 0-10.104 13.232 70.174 70.174 0 0 0-6.964 16.49 71.16 71.16 0 0 0-2.719 17.779 68.562 68.562 0 0 0 1.672 16.575 66.337 66.337 0 0 0 4.234 12.546c.47 1.058.927 1.96 1.336 2.718a42.713 42.713 0 0 1 19.666-12.522zm342.413-43.903c-.228-.133-.59-.35-1.022-.578a43.443 43.443 0 0 0-3.777-1.804c-1.6-.674-3.5-1.42-5.641-2.105a69.031 69.031 0 0 0-7.049-1.84 67.72 67.72 0 0 0-16.611-1.263 70.174 70.174 0 0 0-17.634 3.127 71.172 71.172 0 0 0-16.31 7.41 68.562 68.562 0 0 0-13.003 10.428l-.542.578a69.633 69.633 0 0 1 12.618 22.168 68.67 68.67 0 0 0 11.307.421 71.16 71.16 0 0 0 17.646-3.091 70.174 70.174 0 0 0 16.322-7.362 67.72 67.72 0 0 0 13.003-10.428 69.02 69.02 0 0 0 4.811-5.497c1.384-1.78 2.55-3.44 3.477-4.932.926-1.492 1.635-2.718 2.093-3.609.24-.433.409-.817.517-1.058l.18-.373zm-85.642-66.06c-.433-1.697-.854-3.296-.986-4.018l-18.981 3.488c.252 1.384.685 3.043 1.275 5.329 2.814 10.898 9.298 36.013 1.48 58.23a69.97 69.97 0 0 1 16.165 11.595c12.787-28.928 4.511-61.032.999-74.625zM180.179 476h122.618a159.112 159.112 0 0 0 159.112-159.112v-29.41H21.103V316.9A159.112 159.112 0 0 0 180.179 476zm245.163-221.059a93.545 93.545 0 0 0-26.03-64.845 50.4 50.4 0 1 0-94.05-25.26 93.822 93.822 0 0 0-66.745 103.445h185.839a94.604 94.604 0 0 0 .986-13.34zm-244.718 6.748a42.412 42.412 0 0 1 10.609-28.074 23.383 23.383 0 0 0-43.555 6.014 42.81 42.81 0 0 1 23.492 28.28 23.287 23.287 0 0 0 9.622-2.407 43.845 43.845 0 0 1-.168-3.813zm-79.388-14.963a23.383 23.383 0 0 0-41.522 21.495h28.688a42.665 42.665 0 0 1 12.822-21.495zm79.845-66.686a23.371 23.371 0 0 0-43.543 5.642 42.905 42.905 0 0 1 19.51 18.427 42.292 42.292 0 0 1 11.44-2.153 42.653 42.653 0 0 1 12.58-21.916zm29 7.819a23.383 23.383 0 0 0-22.685 17.537 42.905 42.905 0 0 1 19.534 16.924 42.316 42.316 0 0 1 16.335-3.271h.854a111.36 111.36 0 0 1 7.373-17.177 23.383 23.383 0 0 0-21.41-14.013zm-69.524 26.402a23.36 23.36 0 0 0-43.483 4.174 42.905 42.905 0 0 1 20.966 18.945 42.557 42.557 0 0 1 10.826-1.648 42.593 42.593 0 0 1 11.691-21.47z',
  score: SCORES.VERY_HARD,
  obtainedCheck: ({ match: { participant } }) => {
    if (participant.timeline.creepsPerMinDeltas) {
      return participant.timeline.creepsPerMinDeltas['0-10'] >= 8;
    }
  },
  context: 'matches',
  attribute: 'capability'
};

export default appetizer;
