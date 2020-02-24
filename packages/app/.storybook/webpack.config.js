const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        loader: require.resolve('babel-loader')
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '/imports': path.resolve(__dirname, '../imports'),
      'meteor-publish-join': path.resolve(__dirname, './stubs/meteorPublishJoin'),
      'meteor/lmachens:user-presence': path.resolve(
        __dirname,
        './stubs/meteor/lmachens_user-presence'
      ),
      meteor: path.resolve(__dirname, './stubs/meteor')
    }
  }
};
