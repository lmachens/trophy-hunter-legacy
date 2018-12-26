const { green, yellow, red, cyan } = require('colors');

const logger = {
  success(msg) {
    console.log(green(`success:   `) + msg);
  },
  info(msg) {
    console.log(cyan('info:      ') + msg);
  },
  warning(msg) {
    console.log(yellow(`warning:   `) + msg);
  },
  error(msg) {
    console.log(red(`error:     `) + msg);
  }
};

export default logger;
