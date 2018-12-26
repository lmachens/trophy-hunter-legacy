import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

export default {
  input: 'cli.js',
  output: {
    file: '../../cli.js',
    format: 'umd'
  },
  name: 'cli',
  plugins: [babel(babelrc())]
};
