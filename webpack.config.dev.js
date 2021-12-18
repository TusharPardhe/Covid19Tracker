const { merge }  = require('webpack-merge')
const commonConfig = require('./wepback.config.common')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
 devServer: {
  static: './',
  historyApiFallback: true, 
 }
})