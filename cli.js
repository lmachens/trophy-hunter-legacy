(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(require('shelljs'), require('fs'))
    : typeof define === 'function' && define.amd
    ? define(['shelljs', 'fs'], factory)
    : factory(global.shell, global.fs);
})(this, function(shell, fs) {
  'use strict';

  shell = shell && shell.hasOwnProperty('default') ? shell['default'] : shell;
  fs = fs && fs.hasOwnProperty('default') ? fs['default'] : fs;

  var _require = require('colors');
  var green = _require.green;
  var yellow = _require.yellow;
  var red = _require.red;
  var cyan = _require.cyan;

  var logger = {
    success: function success(msg) {
      console.log(green('success:   ') + msg);
    },
    info: function info(msg) {
      console.log(cyan('info:      ') + msg);
    },
    warning: function warning(msg) {
      console.log(yellow('warning:   ') + msg);
    },
    error: function error(msg) {
      console.log(red('error:     ') + msg);
    }
  };

  var settings = require('./tools/cli/settings.json');

  var cliDatabase = function cliDatabase(params) {
    var password = params.password;

    var dumpAndImport = function dumpAndImport(database, _ref) {
      var excludeCollections = _ref.excludeCollections,
        host = _ref.host,
        username = _ref.username,
        localDatabase = _ref.localDatabase;

      if (!password) {
        return logger.error('password for ' + database + ' is not set! SKIPPING');
      }
      var pw = process.platform === 'win32' ? '"' + password + '"' : "'" + password + "'";
      // fetch database
      logger.info('backing up database for ' + database);
      var excludeCollectionsString = '';
      excludeCollections.forEach(function(excludeCollection) {
        excludeCollectionsString += '--excludeCollection ' + excludeCollection + ' ';
      });
      var result = shell.exec(
        'mongodump --db ' +
          database +
          ' --host ' +
          host +
          ' --username ' +
          username +
          ' --password ' +
          pw +
          ' --authenticationDatabase admin ' +
          excludeCollectionsString +
          ' -o dump ',
        { silent: false }
      );

      if (result.code !== 0) {
        logger.error("couldn't backup the database");
        console.log(result.stderr);
        process.exit(1);
      }
      logger.success('sucessfully backed up ' + database);
      logger.info('now setting up the database locally');

      // prepare temp database
      shell.exec(
        'mongorestore --drop --db ' + localDatabase + ' dump/' + database + ' --noIndexRestore',
        {
          silent: false
        }
      );

      logger.success('finished setting up database for ' + database + ' locally');
    };

    Object.keys(settings).forEach(function(key) {
      return dumpAndImport(key, settings[key]);
    });

    //cleanup
    shell.rm('-rf', 'dump/');
  };

  var cliMerge = function cliMerge() {
    ['app', 'jobs', 'project'].forEach(function(name) {
      var headPackageJson = require('./' + name + '/package.json');
      var mainPackageJson = require('./package.json');

      var newPackageJson = Object.assign({}, headPackageJson, {
        dependencies: mainPackageJson.dependencies,
        devDependencies: mainPackageJson.devDependencies
      });

      logger.info('writing ' + name + ' package.json');
      fs.writeFileSync('./' + name + '/package.json', JSON.stringify(newPackageJson, null, 2));

      var headPackageLockJson = require('./' + name + '/package-lock.json');
      var mainPackageLockJson = require('./package-lock.json');

      var newPackageLockJson = Object.assign({}, headPackageLockJson, {
        dependencies: mainPackageLockJson.dependencies
      });

      logger.info('writing ' + name + ' package-lock.json');
      fs.writeFileSync(
        './' + name + '/package-lock.json',
        JSON.stringify(newPackageLockJson, null, 2)
      );
    });
  };

  var yargs = require('yargs');
  var inquirer = require('inquirer');

  var requireMissing = function requireMissing(missing) {
    return inquirer.prompt(missing);
  };

  var pwdTypeDef = {
    type: 'password',
    name: 'password',
    message: 'You have to enter a password'
  };

  yargs.command('syncpackages', 'sync packages across heads', function() {
    cliMerge();
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
        var missing = [];
        if (!argv.password) {
          missing.push(pwdTypeDef);
        }

        if (missing.length !== 0) {
          requireMissing(missing).then(function(answer) {
            return cliDatabase(Object.assign({}, argv, answer));
          });
        } else {
          cliDatabase(argv);
        }
      }
    )
    .command('*', 'catch block', function() {
      return yargs.showHelp();
    })
    .help().argv;
});
