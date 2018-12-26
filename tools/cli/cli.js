const yargs = require('yargs');
const inquirer = require('inquirer');

import databaseCli from './commands/cli-database';
import mergeCli from './commands/cli-merge';

const requireMissing = missing => {
  return inquirer.prompt(missing);
};

const pwdTypeDef = {
  type: 'password',
  name: 'password',
  message: 'You have to enter a password'
};

yargs.command('syncpackages', 'sync packages across heads', function() {
  mergeCli();
});
yargs
  .command(
    'database [password]',
    'import external database',
    {
      password: {
        alias: 'p',
        describe: 'The mongo password for the specified env'
      }
    },
    function(argv) {
      const missing = [];
      if (!argv.password) {
        missing.push(pwdTypeDef);
      }

      if (missing.length !== 0) {
        requireMissing(missing).then(answer => databaseCli(Object.assign({}, argv, answer)));
      } else {
        databaseCli(argv);
      }
    }
  )
  .command('*', 'catch block', () => yargs.showHelp())
  .help().argv;
