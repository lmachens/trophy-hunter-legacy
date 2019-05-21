module.exports = phase => {
  const withTypescript = require('@zeit/next-typescript');

  return withTypescript({
    env: {
      MATOMO_ID: '2',
      MATOMO_URL: 'https://matomo.machens.cloud/matomo.php'
    },
    webpack(config) {
      config.resolve.modules.unshift(__dirname);
      config.resolve.symlinks = false;
      return config;
    },
    target: 'server',
    distDir: 'dist'
  });
};
