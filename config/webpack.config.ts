/**
 * @description 配置文件
 * @author minjie
 * @Date 2021-11-02 14:22
 * @LastEditTime 2021-12-23 11:21
 * @LastEditors minjie
 * @copyright Copyright © 2021 Shanghai Yejia Digital Technology Co., Ltd. All rights reserved.
 */
import os from 'os'
import webpack from 'webpack'
import moment from 'moment'
import { Options } from 'html-webpack-plugin'
import { Configuration } from 'webpack-dev-server'
import { resolve } from './util'

const packages = require('../package.json')

interface ConfigInfo extends webpack.Configuration {
  /** html-webpack-plugin 配置 */
  html: Options
  /** 输出的目录: 默认 dist */
  outfolder?: string
  /** 环境的变量 */
  definePlugin: any
}

const project:string = 'css'
const host:string = os.platform() === 'darwin' ? '0.0.0.0' : '127.0.0.1'
const port:number = 2101

/** webpack-dev-server 配置 */
export const devServerConfig:Configuration = {
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  hot: true,
  host: host,
  port: port,
  setupExitSignals: true,
  compress: true
}

/** 配置 */
const config: ConfigInfo = {
  entry: resolve('src/index.tsx'),
  outfolder: 'dist',
  output: {
    library: '[name]',
    filename: '[name].bundle.js',
    libraryTarget: 'umd',
    globalObject: 'window'
  },
  definePlugin: { // 指定环境
    'process.env': {
      tag: JSON.stringify(process.env.tag),
      science: JSON.stringify(process.env.type),
      version: JSON.stringify(packages.version),
      build: JSON.stringify(moment().format('YYYY.MM.DD HHmmss'))
    }
  },
  html: {
    title: '模版项目',
    project,
    filename: 'index.html',
    template: resolve('config/util/index.ejs'),
    // favicon: resolve('src/assets/images/logo.ico') || '',
    hash: true,
    cache: false,
    inject: true,
    minify: {
      removeComments: true,
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      minifyJS: true, // 在脚本元素和事件属性中缩小JavaScript(使用UglifyJS)
      minifyCSS: true // 缩小CSS样式元素和样式属性
    },
    nodeModules: resolve('node_modules')
  }
}

export default config
