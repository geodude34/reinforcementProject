const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader']
      } 
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Development',
    template: './client/index.html'
  })],
  devServer: {
    static: {
      publicPath: '/dist', // Give any actual path of our deployment server or CDN and simulate it during local development
      directory: path.join(__dirname, 'dist'),
    },
    //might need to edit proxy depending on url path, security
    // proxy: {
    //   '/api': 'http://localhost:3000'
    // },
    compress: true,
    port: 8080
  }
};