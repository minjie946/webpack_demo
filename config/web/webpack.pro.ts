/**
 * @description 配置文件-打包环境
 * @author minjie
 * @Date 2021-12-20 13:22
 * @LastEditTime 2022-01-11 15:24
 * @LastEditors minjie
 * @copyright Copyright © 2021 Shanghai Yejia Digital Technology Co., Ltd. All rights reserved.
 */
import webpack from 'webpack'
import { merge } from 'webpack-merge'
import { ConfigCommon } from './webpack.web';
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin'
import { resolve, join } from '../util'

const webpackDll = require('../webpack.dll')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

process.env.NODE_ENV = 'production'
process.env.BABEL_ENV = 'pro'

// 提前打包好的信息 进行引用
const dllKey:string[] = Object.keys(webpackDll.entry)
const dllPluginsAry:any[] = []
for (let index = 0; index < dllKey.length; index++) {
  const key = dllKey[index]
  dllPluginsAry.push(new webpack.DllReferencePlugin({
    manifest: require(join('config/dll/', `${key}.manifest.json`))
  }))
}

export default merge(ConfigCommon({ mode: 'production' }), {
  plugins: [
    new CleanWebpackPlugin(),
    new CompressionWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'statics', to: 'statics' }
      ]
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    ...dllPluginsAry,
    new AddAssetHtmlPlugin({
      filepath: resolve('config/dll/*.js'),
      publicPath: './dll',
      outputPath: 'dll'
    }),
    new webpack.BannerPlugin('版权所有，翻版必究')
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: {
      name: 'mainifels'
    },
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ]
  },
  performance: {
    hints: false,
    maxAssetSize: 4000000, // 整数类型（以字节为单位）
    maxEntrypointSize: 5000000 // 整数类型（以字节为单位）
  }
})
