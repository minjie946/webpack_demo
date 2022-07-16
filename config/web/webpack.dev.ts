/**
 * @description 配置文件-开发环境
 * @author minjie
 * @Date 2021-11-02 15:33
 * @LastEditTime 2022-05-11 17:16
 * @LastEditors minjie
 * @copyright Copyright © 2021 Shanghai Yejia Digital Technology Co., Ltd. All rights reserved.
 */
import { ConfigCommon } from './webpack.web'
import { merge } from 'webpack-merge'

const webpack = require('webpack')

process.env.NODE_ENV = 'development'
process.env.BABEL_ENV = 'dev'

export default merge(ConfigCommon({ mode: 'development' }), {
  devtool: 'inline-source-map',
  plugins: []
})
