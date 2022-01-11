/**
 * @description 提前打包的文件
 * @author minjie
 * @Date 2021-12-20 18:13
 * @LastEditTime 2022-01-11 15:08
 * @LastEditors minjie
 * @copyright Copyright © 2021 Shanghai Yejia Digital Technology Co., Ltd. All rights reserved.
 */
'use strict'
import webpack from 'webpack'
import { resolve, join } from './util'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

process.env.NODE_ENV = 'production'

module.exports = {
  target: 'web',
  mode: process.env.NODE_ENV,
  entry: {
    lodsh: 'lodash-es',
    loaxiosdsh: 'axios',
    vendor: ['ali-oss']
  },
  output: {
    path: resolve('config/dll'),
    publicPath: './',
    filename: '[name].js',
    library: '[name]_library_wcr'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: join('config/dll', '[name].manifest.json'),
      name: '[name]_library_wcr'
    })
  ]
}
