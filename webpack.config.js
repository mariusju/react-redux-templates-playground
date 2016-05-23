module.exports = {
  entry: './src/main.js',
  output: {
    path: './src',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './src',
    port: 3333,
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel',
      },
      {
        test: /\.rt/,
        exclude: '/node_modules/',
        loader: 'react-templates-loader?targetVersion=0.14.0',
      },
    ],
  },
};
