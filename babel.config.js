module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false
      }
    ],
    '@babel/react'
  ],
  plugins: ['@babel/proposal-class-properties', '@babel/plugin-transform-runtime'],
  env: {
    test: {
      presets: ['@babel/env']
    }
  }
};
