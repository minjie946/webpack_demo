/**
 * @description 配置文件-开发运行
 * @author minjie
 * @Date 2021-11-02 18:22
 * @LastEditTime 2021-12-20 13:25
 * @LastEditors minjie
 * @copyright Copyright © 2021 Shanghai Yejia Digital Technology Co., Ltd. All rights reserved.
 */
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import ConfigDev from './web/webpack.dev'
import { devServerConfig } from './webpack.config'
const openBrowser = require('./util/openBrowser')

/** 初始化 */
const devserver = new WebpackDevServer(devServerConfig, webpack(ConfigDev))

devserver.start().then(() => {
  // 启动界面
  openBrowser(`http://${devServerConfig.host}:${devServerConfig.port}`)
})
