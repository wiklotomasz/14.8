var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/scripts.js",
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
  module: {
  	loaders: [
  		{
  			test: /\.js?$/,
  			exclude: /(node_modules|bower_components)/,
  			loader: 'babel-loader',
  			query: {
  				presets: ['react', 'es2015', 'stage0'],
  				plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
  			}
  		}
  	]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};