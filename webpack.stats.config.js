const config = require('./webpack.config')
const path = require('path')
const WebpackMonitor = require('webpack-monitor')
const WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin

config.plugins.push(
  new WebpackBundleSizeAnalyzerPlugin(path.resolve(__dirname, 'dist/build_stats/bundle_size_analyzer.txt')),
  new WebpackMonitor({
    capture: true,
    launch: true,
    target: path.resolve(__dirname, 'dist/build_stats/webpack_monitor_stats.json'),
    port: 8090
  })
)

module.exports = config
