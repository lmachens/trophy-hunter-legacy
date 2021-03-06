module.exports = phase => {
  return {
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
  };
};
