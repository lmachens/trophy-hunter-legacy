const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        include: [path.resolve(__dirname, '../imports')]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, '../node_modules'), path.resolve(__dirname, '../imports')],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '/imports': path.resolve(__dirname, '../imports'),
      meteor: path.resolve(__dirname, '../stubs/meteor'),
      'meteor-publish-join': path.resolve(__dirname, '../stubs/meteorPublishJoin')
    }
  }
};
