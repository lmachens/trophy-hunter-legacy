const { Mongo } = require('./mongo');

export const Meteor = {
  isServer: true,
  loginWithPassword: () => {},
  loginWithFacebook: () => {},
  loggingIn: () => false,
  methods: () => {},
  call: () => {},
  publish: () => {},
  subscribe: () => {},
  user: () => {},
  users: new Mongo.Collection(),
  userId: () => 'someRandomUserId',
  startup: () => {},
  bindEnvironment: () => {},
  wrapAsync: () => {},
  Error: () => Error,
  absoluteUrl: url => url
};
