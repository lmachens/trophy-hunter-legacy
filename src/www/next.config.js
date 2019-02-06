require('./bootstrap');

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
      const oldEntry = config.entry;
      config.entry = () => {
        return oldEntry().then(entry => {
          if (config.name === 'server') return entry;
          entry['static/runtime/main.js'] = ['./bootstrap.js', ...entry['static/runtime/main.js']];
          return entry;
        });
      };
      return config;
    },
    target: 'serverless'
  });
};
