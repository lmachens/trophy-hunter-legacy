Plugin.registerCompiler(
  {
    extensions: ['ts', 'tsx']
  },
  function() {
    return new BabelCompiler({
      react: true
    });
  }
);
