/**
 * @description 正式环境
 * @author minjie
 * @Date 2021-12-20 18:27
 * @LastEditTime 2022-01-14 10:32
 * @LastEditors minjie
 * @copyright Copyright © 2021 Shanghai Yejia Digital Technology Co., Ltd. All rights reserved.
 */
import webpack from 'webpack'
import ConfigPro from './web/webpack.pro'

webpack(ConfigPro, (err:any, state:any) => {
  if (err) {
    console.log(err.stack || err)
  } else if (state.hasErrors()) {
    let err = ''
    state.toString({
      chunks: false,
      colors: true
    }).split(/\r?\n/).forEach((line:any) => {
      err += `    ${line}\n`
    })
    console.warn(err)
  } else {
    console.log(state.toString({
      chunks: false,
      colors: true
    }))
  }
})
