import fs from 'fs';
import logger from '../utils/logger';

const cliMerge = () => {
  ['app', 'jobs', 'project'].forEach(name => {
    const headPackageJson = require(`./${name}/package.json`);
    const mainPackageJson = require('./package.json');

    const newPackageJson = Object.assign({}, headPackageJson, {
      dependencies: mainPackageJson.dependencies,
      devDependencies: mainPackageJson.devDependencies
    });

    logger.info(`writing ${name} package.json`);
    fs.writeFileSync(`./${name}/package.json`, JSON.stringify(newPackageJson, null, 2));

    const headPackageLockJson = require(`./${name}/package-lock.json`);
    const mainPackageLockJson = require(`./package-lock.json`);

    const newPackageLockJson = Object.assign({}, headPackageLockJson, {
      dependencies: mainPackageLockJson.dependencies
    });

    logger.info(`writing ${name} package-lock.json`);
    fs.writeFileSync(`./${name}/package-lock.json`, JSON.stringify(newPackageLockJson, null, 2));
  });
};

export default cliMerge;
