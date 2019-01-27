// https://material-ui.com/css-in-js/basics/#migration-for-material-ui-core-users
const install = require('@material-ui/styles').install;
install();

// Typescript workaround: https://github.com/zeit/next.js/issues/5750#issuecomment-442313585
const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {} // We're never in "production server" phase when in development mode
    : !process.env.NOW_REGION
    ? require('next/constants') // Get values from `next` package when building locally
    : require('next-server/constants'); // Get values from `next-server` package when building on now v2

module.exports = phase => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {
      target: 'serverless'
    };
  }

  const withTypescript = require('@zeit/next-typescript');

  return withTypescript({
    webpack(config) {
      config.resolve.symlinks = false;
      return config;
    },
    target: 'serverless'
  });
};