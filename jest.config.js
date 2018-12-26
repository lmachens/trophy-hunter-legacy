module.exports = {
  moduleNameMapper: {
    // maps meteor/some:package to meteor/some_package to make use of stubs/meteor.
    '^meteor/(.*):(.*)$': 'meteor/$1_$2'
  },
  modulePaths: ['<rootDir>/node_modules/', '<rootDir>/stubs/']
};
