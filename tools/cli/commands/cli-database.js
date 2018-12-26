import logger from '../utils/logger';
import shell from 'shelljs';

const settings = require('./tools/cli/settings.json');

const cliDatabase = params => {
  const { password } = params;

  const dumpAndImport = (database, { excludeCollections, host, username, localDatabase }) => {
    if (!password) {
      return logger.error(`password for ${database} is not set! SKIPPING`);
    }
    const pw = process.platform === 'win32' ? `"${password}"` : `'${password}'`;
    // fetch database
    logger.info(`backing up database for ${database}`);
    let excludeCollectionsString = '';
    excludeCollections.forEach(excludeCollection => {
      excludeCollectionsString += `--excludeCollection ${excludeCollection} `;
    });
    const result = shell.exec(
      `mongodump --db ${database} --host ${host} --username ${username} --password ${pw} --authenticationDatabase admin ${excludeCollectionsString} -o dump `,
      { silent: false }
    );

    if (result.code !== 0) {
      logger.error("couldn't backup the database");
      console.log(result.stderr);
      process.exit(1);
    }
    logger.success(`sucessfully backed up ${database}`);
    logger.info(`now setting up the database locally`);

    // prepare temp database
    shell.exec(`mongorestore --drop --db ${localDatabase} dump/${database} --noIndexRestore`, {
      silent: false
    });

    logger.success(`finished setting up database for ${database} locally`);
  };

  Object.keys(settings).forEach(key => dumpAndImport(key, settings[key]));

  //cleanup
  shell.rm('-rf', `dump/`);
};

export default cliDatabase;
