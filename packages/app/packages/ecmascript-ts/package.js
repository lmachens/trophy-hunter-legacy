Package.describe({
  name: 'lmachens:ecmascript-ts',
  version: '1.0.2',
  summary: 'Compiler plugin that supports ES2015+ in all .ts and .tsx files',
  documentation: 'README.md',
  git: 'https://github.com/lmachens/ecmascript-ts'
});

Package.registerBuildPlugin({
  name: 'compile-ecmascript-ts',
  use: ['babel-compiler'],
  sources: ['plugin.js']
});

Package.onUse(function(api) {
  api.use('isobuild:compiler-plugin');
  api.use('babel-compiler');

  api.imply('modules');
  api.imply('ecmascript-runtime');
  api.imply('babel-runtime');
  api.imply('promise');
  api.imply('dynamic-import');
});
